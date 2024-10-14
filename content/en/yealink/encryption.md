+++
author = "Jeroen Hermans"
title = "Encryption"
date = "2024-02-19"
description = "Encryption"
tags = [
    "encryption", "AES", "RSA", "Lydis", "Yealink"
]
image = "img/yealink/pexels-george-becker-114741.jpg"
+++
The reason for this research stemmed from certain aspects of the encryption in the provisioning process that 
i didn’t fully understand. At the time, I could not have anticipated that I would still be working 
on this two years later.
<!--more-->
As explained in the [introduction]({{< ref "introduction" >}}), provisioning is the system used to 
securely transfer configuration files from a configuration server to a device. This device 
could be a VoIP phone, but the same applies to devices such as video bars.

These provisioning files typically contain information such as:

- Username
- Password
- VoIP server
- Caller ID

This is highly sensitive data, and in many cases, it qualifies as Personal Data (PI) as defined in 
the {{< a_blank "GDPR legislation, Article 4(1)" "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32016R0679" >}}. 
Ensuring the privacy of this data during transmission over the internet is therefore of utmost importance.  

While developing a provisioning system for Yealink devices, I naturally aimed to build a system that 
was compatible with Yealink’s own systems. Unfortunately, this required access to confidential 
information, such as the type of encryption used and, crucially, the encryption key itself. 
Of course, I didn’t expect to obtain this information, so I began searching the internet for ways to 
create a system that was as compatible as possible.  

During my research, I encountered an individual who not only told me which encryption Yealink used but 
also revealed the secret key that Yealink employed. The earliest reference I could find to this 
leaked key dated back to 2014. With this information, it became a simple task to build a 
provisioning system that was 100% compatible with Yealink’s systems. However, this didn’t feel 
right: if I had access to this data, who else might have it?

So, on 28 July 2022, I send an email to the Dutch distributor of Yealink, Lydis:

{{< quote cloudemail >}}We’ve reviewed the Lydis firmware and noticed that the provisioning key is itself encrypted with the private key EKs35XacP6eybA25. Since this is hard-coded, we consider this a significant risk. What potential solution can Lydis (together with Yealink?) offer us to mitigate this risk?{{< /quote >}}

The next day, I receive a reply from a "support manager" at Lydis:

{{< quote cloudemail >}}Based on various investigations by reputable parties, we have determined that Yealink puts a secure product on the market. Both SISO departments of financial institutions, as well as municipal and government institutions, confirm this.{{< /quote >}}

It has never been entirely clear to me what {{< a_blank "libraries" "https://en.wikipedia.org/wiki/SISO" >}} 
have to do with this question, but receiving such a response after emailing someone your own private key 
doesn’t exactly inspire confidence.  

But it’s always a good idea to assume you may be overlooking something, so I asked a few follow-up questions. 
The answers to these questions became the foundation for months of research:

- First, the *support manager* sends me a GDPR certificate. Now, I can almost hear the attentive reader jump out of their seat at this point. And, of course, I had questions about this. So many questions, in fact, that I will write a detailed article about this topic later in this series.
- Next, I receive a "Remediation Report" from Yealink Cloud Services. It’s the full version of the summary of the NetSPI tests, which are also publicly available on Yealink’s website. While the (public) summary seems fairly positive, the full report is... not. More on this in a follow-up publication!
- During a Teams meeting, I’m informed that the new Encryption Tool works with {{< a_blank "Rivest–Shamir–Adleman (RSA)" "https://en.wikipedia.org/wiki/RSA_(cryptosystem)" >}} encryption. Yealink states that they only implemented this 6 years after the {{< a_blank "AES" "https://en.wikipedia.org/wiki/Advanced_Encryption_Standard" >}} key was leaked.
- Finally, I’m sent a screenshot of the new Yealink Configuration Encryption Tool.

{{< img alt="Yealink Configuration Encryption Tool" src="img/yealink/encryption_tool_1.jpg" >}}

A few things stand out:
- There’s a "compatibility mode," which I suspect is an AES-only mode.
- Even in RSA mode, an AES type still needs to be specified.
- The RSA mode is set to "default."
- And it appears to be possible to automatically generate an AES (?) key.

