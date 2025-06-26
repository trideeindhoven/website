+++
title = "Twitter / X.com vulnerability disclosure"
description = "How X.com / Twitter failed in a vulnerability disclosure"
date = "2025-06-26"
aliases = []
author = "Jeroen Hermans"
image = "img/blog/pexels-markus-winkler-1430818-30945293.jpg"
+++
While the audience of my blog is increasingly becoming more and more international I have decided that from now on all articles will be written in English.  
Vulnerability disclosures are complicated...or well... they're not. But somehow many companies, incl. multi-billion dollar ones, 
seem to think they are. This is a story of the what, why and how, but also with a hint of a solution.
<!--more-->
I don't think it is a secret that I am a big supporter of vulnerability disclosures. Unfortunately many disclosure procedures are extremely one-sided, sometimes even hostile towards security researchers.  
This can sometimes create tension. But as the saying goes "Steel is forged in fire", we sometimes have to create that fire to create something better and stronger.  
It is always nice to see when companies see the benefit of a proper vulnerability disclosure procedure. Maybe the best example I have seen in the past year is [Paxton Access Systems]({{< ref "paxton_tls" >}}). Although the first contact was rather complicated in the end the communication with the security department was very direct and led to a safer product. And Paxton acknowledged this on their {{< a_blank "disclosure page" "https://www.paxton-access.com/about/compliance-policies/vulnerability-disclosure-policy/disclosures/" >}}.  

Sometimes companies see such a page as something negative. But it is really a sign of a mature security minded organisation with proper disclosure procedures in place.  

Another example is Yealink. Although a bit more fire was needed to forge this steel a very real-life improvement in the vulnerability disclosure was realised. On april 2nd 2025 the vulnerability disclosure procedure looked like 
{{< a_blank "this" "https://web.archive.org/web/20250402205520/https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20240322/202403220936144054321241843349ad77d9ab4e3fbbb.pdf">}}
And as always the details are important. The very last chapter of this procedure is "Intellectual Property". Now... this is interesting, because as far as I can see we are not transferring any IP... or are we?
{{< quote cloudemail >}}Regardless of whether the report submission is confirmed to be valid, you hereby agree to transfer all rights and interests (including all intellectual property) of all submitted vulnerability reports to Yealink.{{< /quote >}}

Ok. So we ARE transferring Intellectual Property. Even though this does not read as such, this is 100% an NDA. It is very hard to prosecute a researcher based on a legal process. It is not that hard though to prosecute a researcher who is publishing his own findings if he has actually transferred the IP of these findings to the manufacturer!

While forging the steel together with Yealink the vulnerability disclosure procedure was 
{{< a_blank "changed" "https://web.archive.org/web/20250618203650/https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20250513/202505130751244290e6a.pdf">}}

And now the IP section reads: 
{{< quote cloudemail >}}By submitting your report, you hereby consent that Yealink may use your findings to remedy any security in Yealink products.{{< /quote >}}
And this is of course exactly what we want. We are still forging, but I am extremely happy that this has been changed.

The legal complexity of being a security researcher starts to dawn on us. So how do we here at CloudAware do this? Why am I not in jail after hacking into tv studio entrance systems? The answer is not that simple, but I can give a few pointers we always apply to disclosures.
- READ vulnerability disclosure procedures. If they look like an NDA and walk like one, it probably is one. Do not agree to these contracts. In your first communication be very clear about who you are, what you do and that you are unfortunately not able to comply with their procedure (but...there to help).
- The Dutch Public Prosecution Service (OM) has written a {{< a_blank "Policy Paper" "https://www.om.nl/onderwerpen/cybercrime/documenten/richtlijnen/2020/december/14/om-beleidsbrief-ethisch-hacken">}} on what is considered "Ethical hacking".  

