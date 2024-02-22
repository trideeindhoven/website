+++
author = "Jeroen Hermans"
title = "Versleuteling"
date = "2024-01-03"
description = "Versleuteling"
tags = [
    "versleuteling", "encryptie", "AES", "RSA", "Lydis", "Yealink"
]
image = "img/yealink/pexels-george-becker-114741.jpg"
+++
I have added international translations of the articles using google translate:  

[{{< img alt="EN" src="img/uxwing/united-kingdom-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/versleuteling/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="DE" src="img/uxwing/germany-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/versleuteling/?_x_tr_sl=nl&_x_tr_tl=de&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="FR" src="img/uxwing/france-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/versleuteling/?_x_tr_sl=nl&_x_tr_tl=fr&_x_tr_hl=nl&_x_tr_pto=wapp)  

De aanleiding van dit onderzoek waren enkele zaken in de versleuteling in het provisioning proces die ik niet goed 
begreep. Ik kon toen niet vermoeden dat ik hier 2 jaar later nog steeds mee bezig zou zijn.
<!--more-->
Zoals in de [inleiding]({{< ref "inleiding" >}}) uitgelegd is provisioning het systeem wat gebruikt wordt 
om configuratie bestanden veilig te 
transporteren van een configuratieserver naar een systeem. Dit systeem kan een VoIP telefoon zijn, maar hetzelfde geldt
ook voor b.v. videobars.  

In deze provisioning bestanden staan zaken als:
- gebruikersnaam
- wachtwoord
- voipserver
- nummerherkenning

Dit is dus zeer gevoelige data en in veel gevallen ook persoonsgegevens zoals gedefinieerd in de 
{{< a_blank "AVG wetgeving artikel 4 lid 1" "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=celex%3A32016R0679" >}}.
Het privé houden van deze data tijdens transport over het internet is daarom van groot belang.  
Tijdens het bouwen van een provisioning systeem voor Yealink systemen wilde ik uiteraard een systeem bouwen wat 
compatible was met de systemen van Yealink zelf. Helaas had ik hiervoor allerlei geheime informatie nodig, zoals
welke versleuteling wordt er gebruikt en natuurlijk ook: welke sleutel wordt er gebruikt. Uiteraard ging ik er niet van
uit dat ik deze informatie ging krijgen, dus ben ik op het internet op zoek gegaan naar manieren om een zo 
compatibel mogelijk systeem te bouwen. Hierbij kwam ik een persoon tegen die mij niet alleen kon vertellen welke 
versleuteling Yealink gebruikte, maar zelfs welke geheime sleutel Yealink gebruikte. Het vroegst waar ik deze gelekte
sleutel kon terug vinden was 2014. Met deze gegevens was het een koud kunstje
om een provisioning systeem te bouwen wat 100% compatibel was met de Yealink systemen. Maar echt goed voelde dit 
natuurlijk niet: Als ik deze gegevens had, wie dan nog meer?

Dus ik schrijf een email aan de Nederlandse distributeur van Yealink, Lydis, op 28 juli 2022:
{{< quote cloudemail >}}We hebben de firmware van Lydis bekeken en we zien dat de provisioning sleutel zelf versleuteld is met private key 
EKs35XacP6eybA25 Aangezien deze hard coded is, lijkt ons dit een reëel risico. Welke mogelijke oplossing kan Lydis (samen met Yealink?) ons bieden om dit risico weg te nemen?{{< /quote >}}

Ik krijg een dag later een antwoord van een "support manager" van Lydis:
{{< quote cloudemail >}}We hebben vanuit verschillende onderzoeken door gerenommeerde partijen vastgesteld dat Yealink een veilig product op de markt zet. Zowel SISO afdelingen van onder andere financiële instellingen als gemeentelijke en overheidsinstellingen bevestigen dit.{{< /quote >}}
Het is mij nooit helemaal duidelijk geworden wat {{< a_blank "bibliotheken" "https://nl.wikipedia.org/wiki/SISO" >}} 
met deze vraag te maken hebben, maar deze reactie nadat iemand je jouw eigen private key emailt geeft niet bijzonder 
veel vertrouwen.  

Maar het is altijd een goed idee om er van uit te gaan dat je zelf iets over het hoofd ziet en dus stel ik een aantal 
opvolgvragen. De antwoorden op deze vragen blijken een bron te zijn voor maanden onderzoek.:
- Allereerst stuurt de *support manager* mij een GDPR certificaat op. Nu hoor ik de oplettende lezer hier meteen uit 
zijn of haar stoel opveren. En uiteraard had ik hier ook vragen over. Zo veel vragen dat hier een uitgebreid artikel 
voor ga schrijven in deze serie.
- Vervolgens krijg ik een "Remediation Report" opgestuurd van de Yealink Cloud Services. Het is de volledige versie van
de samenvatting van de NetSPI testen die ook op de website van Yealink staan. Daar waar de (openbare) samenvatting
redelijk positief is, is het volledige rapport dat...niet. Hier later meer over in een vervolg publicatie!
- Tijdens een Teams meeting wordt ik geïnformeerd dat de nieuwe Encryption Tool met 
{{< a_blank "Rivest–Shamir–Adleman (RSA)" "https://en.wikipedia.org/wiki/RSA_(cryptosystem)" >}}
versleuteling  werkt. Yealink geeft aan dat ze dit pas 6 jaar na het uitlekken van de 
{{< a_blank "AES" "https://en.wikipedia.org/wiki/Advanced_Encryption_Standard" >}} sleutel hebben geïmplementeerd.
- En tot slot krijg ik een screenshot opgestuurd van de nieuwe Yealink Configuration Encryption Tool.  

{{< img alt="Yealink Configuration Encryption Tool" src="img/yealink/encryption_tool_1.jpg" >}}  

Hier vallen een aantal zaken op:
- Er is een "compatibility mode" en ik vermoed dat het hier gaat om een AES-only modus.
- Ook in RSA mode moet een AES type ingegeven worden.
- het RSA Model staat op "default"
- En het is blijkbaar mogelijk om een AES (?) sleutel automatisch te genereren.  

Het is duidelijk dat ik even moet gaan proberen te begrijpen hoe deze nieuwe Encryption Tool in elkaar zit en ik kom
tot de volgende conclusie:
- Het is nog steeds mogelijk om alleen met AES te werken in de zogenaamde "Compatibility Mode". Op het moment 
dat ik deze modus kies, krijg ik geen melding dat deze mogelijk onveilig is.
- In RSA Mode wordt het configuratie bestand nog steeds met AES versleuteld. Echter de sleutel voor het versleutelen is
nu niet meer hetzelfde voor alle gebruikers (wat goed is).
- Een VoIP telefoon die nu een bestand ophaalt kan nu echter onmogelijk weten wat de AES sleutel is om het bestand te 
lezen. De oplossing die Yealink hier voor gekozen heeft is: voeg de AES sleutel toe aan het configuratie bestand.
- De AES sleutel wordt niet plain-text toegevoegd aan het bestand, maar wordt eerst met RSA versleuteling versleuteld.
- Helaas besluit Yealink om deze super geheime RSA sleutel mee te leveren als een ".pem" bestand. Dit maakt het 
ontsleutelen van de AES sleutel triviaal en dus ook het ontsleutelen van de rest van het bestand.

Ik heb inmiddels het gevoel dat ik ook dit nieuwe systeem redelijk goed begrijp. En aangezien ik mij niet prettig voel
bij het draaien van binary files waar ik niet precies weet wat er in zit besluit ik de hele Encryption Tool open
source na te bouwen. Ik bouw daarom de tool na in python incl. een GUI. Ook zorg ik er voor dat er een 
"yealinkdecryption.py" tool bij zit die als input een versleuteld bestand neemt en als output de AES sleutel en het 
ontsleutelde bestand. Ik besluit het op {{< a_blank "github" "https://github.com/gitaware/yealink-encryption" >}} 
te zetten, maar voorlopig als private repository aangezien het met deze software mogelijk is om geheime bestanden 
te ontsleutelen.

Nu email ik opnieuw met de "support manager" welke nu de "Technisch directeur" van Lydis blijkt te zijn. Ik stel dat ik
denk dat de versleuteling ernstig stuk is en dat Lydis dit waarschijnlijk met grote spoed aan Yealink moet gaan melden.
Ook vraag ik hem op 27 september 2022 om mij een versleuteld bestand te sturen, zodat ik kan zien of mijn 
decryptie-tool inderdaad werkt. Op 30 september reageert hij terug met een 
{{< a_blank "versleuteld bestand voor een T48S" "yealink/y000000000065_1.cfg" >}}. Ik reageer
dezelfde dag terug:  
{{< quote cloudemail >}}Mijn vermoeden is dus correct. De bestanden zijn nog steeds goed leesbaar, wellicht wel beter.  
Om meteen even met de deur in huis te vallen:  
De AES sleutel is: 33j503whh7bPK0zz0Kq3KwP00wKqbW3h  

Het config bestand is:  
#!version:1.0.0.1  
  
static.lang.gui = German  
lang.gui = German  
  
Laten we hier volgende week contact over hebben, want de implicaties hiervan zijn natuurlijk verstrekkend.{{< /quote >}}

De technisch directeur beseft waarschijnlijk toch wel dat dit niet het standaard "ik ben een 1337 h4x0r" mailtje is
en hij reageert die maandag meteen terug met *"Zou je bijgevoegd bestand ook kunnen bekijken?"* Bij het mailtje is een 
{{< a_blank "nieuw versleuteld bestand" "yealink/y000000000065_2.cfg" >}} toegevoegd. 
Vreemd genoeg struikelt mijn ontsleutel-software over dit bestand. Maar een korte
zoektocht naar de reden hiervan laat zien dat er een {{< a_blank "line-ending verschil" "https://en.wikipedia.org/wiki/Newline" >}}
is met het vorige bestand. De reden hiervan kunnen we natuurlijk alleen maar over speculeren, maar het neemt niet weg 
dat ik diezelfde ochtend hem een email stuur:  
{{< quote cloudemail >}}Om maar met de deur in huis te vallen:  
  
[jhermans@localhost yealink-encryption]$ ./yealinkdecryption.py -i y000000000065.cfg  
INFO: using RSA mode  
AES key found: 303wlbKBenhhHwpFzzj00QfwhwzbyKhp  
Decrypting provisioning file...  
  
#!version:1.0.0.1  
static.lang.gui = French  
lang.gui = French  
  
Dit is natuurlijk zeer slecht nieuws en zal ook zeer zeker in onze publicatie worden getoond. Ik wil Lydis nogmaals de kans tot wederhoor bieden. Als jullie hier gebruik van willen maken stel ik voor dat we ook mensen van Yealink in deze meeting plaatsen, want dit is een wereldwijd probleem.
Ik hoor graag een voorstel voor een datum/tijd wanneer deze meeting kan plaatsvinden indien jullie gebruik willen maken van deze mogelijkheid. Ik vind het ook geen probleem om hiervoor langs te komen op jullie kantoor.{{< /quote >}}  

Nu is het natuurlijk al opzienbarend dat een simpel python script deze versleuteling in 100ms kan "breken", maar de afsluiting van
deze email is niet minder belangrijk. Niet alleen vermeld ik hier dus in september 2022 opnieuw dat ik voornemens ben om te gaan 
publiceren, maar ook wordt hier nogmaals duidelijk gemaakt dat ik dat graag samen met Lydis en Yealink wil doen. Ik bied hier
duidelijk de mogelijkheid aan tot wederhoor, maar ook dat ik heel graag een meeting met Yealink wil, zodat ik mijn bevindingen
kan presenteren zodat zij correcte actie kunnen ondernemen.

Hij reageert binnen 10 minuten met een (heel correct)
{{< quote cloudemail >}}Ik ga dit verder met Yealink bespreken en maak graag gebruik van de mogelijkheid hier een meeting over te plannen. Ik verwacht een meeting ergens in volgende week te kunnen plannen omdat China deze week gesloten is.{{< /quote >}}

en later die dag met:
{{< quote cloudemail >}}Zou je bijgevoegd bestand ook kunnen testen.{{< /quote >}}

Dit keer levert hij echter {{< a_blank "een bestand" "yealink/y000000000065_3.cfg" >}} waar het "key_ciphertext" deel helemaal 
is verdwenen. Ik vraag hem waarom mijn 
telefoon dit bestand niet kan gebruiken als geldig provisioning document en hij geeft aan dat zij wat andere 
instellingen in de provisioningtool hebben gebruikt. Als ik dan vraag of hij een lege sleutel oid heeft gebruikt omdat
er geen (versleutelde) AES sleutel in het document staat reageert hij met 
{{< quote cloudemail >}}Waarom de key_ciphertext in het bestand dan leeg is, is ons nu zo even niet bekend.{{< /quote >}}

Ik reageert met dat ALS dit een geldig provisioning document is (en Lydis beweert dat het dat is) dat "er een geheime
key4a is die in elke telefoon meegeleverd wordt (backdoor)."  
Er volgt een serie aan meetings met Yealink zowel via Teams als fysiek in Almere. Het leidt er toe dat de encryption 
Tool (en dus ook Clouddienst) van Yealink wordt aangepast. Het is niet meer mogelijk om het "Default RSA Model" te 
gebruiken, waardoor de gelekte RSA private key ook niet meer gebruikt kan worden voor nieuwe deployments.  

# ECB
Eerder in dit document ben ik meteen in de gelekte AES sleutel gedoken, maar ik heb ook aangegeven dat de versleutelings-vorm
van belang is. Ook hier zijn zaken op aan te merken. Laten we dus ook nog even kijken naar het soort versleuteling die 
Yealink gebruikt in hun laatste versie van hun Encryption Tool. Zoals in mijn 
{{< a_blank "open source" "https://github.com/gitaware/yealink-encryption" >}} versie 
van hun Encryption Tool te zien is gebruikt Yealink 
{{< a_blank "AES-ECB versleuteling" "https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Electronic_codebook_(ECB)" >}}. 
Voor de crypto-enthousiastelingen onder de lezers moet er nu toch wel een glimlach op het gezicht verschijnen. 
ECB is namelijk een encryptie modus welke al jaren als onveilig gezien wordt. Het is onbegrijpelijk waarom een multinational 
als Yealink voor een versleutelings methode kiest welke onnodig onveilig is. Laat ik hier heel duidelijk stellen: AES-ECB
is een versleutelings methode die niet "gekraakt" is op het moment van schrijven. Maar deze methode van versleuteling is
een heel specifieke keuze die niet verklaard kan worden door mensen die hier veel meer verstand van hebben dan ikzelf.  

Wat is er precies aan de hand? Electronic CodeBook encryption (ECB) is een versleutelingsmethode waar de data opgesplitst 
wordt in blokken van een bepaalde grootte. Elk blok wordt vervolgens met een sleutel versleuteld. Deze sleutel is voor ELK
blok exact hetzelfde. Dit betekent dus ook dat identieke blokken een identieke ciphertext opleveren.  
Ook is het ontsleutelen van de blokken mogelijk door exact dezelfde bewerking nog een keer uit te voeren. Het maakt deze
versleutelingsmethode vatbaar voor zogenaamde replay attacks.  

Maar zoals het gezegde gaat: een beeld zegt meer dan 1000 worden. En dit beeld heet voor ECB versleuteling: ECB penguin. De 
naam komt voort uit een demonstratie van de zwakte van ECB versleuteling. Een gebruiker van wikipedia versleutelde een afbeelding
van het logo van Linux, de penguin Tux, met ECB. Deze visuele demonstratie voegde hij in 2004 toe aan het Wikipedia artikel
over {{< a_blank "Block cipher mode of operation" "https://en.wikipedia.org/w/index.php?title=Block_cipher_mode_of_operation&diff=prev&oldid=2191923&ref=words.filippo.io" >}}. Dat betekent dus dat op het moment van
schrijven deze modus van versleuteling al 20 jaar als matig veilig beschouwd wordt. Als we naar de 
{{< a_blank "lijst van open source software" "https://www.yealink.com/website-service/download/offer-source-of-open-source-software.pdf" >}}
{{< a_blank "mirror" "yealink/Offer Source of Open Source Software.pdf" >}} kijken die Yealink gebruikt in
hun producten, dan zou het bijzonder eenvoudig zijn om i.p.v. AES-ECB  AES-CBC te gebruiken. Deze vorm van versleuteling
gebruikt de ciphertext van een voorgaand block als onderdeel van de sleutel van het volgende block (technisch: XOR met de 
sleutel).  

Maar hoe ziet dit er dan visueel uit? Ik heb als voorbeeld het logo van Yealink genomen. Vervolgens heb ik dit bestand 
omgezet in een bestandsformaat waar elke pixel als een serie van bytes gerepresenteerd wordt. Ik heb hiervoor het formaat PPM
gebruikt.  
{{< img alt="Screenshot website CloudAware" src="img/yealink/ecb/Yealink_Logo.png" >}}  
Daarna heb ik het bestand (zonder header) versleuteld op dezelfde manier als Yealink dat ook doet (met openssl):
{{< quote cloudemail >}}#Eerst sla ik de afbeeldingsheader op:
head -n 4 yealink.ppm > header.txt
#Vervolgens sla ik de body van de afbeelding op:
tail -n +5 yealink.ppm > body.bin
# Vervolgens versleutel ik het bestand:
openssl enc -aes-128-ecb -nosalt -pass pass:"JEROEN" -in body.bin -out body.ecb.bin
# ...waarna ik de header weer bovenaan het versleutelde bestand plaats zodat het een geldig afbeeldingsformaat is:
cat header.txt body.ecb.bin > yealink.ecb.ppm{{< /quote >}}

De output van het bestand heb ik hieronder weergegeven.
{{< img alt="Screenshot website CloudAware" src="img/yealink/ecb/Yealink_Logo_ecb.png" >}}  
Technisch gezien is het bestand versleuteld, maar ik kan niet echt zeggen dat dit nou de beste methode is om een bestand 
te versleutelen.  

Ik denk dat dit een goed moment is om even samen te vatten:
- De versleutelingsmethode EN AES sleutel is aantoonbaar sinds 2014 gelekt
- Yealink heeft hier volgens eigen zeggen een nieuwe versleutelingstool voor gemaakt waarbij RSA versleuteling gebruikt werd.
- Deze nieuwe RSA versleutelingstool gebruikt nog steeds AES-ECB als versleutelingsmethode van de provisioning geheimen.
- De "ECB penguin" demo is al in 2004 gemaakt en ECB wordt in het algemeen niet meer als een veilige versleutelings modus beschouwd.
- Deze AES sleutel wordt met een RSA sleutel versleuteld en aan het bestand meegeleverd.
- Met deze RSA sleutel is het mogelijk om de AES sleutel te ontsleutelen en dus ook de provisioning geheimen, zoals wachtwoorden.
- Yealink bood de nieuwe RSA "Default Mode" ter download aan op hun support website.
- Ook de nieuwe "RSA" versleuteling van Yealink was hiermee een uitgebreide manier om bestanden plaintext aan te bieden.

Yealink en Lydis {{< a_blank "beweren achteraf" "https://portal.lydis.com/download/lydis/ftm/Article%20FTM-Yealink-160923-NL-Lydis_detail_reaction_short-v2.4.pdf" >}}
{{< a_blank "mirror" "yealink/Article FTM-Yealink-160923-NL-Lydis_detail_reaction_short-v2.4.pdf" >}} dat "de 
encryptietool niet wordt gebruikt door providers/carriers/professionals". Bovendien geeft Yealink op 24 februari 2023 
in een email aan:
{{< quote cloudquote >}}If the customer uses the RSA tool , the default key is only for demo. In the actual application, most IT with security awareness will not use the demo key provided by the manufacturer{{< /quote >}}
Verder geeft Lydis op hun 
{{< a_blank "security FAQ" "https://www.lydis.nl/over-ons/yealink-security-faq#netwerk" >}}
{{< a_blank "mirror" "yealink/20240217_Yealink FAQ Security Lydis.pdf" >}} aan dat
{{< quote cloudquote >}}In de VoIP-industrie werken professionals die de platforms en beveiliging beheren. Ze weten dat standaard pin- of defaults codes niet gebruikt moeten worden, net zoals bij het wijzigen van de pincode van een smartphone.{{< /quote >}}

Dat is wel heel erg interessant aangezien het juist deze gelekte RSA sleutel is die de technisch directeur van Lydis gebruikt 
om mij {{< a_blank "bestand1" "yealink/y000000000065_1.cfg" >}} en {{< a_blank "bestand2" "yealink/y000000000065_2.cfg" >}} 
toe te zenden met als doel om te laten zien hoe veilig het systeem is.

# Teams
Maar zo beweert Lydis. Er is is niets aan de hand! De publicaties van Follow The Money en De Tijd bevatten "feitelijke 
onjuistheden". In het bijzonder de "Teams" gecertificeerde apparatuur "is van deze kwesties volledig uitgesloten". Deze 
worden namelijk "{{< a_blank "compleet door Microsoft beveiligd" "https://www.lydis.nl/over-ons/lydis-statement-2" >}}"
{{< a_blank "mirror" "yealink/20240217_Lydis reactie op FTM & De Tijd Lydis.pdf" >}}  
Dat is een interessante uitspraak. Maar is dit dan ook wel zo? De speurneuzen van Follow The Money nemen contact op met 
Microsoft over deze claim. Microsoft geeft aan hier goed naar te gaan kijken en na een week komen zij op 28 augustus 2023
met het volgende antwoord:

{{< quote cloudquote >}}We hebben intern een check-in gedaan en ik kom graag terug op jouw vraagstuk:
 
De gecertificeerde devices worden getest op het leveren van audio- en video-ervaringen met een hoge kwaliteit. In onze specificatiesgeven wij aan dat de fabrikanten van de devices verantwoordelijk zijn voor de beveiliging van de devices, de software en de firmware.{{< /quote >}}

Dat is een heel ander verhaal dan door Lydis en Yealink naar buiten gebracht wordt. En welke andere claims zijn er dan 
eigenlijk wel te controleren? Ik besluit naar de 
"{{< a_blank "Security and Compliance" "https://www.yealink.com/en/trust-center/security-compliance" >}}"
 pagina van het "Trust Center" van Yealink te browsen.
Op deze pagina staan mooie klinkende namen met logo's:
{{< img alt="Security and Compliance 20230901" src="img/yealink/20230901_trust_center_security_compliance.png" >}}  
Een waarlijk indrukwekkende lijst. Twee van de logo's vallen mij op: Migros (grootgrutter in Zwitserland) en KPN. Ik besluit
deze twee bedrijven eens een mail te sturen om te informeren op welke manier zij aan Security en/of Compliance van 
Yealink bijdragen. Ik krijg een reactie terug dat ze er naar gaan kijken. Ik hoor een tijdje niets meer en besluit nog
maar eens naar deze webpagina te gaan kijken.  
{{< img alt="Security and Compliance 20230911" src="img/yealink/20230911_trust_center_security_compliance.png" >}}  
Interessant genoeg zijn er nu ineens twee logo's verdwenen.  

Het laat maar weer zien hoe belangrijk het is om niet iedereen op zijn blauwe ogen te geloven. Security is geen vinklijst
die maar even afgeraffeld moet worden. Controleer dit soort dingen zelf, verifieer, vraag om verduidelijking. Een ISO27001
betekent niets zonder op de hoogte te zijn van de scope en mooie referenties zullen wel gecontroleerd moeten worden.  

En juist dat zelf controleren daar ben ik mee verder gegaan. Woensdag een nieuw artikel. Ook dit keer weer een meer technisch 
artikel waar ik uitgebreid in ga op de netwerk functionaliteit van Yealink VoIP apparatuur. 
En ook dit keer blijkt het bijzonder belangrijk gebleken om zelf feiten te controleren.  

Tot woensdag!

[Naar het volgende artikel]({{< ref "open_poort" >}})
