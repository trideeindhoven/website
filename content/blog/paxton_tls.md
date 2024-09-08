+++
title = "De root van het probleem/certificaat"
description = "CloudAware"
date = "2024-09-01"
aliases = []
tags = [
    "paxton", "tls", "certificaat", "net2"
]
author = "Jeroen Hermans"
image = "img/blog/pexels-negativespace-97077.jpg"
+++
Certificaten... Een mooie technologie om identiteit vast te stellen en om betrouwbare encryptie tussen twee
partijen op te zetten. Maar het blijkt in de praktijk keer op keer een moeilijk onderwerp te zijn.
<!--more-->
"Jeroen, ik denk dat je eens met mij mee moet kijken.". Het is een conculega van mij die mij op een regenachtige middag
in april 2023 belt. Het zijn juist deze telefoontjes waar je vooraf niet van weet waar het op uit gaat lopen. En juist
dit telefoontje blijkt uiteindelijk te leiden tot een CVE met een cvss van 9.8!  

De man die mij belt is actief bij de lokale tennisvereniging en is in die hoedanigheid ook betrokken bij de installatie 
van een nieuw toegangssysteem, compleet met pasjes. Tijdens het installeren van dit systeem is het de bedoeling dat
er beheerssoftware voor het systeem geïnstalleerd wordt op de computer van diegene die verantwoordelijk is voor
de beveiliging. Het lijkt een logische stap te zijn, maar...ook een gevoelige plek om software te installeren.  
We hebben in de afgelopen jaren verschillende gevallen gezien waar supplychain attacks gevoelige plekken blootstelden 
aan onnodige gevaren. In dit geval gaat het om een gebouwtoegangssysteem van 
{{< a_blank "Paxton" "https://www.paxton-access.com" >}}.

Paxton is een firma die zichzelf omschrijft als een "toonaangevende fabrikant van elektronische toegangscontrole, video 
management en deurintercom systemen", waarbij zij "een optimale beveiliging van uw gebouwen, medewerkers en bezittingen" 
leveren. Dat klinkt als een mooie ambitie. En die ambitie maken zij waar bij klanten die ik toch wel onder gevoelige
objecten reken. Denk hierbij aan 

