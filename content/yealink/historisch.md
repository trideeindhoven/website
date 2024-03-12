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

Ook geeft hij aan dat hij een disclosure procedure met Yealink heeft gevolgd
{{< quote cloudquote >}}Disclosed June 2012, patched Aug 2012, problem still exists{{< /quote >}}

Dat klinkt niet echt alsof er in 2012 "geen kwetsbaarheden" waren in Yealink apparatuur. En in zijn presentatie wordt het
ook maar al te duidelijk dat de RPS een centrale rol in de problemen speelt...Toen ook al.  

Wat verder ook opvalt in zijn presentatie dat het toen ook al kinderlijk eenvoudig was om de 
[firmware uit te lezen]({{< ref "firmware" >}}). Iets waar ik in een eerder artikel ook al over geschreven heb. 
Daar lijkt in 12 jaar tijd dan bijzonder weinig in gewijzigd te zijn.  

Hij sluit zijn presentatie af met de woorden
{{< quote cloudquote >}}Poke around, you will be shocked at what you find.{{< /quote >}}  

Dit klinkt als iemand die verstand van zaken heeft met een wellicht wat ongebruikelijke manier van verwoorden. Ik wil Cal
uiteraard graag spreken en ik stuur hem een emailbericht
{{< quote cloudquote >}}You are the only person though whom i know that has actually disclosed a vulnerability to Yealink. I am very interested in that process.

Would you be willing to have a phonecall with me or an online meeting to discuss some of these issues? {{< /quote >}}

Ik zal nooit meer iets horen van Cal Leeming ondanks dat ik ook geen foutmelding terug krijg van de emailserver waar ik
het bericht naartoe heb gestuurd.

En als ik verder zoek dan vind ik een artikel in Heise Online met de titel 
{{< a_blank "Grave Vulnerabilities Discovered in Yealink‘s VoIP Services" "https://www.heise.de/news/Grave-Vulnerabilities-Discovered-in-Yealink-s-VoIP-Services-4654617.html" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20230506103652/https://www.heise.de/news/Grave-Vulnerabilities-Discovered-in-Yealink-s-VoIP-Services-4654617.html" >}}.
Het artikel is 8 jaar na de presentatie van Cal Leeming gedateerd, maar ook in dit artikel zijn de onderzoekers niet 
heel positief over de beveiliging van de RPS service van Yealink. Ik begin het artikel te lezen en mijn vermoeden wordt 
bevestigd dat de beveiligingsproblemen zich in een groot deel van het portfolio voordoet.

{{< quote cloudquote >}}VTrust’s research indicates that the company’s entire product line is susceptible to the flaws
<span>Heise.de</span>{{< /quote >}}

De onderzoekers van Vtrust hebben veel dieper naar de technologie gekeken dan ik heb gedaan en dus is het interessant 
om te lezen of er mogelijk data weggelekt kan zijn. Het artikel beschrijft dat de onderzoekers van Vtrust gebruikersdata
hebben kunnen "swipen", waaronder

{{< quote cloudquote >}}users‘ login credentials, phone books, caller lists, programmed shortcuts and other user-specific information by hijacking the service.{{< /quote >}}

Het klinkt bijzonder ernstig en het bevestigd het sterke vermoeden wat ik zelf al had. Hier wil ik natuurlijk meer van weten
en ik neem contact op met Vtrust. In een online meeting spreek ik met de twee oprichters van het bedrijf uit een dorpje
vlakbij Frankfurt. Zij zijn niet verbaasd dat ik ook tegen problemen in de beveiliging van Yealink ben gelopen. Ik vraag
hen hoe ze eigenlijk weten dat ze aan die gevoelige gegevens kunnen komen. Trots vertellen ze mij dat ze een python script
hebben gemaakt waarmee het mogelijk is om voor een telefoon de provisioning gegevens op te halen. Het maakt hierbij niet 
uit waar ter wereld deze telefoon staat of dat deze telefoon ingeschakeld is. Ik ben uiteraard erg benieuwd en het tweetal
besluit hun terminal te delen met mij. Op het scherm zie ik een Linux prompt waar een commando ingetikt wordt. Het 
opgestarte programma vraagt om het MAC adres van een Yealink telefoon. Ik geef hen het MAC adres van mijn test-telefoon
en na ongeveer 10 seconden staat de configuratie van mijn eigen telefoon op hun scherm. Het is duidelijk dat het "client
certificaat" om verbinding te maken met de RPS dienst van Yealink on-the-fly aangemaakt wordt. Ik vraag hen hoe ze dat 
doen, want hier zullen ze toch een root certificaat voor nodig hebben wat door de RPS server van Yealink vertrouwd wordt.  
Even is het stil en dan geven ze toe dat ze dit certificaat hebben gevonden in de Android firmware van Yealink. Opnieuw 
een gelekt certificaat dus.  

We besluiten de meeting op een hartelijke manier en spreken af om in contact te blijven. De volgende week neem ik weet 
contact met hen op met aanvullende vragen. Meteen aan begin van het gesprek is de toon bijzonder defensief. Ze hebben 
contact gehad met Yealink geven ze aan en ze hebben geen vertrouwen dat ik ter goede trouw handel. Ik geef aan dat ik
daar best aan wil werken zodat dat vertrouwen er weer komt. Ik stel voor om hen in contact te brengen met FTM. Het lijkt 
mij een goede stap om te laten zien dat ik geen kwaadaardige hacker ben die hun bevindingen wil misbruiken. Maar de 
boodschap is duidelijk: er is geen vertrouwen en ze willen niet meer met mij praten.  
Verbijsterd leg ik de telefoon neer en vraag me af wat hier nou eigenlijk besproken is met Yealink. Ik zal er nooit 
achter komen en de communicatie met Vtrust wordt nooit meer hersteld. Dit is al de tweede keer dat een beveiligingsonderzoeker
niet meer met mij wil praten.  

En dan krijg ik een 
{{< a_blank "brief" "yealink/letter_to_commerce_re_yealink_report.pdf" >}}
in handen van Amerikaanse senator 
{{< a_blank "Chris Van Hollen" "https://en.wikipedia.org/wiki/Chris_Van_Hollen" >}}
van de democratische partij. Hij schrijft aan Gina Raimondo, Secretary U.S. Department of Commerce dat hij zich zorgen 
maakt over een recent beveiligingsrapport over de Yealink T54W VoIP telefoon en...
het Yealink Device Management Platform.
{{< quote cloudquote >}}We would appreciate if you could respond to us in writing as to whether you are aware of the security concerns raised by this report{{< /quote >}}

In plaats van alleen naar China te wijzen is het volledige, zeer gedetailleerde, rapport bij de brief gevoegd.  
De conclusies in het rapport zijn keihard:
{{< quote cloudquote >}}The Yealink Device Management Platform (YDMP) is a source of significant vulnerability and threat to any VoIP systems operator or company that relies upon it{{< /quote >}}



- Amerikaanse congres


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
