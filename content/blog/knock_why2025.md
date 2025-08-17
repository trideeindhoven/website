+++
author = "Jeroen Hermans"
title = " WHY 2025 - Knock knock who's there 2.0, the subtle art of (physical) port knocking "
date = "2025-08-11"
description = "Presention at WHY2025 conference"
tags = [
    "why2025", "Paxton", "Net2", "ARAS", "Phera", "Knock knock", "certificate", "license"
]
image = "img/blog/picryl-padlock.jpg"
+++
At {{< a_blank "WHY2025" "https://why2025.org/" >}} i gave a talk about security of building entrance systems
<!--more-->
Building entrance systems are important and often the first layer of security for your facility. At {{< a_blank "MCH2022" "https://mch2022.org/" >}} i gave a talk "Knock Knock Who's There" and that received really positive reviews.  
During the next few years i researched a few more of these systems and that led to the Knock Knock 2.0 presentation during WHY2025. You can see the video below and the full text below that.

## De video
{{< youtube XTRzWv6Ty3o >}}
## De tekst

So welcome to the talk Knock Knock Who's There version 2.0, the subtle art of physical port knocking. So it's not your ssh port you're protecting.  
I will introduce you to Jeroen who is now in a company which is now 23 years old and he will have the stage now.
Thank you very much. Thank you all for being here today. Let's start with with a quick introduction of the agenda. I will first tell a little bit about who I am and the last Knock Knock talk that I did at MCH2022. Then we will have a look at three knocks that I did at physical entrance systems.  
First a little bit about me. I founded my own company Cloudware in 2002. The first day here at WHY2025 the company was 23 years old. So that's nice.  
I specialize in cyber security and I do some public speaking.  
The company is based in in The Hague and here at WHY2025 you can find me at the the Swiss village which which does not have a tax reason. Just wanted to put that out there.  
So let's look a little bit back to Knock Knock 1.0. I had a look at the building entrance systems of
Comelit. That was a unencrypted system. It was unauthenticated. It was unauthorized. It was
unvalidated. And it was broadcasted on a bus. So in short, you can see who's at your neighbour's door, you can open the door for a random apartment number and much much more. The talk is still on YouTube. So if you want to see it then please do. So yeah I think that sums it up.  
After Knock Knock 1.0 people started talking to me as it often goes in cyber security and they said maybe you should have a look at this system and so I did.  
Let's have a look at the first knock and the first knock is a company called ARAS and says themselves they provide solutions that meet the highest standards set by organizations such as the ministry of defence and has proven  expertise in securing large university campuses, museums, data centres, distribution centres, industrial complexes and retail change chains. So this is a system that should be extremely secure. Fantastic. So let's have a look at it.  
And the system that I had a look at is called Phera. And Phera has a PDF document that describes  what this system is. It basically starts with this Dutch sentence that you can see here which
translates into “Phera accessible in every possible way”. And I believe that. The document also contains the word secure 27 times. So this must be a very high secure system.  
But are we sure? So I had a look at it and a little bit further in the document it says this Dutch text
which says “100% secure” which is an extremely academic way of describing the system.  
So moving on it says it has a highest level of security by using encryption. Oh wow. So, does it mention anywhere else that it is this safe? It does and it says there's secure communication between all devices.  
Now, this is fantastic. I like a company that takes security into account when developing systems. So, does it also mention how it does this? And luckily, it does. It says it uses technologies such as HTTPS, GOST, single DES, and AES.  
Wait, I think we have to go back a little bit because as far as I know, and I looked it up, GOST is broken in 2008 and single DES, I think that the first time that it was mentioned that it would theoretically be broken was in 1995.  
Okay, so maybe there are other ways to secure this system. But maybe ARAS doesn't agree with that because they are probably not too proud of this because at the moment the website looks like this. So they had to take it down for a reason that they did did not disclose.  
So this is a system that uses access cards. So I thought let's have a look at how these access cards work and it says it uses 2Crypt. I was not aware what two crypt is. I'm don't know does
anyone here know maybe hands? No. I saw half a hand. So neither did I. I didn't know what 2Crypt was. So, I looked it up and it said,
{{< quote cloudemail >}}2Crypt cars and readers are equipped with dual encryption. First, the standard encryption of a Mifare card is applied. Using its associated security key. Then, the card number is additionally encrypted and stored on the card linked to its card's serial number.  
Even if the entire contents of the cards are copied to another card, it will no longer match the original serial number and will therefore be rejected by the card reader.{{< /quote >}}

