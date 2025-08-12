+++
author = "Jeroen Hermans"
title = "WHY 2025 - Die Hardcoded: Unlocking Yealink's (weakest) secrets"
date = "2025-08-11"
description = "Presention at WHY2025 conference"
tags = [
    "Yealink", "Die Hardcoded", "secrets"
]
image = "img/yealink/pexels-donald-tong-66134.jpg"
+++
Beste lezer. Welkom bij deze serie publicaties over mijn onderzoek naar Yealink en Lydis waar ik een jaar aan gewerkt heb.
<!--more-->
In deze introductie heb ik er voor gekozen om persoonlijk toe te lichten wat er precies allemaal aan de hand is. Als 
jullie geïnteresseerd zijn in de volgende publicaties, houdt dan mijn [LinkedIn profiel](https://www.linkedin.com/in/jeroenhermans/)
in de gaten. Ik zal hier elke publicatie aankondigen. De publicaties zullen elke 2 dagen tijdens werkdagen plaatsvinden.  
Hieronder de video die ik heb gemaakt om e.e.a. persoonlijk toe te lichten. De tekst is integraal onder de video opgenomen.

## De video
{{< youtube hIcnTBa8IEk >}}
## The text

Okay. So, uh without further ado, I'm going to introduce uh Jeroen and Stefan
uh who are going to be talking to us about Yalink and firmware vulnerabilities. And actually the start
of WHY, uh their company has uh just turned 23 years old. So, uh
congratulations on that. and I will pass over to you to um tell us about your research. Thank you.
[Applause] Yes. Uh thank you so much for the nice introduction and thank you all for
coming. Uh we really appreciate um your interest in our work. So let's get started with the talk. So first uh I'd
like to start with a short agenda of today's presentation. Uh so I will start with a short
introduction about ourselves and yield. Then I'll quickly go over through how
this project began. how in previous work we were able to break uh firmware
encryption uh of these devices and then we'll continue on to the main part of
the presentation uh where we look at the new phones at
the improvements and uh new technologies um and we also take a look at the uh
cloud service that the manufacturer provides. Then we'll go over our uh
disclosure disclosure process for the vulnerabilities we found and then finally um the outlook.
Yes. So um first quickly about me my name is Yun Armons and as I said before
I founded my company Cloudware in 2002. I specialize in cyber security and I do
public speaking. My company is uh based in the Hake here in the Netherlands and
uh you can find me here on Y2025 in the Swiss village.
Yes, my name is Stefan Glor. I'm an electrical engineer by training and an embedded software developer currently by
day and in my free time I like to reverse engineer uh and break embedded
devices of all sorts. I live in Zurich, Switzerland and you can find my contact
information here and here on campus. I'm also in the Swiss village.
So what's Ulink? Uh Elink is a leading manufacturer of uh IP phones and other
telecommunication equipment um such as desktop VIP IP phones um
which you can see here uh video conferencing cameras and all these kinds
of things. They're a fairly large uh corporation. They have multiple locations worldwide.
Their headquarter is or used to be in China and now they're seem to be moving
uh to Singapore.
Well, let's start um where this uh project began once upon a time and it starts a bit sad and it's in uh 2016
where my dad died and I had to move a lot of telecom equipment to the garage of my parents' place. Uh and obviously
insurance wise that was highly undesirable. Um and I actually had to hire private security to guard my
parents' place while my father was being buried. Um so I knew something had to
change and provisioning is the word that you use then. Uh so provisioning basically means that you ship the
equipment directly to your customer and the first time the equipment boots it gets configured automatically.
Um when I started implementing this provisioning system, I immediately found that there was an AIS key uh for
encryption in this system that was leaked almost 10 years ago and it was uh to be found on GitHub. So that was
highly suboptimal. Um then I started doing more research
into security of Felink more broadly in 2022
and in 2024 I met up with Stefan here. I met up in Switzerland in Zurich and we
teamed up to uh bring this uh research to the ne next level. So first 2022 to
2024. Very quickly a summary uh there was a hard-coded uh AIS key that was leaked.
It was on GitHub for a very long time already. Yelink replaced it by RSA
encryption but they immediately leaked the private key of the RSA. So that was
also not optimal. Um they misinterpreted the SIP RFC um a few times um and they
claimed to have a GDPR certificate uh which was issued by Tou uh and I asked
Tou about it because they issued this certificate and they responded with cancelling the certificate immediately.
Um then in the end at the after publications uh I was actually uh
received legal threats by the Dutch importer of Yelink. Um and I received two summons which uh caused me to hold
them up during a uh video that I had to post online to explain things what was
happening.
Yes. So for my um story, I started in 2024
to reverse engineer uh yielding phones. Basically just out of uh a coincidence
that I got my hands on hands on one and yeah, out of curiosity, I wanted to find
out how it worked. And during my reverse engineering efforts, I stumbled upon
some very interesting design choices, you could say. And yeah, I wrote a blog post about it,
about my findings and how I um discovered uh the the architecture and
reverse engineered uh the firmware in more detail. I started to look at the
firmware which is provided by the manufacturer through uh encrypted ROM
files. So the normal workflow would be that the manufacturer um provides this
file and you can download that from um from their website and then you can
download it uh to your phone using uh the local web interface or some other
automated uh system. This encryption of the ROM files is
actually implemented as a a custom cryptography. Um and a lot of work has
already been done here in uh reverse engineering and there are also tools available.
Uh it's actually a custom uh block cipher using an exor with a a static
key. So it was fairly easy to um reverse engineer um already.
But uh I couldn't use these existing tools for the new firmware as the new firmware seemed to employ some new
mechanism with presumably a new key. So what I did I investigated uh more deeply
and I found what I call a hardware assisted AES. So there you have a microcontroller that is used to derive
the AES key in a challenge response fashion you could say.
So uh this key can easily be extracted by uh sniffing the unencrypted serial
bus between the main CPU and the microcontroller and therefore you can uh
obtain the key because the main CPU will just send a value to the
microcontroller. The microcontroller will apply some magic function to it um
and then returns the value back to the main CPU. And these uh return values are
um concatenated together to yield uh the key. And of course since you always need to arrive at the same uh key to be able
to decrypt the firmware um if you sniff this key once and have the key then you
can uh always decrypt this firmware. And that's what I did and so I could analyze it further. Then
I could also get code execution via the update mechanism. Uh this is because the
update binary did not have any signature verification mechanism at all. So you
could just basically install everything anything that you that you wanted. Um
because yeah I just had to understand the f uh custom file format
and uh yes of course you become root because the updater also runs as root.
uh in particular I exploited this handy uh system shell command that was already
there. So I just had to patch this string and then you can run whatever you
want.
Yes. So uh that this is then how we uh met. We had a mutual interest in
yielding security. So we set up the meeting uh in Zurich
and decided to look at new ELink models and especially their cloud
infrastructure. So that has all already been uh
published mostly um that's uh already done in previous work. So
what has changed? What surely everything's fixed now right?
So to investigate this question, we started with a new phone uh in particular a SIP T44U which you can see
here. Um we we chose this device because it's the
latest from the series. Uh it seemed to be a um nice new phone that is definitely not uh see definitely has
firmware support. So it's definitely a good choice. So I analyzed this firmware again
and what I found is that the basic custom uh cryptography is still the same
which kind of makes sense because presumably you need to maintain some forward and backward compatibility.
Also they're still using the same uh microcontroller trick to get the
encryption key but they introduced a signature check for the upgrade binary. So now it's
actually not that easy anymore to uh get custom code running or at least not with
the same trick. And in the new hardware they they um
introduced a new chipset that actually allows you to do secure boot and they did implement that with a hardware trust
anchor. So that's um actually a nice uh improvement there security wise.
So cloud provisioning, what could possibly go wrong? So let's first have a look at
what the cloud provisioning is and I made a picture for this. And on the left hand side you can see a Yelink phone
just like you can see here. And in the middle you can see the internet and on the right hand side you see the Yink
controlled uh RPS server, the remote provisioning service. Um um first the
phone asks so where can I find my configuration? So the question is not what is my configuration it asks where
is my configuration. Um the RPS server by Yink responds by
here are the credentials and URL to access your configuration. It then asks
hello I'm device XY Z uh give me my configuration to the customer provisioning server. This can be a
customer control provisioning server, could be some external service
and that server responds with an XM XML document that says here's the the configuration.
So what is in this provisioning data? Well, it's a huge uh template document.
I urge you to have a look at it. There's a lot of information in there. But let's have a look at a few. Um SIP credentials
obviously username, password, uh SIP server URL. Um, there's phone book data
in there. Uh, you don't want that leaked. Um, the provisioning server credentials as key, HTTP, HTTP
authentication information, network information of your company, VLAN information, TR69, server certific
certificate, XML push server URLs, uh, LDAP credentials, you name it. There's
user data in there. BLF, busy lamp fields. Those are the shiny lights that you see on the edge here that indicate
whether the CEO is actually in a call or not. Hot desking information is also in there. Action URLs that you can set for
callbacks to a web server. Uh and much much more. It's a huge document and I
urge you to have a look at it.
Yes. Um and to authenticate the phone towards the RPS system, they use client
certificates uh issued by a CA by Yearlink. And these certificates are
used to uniquely identify a device towards the RPS system. So the RPS
system can decide whether or not to um give that phone the credentials of the
configuration server. But unfortunately the CA private key was hardcoded into
the firmware binary. Although it was obuscated with a static AES key, it was fairly easy to extract
it. And with that we had full access to the certificate authority which allowed
us to issue arbitrary uh client certificates for an arbitrary phone.
they did employ uh also an authentication token as kind of an additional layer of security
um in the in the RPS authentication but also here it's a static derivation
algorithm using a hard-coded AES key
it does contain uh five digits of the serial number as a 2FA pin and uh so
Actually, these five digits are everything you need to know to be able to create um an au authentication token
for a particular phone. So, in summary, the authentication to the RPS system is
completely broken. This is also what we demonstrated here
in our proof of concept. Um, we created a little uh web- based
tool where you can enter the MAC address of the um phone that you're targeting
and the serial number or the five digits of the serial number. Uh, then press
enter and the tool will yield all the configuration files of that phone.
Yes. So this is the second round of publications that I'm doing at Yelink.
And the last time Yelink was not very happy with me. Um so they thought I was
so cool that they actually froze my enterprise. So I was no longer able to log in to the management cloud service
of uh of Yink. Um that was very unfortunate. Luckily the RPS management
platform also has an API and they forgot to block that.
So that was a bit unfortunate. Um but um luckily uh there was a CVE issued and uh
it is a bit a lengthy uh document but I think uh you can look it up under under
this number.
Yes. Also, the API allows you to specify certificates that are used by the phone
when authenticating the configuration server. And here, if you look closely,
uh it actually does not validate what you upload, uh whether it's a certificate or just random data. So, in
short, that's another CVE.
Also, what about rate limits? Uh, I mean, we saw this that you need the serial number in order to create the
authentication token. Well, there are no rate limits. You can just brute force
this pin. And actually, because this pin is not completely random or it's not
uniquely uh or uniformly distributed, um, it makes it even easier.
So we also wrote a little tool to brute force the 2FA um to
break the encryption and that also gave us a CV.
Also the API allows you to enumerate MAC addresses. So you can just iterate
through MAC addresses to see whether or not they are enrolled in the RPS service. So
So making the painful summary. So we have a few CVES for rate limiting. The
API lacks rate limiting. Um we have an authentication bypass for uh for blocked
accounts. Um we have a certificate upload function that lacks input validation. Uh and we actually have two
CVs that are actually assigned and not published yet. One is for the leaked private key of the certificate authority
and one is for the AIS key for the encryption of the firmware.
One more thing, welcome everyone to Europe and in Europe we have the GDPR. Um and uh on the
website of Elink you can find that they're very proud to have this logo on there and it says a download report. So
obviously I want to have a look at this report because the last one was retracted by to
and it says this time I can't download it. I need to ask for this document and
obviously I did and Yelink said well it's a bit difficult. You have to sign an NDA etc etc but we can give you this
document and this is a screenshot of that document. is part of the document. Um
and uh it is a bit of an interesting document because um it says to zoot uh
and it has a service period from the 1st of January to 31st
uh uh uh of December. Um and so I thought let's have a look at the at the
metadata of this uh PDF. And it's it's a bit of interesting metadata because it's it the author is not uh it's not to or
it's not uh Yelink it's Huawei. Okay. And uh and it's produced on May
29th which is an interesting timing because the document is already valid from the 1st of January. But it's extra
interesting because uh one week before I sent this email. Hello, my name is Yun
Hammonds and I have been in contact with Healing before about vulnerabilities. Unfortunately, I have to contact you
again about a series of vulnerabilities I found together with my fellow security researcher Stefan Glaw. Um,
so um that is an interesting timing because um uh that is just a week before
um I don't know why that was. What's more interesting is that the same document is edited one day later and it
is edited by an open- source uh software package called ITEX version 5.5.10.
Now version 5.5.10 is on GitHub and is released in 2016
and well given the security history of PDF I think that's a bit of a risk.
So obviously this asks for questions. So I did and I asked a lot of questions and I said is this even your document and
asked this to to um it doesn't mention a certificate number.
It's untraceable. It doesn't say what is tested. It doesn't say to what standard it was tested. It doesn't mention an
issue date. It's signed by someone I cannot Google as an employee of to is this an employee. Um, it says it's
created by Huawei 5 months after it went into action. Can you explain the timeline? Uh, it was edited by a very
old open- source piece of software. Can you explain this? Uh, is this the way that Tou would like to operate? And, uh,
legally, I'm going to show you the full response that I received from, uh, Tou and it says this. Uh, please read it
back in in the recordings, but there are two things that I would like to uh,
mark out. The first one is this is not a certificate. Um so that's why it's
untraceable. It's basically a document that says that to did um um um some work for for Yelink
and um that that's it. And the second thing is it is indeed a document from
TFoot Shanghai. So, um
um there's a lot of facts and information in there and um I'm not
entirely sure what I have to find uh think about those facts, but those are
the facts. So, let's fix things. Um we have to
disclose at one point in time, right? We can't keep this to ourselves. So, first we need a legal framework. And we
thought a good place to start with the legal framework is the convention of protection of human rights and fundamental freedoms from 19550 in Rome.
And it states the following. The exercise of the freedoms are necessary in a democratic society in the interest
of national security, territorial integrity, public safety, prevention of the disorder of crime, blah blah blah,
prevention of reputation of rights of others and disclosure of information. definitely what we're talking about
here, etc., etc. So, that's article 10 of this um of the convention of
protection of human rights. So, um yeah, I think that's that's usable. And this
was also um reaffirmed by the Dutch DA office, the open bio minister in Dutch.
And they have a document online about ethical hacking and it states the following in Dutch and I translated it
for you. There are three things that you need to take into account in order to be on the
legal side of things. Was the action that you carried out in the context of a legitimate societal interest? Well, we
think it is. Um, unfortunately, we proved to the organizations that this is
about that we wouldn't disclose who that is, but there is definitely a very legitimate societal interest at play
here. The second one is, is it proportionate? In other words, did you
not go any further than was needed to prove what you wanted to do? For example, we did this by buying our own
equipment. The third one is subsidiary. In other
words, were there less intrusive ways to achieve it? For example, when we went to
enumerate, we didn't do this in a script kitty way. We actually constantly monitored the response times of the RPS
servers. And when that response time went up, we throttled. So we could have done it faster probably, but we didn't
because we wanted to be on a legal site correctly and we didn't want to break anything for everyone in the world.
So disclosure procedures are complicated. Um, and often it's more an
NDA. In the case of Yelink, this was a very interesting one because in the case of Yelink, the the vulnerability
disclosure procedure said that you would transfer all your intellectual property of your findings to Yink.
I'm not saying that they would, but it would create an opportunity for Yink to sue you for IP infringement if you would
ever publish about your findings. And I think that's a lot easier than trying to
sue someone because they were an ethical hacker. So we rejected their vulnerability
disclosure procedure very first email and we said we have our own vulnerability disclosure procedure. We
are here to help you. Um sometimes this is a bit complicated
for the manufacturer and the government organizations involved but I think in the end everyone said listen we believe
that you are doing the right thing and um and um yeah you you you thought about
this. We feel that standard vulnerability
disclosures are unfair to the victims sometimes also called customers. you give three months or maybe half a year
to a manufacturer and the manufacturer has all this time to fix the things and then we go to a full disclosure and it's
dumped onto the world and then every IT team has to work weekends to fix it and to mitigate and we feel that's very
unfair. So what we did is we also contacted important and large customers
of Helink. It was very easy because they're all on the website of healing
and we had some meetings with these people and some of them said um actually
we really appreciate that you contact us but this is our worst nightmare. So we also contacted n national cyber security
centers um in order to be sure that government organizations were also covered by this.
So timeline is we contacted yink on May 19th just before that uh to document
remember um and they responded with um uh advising
uh to update all your firmware and they did that last time too. Um they stated
again that um this is only about end of life devices and obviously there are
security issues with end of life devices. We cannot say anything about end of flight devices but in fact we
actually bought the very latest and newest of their phones. So this is absolutely untrue
and unfortunately very quickly after we started our vulnerability disclosure the p manufacturer weld went public with
their advisory. Now that's new and that also created a situation where we had to
act ourselves uh which is not the way we wanted to to to do.
It led to a few publications on our own blog posts. Um does Pitish published an
amazing document uh an amazing article by Masel Wfogle. He's actually here in
here today. Um um the document is uh the the article is amazing and I urge you to
read it. Uh it's in German but Google translate will uh will obviously help you. Well, we already saw a lot of CVs
and more to come.
I think Elink also saw that uh going full public with their advisory was
maybe not the best idea. So they said now it's a non-public link uh and you can no longer access it because and you
can see there in the quotes it's not my wording it's theirs. It has confidential
client communication in it now it's their wording not mine I don't want to
um um change anything about that. So I asked for a um access code because
obviously this is about our disclosure and I think it would be interesting to read what the manufacturer themselves
want to disclose about it. Unfortunately they didn't react to that uh request.
Fortunately um we are security experts. So so
so we asked can you give the access code and we are security experts. So we looked in the source code
[Applause]
I did not believe this. I had to actually copy this password myself and it did work. Um,
yes. So, um, let's have a look at the future then.
Yes. So let's make an outlook. What can we take from our findings?
Well, first we'll quickly go through some uh mitigation steps that we believe
could be uh helpful to reduce the risk of the vulnerabilities that we found uh
being exploited. So in general, network isolation is always uh helpful. It's
always helpful to um segment uh different parts of your network. So in
particular, this would mean that you would not have your configuration server
that holds all this sensitive data um out accessible uh from the internet but
have it isolated through some physical network or uh VLAN or um IP filtering or
whatever. We also think that the manufacturer could employ some one-time provisioning
scheme. So that the configuration data is only accessible once as you
would think such a phone would all only need to be configured once. So uh this
could be implemented with some cryptographic keys or maybe a uh provisioning URL that expires or
something like that. Also, there could be a proper out of band authentication that you would need to verify that you
are actually trying to um reconfigure your phone. So, you're actually uh like
allowed to access the configurations. And yeah, if possible, don't use RPS at
all. Uh I mean, it's always better to not trust and rely on some third party
infrastructure. with your sensitive data.
So, the takeaways of this talk in summary, don't roll your own crypto.
That's never a good idea. What's also a bad idea is hard coding um cryptographic
keys. In general, stick to design to security
design principles. It's never a good idea to have your CA replicated
thousands of times on on each phone. And if you think you know better than
the security design principles, you you probably don't.
Yeah. and some future work uh you could you could focus on if you're uh inspired
by this talk then you could look at are the issues really fixed as promised by
the manufacturer and how exactly is that implemented you could also look at other devices um
they have a lot of um different devices different categories of devices also
they have Microsoft teams enabled phones that have a different architecture.
Yeah, video conferencing equipment. Also, it will be interesting to look how
other manufacturers are doing it. And
yes, that's concludes our talk. Uh, thank you very much for your attention. Here are