- {{< a_blank "Lake County Jail, Ohio, USA" "http://web.archive.org/web/20221208234900/https://www.paxton-access.com/lake-county-jail/" >}} (offline gehaald voor onbekende reden)
- {{< a_blank "Cannabis facility, Michigan, USA" "https://www.paxton-access.com/highlands-grow/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240414012239/https://www.paxton-access.com/highlands-grow/" >}}
- {{< a_blank "Gelredome" "https://www.paxton-access.com/nl/casestudy-gelredome" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240415220623/https://www.paxton-access.com/nl/casestudy-gelredome/" >}}
- {{< a_blank "Old Trafford stadium Manchester" "https://www.paxton-access.com/nl/manchester-united-old-trafford/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20230930134334/https://www.paxton-access.com/nl/manchester-united-old-trafford/" >}}
- {{< a_blank "Internet Provider Trined" "https://www.paxton-access.com/nl/casestudy-TriNed" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240415212428/https://www.paxton-access.com/nl/casestudy-TriNed/" >}}
- {{< a_blank "KNVB Campus" "https://www.paxton-access.com/nl/knvb-campus/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240302040020/https://www.paxton-access.com/nl/knvb-campus/" >}}
- {{< a_blank "Brandweer Midden- en West-Brabant" "https://www.paxton-access.com/nl/study-brandweer/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240302023915/https://www.paxton-access.com/nl/study-brandweer/" >}}
- {{< a_blank "SBS Broadcasting" "https://www.paxton-access.com/nl/SBS-Broadcasting/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20230930134254/https://www.paxton-access.com/nl/SBS-Broadcasting/" >}}
- {{< a_blank "Studio's Aalsmeer" "https://www.paxton-access.com/nl/studios-aalsmeer/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240302020907/https://www.paxton-access.com/nl/studios-aalsmeer/" >}}
- {{< a_blank "Endemol Producties Londen" "https://www.paxton-access.com/nl/endemol-productions-londen/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240526204643/https://www.paxton-access.com/nl/endemol-productions-londen/" >}}
- {{< a_blank "Sky Deutschland" "https://www.paxton-access.com/case-studies/sky-deutschland/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240526221908/https://www.paxton-access.com/case-studies/sky-deutschland/" >}}
- {{< a_blank "Loodswezen" "https://www.paxton-access.com/nl/loodswezen/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240415211956/https://www.paxton-access.com/nl/loodswezen/" >}}
- {{< a_blank "Cherbourg Airport" "https://www.paxton-access.com/case-studies/cherbourg-airport/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20210729145608/https://www.paxton-access.com/case-studies/cherbourg-airport/" >}}
- {{< a_blank "DHL" "https://www.paxton-access.com/nl/dhl-te-maastricht/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240302033256/https://www.paxton-access.com/nl/dhl-te-maastricht/" >}}
- {{< a_blank "Mariaziekenhuis Overpelt" "https://www.paxton-access.com/nl/mariaziekenhuis-overpelt-belgie/" >}} {{< a_blank "mirror" "http://web.archive.org/web/20240415215456/https://www.paxton-access.com/nl/mariaziekenhuis-overpelt-belgie/" >}}

Het zou natuurlijk bijzonder ongewenst zijn als een beveiligingsprobleem zou optreden in een van deze lokaties. Het zijn 
juist deze mooie referenties die mij doen besluiten om eens goed naar het 
{{< a_blank "NET2" "https://www.paxton-access.com/systems/net2/" >}} systeem van Paxton te gaan kijken.  
De software die de beveiligingsbeheerder moet installeren vraagt om een certificaat te installeren.

{{< img alt="Paxton Net2 software" src="img/blog/20240830_paxton_net2_cert.png" >}}  

Nadere inpectie van dit scherm laat zien dat het gaat om een root-certificaat van Paxton wat in de trust-store van de
pc geïnstalleerd wordt.  
Echter wat blijkt: Paxton heeft dit certificaat al in de truststore geïnstalleerd, om de installatie zo "eenvoudig" 
mogelijk te maken. We zitten nu in de situatie waar een third-party een root certificaat heeft geïnstalleerd zonder
het de beheerder van deze (vertrouwelijke?) pc te vertellen.  
{{< img alt="Paxton Net2 software" src="img/blog/20240830_paxton_net2_rootcert.png" >}}  

En dit certificaat is nog een kleine 20 jaar geldig. Niet ideaal...ook niet netjes...ook niet industrie standaard. 

Ik heb eerder gepubliceerd over certificaten in het artikel over 
[Let's Encrypt]({{< ref "letsencrypt" >}})

Het zou veel erger zijn als dit certificaat nu gebruikt 
zou kunnen worden om zelf Man In The Middle (MITM) aanvallen uit te voeren. Op deze manier zou het eenvoudig zijn om
(gevoelige) gegevens in te zien die verstuurd worden vanaf de pc van de persoon die verantwoordelijk is voor de
fysieke beveiliging van de eerder genoemde objecten.  
Maar: hier is een private key voor nodig. En die hoort ten alle tijden geheim te blijven. Een korte inspectie van 
C:\Program Files (x86)\Paxton Access\Access Control\openssl laat de volgende twee bestanden zien:  
- Paxton-CA.crt
- Paxton-CA.key

Het probleem begint zich nu wel een beetje af te tekenen. Het zal toch niet...?  
Maar: de private key in Paxton-CA.key is versleuteld en kan dus niet direct gebruikt worden om zelf certificaten 
uit te geven. Maar wacht eens even. Waarom kan createdevicecert.bat dat eigenlijk wel dan? Ik besluit de volgende regel 
toe te voegen aan dit batch bestand:  

    echo %2 > private.pass  

Het klinkt te eenvoudig voor woorden, maar: na het opnieuw aanmaken van een certificaat voor de Net2 software heb ik 
een bestand private.pass met als inhoud: "COpKEyfArEs*****" (gecensureerd). Het is nu inmiddels wel duidelijk dat we hier een
serieus probleem hebben en ik neem contact op met Paxton in de UK. Nog voordat ik mijn verhaal heb kunnen doen, ben ik 
gegoogled en word ik naar de Nederlandse tak van Paxton verwezen. Ik leg mijn bevindingen uit aan de medewerker in 
Nederland en hij geeft aan dat Paxton Nederland alleen een sales-tak is en dat ik bij Paxton UK moet zijn waar de 
ontwikkelaars zitten. Ik word teruggestuurd naar Paxton UK en leg mijn bevindingen daar neer. Ik krijg van de technische
afdeling echter het teleurstellende antwoord dat het geen security probleem is, omdat het certificaat alleen in interne
netwerken gebruikt kan worden. Ik besluit te antwoorden met een eenvoudige vraag: Kunnen jullie uitleggen hoe jullie 
voorkomen dat het certificaat niet gebruikt wordt voor een ip-adres buiten het interne netwerk?  

Het antwoord laat heel even op zich wachten, waarna het kwartje in de UK ook gevallen lijkt te zijn:

{{< quote cloudemail >}}Paxton were not aware of the extent of this vulnerability, thank you for bringing this to our attention. 
We would very much like to discuss our plan of actions with you directly and would welcome your input/feedback on how to resolve this issue.{{< /quote >}}

Kijk... dit had natuurlijk nooit mogen gebeuren, maar deze firma graaft zich zelf niet vast in dit gebeuren. En inderdaad:
na wat telefoontjes en overleggen wordt een concreet mitigatieplan opgesteld en krijg ik inderdaad elke paar weken een 
update van de vorderingen hiervan. Door de grote userbase duurt dit proces vrij lang, maar het wordt wel heel serieus
opgepikt.


Als goed burger besluit ik ook het {{< a_blank "National Cyber Security Centre (NCSC)" "https://www.ncsc.nl/" >}} 
te contacteren. Ik krijg een net mailtje terug dat het 
wellicht goed is om met PGP te gaan communiceren en of ik een PGP sleutel heb. Uiteraard heb ik die en ik stuur mijn
publieke sleutel naar het NCSC op.  
Ik krijg een email terug dat het NCSC geen elliptic curve sleutels kan importeren en of ik een nieuwe RSA sleutel wil 
maken. Aangezien mijn sleutel gepubliceerd is bedank ik vriendelijk en besluit ik om verdere communicatie dan maar 
zonder PGP te gaan voeren.  
Het heeft wederom even wat overredingskracht nodig om de ernst van dit probleem duidelijk te maken. Om het probleem iets
duidelijker te maken maak ik een (geldig) *.rijksoverheid.nl certificaat aan wat ondertekend is met het, vertrouwde,
Paxton root certificaat.

{{< img alt="Paxton Net2 software" src="img/blog/20240830_paxton_net2_rijksoverheid.png" >}}  

Nu het een Rijksoverheid probleem is 
gebeurt er ineens van alles. Er wordt communicatie met Paxton UK gevoerd en een CVE nummer wordt gereserveerd. Ik 
beloof plechtig aan het NCSC om het wildcard certificaat voor rijksoverheid.nl niet te misbruiken of door te sturen.  

In de communicatie met het NCSC heeft Paxton aan dat zij het geen heel belangrijke vulnerability vinden.
{{< quote cloudemail >}}In my opinion I think it is a medium vulnerability. My rationale or view point is that it is widely documented how to add a root certificate to your local trusted store and how to spoof certificates. There are documented case studies of this happening at country level, one of which was in the Netherlands and the other was in China.{{< /quote >}}

Maar als de CVE een tijdje later gepubliceerd wordt is duidelijk dat het toonaangevende 
{{< a_blank "Amerikaanse NIST" "https://nvd.nist.gov/vuln/detail/CVE-2023-43870" >}} het hier niet mee eens is. 
Zij kennen dan ook een CVSS van 9.8 (critical) aan de vulnerability toe.  

Dit probleem leek zo eenvoudig: er is een geheime sleutel meegeleverd met een kritisch stuk software wat zelfs in 
gevangenissen gebruikt wordt. Maar het blijkt 
in de praktijk dan toch nog heel lastig te zijn om de betrokken partijen hiervan te overtuigen. Dit bleek in dit geval 
een proces van maanden. Maar wel een proces met een hele fijne uitkomst, waar de fabrikant uiteindelijk een beter
en veiliger product heeft gemaakt. Uiteraard heb ik een aantal maanden later hun software weer onder de loupe genomen.
Ook dit keer kwam hier een interessante bevinding uit, maar daar ga ik een volgende keer over schrijven. Tot dan!
