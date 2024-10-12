+++
author = "Jeroen Hermans"
title = "Introduction"
date = "2024-02-16"
description = "Introduction"
tags = [
    "introduction", "Lydis", "Yealink", "AKD"
]
image = "img/yealink/pexels-tim-mossholder-2258339.jpg"
+++
The research into Yealink's security took over a year. During this time I conducted interviews, performed penetration 
tests, analyzed data and sent dozens, if not hundreds of emails.  
The truth always turned out to be slightly different than I thought. To state in a summary of a penetration 
test that the security has been improved again is a hard fact. But that the full report states that there were  
multiple critical security issues is a small, but important, omission.  

In this series i have tried to create a clear overview of what I have researched and how I did this. Unfortunately, 
at some points I can only present the facts. These are often strange in themselves and to come up with an 
explanation for this would be nothing more than a conspiracy theory.  
And speaking of conspiracy theories: later i would like to present one to you. But... this conspiracy theory does not come from me... but it is about me.  

In short: it will be a series where the articles alternate between somewhat more technical articles and sometimes a more narrative character.  

Let’s start with the questions why, who and what. In that order…
<!--more-->
# Why
*"Jeroen, why are you actually doing this?"* It's a question I regularly get from friends, colleagues, and family. 
At first glance, it seems like an innocent question, but it might be more significant than it initially appears. 
If we think about it a little longer, it does seem strange to ask a security researcher about their motivations, 
but, for example, not do the same for any other random profession.  
However, as previous research has shown, serious confusion can also arise, as evidenced by AKD N.V.’s summons, 
where they even dared to put forward an actual conspiracy theory on paper:

{{< quote cloudquote >}}
Your actions are therefore not driven by genuine interest but by external clients with their own agendas. Lydis remains in the dark about who they might be (competitors, or as you yourself suggest, perhaps even intelligence agencies from any country?) <span>{{< censuur red >}}Mr. *************{{< /censuur >}} - AKD N.V.</span>
{{< /quote >}}

Now that an official legal document portrays me as a true 007, I think it’s time to address my actual motivations.  
Let it be clear that I have never claimed to have conducted this research on behalf of any domestic or foreign 
intelligence agency. This is a gross distortion of my words, which, it seems, a lawyer in the Netherlands can 
simply put down on paper. As amusing as this may be, we need to go back a few years to the real beginning of 
this investigation.  

In the early months of 2016, I received a fairly large telecom contract from one of my clients. This meant 
configuring stacks of phones. Once everything was ordered and delivered to my apartment in Eindhoven, where 
I lived at the time, the so-called porting of hundreds of phone numbers was also submitted. It might be 
excessive to go into detail about this process, but essentially it set a deadline that could no longer 
be easily changed. The schedule looked solid, but then, Mr. Murphy came knocking. And how!
My father passed away, and this meant I had to move all the equipment to my parental home in Limburg. 
During the day, I was busy with my mother and sister, making arrangements like choosing a casket for my 
father. In the evenings and into the night, I was in my old teenage room working to get everything ready 
for my client.  
When that same week I also had to hire private security to guard my parental home, where the stock was 
stored, during the funeral, I planned to implement a so-called provisioning system. Provisioning is a 
process where a new device, in this case phones, is automatically configured when connected for the first 
time. This would allow me to ship equipment directly to clients without ever having handled it. 
It's a much faster and less error-prone process.  

It’s clear that provisioning is a sensitive process. During this process, data such as usernames and passwords 
are transmitted over the internet. Therefore, it is crucial that this process is carried out securely. 
Without diving too deep into the technical details at this point, it was already evident to me back 
then that the security of Yealink provisioning left much to be desired. Due to other priorities at the 
time, I decided to create an additional security layer myself.  

Six years later, in 2022, it became clear that the same security issues were still present in Yealink equipment. 
I then decided to contact the distributor who, at the time, had exclusive rights to distribute Yealink VoIP 
products in the Benelux. Over the course of more than a year of communication, more and more questions 
arose. Various parties in the market also became aware of my research and reached out to me with 
additional information.  

