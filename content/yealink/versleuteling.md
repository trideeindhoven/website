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
De aanleiding van dit onderzoek waren enkele zaken in de versleuteling in het provisioning proces die ik niet goed 
begreep. Ik kon toen niet vermoeden dat ik hier 2 jaar later nog steeds ee bezig zou zijn.
<!--more-->
Zoals in de inleiding uitgelegd is provisioning het systeem wat gebruikt wordt om configuratie bestanden veilig te 
transporteren van een configuratieserver naar een systeem. Dit systeem kan een VoIP telefoon zijn, maar hetzelfde geldt
ook voor b.v. videobars.  

In deze provisioning bestanden staan zaken als:
- gebruikersnaam
- wachtwoord
- voipserver
- nummerherkenning

Dit zijn dus zeer gevoelige data en in veel gevallen ook persoonsgegevens zoals gedefinieerd in AVG wetgeving. Het 
privé houden van deze data tijdens transport over het internet is daarom van groot belang.  
Tijdens het bouwen van een provisioning systeem voor Yealink systemen wilde ik uiteraard een systeem bouwen wat 
compatible was met de systemen van Yealink zelf. Helaas had ik hiervoor allerlei geheime informatie nodig, zoals
welke versleuteling wordt er gebruikt en natuurlijk ook: welke sleutel wordt er gebruikt. Uiteraard ging ik er niet van
uit dat ik deze informatie ging krijgen, dus ben ik op het internet op zoek gegaan naar manieren om een zo 
compatibel mogelijk systeem te bouwen. Hierbij kwam ik een persoon tegen die mij niet alleen kon vertellen welke 
versleuteling Yealink gebruikte, maar zelfs welke sleutel Yealink gebruikte. Het vroegst waar ik deze gelekte
sleutel kon terug vinden was 2014. Met deze gegevens was het een koud kunstje
om een provisioning systeem te bouwen wat 100% compatibel was met de Yealink systemen. Maar echt goed voelde dit 
natuurlijk niet: Als ik deze gegevens had, wie dan nog meer?

Dus ik schrijf een email aan de Nederlandse distributeur van Yealink, Lydis, op 28 juli 2022:
*"We hebben de firmware van Lydis bekeken en we zien dat de provisioning sleutel zelf versleuteld is met private key 
EKs35XacP6eybA25 Aangezien deze hard coded is, lijkt ons dit een reëel risico. Welke mogelijke oplossing kan Lydis
(samen met Yealink?) ons bieden om dit risico weg te nemen?"*

Ik krijg een dag later een antwoord van een "support manager" van Lydis:
*"We hebben vanuit verschillende onderzoeken door gerenommeerde partijen vastgesteld dat Yealink een veilig product op 
de markt zet. Zowel SISO afdelingen van onder andere financiële instellingen als gemeentelijke en overheidsinstellingen 
bevestigen dit."*  
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
- Tijdens een Teams meeting wordt ik geïnformeerd dat de nieuwe Encryption Tool met RSA versleuteling werkt. Yealink 
geeft aan dat ze pas 6 jaar na het uitlekken van de AES sleutel hiertoe hebben besloten.
- En tot slot krijg ik een screenshot opgestuurd van de nieuwe Yealink Configuration Encryption Tool.  

{{< img "Yealink Configuration Encryption Tool" "img/yealink/encryption_tool_1.jpg" >}}  

Hier vallen een aantal zaken op:
- Er is een "compatibility mode" en ik vermoed dat het hier gaat om een AES-only modus.
- Ook in RSA mode moet een AES type ingegeven worden.
- het RSA Model staat op "default"
- En het is blijkbaar mogelijk om een AES (?) sleutel automatisch te genereren.  

Het is duidelijk dat ik even moet gaan proberen te begrijpen hoe deze nieuwe Encryption Tool in elkaar zit en ik kom
tot de volgende conclusie:
- Yealink heeft de "Default" AES sleutel nog steeds in gebruik, maar dan alleen in "Compatibility Mode". Op het moment 
dat ik deze modus kies, krijg ik geen melding dat deze mogelijk onveilig is.
- In RSA Mode wordt het configuratie bestand nog steeds met AES versleuteld. Echter de sleutel voor het versleutelen is
nu niet meer hetzelfde voor alle gebruikers (wat goed is).
- Een VoIP telefoon die nu een bestand ophaalt kan nu echter onmogelijk weten wat de AES sleutel is om het bestand te 
lezen. De oplossing die Yealink hier voor gekozen heeft is: voeg de AES sleutel toe gaan het configuratie bestand.
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
<TODO: fixen van image link in README op github>  

