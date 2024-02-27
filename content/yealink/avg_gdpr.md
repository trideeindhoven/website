+++
author = "Jeroen Hermans"
title = "AVG / GDPR"
date = "2024-02-16"
description = "AVG / GDPR"
tags = [
    "AVG", "GDPR", "Lydis", "Yealink"
]
image = "img/yealink/pexels-marco-13153479.jpg"
+++
Zowel Yealink als Lydis gaan er prat op dat ze 100% voldoen aan de 
{{< a_blank "Algemene Verordening Gegevensbescherming (AVG)" "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=celex%3A32016R0679" >}} wetgeving. 
Sterker nog: ze claimen hier zelfs een "General Data Protection Regulation (GDPR) certificate" (Engelse benaming voor AVG) 
voor te bezitten van TÜV Rheinland.
<!--more-->
I have added international translations of the articles using google translate:  

[{{< img alt="EN" src="img/uxwing/united-kingdom-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/avg_gdpr/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="DE" src="img/uxwing/germany-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/avg_gdpr/?_x_tr_sl=nl&_x_tr_tl=de&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="FR" src="img/uxwing/france-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/avg_gdpr/?_x_tr_sl=nl&_x_tr_tl=fr&_x_tr_hl=nl&_x_tr_pto=wapp)  

Het is tijdens een van de dinertjes aan de keukentafel met de experts die hebben meegewerkt aan het 
{{< a_blank "FTM artikel" "https://www.ftm.nl/artikelen/yealink-apparatuur-overheid-vitale-sectoren" >}} wanneer ik het AVG/GDPR
certificaat ter sprake breng. Dit certificaat {{< a_blank "wordt" "https://www.lydis.nl/yealink-beveiliging-maatregelen" >}}{{< a_blank "mirror" "https://web.archive.org/web/20240217145316/https://www.lydis.nl/yealink-beveiliging-maatregelen" >}} {{< a_blank "door" "https://www.lydis.nl/oplossingen/yealink-security" >}}{{< a_blank "mirror" "https://web.archive.org/web/20240221215348/https://www.lydis.nl/oplossingen/yealink-security" >}} {{< a_blank "Lydis" "https://www.lydis.nl/support/yealink-security-en-opvolging-copy-2" >}}{{< a_blank "mirror" "https://web.archive.org/web/20240117145700/https://www.lydis.nl/support/yealink-security-en-opvolging-copy-2" >}} {{< a_blank "en" "https://www.yealink.com/en/trust-center/privacy" >}}{{< a_blank "mirror" "https://web.archive.org/web/20240221215242/https://www.yealink.com/en/trust-center/privacy" >}}
{{< a_blank "Yealink" "https://www.yealink.com/en/trust-center/security-compliance" >}}{{< a_blank "mirror" "https://web.archive.org/web/20240221215414/https://www.yealink.com/en/trust-center/security-compliance" >}} 
veelvuldig gebruikt als het bewijs dat het toch echt
wel goed zit met de beveiliging van de Yealink apparaten. Ik ben zelf met zo veel zaken in dit project bezig dat ik er nog niet 
op aangeslagen ben. Aan de andere kant van de tafel veert iemand op...  
"Een GDPR certificaat?" "Ja?" antwoord ik. In het gesprek wat volgt besef ik heel snel dat dit iets heel interessants is.
De AVG/GDPR gaat natuurlijk niet alleen over technische zaken, maar ook over je processen, en hoe je met de persoonsgegevens
omgaat. Het is dus opvallend dat er een GDPR certificaat bestaat. Dit...vraagt...om...meer...onderzoek.  
De volgende dag duik ik in het 
{{< a_blank "certificaat" "https://www.yealink.com/website-service/download/yealink-trust-center-security-gdpr.pdf" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240114034519/https://www.yealink.com/website-service/download/yealink-trust-center-security-gdpr.pdf" >}}. Het blijkt een indrukwekkend uitziend document te zijn, compleet met logo en een "Licensed Test mark" van
TÜV Rheinland. Er wordt melding gemaakt dat de "Yealink Management Cloud Service" (YMCS) getest is volgens testnorm
ETSI TS 103 645 v1.1.1:2019.  
Onderaan het document staat:
{{< quote cloudquote >}}...the security controls and data processing of the tested portal are ensured to be compliant with the General Data Protection Regulation (GDPR)
{{< /quote >}}
Dat klinkt als een behoorlijke zekerheid. Het document roept in elk geval erg veel vragen op.

# Adres
Bovenaan het document wordt een license holder vermeld: Yealink (Xiamen) Network Technology Co., Ltd. Dat is de officiële naam
van Yealink. Maar er wordt ook een "Manufacturing Plant" vermeld. Deze ligt in dezelfde stad (Xiamen), maar is volgens het 
document niet Yealink zelf. Ik kan dit niet op waarde beoordelen en ben hier verder ook niet meer in gedoken, maar ik vond 
het in elk geval wel iets interessants.

# TÜV?
Dan de uitgever van het document. Dit is TÜV...TÜV Rheinland...TÜV Rheinland (China) Ltd. Beijing. Op het document staat
een Dipl.-Ing. Univ. titel en ik zoek deze beste man op op het internet. Volgens zijn LinkedIn is hij de "Technical Competence 
Center Director at TÜV Rheinland Group" in Shenzhen. Aangezien hij dit document heeft ondertekend besluit ik hem een emailbericht
te sturen. Op 25-7-2023 schrijf ik hem:
{{< quote cloudemail >}}We have seen the attached Certificate issued by TÜV Rheinland (China Ltd (from here on: TÜV).
- Given the scope defined in chapter 1 of ETSI TS 103645 ("The present document specifies high-level provisions for the security of consumer devices that are connected"), is it the opinion of TÜV that ETSI TS 103645 is suited for testing a "Cloud Service"?
- The certificate states: "The tested portal reveals no significant and widespreak security shortcomings according to ETSI TS 103645". As we now know there have been quite a few significant, high impact, security shortcomings in the tested portal. Can TÜV elaborate on the used testing procedure for ETSI TS 103645? What tools does TÜV use to test for "significant and widespreak security shortcomings"?
- The certificate says: "are ensured to be compliant with the <cut> GDPR". We think there may be a misunderstanding here in the wording. Does this sentence mean:
     * compliance with the GDPR, or
     * the tested components are not in conflict with the provisions as stated in the GDPR (but not a complete GDPR compliance)?
- Can TÜV explain the seemingly large discrepancy between the wording in the Certificate and ETSI TS 103645:
        Certificate: "are ensured to be compliant with the <cut> GDPR"
        ETSI TS 103645: "the present document can help in ensuring that these are compliant with the GDPR"
{{< /quote >}}
Een weekje later stuur ik de Dipl.-Ing. Univ. een reminder dat ik nog geen antwoorden heb ontvangen, maar ik zal nooit meer 
iets van hem horen.  

{{< quote cloudemail >}}Ik besluit TÜV Rheinland Duitsland een mailbericht te sturen, hopende op een beter antwoord. Op 8 augustus 2023 email ik:
 I have asked the below questions to Mr. {{< censuur red >}}*************{{< /censuur >}} of TÜV Rheinland China. 
 Unfortunately i have not received a reply back.
{{< /quote >}}

Nadat ik ook TÜV Rheinland Duitsland een reminder heb gestuurd krijg ik op 23 augustus 2023 een antwoord terug van iemand
die volgens zijn eigen LinkedIn als functieomschrijving heeft "Spokesperson, Unternehmenskommunikation, Pressearbeit, 
Redaktion, Medienanalyse"
{{< quote cloudemail >}}Dear Mr. Hermans,

thanks for your inquiry.

We forwarded your request straight to mark surveillance to review the case.

They should get back to you shortly.{{< /quote >}}

Dit klinkt niet alsof deze persvoorlichter een net antwoord voor mij klaar heeft liggen. Maar daar ben ik natuurlijk wel
naar op zoek. En dus vraag ik diezelfde dag nog:

{{< quote cloudemail >}}The case is going to be reviewed? I only asked a few basic questions about the certificate. 
If you could answer them for me that would be great.{{< /quote >}}

2 dagen later op 30 augustus reageert iemand van de "Trade Mark Surveillance" division. Zijn email vangt aan met:
{{< quote cloudquote >}}FYI, the certificate is not valid anymore.{{< /quote >}}

..is not v... Ok. Dit is een email die ik even goed moet lezen. De man gaat puntsgewijs in op mijn eerder gestelde vragen 
aan TÜV Rheinland China in Beijing.  
Voor mijn eerste vraag of de ETSI norm wel geschikt is om een clouddienst te testen heeft hij aan dat er in 2018 geen 
geharmoniseerde standaard was voor het testen van een clouddienst voor de GDPR requirement, waardoor TÜV er voor heeft 
gekozen om een "three part approach" te kiezen. Uiteraard heb ik naar de twee andere delen van de "three part approach" 
gevraagd, maar ik heb deze helaas niet in handen mogen krijgen. Wel geeft de man aan dat
{{< quote cloudquote >}}ETSI TS 103 645 is an important part of the GDPR certification program for cloud services, but this does not mean that testing ETSI TS 103 645 alone is sufficient to prove that a cloud service is GDPR compliant.{{< /quote >}}  

Op de vraag hoe TÜV dan eigenlijk geconstateerd heeft dat er geen "significant and widespread security shortcomings" in de 
clouddienst van Yealink zaten antwoorden zij: "We conducted penetration testing of websites according to the requirements 
of OWAST Top 10-2018"  

Dit is interessant omdat ik een "Web Application Penetration Test" rapport in handen heb gekregen voor diezelfde clouddienst 
als waar het GDPR certificaat voor is afgegeven. Helaas kan ik dit rapport hier niet delen omdat het "Proprietary and 
Confidential" is. Bovendien is het dusdanig specifiek over de beveiligingsgaten dat ik bang ben dat ik hiermee schade
kan berokkenen aan Yealink en Lydis klanten. En dat is nou net niet mijn bedoeling. Maar ik kan wel uit dit rapport 
stukken aanhalen. En een van de belangrijke zaken is dat TÜV aangeeft dat er geen "significant and widespread security 
shortcomings" en dat ze dit weten omdat ze volgens de "OWAST Top 10-2018" getest hebben.  
Het Web Application Penetration Test rapport van NetSPI heeft ook deze OWAST Top 10 getest en zij komen tot de conclusie 
dat er een heel aantal vulnerabilities in de clouddiensten zitten. En onder die vulnerabilities zitten ook vier "high
severity" findings, waaronder:
- A1 - Injection
- A2 - Broken Authentication
- A5 - Broken Access Control
- A7 - Cross-Site Scripting (XSS)

Het moet gezegd worden dat, volgens het NetSPI rapport deze findings allemaal opgelost zijn, maar de technische details 
laten een kinderlijk eenvoudige manier zien om authenticatie volledig te omzeilen. De gevonden problemen in de clouddienst
van Yealink leverden een reëel risico op voor alle klanten ter wereld van Yealink. Het is mij niet bekend of er nadien
onderzoek is uitgevoerd door Yealink of deze ernstige beveiligingsgaten misbruikt zijn.

De email van TÜV gaat verder over mijn vraag over de bewoording van het certificaat. Deze bewoording is:
{{< quote cloudquote >}}the security control and data processing of the tested portal are ensured to be compliant with the GDPR{{< /quote >}}

Ik probeer TÜV hier een beetje te helpen en vraag of dit wellicht een vertaling probleem is en of men bedoelt "the tested 
components are not in conflict with the provisions as stated in the GDPR (but not a complete GDPR compliance)?"

TÜV Rheinland reageert alleen terug met het kort, maar o zo krachtige: "Compliance with the GDPR"

Uiteraard stel ik TÜV ook vragen over de bewoording "are ensured to be compliant with the GDPR" en de (veel voorzichtigere)
bewoording in de ETSI TS 103 645: "the present document can help in ensuring that these are compliant with the <cut>GDPR".
TÜV reageert dat "The certification consists of three parts and therefore cannot be simply equated to ETSI TS 103 645".
Uiteraard heb ik gevraagd of ik deze andere twee delen ook mag inzien of dat ik het certificaatnummer hiervan mag hebben 
zodat ik ook deze delen op {{< a_blank "certipedia" "https://www.certipedia.com/" >}} kan zien en of deze nog steeds actief
zijn. Ik heb nooit meer informatie over deze twee andere delen mogen ontvangen.  

Maar blijkbaar maakt ook TÜV zich toch wel wat zorgen over mijn graafwerk en ik krijg ineens een, redelijk intimiderend
telefoontje van iemand die volgens zijn eigen Linkedin aan "(Crisis) Communication" doet. In de (niet-geplande) meeting
zit ook de eerdere communicatiemanager van TÜV en de crisis-communication man begint het telefoongesprek met de vraag of
ik het gesprek niet wil opnemen. Ik ga even rechtop zitten, want nu ben ik toch wel heel benieuwd wat er nu gezegd gaat worden.  

Hij vervolgt om te zeggen dat "all three parts of the certification are not valid anymore". Ik stel de vraag of het certificaat
"cancelled" of "expired" is. Ik krijg het verwarrende antwoord "both" terug. Ik vraag voor verduidelijking en dan komt het 
hoge woord er uit: "No, I am sorry, it's cancelled". Hij bedankt mij voor de "feedback" die ik gegeven heb.  
Als ik hem vraag of TÜV een officieel press-statement wil geven wordt het gesprek wat dringender van aard. De crisis-communication
man zegt dat hij geen verdere informatie kan geven aan een concurrent van Yealink en dat ze geen media enquiries hebben ontvangen.  
Ik geef aan dat ik vanaf de allereerste email (via press.tuv.com) duidelijk ben geweest dat ik een onderzoeker ben die gaat
publiceren. Dit verweer "hoezo ga jij nu ineens publiceren?" kom ik vaker tegen. Zowel Yealink als Lydis voeren dit argument
regelmatig aan. De reden waarom dit gebeurt kan ik alleen maar naar gissen, maar ik gok dat het komt omdat er aan de communicatie-
kant toch af en toe onderschat wordt wat een security probleem voor impact kan hebben. Als ik dan toch tips mag uitdelen:
als je een onderneming bent en iemand beweert aan een publicatie te werken, neem dit dan serieus. Als je een security 
onderzoeker bent, vermeldt *altijd* vanaf het allereerste begin waar je mee bezig bent. Zorg dat dit per email gebeurt zodat
je hier altijd op terug kan wijzen.  

De crisis communication man gaat verder dat hij wil weten of ik een "accredited journalist" ben, want hij is nogal 
"irritated" dat ik TÜV "threaten with media" terwijl ik een "competitor of Yealink" ben. Ik reageer met de vraag wat hij 
eigenlijk bedoeld met dat ik een "competitor" ben, omdat ik vanaf het allereerste moment in contact ben geweest met de
press office van TÜV. Nu gebeurt er iets interessants. Iemand anders van TÜV neemt het gesprek snel over. Het is duidelijk
dat de crisis-communication man er veel te hard in gaat en hij probeert de zaak duidelijk te sussen. Maar hij herhaalt ook
dat ze "irritated" zijn en dat als ze geen media enquiry van een accredited media ontvangen dat ze de case closed beschouwen.  
Een interessant antwoord. Dat betekent dus dat een organisatie als TÜV weigert om verdere informatie te verschaffen over
basale zaken, zoals datum van intrekken, over het intrekken van een certificaat. Ik denk dat dat wellicht de beste indicatie
is hoe ongemakkelijk TÜV zelf in deze zaak zit.  

Maar de strekking is duidelijk. Ik ben geen journalist en daarom willen ze niet met mijn praten. Een dag later op 8 
september stuurt FTM daarom een media verzoek naar TÜV. De, wat emotionele, crisis-communication man reageert terug met een 
"-external@tuv.com" emailadres.
{{< quote cloudquote >}}The certificate that you mentioned lost its validity at the point of time when the respective standard ETSI TS 103 645 lost its validity. It is invalid. This can be seen in Certipedia (www.certipedia.com/certificates/50479079?locale=en){{< /quote >}}

Dit is een belangrijke email. Hier wordt beweert dat TÜV het certificaat TOCH niet heeft ingetrokken, maar dat het niet meer
geldig is omdat de onderliggende ETSI test methode is komen te vervallen. Dat lijkt een klein detail, maar het wijkt duidelijk
af van de verklaring die deze zelfde man aan mij telefonisch gaf. Dat gesprek dus waar mij duidelijk verzocht werd om vooral
niet op te nemen en geen quotes uit te gebruiken. Waarom dit van belang is, zal verderop in dit artikel heel erg duidelijk 
gaan worden.  

De man gaat verder met te vertellen dat:
{{< quote cloudquote >}}We informed Yealink that the respective certificate is no longer valid. If a certificate is no longer valid it means, that the respective company can no longer promote its product(s) with the certificate (e.g. no reference to the certificate).{{< /quote >}}

Ook dit is een belangrijke uitspraak. Deze email is van 11 september 2023, maar het is ook duidelijk dat Yealink tot zeker
14 februari 2024 
{{< a_blank "het certificaat" "https://web.archive.org/web/20240114034519/https://www.yealink.com/website-service/download/yealink-trust-center-security-gdpr.pdf" >}} actief aanbiedt op hun website!  
Lydis heeft de 
{{< a_blank "link naar het GDPR certificaat " "https://web.archive.org/web/20240222215356/https://www.lydis.nl/yealink-beveiliging-maatregelen" >}}
zelfs nog op 22 februari 2024 nog op hun website staan. Tijdens een meeting met Lydis op 15 februari 2024 stel ik aan een lid
van de directie van Lydis de vraag of TÜV contact met hen heeft opgenomen. Hij bevestigt dat TÜV dat inderdaad "in december" heeft gedaan
en dat zij meteen aan de vordering om het certificaat van hun website te halen hebben voldaan. Of er hier nu sprake is van 
bewuste misleiding of van grove slordigheid: wie zal het zeggen.  

Het is opvallend dat de bewoording van de GDPR claims...anders...is. Als we naar de 
{{< a_blank "Yealink Management Cloud Service Security White Paper" "https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20231129/20231129070537611d28919946efabdccbfb7e087979.pdf" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240217150220/https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20231129/20231129070537611d28919946efabdccbfb7e087979.pdf" >}} kijken dan zien we dat er niet meer over TÜV gesproken 
wordt, maar dat er over een "Rheinland GDPR compliance" gesproken wordt. Het is mij niet duidelijk om wat voor certificaat
dit dan precies gaat, maar ik laat het aan de lezer om dit zelf uit te vinden.

# ETSI

Het orginele certificaat van TÜV Rheinland gaf duidelijk aan dat er getest was volgens ETSI TS 103 645 v1.1.1:2019. De testen waren 
uitgevoerd op de Yealink Management Cloud Service (YMCS). Als we 
{{< a_blank "deze norm" "https://www.etsi.org/deliver/etsi_ts/103600_103699/103645/01.01.01_60/ts_103645v010101p.pdf" >}}
{{< a_blank "mirror" "yealink/ts_103645v010101p.pdf" >}} er bij nemen, dan zien we dat deze norm aanvangt met een "scope".
Deze scope geeft aan dat
{{< quote cloudquote >}}The present document specifies high-level provisions for the security of consumer devices that are connected to network infrastructure{{< /quote >}}
En er worden ook een aantal voorbeelden genoemd, zoals "connected children's toys", "baby monitors" en "washing machines".
Het klinkt nou niet echt alsof deze norm geschikt is voor het testen van een "Cloud Service" van Yealink. Ik stel deze vraag 
dan ook aan de enige organisatie die deze vraag kan beantwoorden: ETSI. Zij reageren dat zij niet kunnen en willen toezien 
op hoe kun documenten gebruikt worden, maar dat ETSI TS 103 645 niet bedoeld is voor het testen van Cloud diensten. Maar... zo
geven zij ook aan: als je echt zou willen, dan kun je het document hier voor gebruiken...
{{< quote cloudquote >}}...in the same way an old airplane can be repurposed as a hotel
{{< /quote >}}

Maar de crisis-communication man bij TÜV gaf ook aan dat "the respective standard ETSI TS 103 645 lost its validity. It is invalid.".
Dat lijkt dan ook een nuttige vraag aan ETSI. Gelukkig heeft ETSI een mooie 
{{< a_blank "zoekfunctie" "https://www.etsi.org/standards#page=1&search=%22TS%20103%20645%22&title=1&etsiNumber=1&content=1&version=0&onApproval=1&published=1&withdrawn=1&historical=1&isCurrent=1&superseded=1&startDate=1988-01-15&endDate=2024-02-18&harmonized=0&keyword=&TB=&stdType=TS&frequency=&mandate=&collection=&sort=1" >}}
op hun website. En hier is duidelijk te zien dat er van deze standaard verschillende versies zijn:
{{< img alt="Screenshot zoekfunctie ETSI" src="img/yealink/20240218_screenshot_etsiTS103645.png" >}}  
Wat hier ook opvalt is dat alle drie de versies van dit document nog steeds een groene "published" status hebben. Het kan toch
niet zijn dat een crisis-communication manager van TÜV na een aantal dagen in deze zaak duiken een onwaarheid naar een 
journalist heeft gestuurd?  

Dus ik doe wat ik al maanden doe en ik stuur opnieuw een email naar ETSI:

{{< quote cloudemail >}}I would  like to confirm that they are both active standards and not superseded  or retracted.{{< /quote >}}

ETSI reageert dat de (op dat moment) twee versies van het document beiden niet verlopen zijn.
{{< quote cloudemail >}}Both versions of the TS 103 645 are active and not superseded or retracted. The publication of the later versions does not in itself invalidate the older versions.{{< /quote >}}

Ik kan dus niet anders concluderen dat TÜV naar aanleiding van mijn vragen een externe (-external@tuv.com mailadres) crisis 
communication medewerker heeft ingehuurd. En dat deze medewerker na uitgebreid in deze zaak te zijn gedoken incorrecte 
informatie heeft verstrekt aan leden van de Nederlandse pers. Het geeft aan hoe enorm moeilijk het is om deze zaak aan
correcte informatie te komen. Er worden shiny white papers gemaakt, seminars gehouden en publicaties uitgegeven. Maar het
doordringen tot de echte informatie kost maanden en heel erg veel doorzettingsvermogen.

# EULA
Inmiddels wordt ik door verschillende bedrijven gevraagd om lezingen over mijn onderzoek te komen geven. Tijdens een van deze
lezingen krijg ik feedback dat deze specifieke onderneming toch alleen maar USB devices gebruikt. Ik vraag om welk device het
gaat en dit blijkt de {{< a_blank "UVC Desktop" "https://www.yealink.com/en/product-detail/camera-uvc30-desktop" >}}
te zijn. De vraag aan mij is: aangezien dit geen netwerk device is, betekent dit dat e.e.a. ook veiliger is?  
Ik moet even over deze vraag nadenken, omdat ik tot nu toe alleen naar network-attached devices heb gekeken. Maar eigenlijk
al vrij snel bedenk ik mij dat een VoIP telefoon of videobar in een apart 
{{< a_blank "VLAN" "https://en.wikipedia.org/wiki/VLAN" >}} geplaatst kan worden. Bij een apparaat wat met USB werkt is dat
een stuk lastiger. Deze USB camera's zijn aangesloten op apparaten (laptops/pc's) welke waarschijnlijk in een veel gevoeliger 
VLAN zitten dan een netwerk device van Yealink.  
Ik beloof hier goed naar te gaan kijken en ik ga naar huis toe. Die avond nog ga ik naar de 
{{< a_blank "support pagina" "https://support.yealink.com/en/portal/docList?archiveType=tool&productCode=50a5ef97c1e644f4" >}}
van de UVC30 camera. Wat hier meteen opvalt is dat het nodig is om de 
{{< a_blank "Yealink RoomConnect Software" "https://support-cdn.yealink.com/attachment/document/20231225/665b200d-64d2-4899-a962-a1faba467421.msi?v=1703474447248" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240218141430/https://support-cdn.yealink.com/attachment/document/20231225/665b200d-64d2-4899-a962-a1faba467421.msi?v=1703474447248" >}} 
te installeren. Het is een "indrukwekkend" pakket aan software van meer dan 220Mb. Het lijkt mij een logische stap om dan
maar eens te gaan kijken wat er nou precies IN die software zit. Met 
{{< a_blank "MSITools" "https://github.com/GNOME/msitools" >}} pak ik het installatiepakket van Yealink uit en ga zoals 
gewoonlijk weer met een open mind rondneuzen in de software. En ook hier vallen weer de nodig zaken op:
- Het software pakket zit vol met open source software zoals NGINX, QT5, SSLeay, zlib, en vele andere pakketten
- In het software pakket zijn bestanden te vinden als "WebServer.key" en (een onversleutelde) "YRC_centralcontrol.key"

Maar in het pakket staat ook een {{< a_blank "EULA" "yealink/OEMEULA.txt" >}}. En dat lijkt mij in voor dit artikel dan weer 
relevant. Dus ik duik in deze lijvige tekst.  

Het volgende stuk tekst valt mij meteen op in het hoofdstuk "Privacy Policy":
{{< quote cloudemail >}}The software may collect information about you and your use of the software and send that to Yealink. Yealink may use this information to provide services and improve Yealink’s products and services. Your opt-out rights, if any, are described in the product documentation. Some features in the software may enable collection of data from users of your devices that access or use the software. If you use these features to enable data collection in your devices, you must comply with applicable law, including getting any required user consent, and maintain a prominent privacy policy that accurately informs users about how you use, collect, and share their data. You can learn more about Yealink’s data collection and use in the product documentation and the Yealink Privacy Statement available at https://www.yealink.com/onepage_66.html. You agree to comply with all applicable provisions of the Yealink Privacy Statement.{{< /quote >}}  

De AVG minded lezer is natuurlijk al lang aangeslagen op de zinssnede
{{< quote cloudquote >}}Your opt-out rights, if any{{< /quote >}}

Nu ben ik geen AVG deskundige, maar dat lijkt mij een wat...on-Europese...manier van het interpreteren van deze wet. 
Maar er wordt ook verwezen naar de {{< a_blank "Yealink Privacy Statement" "https://www.yealink.com/onepage_66.html" >}} 
{{< a_blank "mirror" "https://web.archive.org/web/20240217160621/https://www.yealink.com/en/onepage/privacy-statement" >}}.  

Het is duidelijk dat deze tekst ergens tussen 
{{< a_blank "2021" "https://web.archive.org/web/20211028204713/https://www.yealink.com/onepage_66.html" >}}
en
{{< a_blank "2022" "https://web.archive.org/web/20221111152117/https://www.yealink.com/en/onepage/privacy-statement" >}}
grondig gewijzigd is. Een van de stukken tekst die toegevoegd zijn aan dit privacy statement staat in hoofdstuk 
"5. Sharing Your Personal Information". Het aantal partijen met wie de persoonsdata gedeeld mag worden is uitgebreid. En
in het bijzonder de volgende zin is van belang:

{{< quote cloudemail >}}With law enforcement officials, government authorities, or other third parties as necessary to comply with legal process or meet national security requirements; protect the rights, property, or safety of Yealink, our business partners, you, or others; or as otherwise required by applicable law.{{< /quote >}}

Het moge duidelijk zijn dat dit een vreselijk brede omschrijving is, waar vrijwel alles onder kan vallen.  
Dit is van belang omdat er steeds vaker zorgen zijn over de Chinese compliance regels waar Chinese bedrijven aan moeten voldoen.
Een belangrijke quote die ik hier kan gebruiken is die van De Staatsveiligheid, de nationale veiligheidsdienst van België 
aan het zakenkrant *De Tijd*.  
Zij zeggen hier over:

{{< quote cloudquote >}}Daarnaast is Yealink onderworpen aan de Chinese compliance-regels met betrekking tot de toegang van de Chinese overheid tot de data verzameld door Yealink
<span>De Staatsveiligheid – de nationale veiligheidsdienst van België</span>
{{< /quote >}}

Het lijkt er op dat dit een dossier is waarbij elke steen die omgekeerd wordt weer nieuwe vragen opwerpt. Helaas komt er dan 
ook een moment dat je dit stuk moet laten voor wat het is. Maar het is mij duidelijk dat de AVG claims van Yealink en Lydis
soms...lastig te verifiëren zijn. Ik laat het maar in het midden waar dat door komt en ik ga verder met mijn onderzoek, 
want er is nog zo veel te onderzoeken. En daar schrijf ik dinsdag 27 februari over verder.  

Tot dan!

[Naar het volgende artikel]({{< ref "bedrijfseconomisch" >}})