The decision to continue this research was made not only to ensure that my telecom clients could use 
secure technology but also in the interest of the broader public. With my extensive experience 
in security issues, I am in a position to contribute to this cause, which in turn leads to better 
products and a safer society.

# Who
Let's take a moment to discuss the key players in this scenario. Who is who?

## Yealink
The leading role is undoubtedly claimed by this company. It is a relatively large manufacturer of 
telecommunications equipment based in Xiamen, Fujian, China. The company was founded in 2001 and, 
according to its own claims, collaborates with major operators such as Verizon, AT&T, British Telecom, 
KPN, Proximus, and Vodafone. In recent years, Yealink has established a Dutch subsidiary with a tumultuous 
history. More on that later.
## Lydis
Lydis was founded in 2013 and is based in Almere, The Netherlands. The vast majority of their revenue 
comes from the sale of Yealink products. Since 2023, they have been part of the publicly traded company 
Econocom through a number of intermediary subsidiaries.
## Jeroen Hermans / CloudAware
CloudAware is the company I founded during my student years in 2002. In the more than 22 years since its 
establishment, I have worked on electronic warfare for the Ministry of Defence, TNO, as well as for 
private companies.  

Why is this relevant? After Lydis attempted to silence me through the law firm AKD by sending summonses 
to both my personal and corporate entities, they systematically and regularly published information about 
this matter themselves. In doing so, I was mentioned each time as
{{< quote cloudquote >}}
self-appointed security expert <span>Lydis</span>
{{< /quote >}}

This is particularly noteworthy because I have been working in (cyber) security for many years and occasionally speak publicly about it (when permitted). For instance, my research on a building access system has been published: [Comelit](https://www.youtube.com/watch?v=dR9SttG-d1o)  
I also published that same year on the homologation of regulations for banks in the EEA. [PSD2](https://www.youtube.com/watch?v=8d2upc95-HE)  

At the end of 2023, after a lengthy responsible disclosure procedure, I collaborated with the company Paxton to fix a [critical security vulnerability](https://nvd.nist.gov/vuln/detail/CVE-2023-43870).

Recently, I served as the team lead for a security team at a ministry with my company. The fact that Lydis is not aware of my background does not mean that I am "self-appointed."  

This raises the question of why {{< censuur red >}}Mr. *********{{< /censuur >}} from AKD would put a conspiracy 
theory about me in writing. I have worked with and for intelligence agencies both domestically and 
internationally in the past. I have never hidden this fact, but I also haven’t publicly discussed 
it in that context. I can only conclude that the conspiracy mentioned in the summonses stems from 
a serious distortion of my words during our meeting at the office in Almere. 
Well, it did give me a smile in the end, and "thankfully, we still have the recordings." Of course, 
a separate publication will be dedicated to this matter.

# What
This brings us to the "what." What is actually going on? In short, it concerns an out-of-hand responsible 
disclosure process, during which both Lydis and Yealink have made (legal) threats towards me. 

However, aside from how these companies have responded to me, many facts have come to light over the past 
1.5 years, making all these peripheral issues interesting as well. Consider economic offenses committed by 
publicly traded companies, demonstrable lies from one of the largest certification and auditing firms in 
Europe, silent security experts who have published in the past, and how a Chinese company manages to 
achieve a 70% market share in the Benelux.

This series of publications will be as comprehensive as possible, documenting all the findings I have 
uncovered, as well as my personal experiences throughout this process. I sincerely hope it will serve as an 
interesting document for security researchers who are engaged in similar journeys.

Lastly, I would like to address the management of Lydis: I regret the harsh tone you have adopted in 
response to my findings. You continue to use this harsh tone to this day. During a meeting yesterday, 
on Thursday, 15 February 2024, it was repeatedly stated that Lydis does not trust me to this day. 
Since 2022, I have shared my findings exclusively with you in order to help Lydis bring a better 
product to the Dutch market. I have never asked you for money, and I have closely followed your attempts 
to influence members of the Dutch press.

Let's please do things differently in the future.