It’s clear I need to take some time to understand how this new Encryption Tool works, and I’ve come to the following conclusions:
- It’s still possible to use only AES in the so-called "Compatibility Mode." When I select this mode, there’s no warning that it might be insecure.
- In RSA mode, the configuration file is still encrypted with AES. However, the key used for encryption is no longer the same for all users (which is good).
- A VoIP phone downloading a file can no longer know what the AES key is to read the file. Yealink’s solution to this is to include the AES key in the configuration file.
- The AES key is not added in plain text, but it’s first encrypted with RSA encryption.
- Unfortunately, Yealink has decided to include this super-secret RSA key in a ".pem" file. This makes decrypting the AES key trivial, and therefore, decrypting the rest of the file as well.

It is clear that I need to take some time to understand how this new Encryption Tool works, and I have come to the following conclusions:

- It is still possible to use only AES in the so-called "Compatibility Mode." When I choose this mode, I do not receive any warnings that it might be insecure.
- In RSA Mode, the configuration file is still encrypted using AES. However, the key used for encryption is no longer the same for all users (which is a good thing).
- A VoIP phone retrieving a file now has no way of knowing the AES key required to read the file. Yealink's solution to this is to include the AES key in the configuration file.
- The AES key is not added in plain text to the file but is first encrypted using RSA encryption.
- Unfortunately, Yealink decided to supply this "super-secret" RSA key in the form of a ".pem" file. This makes decrypting the AES key trivial, and therefore decrypting the rest of the file as well.

I now feel that I have a good understanding of this new system. Since I am uncomfortable running binary 
files without knowing exactly what they contain, I decide to rebuild the entire Encryption Tool as 
open-source. I recreate the tool in Python, including a GUI. I also include a "yealinkdecryption.py" 
tool that takes an encrypted file as input and outputs the AES key and the decrypted file. I decide 
to upload it to {{< a_blank "github" "GitHub" "https://github.com/gitaware/yealink-encryption" >}}, 
but for the time being as a private repository since this software can be used to decrypt sensitive files.  

Now I am emailing again with the "support manager," who now appears to be the "Technical Director" of Lydis. 
I state that I believe the encryption is seriously broken and that Lydis should urgently report this to 
Yealink. On 27 September 2022, I also ask him to send me an encrypted file so I can verify whether 
my decryption tool is indeed working. On 30 September, he replies with an 
{{< a_blank "encrypted file for a T48S" "yealink/y000000000065_1.cfg" >}}. I respond the same day:  
{{< quote cloudemail >}}My suspicion is correct. The files are still readable, perhaps even more so.  
To get straight to the point:  
The AES key is: 33j503whh7bPK0zz0Kq3KwP00wKqbW3h  

The config file is:  
#!version:1.0.0.1  
  
static.lang.gui = German  
lang.gui = German  
  
Let's discuss this next week because the implications are, of course, far-reaching.{{< /quote >}}

The technical director likely realises that this is not the standard "I’m a 1337 h4x0r" email and 
replies that Monday with *"Could you also take a look at the attached file?"* Attached is 
a {{< a_blank "new encrypted file" "yealink/y000000000065_2.cfg" >}}. Strangely enough, my 
decryption software struggles with this file. A quick investigation reveals that there is 
a {{< a_blank "line-ending difference" "https://en.wikipedia.org/wiki/Newline" >}} compared 
to the previous file. While we can only speculate about the reason for this, it does not stop 
me from sending him an email that same morning:  

{{< quote cloudemail >}}To get straight to the point:  

[jhermans@localhost yealink-encryption]$ ./yealinkdecryption.py -i y000000000065.cfg  
INFO: using RSA mode  
AES key found: 303wlbKBenhhHwpFzzj00QfwhwzbyKhp  
Decrypting provisioning file...  
  
#!version:1.0.0.1  
static.lang.gui = French  
lang.gui = French  

This is, of course, very bad news and will certainly be included in our publication. I would 
like to offer Lydis one more opportunity for a right of reply. If you would like to take advantage 
of this offer, I suggest we also include people from Yealink in this meeting, as this is a global issue.  
Please propose a date/time when this meeting could take place if you wish to take up this opportunity. 
I’m also happy to come to your office for this discussion.{{< /quote >}}  

Now, while it is remarkable that a simple Python script can "break" this encryption in 100ms, the 
conclusion of this email is just as significant. Not only do I once again state in September 2022 
that I intend to publish, but it is also clear that I want to do so in collaboration with Lydis and 
Yealink. I am explicitly offering the opportunity for a right of reply and expressing my strong 
desire to meet with Yealink to present my findings so they can take the appropriate action.  

He responds within 10 minutes with a (very polite)  
{{< quote cloudemail >}}I will discuss this further with Yealink and would like to take the opportunity to schedule a meeting. I expect to be able to arrange a meeting sometime next week, as China is closed this week.{{< /quote >}}