This Policy Paper in short states three important factors when deciding not to prosecute a security researcher:
 * Was the action taken in the context of a substantial societal interest?
 * Was the action proportionate (in other words: did the hacker not go further than necessary to achieve their objective)?
 * Was the requirement of subsidiarity met (in other words: were there no less intrusive means to achieve the hacker's intended goal)?
- Article 10 of the "Convention for the Protection of Human Rights and Fundamental Freedoms" (Rome, 1950) guarantees the right to freedom of expression, which includes the freedom to receive and impart information without interference by public authorities. This right can be relevant to ethical hacking when security researchers disclose vulnerabilities in the public interest.

Ok ok. Now everybody has a headacke from all the laws and legal terms. How can you make sure the first contact with a security researcher is as smooth as possible? Luckily there is an {{< a_blank "RFC" "https://www.rfc-editor.org/rfc/rfc9116">}} for that: "RFC 9116: A File Format to Aid in Security Vulnerability Disclosure"  

An RFC is an implementation text for the internet. Because of RFCs e.g. all browsers can visit cloudaware.eu even though they have very different code bases.
RFC 9116 describes how to publish a small textfile on your website. In this textfile you publish whom to contact for security related issues. The Dutch National Cyber Security Centre has published a document about the {{< a_blank "security.txt" "https://www.ncsc.nl/documenten/publicaties/2023/maart/2/handreiking-security.txt">}} (in Dutch).

The security.txt is also in the {{< a_blank "mandatory list of standards" "https://www.forumstandaardisatie.nl/open-standaarden/securitytxt">}} for Dutch governments.

So... now we have a standardised way for security researchers to contact a company. The steel is forged, the fire is no longer needed. Unfortunately it is not that easy. As you have seen the RFC is a lengthy document and it may not be that easy to interpret. But surely the companies of the richest man in the world, Elon Musk, must have interpreted this RFC correctly. Let's look at Tesla first. This company makes daily decisions about human lives using software so they should have a {{< a_blank "working security.txt" "https://web.archive.org/web/20250618210336/https://www.tesla.com/.well-known/security.txt">}} in place.  

Now that is too bad. Not only is the "Encryption" field not a PGP key as required by the RFC, the security.txt also completely lacks an Expires field. Because of this it is not clear whether this is an up-to-date security.txt.  

Let's have a look at another company of Elon Musk: {{< a_blank "x.com" "https://twitter.com/.well-known/security.txt">}} (or Twitter as I still call it). 
({{< a_blank "(mirror)" "https://web.archive.org/web/20241216193258/https://twitter.com/.well-known/security.txt">}})


Oh dear... Things are not getting any better here. The "Expires" field is in the past. Let's try to contact X to get that fixed!
The contact field contains {{< a_blank "a (valid) url" "https://hackerone.com/twitter">}}.

This means Twitter is using the HackerOne system to triage incoming security reports. Now let's assume I don't have an account, so I have to create an account at hackerone. Then I try to make a report for X saying there is an expired Expires field in the security.txt. Now this is a problem because you need a reputation on HackerOne in order to report to X, called a "Signal Requirement". BUT the good people at X have waived this requirement for new users so I am ALLOWED to help them with this report.
So I send the report and I expect a message back: confirmed, will fix, etc. And indeed about a day later I get a message from "Analyst Trevor":
{{< quote cloudemail >}}Thank you for your submission. I hope you are well. Your report is currently being reviewed and the HackerOne triage team will get back to you once there is additional information to share.{{< /quote >}}  

Great! Things are rolling. Steel is being forged even without the need of fire. But you understand this article would not have existed without some fire. About a minute later "Analyst Trevor" sends me another message:
{{< quote cloudemail >}}Unfortunately, this was submitted previously by another researcher, but we appreciate your work and look forward to additional reports from you.
At this time, we cannot add you to the original report as the report may contain additional information that we cannot share with you. This may include personal information or additional vulnerability information that shouldn't be exposed to other users. Thank you for your understanding.
Have a great day ahead!{{< /quote >}}  

Ok this is problematic. I don't need the bounty money for this find (because...let's be honoust it is not the biggest find), but 
now my "Signal" is still zero on Hackerone and I have spend my trial report opportunity.  
Ah well... At least X knows about this problem and it will be fixed with the quickest of quick. Well... My report was in february. 
It is now june. So... I see two possible scenarios here:  
a) Security reports are not getting through to the correct people at X, or  
b) X did not get another security report and they just fail to pay out bounties (up to 20.000 dollar for high severity finds)  

Again: this is such a small report that I was not expecting any money for it, but this is troubling. If you are unable to fix 
such a tiny problem in half a year, what does that say about your incident procedures (ISO27001 anyone?).  

As you can see the job of a security researcher is immensely complex. The risks you run are immense (your job is committing 
jailable offenses), the technical knowledge you need is complex and changes constantly and you need to be informed about 
(international) law in order to mitigate the risks mentioned earlier.  

I think security.txt is a great way to publish to the world your vulnerability disclosure procedure is in place. It shows 
maturity in your organisation. But it is a bit technical to make one. Time and time again my customers told me: we do not 
have the knowledge and/or time to make a security.txt, so we don't do it.  
But: talk is cheap and I started forging and created the 
{{< a_blank "CloudAware Security.txt Generator" "https://cloudaware.eu/securitytxt_generator/">}}.  

Now you can generate a valid security.txt from within your browser, get help on every single step and even cryptographically 
sign the security.txt document so that you get that nice green tick on internet.nl!  
And if you don't trust me (and you shouldn't!) it is fully open source on 
{{< a_blank "github" "https://github.com/gitaware/securitytxtgenerator">}} where you can download the sourcecode and run 
it locally even without internet access. Enjoy!  

I will be in contact...

