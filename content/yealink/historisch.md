+++
author = "Jeroen Hermans"
title = "Historische staat van beveiliging"
date = "2024-03-01"
description = "Historische staat van beveiliging"
tags = [
    "historisch", "beveiliging", "lekken", "CVE", "Lydis", "Yealink"
]
image = "img/yealink/pexels-mike-bird-350784.jpg"
+++
Het is niet voor te stellen dat ik de eerste en enige beveiligingsonderzoeker ben die tegen problemen bij Yealink is 
aangelopen. En dus heb ik besloten om onderzoekers te gaan onderzoeken. Een speurtocht die soms meer dan 10 jaar terug in
de tijd gaat.
<!--more-->
I have added international translations of the articles using google translate:  

[{{< img alt="EN" src="img/uxwing/united-kingdom-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/historisch/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="DE" src="img/uxwing/germany-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/historisch/?_x_tr_sl=nl&_x_tr_tl=de&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="FR" src="img/uxwing/france-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/historisch/?_x_tr_sl=nl&_x_tr_tl=fr&_x_tr_hl=nl&_x_tr_pto=wapp)  

Volgens de 
{{< a_blank "Security FAQ" "https://www.lydis.nl/over-ons/yealink-security-faq" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240306181308/https://www.lydis.nl/over-ons/yealink-security-faq" >}}
van Lydis worden de producten onafhankelijk getest en dat deze testhuizen
{{< quote cloudquote >}}komen tot de conclusie dat er "geen kwetsbaarheden" te vinden zijn.{{< /quote >}}

Het is eigenlijk pas tijdens het schrijven van dit artikel dat het mij opvalt dat "geen kwetsbaarheden" tussen 
aanhalingstekens staat. Met de kennis van wat ik hieronder ga schrijven is dit wel heel erg sarcastisch.  

Laten we dat dan gaan proberen te staven. En ik vind vrij snel een presentatie van Cal Leeming uit de UK. Zijn presentatie
heet
{{< a_blank "Auto provisioning sucks" "https://www.slideshare.net/sleepycal/auto-provisioning-sucks" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20230223063802/https://www.slideshare.net/sleepycal/auto-provisioning-sucks" >}}
en dat is natuurlijk al een behoorlijk pakkende titel. 

En meteen aan het begin van de presentatie verwoord hij het in niet al te voorzichtige woorden:
{{< quote cloudquote >}}how would you feel if..
- You found a vulnerability that allows malicious user to extract user creds remotely with no authentication
- Your supplier was shipping you vuln devices by default
- The vendor did not fix the problem entirely
- All your customers were affected

This is the BS I had to deal with in June 2012 {{< /quote >}}

Dat klinkt niet echt alsof er in 2012 "geen kwetsbaarheden" waren in Yealink apparatuur. En in zijn presentatie wordt het
ook maar al te duidelijk dat de RPS een centrale rol in de problemen speelt...Toen ook al.  

Wat verder ook opvalt in zijn presentatie dat het toen ook al kinderlijk eenvoudig was om de 
[firmware uit te lezen]({{< ref "firmware" >}}). Iets waar ik in een eerder artikel ook al over geschreven heb. 
Daar lijkt in 12 jaar tijd dan bijzonder weinig in gewijzigd te zijn.  

Hij sluit zijn presentatie af met de woorden
{{< quote cloudquote >}}Poke around, you will be shocked at what you find.{{< /quote >}}  

En als ik verder zoek dan vind ik een artikel in Heise Online met de titel 
{{< a_blank "Grave Vulnerabilities Discovered in Yealink‘s VoIP Services" "https://www.heise.de/news/Grave-Vulnerabilities-Discovered-in-Yealink-s-VoIP-Services-4654617.html" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20230506103652/https://www.heise.de/news/Grave-Vulnerabilities-Discovered-in-Yealink-s-VoIP-Services-4654617.html" >}}.
Het artikel is 8 jaar na de presentatie van Cal Leeming gedateerd, maar ook in dit artikel zijn de onderzoekers niet 
heel positief over de beveiliging van de RPS service van Yealink

"VTrust’s research indicates that the company’s entire product line is susceptible to the flaws"
"While attackers can’t access Yealink phones directly, they can still swipe users‘ login credentials, phone books, caller lists, programmed shortcuts and other user-specific information by hijacking the service."

contact opnemen met VTrust
Laten demo zien
daarna ineens geen contact meer met mij


- Amerikaanse congres
yealink/letter_to_commerce_re_yealink_report.pdf

- Verzonnen CVE nummers
Maar heel weinig
https://www.lydis.nl/over-ons/yealink-security-adviezen
https://web.archive.org/web/20240306181049/https://www.lydis.nl/over-ons/yealink-security-adviezen

Yealink:
https://www.yealink.com/en/trust-center/security-advisories
https://web.archive.org/web/20240311224749/https://www.yealink.com/en/trust-center/security-advisories

Advisories die met "YVD" beginnen

https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=yealink

https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-24681 AES sleutel voor mij
https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-48625 was nog niet gepubliceerd

- NetSPI
yealink/Yealink YMCS Penetration Test Report by NetSPI.pdf
Interessant dat er alleen gesproken wordt DAT er een test is gedaan, maar niet wat de uitkomt was.

et Web Application Penetration Test rapport van NetSPI heeft ook deze OWAST Top 10 getest en zij komen tot de conclusie 
dat er een heel aantal vulnerabilities in de clouddiensten zitten. En onder die vulnerabilities zitten ook vier "high
severity" findings, waaronder:
- A1 - Injection
- A2 - Broken Authentication
- A5 - Broken Access Control
- A7 - Cross-Site Scripting (XSS)

Beveiligingsrapport van NetSPI

CVE's


https://fuo.fi/CVE-2020-24113/
https://hackmd.io/@tahaafarooq/auth_rce_voip

CVD
mail van Zijlstra
CVD van Yealink uit elkaar trekken