Now I think objectively I would not call this 100% sure. Because indeed if you buy a Mifare
card here in Holland sector zero is not writable. So I cannot write the serial number. But if I go to
AliExpress, I buy the much cheaper Mifare cards and they don't have that protection. So I can write this sector zero.  
So obviously the next step that you do as a researcher you contact ARAS about this and I said listen I found this and I have some questions and I got a very quick response from the product manager entrance systems and it says:
{{< quote cloudemail >}}The fact that you can retrieve that key is nothing new. I've done it myself once and if I can do it
there are definitely others who can do it as well.{{< /quote >}}

Now, this is the same company that like two minutes ago said it's 100% safe. It's an interesting conclusion.
So, I think then it's time to go to the second knock.  
And for the second knock again, there was a guy that said to me, "Hey, maybe you should have a look at this company. And who am I not to comply?"
So I had a look at the company Paxton. I don't know if anyone knows Paxton. So half a person knows who is Paxton. So I neither did I. I didn't know. And it says, 

"Paxton is a company with 30 years of experience designing market-leading security solutions for a range of buildings. Around 30,000 buildings each year are secured globally with Paxton products.”  

30,000 buildings. I didn't know any of them. So, surely I should be able to Google who is using this." So, I looked it up and it's it's an interesting list. So I found soccer stadiums, Manchester United is using it. So that's interesting. Airports are using it. Fire brigades are using it. This is an actual picture of the Paxton security office. Hospitals are using it. Multiple TV studios are using it. Boat pilots are using it to secure harbours. A jail in the US is using it. That's convenient. ISPs are using it and a marijuana facility.  
So this is an interesting set of companies who are using this product. So if this product would for any reason not be secure, you could actually go into a hospital, steal drugs from their pharmacy, then get past security in the stadium, watch the game, then go to your ISP, assign yourself unlimited bandwidth, steal a 1000 pounds of cannabis, go home, break into the TV studio, schedule your favourite movie at prime time, go home, watch the movie with your hospital supplies and 1,000 pounds and then flee the country by plane or boat for that matter. And if you do get caught, you can get out of jail. There's a top tip!  

But they also have an API and everyone here thinks that's extra interesting and I fully agree. So I asked Paxton, can you give me access to this API just for reference? This is an API that is running on my own machine. And they denied it. They said you cannot get this license file because we don't think that you have enough knowledge to use the API on your own machine. Okay.
It has a free SDK luckily online and in that SDK is a license file. So I reverse engineered that a little bit and it turned out not to be too difficult to generate a license file. So I was able to use that API. Fantastic.
But um this is a authentication problem. So I went to the Dutch CNA for getting a CVE assigned. I informed them and they needed a little bit of persuasion and I did it this way. I made a license file and let me go over this license file.  
I'm not sure if you can all read it but please do watch the recording later on and I will go over this myself now. So the first the license ID is as you can see 42 42 42 42. For as long as this is a random UUID it's valid. It accepts it. Fantastic. We can do that.
The expiration date has to be valid. So this expiration date is Sunday June 23, 3022.  
That is an actual date. If you change anything in that date, it will not accept it. So if you make from the Sunday a Monday, it will not accept it. So it has a calendar function in the validation.  
The client ID there, that's just any random UUID. So if you generate a UUID and just put it in there, it will accept it.
Maybe the Dutch people have already seen that the licensee is Mark Rutte who at the time of this
was the prime minister of Holland and at the moment is the secretary general of NATO the organization that is going to save us all and and I think everyone is already looking at that signature and trying to figure out what is that signature because obviously that's a base64 signature.  
There it is. I generated the signature, but I wanted to make sure that this signal signature was actually ignored by the software. So, the signature is actually base64 for “There's no way this is this easy.”
So, that means we can use the API and the license file is accepted. Fantastic. So, but what does this API actually do? So, oh wait, but before this was the persuation file for the Dutch CNA National Cyber Security Center and because it was the Dutch Prime Minister, they did think it was important and the CVE was assigned.  