Nu email ik opnieuw met de "support manager" welke nu de "Technisch directeur" van Lydis blijkt te zijn. Ik stel dat ik
denk dat de versleuteling ernstig stuk is en dat Lydis dit waarschijnlijk met grote spoed aan Yealink moet gaan melden.
Ook vraag ik hem op 27 september 2022 om mij een versleuteld bestand te sturen, zodat ik kan zien of mijn 
decryptie-tool inderdaad werkt. Op 30 september reageert hij terug met een versleuteld bestand voor een T48S. Ik reageer
dezelfde dag terug:  
*"Mijn vermoeden is dus correct. De bestanden zijn nog steeds goed leesbaar, wellicht wel beter.  
Om meteen even met de deur in huis te vallen:  
De AES sleutel is: 33j503whh7bPK0zz0Kq3KwP00wKqbW3h  
Het config bestand is:  
#!version:1.0.0.1  
  
static.lang.gui = German  
lang.gui = German  
  
Laten we hier volgende week contact over hebben, want de implicaties hiervan zijn natuurlijk verstrekkend."*  

De technisch directeur beseft waarschijnlijk toch wel dat dit niet het standaard "ik ben een 1337 h4x0r" mailtje is
en hij reageert die maandag meteen terug met *"Zou je bijgevoegd bestand ook kunnen bekijken?"* Bij het mailtje is een 
nieuw versleuteld bestand toegevoegd. Vreemd genoeg struikelt mijn ontsleutel-software over dit bestand. Maar een korte
zoektocht naar de reden hiervan laat zien dat er een line-ending verschil is met het vorige bestand. De reden hiervan 
kunnen we natuurlijk alleen maar over speculeren, maar het neemt niet weg dat ik diezelfde ochtend hem een email stuur:  
*"Om maar met de deur in huis te vallen:  
  
[jhermans@localhost yealink-encryption]$ ./yealinkdecryption.py -i y000000000065.cfg  
INFO: using RSA mode  
AES key found: 303wlbKBenhhHwpFzzj00QfwhwzbyKhp  
Decrypting provisiong file...  
  
#!version:1.0.0.1  
static.lang.gui = French  
lang.gui = French  
  
Dit is natuurlijk zeer slecht nieuws en zal ook zeer zeker in onze publicatie worden getoond. Ik wil Lydis nogmaals 
de kans tot wederhoor bieden. Als jullie hier gebruik van willen maken stel ik voor dat we ook mensen van Yealink in 
deze meeting plaatsen, want dit is een wereldwijd probleem.  
Ik hoor graag een voorstel voor een datum/tijd wanneer deze meeting kan plaatsvinden indien jullie gebruik willen 
maken van deze mogelijkheid. Ik vind het ook geen probleem om hiervoor langs te komen op jullie kantoor."*  

Hij reageert binnen 10 minuten met een (heel correct) *"Ik ga dit verder met Yealink bespreken en maak graag gebruik 
van de mogelijkheid hier een meeting over te plannen. Ik verwacht een meeting ergens in volgende week te kunnen 
plannen omdat China deze week gesloten is. "*  
en later die dag met:
*"Zou je bijgevoegd bestand ook kunnen testen."*
<TODO: Zijlstra bestanden ter download aanbieden>  

Dit keer levert hij echter een bestand waar het "key_ciphertext" helemaal is verdwenen. Ik vraag hem waarom mijn 
telefoon dit bestand niet kan gebruiken als geldig provisioniong document en hij geeft aan dat zij wat andere 
instellingen in de provisioningtool hebben gebruikt. Als ik dan vraag of hij een lege sleutel oid heeft gebruikt omdat
er geen (versleutelde) AES sleutel in het document staat reageert hij dat *"Waarom de key_ciphertext in het bestand 
dan leeg is, is ons nu zo even niet bekend."*  
Ik reageert met dat ALS dit een geldig provisioning document is (en Lydis beweert dat het dat is) dat "er een geheime
key4a is die in elke telefoon meegeleverd wordt (backdoor)."  
Er volgt een serie aan meetings met Yealink zowel via Teams als physiek in Almere. Het leidt er toe dat de encryption 
Tool (en dus ook Clouddienst) van Yealink wordt aangepast. Het is niet meer mogelijk om het "Default RSA Model" te 
gebruiken, waardoor de gelekte RSA private key ook niet meer gebruikt kan worden voor nieuwe deployments.  

# ECB
Laten we dan ook nog even kijken naar het soort versleuteling die Yealink gebruikt in hun laatste versie van hun 
Encryption Tool. Zoals in mijn {{< a_blank "open source" "https://github.com/gitaware/yealink-encryption" >}} versie 
van hun Encrytpion Tool te zien is gebruikt Yealink AES-ECB versleuteling. Voor de crypto-enthousiastelingen onder de
lezers moet er nu toch wel een glimlach op het gezicht verschijnen. ECB is namelijk een encryptie modus welke al jaren
als onveilig gezien wordt.




ECB AES


{{< img "Screenshot website CloudAware" "img/yealink/ecb/Yealink_Logo.png" >}}
{{< img "Screenshot website CloudAware" "img/yealink/ecb/Yealink_Logo_ecb.png" >}}

AES versleuteling
AES TUX
al vroeg gelekt
RSA sleutel ook gelekt
zie presentatie, maar basically levert Lydis tech dir. zelf 3 voorbeeld bestanden aan




Ook voor Teams