and later that day with:  
{{< quote cloudemail >}}Could you also test the attached file?{{< /quote >}}

This time, however, he provides {{< a_blank "a file" "yealink/y000000000065_3.cfg" >}} where the 
"key_ciphertext" section has completely disappeared. I ask him why my phone cannot use this file 
as a valid provisioning document, and he explains that they used different settings in the 
provisioning tool. When I then inquire whether he used an empty key or something similar, as 
there is no (encrypted) AES key in the document, he responds with:  
{{< quote cloudemail >}}Why the key_ciphertext is empty in the file is not immediately clear to us.{{< /quote >}}

I respond by stating that IF this is a valid provisioning document (and Lydis claims that it is), 
"there must be a secret key4a included in every phone (backdoor)." A series of meetings follow with 
Yealink, both via Teams and in person in Almere. This results in Yealink modifying their encryption 
tool (and therefore their cloud service). It is no longer possible to use the "Default RSA Model," 
meaning the leaked RSA private key can no longer be used for new deployments.  

# ECB  
Earlier in this document, I immediately dived into the leaked AES key, but I also mentioned that the 
encryption method itself is important. There are some concerns here as well. So, let's take a moment to examine 
the type of encryption Yealink is using in the latest version of their Encryption Tool. As seen in 
my {{< a_blank "open-source" "https://github.com/gitaware/yealink-encryption" >}} version of their Encryption Tool, Yealink uses 
{{< a_blank "AES-ECB encryption" "https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Electronic_codebook_(ECB)" >}}. 
For the crypto-enthusiasts among the readers, this should bring a smile to your face. ECB is an encryption mode 
that has long been considered insecure. It is baffling why a multinational like Yealink would choose an 
encryption method that is unnecessarily vulnerable. Let me be very clear: AES-ECB is not "broken" at the 
time of writing, but this encryption method is a very specific choice that experts, far more knowledgeable 
than i, cannot easily justify.

What exactly is the issue? Electronic CodeBook encryption (ECB) is a method where data is split into blocks 
of a certain size. Each block is then encrypted with a key. This key is identical for EVERY block. This means 
that identical blocks will produce identical ciphertexts. Additionally, decrypting the blocks is possible 
by simply performing the same operation again. This makes the encryption method vulnerable to so-called 
replay attacks.

But as the saying goes: a picture is worth a thousand words. And in this case, that picture for ECB encryption 
is called: the ECB penguin. The name comes from a demonstration of the weakness of ECB encryption. 
A Wikipedia user encrypted an image of the Linux logo, the penguin Tux, using ECB. This visual 
demonstration was added to the Wikipedia article on the 
{{< a_blank "Block cipher mode of operation" "https://en.wikipedia.org/w/index.php?title=Block_cipher_mode_of_operation&diff=prev&oldid=2191923&ref=words.filippo.io" >}} 
in 2004. This means that, at the time of writing, this encryption mode has been considered moderately secure 
for over 20 years. If we look at the 
{{< a_blank "list of open source software" "https://www.yealink.com/website-service/download/offer-source-of-open-source-software.pdf" >}} 
{{< a_blank "mirror" "yealink/Offer Source of Open Source Software.pdf" >}} used by Yealink in their 
products, it would be relatively easy to use AES-CBC instead of AES-ECB. This encryption method uses 
the ciphertext of the previous block as part of the key for the next block (technically, XOR with the key).  

But what does this look like visually? As an example, I took the Yealink logo. I converted this file into 
a format where each pixel is represented as a series of bytes. I used the PPM format for this.  
{{< img alt="Screenshot website CloudAware" src="img/yealink/ecb/Yealink_Logo.png" >}}  
Then I encrypted the file (without the header) in the same way Yealink does (using OpenSSL):
```
#First, I save the image header:  
head -n 4 yealink.ppm > header.txt  
#Next, I save the image body:  
tail -n +5 yealink.ppm > body.bin  
# Then I encrypt the file:  
openssl enc -aes-128-ecb -nosalt -pass pass:"JEROEN" -in body.bin -out body.ecb.bin  
# ...and I add the header back to the encrypted file so it becomes a valid image format:  
cat header.txt body.ecb.bin > yealink.ecb.ppm
```

The output of the file is shown below.  
{{< img alt="Screenshot website CloudAware" src="img/yealink/ecb/Yealink_Logo_ecb.png" >}}  
Technically, the file is encrypted, but I can’t really say this is the best method for encrypting a file.