Thank you. Let's have a look at what the API does. So that's the third knock. The Paxton Net2 API can create, read, delete user information, time sheets, so who worked when, presence reports, which will be important later on. So who was where when and it can post commands to all the nodes in the Paxton network. So that presumably are locks to update firmware and stuff like that. So if we don't want to end up with 1,000 pounds of cannabis on our couch, the security of this needs to be of the highest level.  
How did they secure this? They did not use a self-signed certificate for this. Remind this is just running on your local machine and your local machine is the person managing the security in the facilities that we just went over. So, it's important. It's an important PC. They actually used PKI infrastructure. So I think most people know what a PKI is, but it's it's like a notary. It's like a digital notary. Let's see how can I can explain what goes wrong. Yeah, I think that that explains everything.  
And actually that is exactly what went wrong. Maybe the best known CA is Let's Encrypt. I think everyone knows this one. And it has this levels of certificates. So one certificate is signing the other one and the top certificate needs to be trusted by your browser. If that is not trusted, any other certificates that are signed will also not be accepted.  
So how did Pexon do this? Well, during the installation of the Net2 software asks to install a CA
certificate. That certificate is normally not in your computer's trust store. Unfortunately, it does ask me to do this, but it was already installed. So the Net2 software secretly installed a certificate in my trust store that I can use to sign other certificates for. And now remember this is a computer in a physical security position in hospitals, soccer stadiums, you name it, marijuana facilities.  
So the next thing that I asked myself is so where is this certificate coming from? Where is the local certificate coming from? So not the the certificate authority certificate, the local certificate.  
So I went uh into the directories and I saw Paxton access open SSL and there
were two files there. Paxton-CA.crt and Paxton-CA.key and I was a little bit too early celebrating because that one is encrypted. I can't read it. So that was unfortunate. So then I had to use all my encryption skills to recover this secret password because there was a third file and that was createdevicecert.bat  
Yeah. And so I used all my knowledge that I had and I added a single line to this file and after 30 seconds I had the the password for the CA key. This is the actual key and I had to blur a little bit away because I don't want to you know leak passwords to everyone here, especially not you people, especially not.  
Again I contacted the National Cyber Security Centre and they asked again whether this is important and relevant. But this time I learned so I um I created an actual certificate for *.government.nl.  
That raised some questions and also relevance. So a CVE was assigned and this time it was a 9.8 critical.
But I hear everyone thinking you didn't look at the application itself. Now that's a very good point. So we have a bonus knock.
The application itself is a database. Maybe let's settle this now because you people know this. Is it M.S.S.Q.L. or is it Microsoft Sequel?  
Who thinks it is M.S.S.Q.L. and who Microsoft Sequel?  
I'm going with M.S.S.Q.L. but it's 50/50. So there's an SQL database there. It has an NGINX web server for running the aforementioned REST API.  
And it has a Windows application that uses the rest API to communicate with the database.
We already looked at that REST API. We know what it can do. The Windows application that is work for the future. So all the state full information must be in this SQL database. So that is the next thing that I had a look at. Now in this database there must be a lot of personal identifying information in there. PIN codes of course for opening locks that's unencrypted. The card numbers
themselves which is very convenient if you want to clone card numbers. And then the usual personal information like names, email addresses, phone numbers, you name it.  
I want to get a access to this database. And it's actually very simple because Microsoft SQL Server has a single user mode. So you just stop the service, start the service in single user mode, add a new admin user, stop the service in single user mode, start the service again, and now I'm admin.  
Now, now it's all fun and games, but there's also a serious side to this to this story because I Oh, yeah. And of course, I automated this in a Python script, so you actually don't see it happening in a uh in a live environment. I'm in.  
But there's a serious undertone here because forensics. I asked a former detective, who is not in this picture, and I asked him, "So, but what if in one of these facilities someone breaks in, with a cloned card, right? How does the police treat this forensic data?" Because obviously Paxton is saying it is forensic data and they will communicate with the police in order to hand over this data. And he said well we we don't have any reason to doubt this information. So if you work in that hospital and then supplies from the hospital get stolen and someone used your credentials from this Microsoft database you may be in legal trouble and I think that is something that organizations like the police need to know that potentially the forensic data is not to be trusted.
Luckily the National Cyber Security Centre agreed with me so they assigned another CVE.  

So in the end we got added to the Paxton wall of fame. Wall of shame I almost said. Well the vulnerabilities were fixed. I will come back to them. Let's see if that's done properly because due
diligence and we were sent hoodies which is nice, but that went wrong because they didn't send us hoodies they sent us company clothing. So now we have deep knowledge about their systems and we look like employees. So what could possibly go wrong?
I think that's a that will be a good talk for the next time.  
Yeah, disclosures disclosures they are important. You see a lot of CVEs were assigned and sometimes it does take a little bit of effort. But I think disclosures are very manufacturer focused. I just walked past the the A-hall and there was a talk from DIVD. Fantastic people doing fantastic work and it says you know it's important to disclose to the manufacturer. I do think it's important to disclose to the manufacturer because they are the persons who need to fix this but I also
think the victims or sometimes also called customers also need to be involved in this process. Because what now happens you get a full disclosure after the manufacturer fixed something and then the IT teams at the victims they need to work very very fast to fix everything and then things go wrong. Tomorrow I also have a talk about the telecommunication company Yealink. I will go more into detail about how I do disclosures and how tricky that can be and also legally.  
So disclosures they are complicated legally because you know I do not want to have to break out of jail. But also politically
I already gave you a few examples where I had to convince the CNA that this is something important. It should not be like that. Assign a low cvss that's fine but the CVE is still there. So I think there's some work that needs to be done there. So yeah that is what I knocked on a few doors in in the past two years. And I think we have ample time for some questions. So, who has a question? There are none. That's new. That's a good sign. Thank you.
