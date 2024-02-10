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
Tijdens het onderzoek viel het op dat er een netwerkpoort open stond op Yealink devices. Het open staan van deze poort
kon ik niet verklaren en dus werden ook hier vragen over gesteld aan Yealink.
<!--more-->
Laat ik eerst even beginnen met het uitleggen wat een "netwerkpoort" is.  

Toen computernetwerken bedacht werden vond men dat het hand zou zijn om meerdere netwerkdiensten ("servers") op een 
enkele computer te kunnen draaien. Hierdoor werd het "huisnummer" van een computer: het ip-adres uitgebreid met een 
zogenaamd poortnummer. Men zou dit kunnen zien als de toevoeging aan het huisnummer. Zo kan men de netwerkinterface zien
als een heel lange gang in een hotel met allemaal deuren. De deuren zijn bij een computer genummerd van 1 tot ruim 65.000.  
Achter elke deur is het mogelijk om een netwerkdienst te draaien. Om er voor te zorgen dat anderen de netwerkdienst kunnen
vinden heeft men internationaal afspraken gemaakt welke netwerkdiensten achter welk poortnummer draaien. Deze toewijzingen
worden beheerd en toegewezen door de Internet Assigned Numbers Authority (IANA).  
Een goed voorbeeld is een webserver. Door het intikken van: cloudaware.eu in de webbrowser weet de webbrowser meteen dat
er gezocht moet gaan worden op poort 443 van de server waar cloudaware.eu op staat. Deze toewijzingen worden vaak vrij 
snel vrij complex, maar een ander voorbeeld is poort 5060. Poort 5060 is gereserveerd voor het Session Initiation 
Protocol (SIP).  
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
op de telefooncentrale. In enkele uitzonderingsgevallen IS het mogelijk dat het nodig is om ook naar de telefoon TOE te 
communiceren. In dat geval treedt de telefoon zelf als een soort telefooncentrale op. Dit is een functionaliteit die ik in
de afgelopen 20 jaar nog niet bij een klant ben tegen gekomen, maar ik moet dit er voor de volledigheid hier bij vermelden.  

Kortom: het is van belang dat de telefoon de telefooncentrale op poort 5060 kan bereiken. Maar wat wil het feit nu: ook 
op de telefoons zelf staat poort 5060 open. Ik vond dit vreemd en ik heb hierover een vraag gesteld aan Yealink op 
6-7-2023: "why is port 5060 open? Is there some functionality in the Yealink phones that i am unaware of?"  
Yealink reageert met "5060 port is used to IP CALL function, which means you could use call IP address from phone A 
to phone B". Dit is inderdaad een van die uitzonderingsgevallen waar ik het eerder over had. Dus na een eenvoudig testje
mail ik Yealink terug: "We DISabled Direct IP Call (Features->General Information->Allow IP Call->Disabled). 
But when we did a portscan of the phone we could still see port 5060 open. It seems that the port is open whether you 
have Direct IP Call enabled or not."  
Ik heb een groot deel van het antwoord van Yealink hier woord voor woord geciteerd, omdat het een mooi inzicht geeft
in hoe lastig de communicatie soms was: "The IP Call feature use 5060 port is following the SIP RFC standard, but 
disable IP Call feature can’t block 5060, because 5060 port is also used in UDP registering and Calling. If you 
check the major brand like Poly(Polycom) and Cisco, they also have the same mechanism. Because open 5060 port doesn’t 
bring security issue. According to RFC standard, 5060 port is standard SIP port, the 5060 port will not handling a 
non-sip message. "  

Er zijn nogal wat zaken mis met deze uitspraken.
* De RFC verplicht een end-device geen poort 5060 open te zetten
* Gecontroleerd bij Grandstream, Cisco en SNOM
* irrelevant of er SIP of non-SIP verkeer naar de poort gestuurd kan worden
* 17-8 RFC3261

16-8-2023, Cor Heide:
Can one of you please give a response on the mail from Mr. Hermans, also FDM is waiting for this reaction( Mr. Hermans inform them)





"Direct IP call"
RFC3261: "disable IP Call feature can’t block 5060, because 5060 port is also used in UDP registering and Calling."
bind()
open source software
