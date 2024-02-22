+++
author = "Jeroen Hermans"
title = "Open poort"
date = "2024-01-04"
description = "Open poort"
tags = [
    "poort", "5060", "RFC", "Lydis", "Yealink"
]
image = "img/yealink/pexels-harrison-haines-2869565.jpg"
+++
I have added international translations of the articles using google translate:  

[{{< img alt="EN" src="img/uxwing/united-kingdom-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/open_poort/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="DE" src="img/uxwing/germany-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/open_poort/?_x_tr_sl=nl&_x_tr_tl=de&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="FR" src="img/uxwing/france-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/open_poort/?_x_tr_sl=nl&_x_tr_tl=fr&_x_tr_hl=nl&_x_tr_pto=wapp)  

Tijdens het onderzoek viel het op dat er een netwerkpoort open stond op Yealink devices. Het open staan van deze poort
kon ik niet verklaren en dus werden ook hier vragen over gesteld aan Yealink.
<!--more-->
Laat ik eerst even beginnen met het uitleggen wat een "netwerkpoort" is.  

Toen computernetwerken bedacht werden vond men dat het handig zou zijn om meerdere netwerkdiensten ("servers") op een 
enkele computer te kunnen draaien. Hierdoor werd het "huisnummer" van een computer, het ip-adres, uitgebreid met een 
zogenaamd {{< a_blank "poortnummer" "https://en.wikipedia.org/wiki/Port_(computer_networking)" >}}.
Men zou dit kunnen zien als de toevoeging aan het huisnummer. Zo kan men de netwerkinterface zien
als een heel lange gang in een hotel met allemaal deuren. De deuren zijn bij een computer genummerd van 1 tot ruim 65.000.  
Achter elke deur is het mogelijk om een netwerkdienst te draaien. Denk hierbij bijvoorbeeld aan een webserver of een emailserver.
Om er voor te zorgen dat anderen de netwerkdienst kunnen vinden heeft men internationaal afspraken gemaakt welke 
netwerkdiensten achter welk poortnummer draaien. Deze toewijzingen
worden beheerd en toegewezen door de 
{{< a_blank "Internet Assigned Numbers Authority (IANA)" "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" >}}.  

Een bekend voorbeeld is een webserver. Door het intikken van: cloudaware.eu in de webbrowser weet de webbrowser meteen dat
er gezocht moet gaan worden op poort 443 van de server waar cloudaware.eu op staat. Deze toewijzingen worden vaak vrij 
snel vrij complex, maar een ander voorbeeld is poort 5060. Poort 5060 is gereserveerd voor het 
{{< a_blank "Session Initiation Protocol (SIP)" "https://en.wikipedia.org/wiki/Session_Initiation_Protocol" >}}.  

SIP is het protocol wat vaak gebruikt wordt voor de zogenaamde signalling in VoIP gesprekken. Denk hierbij aan 
berichten als:
- "Ik ben telefoon x en ik wil nu graag telefoon y bereiken."
- "Ik ben telefoon y en ik ben nu over aan het gaan."
- "Het gebelde nummer 0123456789 is (tijdelijk) niet bereikbaar"
- "Toestel xyz is op dit moment in gesprek"
- etc etc etc

In de basis is het een vrij eenvoudig protocol wat best veel lijkt op een gesprek tussen mensen. Zo zal het opzetten van 
een gesprek als volgt plaatsvinden:  
**Telefoon tegen centrale**:  
Hallo hier telefoon en ik wil nu graag gaan telefoneren met nummer 0123456789 (technische term: INVITE)  

**Centrale tegen telefoon:**  
Ok, een momentje ik ga even kijken wat ik voor je kan doen (technische term: 100 trying)  
...even later...  
Ik heb nummer 0123456789 voor je gebeld en deze telefoon gaat nu over, nog een moment (technische term: 180 ringing)  
...even later...  
Nummer 0123456789 heeft nu opgenomen en ik heb een poortnummer waar je kunt gaan luisteren voor de audio van deze 
telefoon (technische term: 200 OK)  

**Telefoon tegen centrale**  
Ok dank je! (technische term: ACK)  

Nu is dit natuurlijk een wat vereenvoudigde voorstelling van de techniek en ik heb hier ook even weggelaten dat er een 
zelfde "gesprek" plaatsvindt bij het ophangen van een gesprek.  

Maar wat heeft dit nu met poorten te maken? Nou. Zoals hierboven duidelijk is communiceert de telefoon NAAR poort 5060 
op de telefooncentrale. In enkele uitzonderingsgevallen is het mogelijk dat het nodig is om ook naar de telefoon toe te 
communiceren. In dat geval treedt de telefoon zelf als een soort telefooncentrale op. Dit is een functionaliteit die ik in
de afgelopen 20 jaar nog niet bij een klant ben tegen gekomen, maar ik moet dit er voor de volledigheid hier bij vermelden.  

Kortom: het is van belang dat de telefoon de telefooncentrale op poort 5060 kan bereiken. Maar wat wil het feit nu: ook 
op de telefoons zelf staat poort 5060 open. Ik vond dit vreemd en ik heb hierover een vraag gesteld aan Yealink op 
6-7-2023:
{{< quote cloudemail >}}why is port 5060 open? Is there some functionality in the Yealink phones that i am unaware of?
{{< /quote >}}
Yealink reageert met 
{{< quote cloudemail >}}5060 port is used to IP CALL function, which means you could use call IP address from phone A 
to phone B{{< /quote >}}
Dit is inderdaad een van die uitzonderingsgevallen waar ik het eerder over had. Dus na een eenvoudig testje
mail ik Yealink terug: 
{{< quote cloudemail >}}
We DISabled Direct IP Call (Features->General Information->Allow IP Call->Disabled). 
But when we did a portscan of the phone we could still see port 5060 open. It seems that the port is open whether you have Direct IP Call enabled or not.{{< /quote >}}  
Ik heb een groot deel van het antwoord van Yealink hier woord voor woord geciteerd, omdat het een mooi inzicht geeft
in hoe lastig de communicatie soms was:  
{{< quote cloudemail >}}The IP Call feature use 5060 port is following the SIP RFC standard, but disable IP Call feature can’t block 5060, because 5060 port is also used in UDP registering and Calling. If you check the major brand like Poly(Polycom) and Cisco, they also have the same mechanism. Because open 5060 port doesn’t bring security issue. According to RFC standard, 5060 port is standard SIP port, the 5060 port will not handling a non-sip message. {{< /quote >}}  

Wat Yealink hier beweert is eigenlijk dat als ik met mijn tablet naar Facebook wil gaan (poort 443), dat ik dan eerst
zelf een webserver moet installeren op mijn tablet.  
Er zijn nogal wat zaken mis met deze uitspraken. En uiteraard heb ik naar die claim gekeken: "ja maar iedereen doet het". 
Dus ik heb 3 telefoons van Cisco, Grandstream en SNOM genomen. Al deze telefoons hadden ook default poort 5060 open 
staan, maar op het moment dat de functionaliteit werd uitgezet om de telefoon rechtstreeks te kunnen bereiken was de 
netwerkpoort ook meteen gesloten.  
Nu vind ik het niet super handig om een netwerkpoort open te zetten voor een heel erg klein deel van je klantenkring, 
maar het is in elk geval mogelijk om deze poort te sluiten.  
Maar ook de claim dat poort 5060 alleen SIP verkeer afhandelt is niet heel relevant. Het zal niet de eerste keer zijn dat
in zo een netwerkservice een ernstig, 
{{< a_blank "op afstand" "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-37706" >}}, 
{{< a_blank "misbruikbaar" "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-15260" >}} 
security probleem ontdekt wordt. Ik vind dat dit ook 
illustratief is voor het inzicht hoe security werkt. Als ik zo een email lees dan komt dat bij mij zeer, zeer basaal 
over en dan voel ik persoonlijk toch wat weerstand om dit soort netwerkdevices in mijn netwerk te plaatsen.  

Maar in elke email die ik terug krijg blijft Yealink hameren dat de poort open MOET staan, want dat is een verplichting
in DE {{< a_blank "RFC" "https://en.wikipedia.org/wiki/Request_for_Comments" >}}. 
Ik blijf er op hameren dat ik toch echt wel even wil zien om welke RFC het gaat en in welke alinea dit dan
staat.  
Het is wellicht goed om even stil te staan bij wat een RFC is. RFC staat voor Request for Comments. Het mag worden
gezien als een verzameling van documenten die beschrijven hoe het internet hoort te werken. Een soort van wetboek zo 
gezegd. Op het moment als iemand een VoIP telefoon maakt, dan is het van belang om ook te zorgen dat deze telefoon met
zo veel mogelijk andere software en apparaten samenwerkt. Door de RFC's strak te volgen zal dit een eenvoudigere taak 
zijn (met een aantal beroemde uitzonderingen daar gelaten).  

Maargoed. Na 2 maanden krijg ik nog steeds ontwijkende antwoorden uit China en nu grijpt een lid van de directie van 
Lydis in en emailt op 16-8-2023 in een reply-to-all: 
{{< quote cloudemail >}}Can one of you please give a response on the mail from 
Mr. Hermans, also FDM (sic) is waiting for this reaction( Mr. Hermans inform them){{< /quote >}}  
Een dag later op 17-8-2023 reageert de medewerker uit China: 
{{< quote cloudemail >}}You could refer to rfc 3261, it provides some example.
Actually, the major IP phone manufactory like poly, they also use this port. You could have a test or you could 
google for it.{{< /quote >}}  
En wederom komt het schoolplein argument "ja maar de anderen doen het ook!" om de hoek kijken. Dat dit überhaupt een
onwaarheid is heb ik al eerder eenvoudig getest en aangetoond. Nu ben ik redelijk bekend met RFC documenten en 
{{< a_blank "RFC3261 in het bijzonder" "https://www.rfc-editor.org/rfc/rfc3261.html" >}}.
Een RFC is een technisch document wat redelijk 
lastig te lezen is. Daarom even wat uitleg over een aantal termen. Dit gaat verop in dit verhaal nog belangrijk 
worden. In RFC3261 worden termen gebruikt als User Agent Client (UAC) en User Agent Server (UAS). In het geval van 
een telefooncentrale en een telefoon is de telefoon de UAC en de centrale de UAS.  
Nu heb ik nooit in dit document gelezen dat het nodig is om poort 5060 open te zetten voor een UAC (telefoon).
Uiteraard is dit wel het geval voor een UAS (telefooncentrale). Zo staat in hoofdstuk 18.2.1 uitlegd dat om telefonie
verzoeken te ontvangen de centrale moet luisteren op een netwerkpoort en preferabel op poort 5060. Ik zie deze 
zelfde eis niet voor een UAC (telefoon) in dit document ik vraag dus om ophelderingen. Mijn vraag is: in welk 
hoofdstuk kan ik die eis vinden?  
Op 17-8-2023 krijg ik antwoord uit China: 
{{< quote cloudemail >}}Poly also turns on 5060 by default, which is a common practice in VOIP 
industry.{{< /quote >}} Wat? Serieus? Yealink stelt dat ze een wereld leider zijn op het gebied van telecommunicatiemiddelen. 
Het zou toch heel erg vreemd zijn dat als ik een vraag aan Philips zou stellen en dat Philips zegt: oh dat doen we 
omdat Siemens dat ook doet... Doorlopen alstublieft. Maar... in diezelfde mail komt ook het hoge woord: 
{{< quote cloudemail >}}Regarding the RFC question, you could refer to RFC3261 18.2.1{{< /quote >}}
Ok. Eindelijk. Na maandenlang doorvragen heb ik 
eindelijk het antwoord waar ik naar zocht. En inderdaad: Yealink zit gewoon op de verkeerde plek in de RFC te kijken.
Eerder ben ik express even de techniek in gegaan door uit te leggen wat een UAC en UAS is. En hier is dit van groot
belang. Eenvoudig gezegd maakt Yealink UAC devices (clients), maar zij hebben dus het hoofdstuk voor UAS devices
(servers) gelezen.  
Dat is slordig en zorgt voor een onnodige aanvalsvector op de Yealink devices, maar er is hoop! De medewerker in China 
sluit de email af met: {{< quote cloudemail >}}If users want to close port 5060, they can configure Local SIP Port as 0, which can 
be configured in phone web portal or via yealink auto provision method.{{< /quote >}}  
Ok... Dus het IS mogelijk om deze netwerkpoort toch te sluiten. Deze methode is niet/incorrect gedocumenteerd, maar
als dit inderdaad het geval is, dan heb ik hier (los van de slechte kennis van Yealink) niet meer veel over op te 
merken. Aangezien dit een eenvoudige test is, zet ik de "Local SIP Port" in de web interface op 0 en controleer met 
{{< a_blank "NMAP security scanner" "https://nmap.org/" >}} 
of er een {{< a_blank "UDP" "https://en.wikipedia.org/wiki/User_Datagram_Protocol" >}} 
of {{< a_blank "TCP" "https://en.wikipedia.org/wiki/Transmission_Control_Protocol" >}} 
service staat te draaien op poort 5060, Dit blijkt....NIET... het geval te zijn. Eureka!
Dit is een mooie uitkomt, een aanpassing die in de provisioning terecht hoort en toch iets positiefs.  

Die avond zit ik voor een etentje aan de keukentafel met een aantal bronnen en experts voor het FTM artikel en ik 
presenteer deze, onverwachtse en opvallende, wending van het verhaal. Een van de experts kijkt ernstig voor zich uit
en ik vraag hem waar hij aan het denken is. Hij zegt: "Ik durf te wedden dat die poort niet dicht staat". Ik vraag hem
waarom hij dat denkt? Ik heb namelijk voor zowel UDP als TCP gecontroleerd of deze poort nog open stond en dat was 
NIET het geval. Hij kijkt even met de tafel rond. Het is muisstil. En dan zegt hij: "Ik durf te wedden dat ze die 
"Local SIP Port" waarde rechtstreeks als argument voor 
{{< a_blank "bind()" "https://www.baeldung.com/cs/binding-available-ports" >}} gebruiken"  
Aan de tafel wordt de stilte doorbroken door het schaterlachen van de experts. Want het is een wilde beschuldiging die
verstrekkende beveiligingsgevolgen heeft als het waar is. Want wat betekent dit namelijk: een netwerk beheerder weet 
dat er op een bepaalde poort (5060) een telefoon aan het luisteren is naar SIP netwerk pakketjes. Dit is redelijk 
duidelijk gedefinieerd en de netwerkbeheerder kan hiermee rekening mee houden met firewall regels en detectie regels
in Intrusion Detection Systemen (IDS). Echter als de theorie klopt dan zal door bind(0) te gebruiken een 
willekeurige poort worden toegewezen. Denk even terug aan de hotelgang met 65.000 deuren. Eerst wisten we dat achter 
deur 5060 iets zat, maar nu weten we dat er ergens achter een van de deuren iets zit, maar we weten niet meer welke
deur dat het is. Een netwerkbeheerder heeft nu een extra uitdaging om de beveiliging goed in te richten.  

Tijd om een eenvoudige test te doen. Die nacht als ik thuis kom, pak ik meteen een Yealink telefoon uit de kast, sluit 
hem aan, verander de Local SIP Port naar 0 en test opnieuw poort 5060... Deze is inderdaad gesloten. Ik test nu de 
volledige reeks tot 65.000. En tot mijn verbazing staat poort 53742 open. Ik herstart de 
telefoon. Dit keer staat de telefoon te luisteren op poort 49738. Een willekeurige poort...  

Waarom is dit ernstig? Nou ten eerste is dit ernstig omdat Yealink zelf niet lijkt te begrijpen hoe hun eigen firmware 
werkt. Dat is wel echt een preconditie om aan een goede beveiliging te gaan werken. Maar het is ook van belang omdat het
het werk van iedereen in de beveiligings industrie moeilijker maakt. Er is nu een niet gedefinieerde netwerk poort 
aanwezig in het netwerk. We hebben eerder gezien dat er normaal sprake is van een nette toewijzing door IANA, maar dat
is hier zeker niet het geval.  
Tot slot is het gevaarlijk omdat dit niet in de documentatie correct vermeld is. Een systeembeheerder kan (begrijpelijk)
aannemen dat het probleem is afgedekt terwijl dit niet het geval is.  

Maar wat gaat er nou eigenlijk achter deze poort, deze "hoteldeur", schuil? Ook hier heb ik naar gekeken. Dit was o.a. 
mogelijk omdat het gelukt is om de firmware van Yealink te ontsleutelen (hierover later een ander artikel). 
Als we kijken naar de 
{{< a_blank "lijst van open source software" "https://www.yealink.com/website-service/download/offer-source-of-open-source-software.pdf" >}}
{{< a_blank "mirror" "/yealink/Offer Source of Open Source Software.pdf" >}} dan valt op dat er gebruikt gemaakt 
wordt van het welbekende {{< a_blank "PJSIP project" "https://www.pjsip.org/" >}}. De door Yealink zelfverklaarde 
{{< a_blank "PJSIP versie is 2.3" "https://github.com/pjsip/pjproject/releases/tag/2.3" >}} en dat is een vreselijk 
oude versie die niet meer in omloop zou moeten zijn. Ter verduidelijking: deze versie is uitgekomen in september 2014.  
Dat zou dus kunnen betekenen dat er 10 jaar oude software op ongedefinieerde netwerkpoorten bij overheids organisaties
draait. In de woorden van Lydis zelf leveren zij aan ministeries, politie en aan nog wel spannendere overheidsorganisaties. 
Ik krijg daar een ongemakkelijk gevoel bij. Maargoed, ook dat verbaast mij inmiddels niet meer bij dit onderzoek.  

Vrijdag komt de volgende publicatie. Dit keer is het een minder technisch artikel, maar ga ik in op juridische aspecten
en regelgeving die bij dit onderzoek hoort.  

Tot snel!

[Naar het volgende artikel]({{< ref "avg_gdpr" >}})