I think this is a good time to summarise:  
- The encryption method and AES key have demonstrably been leaked since 2014.  
- According to their own statements, Yealink created a new encryption tool using RSA encryption.  
- This new RSA encryption tool still uses AES-ECB as the method for encrypting provisioning secrets.  
- The "ECB penguin" demo was created back in 2004, and ECB is generally no longer considered a secure encryption mode.  
- This AES key is encrypted using an RSA key and is included in the file.  
- With this RSA key, it’s possible to decrypt the AES key, and therefore, the provisioning secrets, such as passwords.  
- Yealink made the new RSA "Default Mode" available for download on their support website.  
- This means that even the new "RSA" encryption by Yealink was an elaborate way to offer plaintext files.

Yealink and Lydis {{< a_blank "claim afterward" "https://portal.lydis.com/download/lydis/ftm/Article%20FTM-Yealink-160923-NL-Lydis_detail_reaction_short-v2.4.pdf" >}} 
{{< a_blank "mirror" "yealink/Article FTM-Yealink-160923-NL-Lydis_detail_reaction_short-v2.4.pdf" >}} 
that "the encryption tool is not used by providers/carriers/professionals." Furthermore, Yealink stated in 
an email dated 24 February 2023:
{{< quote cloudquote >}}If the customer uses the RSA tool, the default key is only for demo purposes. 
In actual applications, most IT professionals with security awareness will not use the demo key provided 
by the manufacturer.{{< /quote >}}  
Additionally, Lydis mentions in their 
{{< a_blank "security FAQ" "https://www.lydis.nl/over-ons/yealink-security-faq#netwerk" >}} 
{{< a_blank "mirror" "yealink/20240217_Yealink FAQ Security Lydis.pdf" >}} that:  
{{< quote cloudquote >}}In the VoIP industry, professionals manage platforms and security. They know that standard PINs or default codes should not be used, just as one would change the PIN code on a smartphone.{{< /quote >}}

This is particularly interesting since it was precisely this leaked RSA key that the technical director 
of Lydis used to send me {{< a_blank "file1" "yealink/y000000000065_1.cfg" >}} and 
{{< a_blank "file2" "yealink/y000000000065_2.cfg" >}} to demonstrate how secure the system is.

# Teams
But according to Lydis, nothing is wrong! The publications by *Follow The Money* and *De Tijd* 
contain "factual inaccuracies." In particular, the "Teams"-certified equipment "is entirely 
unaffected by these issues." These devices are 
"{{< a_blank "fully secured by Microsoft" "https://www.lydis.nl/over-ons/lydis-statement-2" >}}"
{{< a_blank "mirror" "yealink/20240217_Lydis reactie op FTM & De Tijd Lydis.pdf" >}}.  

That's an interesting claim. But is it true? The journalists at *Follow The Money* decided to 
reach out to Microsoft regarding this assertion. After reviewing the claim, Microsoft responded 
on August 28, 2023 with the following statement:

{{< quote cloudquote >}}We have conducted an internal review and would like to respond to your query:

Certified devices are tested to deliver high-quality audio and video experiences. In our specifications, we indicate that the manufacturers of the devices are responsible for the security of the devices, software, and firmware.{{< /quote >}}

That’s a very different story from what Lydis and Yealink have publicly stated. So, what other claims 
can actually be verified? I decide to browse the "Security and Compliance" section of Yealink’s *Trust Center*.

On this page, impressive logos and names are displayed:  
{{< img alt="Security and Compliance 20230901" src="img/yealink/20230901_trust_center_security_compliance.png" >}}  
An undeniably impressive list. Two logos, in particular, catch my eye: Migros (a major retailer in Switzerland) 
and KPN. I decide to email these two companies to inquire how they contribute to Yealink's security 
and/or compliance efforts. I receive a reply that they would look into it. After not hearing back 
for a while, I decide to revisit the page.  
{{< img alt="Security and Compliance 20230911" src="img/yealink/20230911_trust_center_security_compliance.png" >}}  

Interestingly, two logos have suddenly disappeared.  

This clearly demonstrates the importance of not just taking claims at face value. Security is not a checklist 
that can be hastily completed. Verify such claims yourself, ask for clarification, and don't just rely 
on certifications like ISO27001 without understanding their scope. Fancy references should also be double-checked.  

And that verification is exactly what I continued to do. On Wednesday, I’ll publish a new article. 
This time it will be more technical, as i dive into the network functionality of Yealink’s VoIP equipment.  

Once again, it has proven to be crucial to verify facts for yourself.  

See you on Wednesday!
