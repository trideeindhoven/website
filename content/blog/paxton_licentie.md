+++
title = "Paxton en de luchtige licentie"
description = "CloudAware"
date = "2024-08-30"
aliases = []
tags = [
    "paxton", "licentie"
]
author = "Jeroen Hermans"
image = "img/blog/pexels-kindelmedia-7714892.jpg"
+++
Als een firma licenties voor hun producten verkoopt is het natuurlijk wel de bedoeling dat deze licenties niet omzeild
kunnen worden.
<!--more-->
Het is een aantal maanden na het onderzoek naar de beveiliging van gebouwtoegangssystemen van de 
[firma Paxton]({{< ref "paxton_tls" >}}). De man die mij met dit systeem in aanraking heeft gebracht vindt het een 
probleem om elke keer handmatig gebruikers en toegangskaarten aan het systeem toe te voegen. Maar gelukkig heeft
Paxton een {{< a_blank "Gratis SDK" "https://www.paxton-access.com/nl/integratie/gratis-sdk/" >}} beschikbaar om 
exact deze functionaliteit mogelijk te maken.  
Om toegang te krijgen tot deze API is het nodig om een (gratis) API licentie te installeren in de Net2 software. Om
deze gratis licentie te verkrijgen moet een
{{< a_blank "aanvraagformulier" "https://www.paxton-access.com/wp-content/uploads/2019/08/Aanvraagformulier-SDK-integratie.docx" >}}
ingevuld worden. De man vult dit formulier in en krijgt per email terugkoppeling uit Nederland:

{{< quote cloudemail >}}Ik kreeg deze aanvraag van mijn collega binnen voor de API. Zou jij deze wat vollediger in kunnen vullen zodat we een beetje een idee krijgen wat je wilt bereiken met de integratie?{{< /quote >}}

Blijkbaar is de toegang tot deze API super geheim. Het is opvallend te noemen, want het gaat om een API die lokaal op 
de eigen PC draait. Het is geen clouddienst.  
De man levert aanvullende informatie aan en heeft zelfs een telefoongesprek met de Nederlandse tak van Paxton om uit
te leggen wat hij precies wil gaan doen. Hij geeft aan dat hij al een kwart eeuw een IT bedrijf heeft en prima op de
hoogte is van technologieën als REST API, certificaten, etc. Het ligt dus in de verwachting dat de gratis licentie 
op korte termijn opgeleverd wordt. Maar...na een aantal dagen komt het volgende e-mail bericht:

{{< quote cloudemail >}}Ik heb de API aanvraag samen met een collega beoordeeld. Helaas kunnen we de aanvraag niet goedkeuren en de API niet uitgeven.
Het is namelijk niet duidelijk geworden met welke systemen geïntegreerd moet gaan worden en daarnaast is het na ons telefonisch gesprek ook niet duidelijk of er voldoende kennis is om de API te gebruiken.
Om je toch verder te kunnen helpen zou je met Intoaccess contact kunnen opnemen.{{< /quote >}}

Dat is een interessant antwoord. De gratis licentie wordt dus niet verstrekt, maar er wordt naar een partner verwezen 
die de integratie (betaald) kan gaan bouwen. Dat was natuurlijk niet de bedoeling, maar gelukkig is er een tweede kans.  
De man heeft ook een Engelse firma. En met die Engelse firma contacteert hij opnieuw Paxton. Dit keer komt hij bij het UK
office terecht. Hij stelt dezelfde vraag of hij een API licentie mag hebben en legt opnieuw uit waar hij het voor nodig 
heeft. Echter dit keer krijgt hij vrijwel meteen het licentiebestand aangeleverd. Geen aanvullende vragen...niets.  

Een opvallend verschil aan behandeling tussen het Nederlandse Paxton en de UK Paxton. De man kan nu zijn eigen python 
integratie bouwen en is helemaal happy met de oplossing die er nu is...maar het knaagt natuurlijk wel. En de vraagt 
werpt zich op of het niet gewoon heel eenvoudig is om zelf een licentie te maken. En dus ga ik samen met hem aan de slag 
om de inhoud van het licentiebestand te gaan bekijken.  

Het is niet meteen duidelijk wat de verschillende onderdelen van het licentie bestand betekenen, maar na een uurtje
proberen is het grootste deel van de licentie wel gereverse-engineerd. En niet alleen dat: het is nu mogelijk om zelf 
licenties te genereren!

    <License>
          <Id>42424242-4242-4242-4242-424242424242</Id>
          <Type>Standard</Type>
          <Customer>
            <Name>Mark Rutte</Name>
            <Email>m.rutte@overheid.nl</Email>
          </Customer>
          <Expiration>Sun, 23 Jun 3022 23:20:20 GMT</Expiration>
          <LicenseAttributes>
            <Attribute name="Company">Ministerie Algemene Zaken</Attribute>
            <Attribute name="ClientID">d2664aa0-0b74-41f3-82d9-f6a3e034fb4c</Attribute>
          </LicenseAttributes>
    <Signature>Tm8gd2F5IHRoaXMgaXMgVEhJUyBlYXN5Lg==</Signature>
    </License> 

Laten we even wat beter kijken naar deze licentie. De licentie begint met een "Id". Het moge duidelijk zijn dit dit
niet het id van het leven, universum en alles is, maar vrij random door mij gekozen is. Zo lang dit een geldig UUIDv4 is,
accepteert de Net2 software de licentie.  
Ik heb niet veel tijd gestoken in het "Type" en ik heb dit op "Standaard" laten staan.  
De "Customer" gegevens heb ik een "random" naam en emailadres voor gekozen. Als we er van uitgaan (aanname!) dat deze persoon niet 
heeft gereageerd op een (eventuele) bevestigingsmail, dan kunnen we voorlopig aannemen dat hier geen validatie plaatsvindt.  
Om te voorkomen dat ik opeens de licentie niet meer kan gebruiken heb ik een (geldige) datum in de toekomst gekozen. 
Vreemd genoeg vond hier wel een validatie op plaats.  
Ook de bedrijfsnaam in de licentie mag ik zelf kiezen zonder dat hier een validatie op plaatsvindt.  
Het clientID is ook een UUIDv4. Zo lang dit een geldig UUIDv4 is, zal dit worden geaccepteerd als geldige licentie!  

Maar: Paxton heeft ook een "Signature" in de licentie geplaatst. En zoals zo vaak zit het venijn in de staart. Echter de
oplettende lezer heeft al gezien dat dit een BASE64 string is. Het is vrij eenvoudig om de (door mij gemaakte) Signature
door 
{{< a_blank "cyberchef" "https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9%2B/%3D',true,false)&input=VG04Z2QyRjVJSFJvYVhNZ2FYTWdWRWhKVXlCbFlYTjVMZz09" >}}
te halen.  
Het is meteen duidelijk dat deze Signature helemaal niet gebruikt wordt door de software. Wel leuk om berichtjes uit te 
wisselen tussen de IT mensen, maar nutteloos voor de licentie.  

En dan blijft er nog 1 iets over: melden bij Paxton en een {{< a_blank "Proof Of Concept (POC) exploit" "https://github.com/gitaware/poc_exploit_paxton_license" >}} maken.  

Geconfronteert met deze informatie reageert Paxton dat de API

{{< quote cloudemail >}}does not expose any additional data or functionality beyond what can already be accessed using the net2 credentials within the net2 application itself.{{< /quote >}}

En dat is natuurlijk een truth as a cow, maar ook beside the point natuurlijk. Maar: zij geven ook aan dat dit probleem 
in de volgende versie van de Net2 software opgelost zal zijn.  
De laatste quote maakt de reactie van de Nederlandse tak van Paxton natuurlijk extra bijzonder. Als deze API geen extra
toegang verleent (tot een zelf gekocht systeem), waarom weigeren zij dan API toegang aan een bijzonder ervaren IT 
onderneming? Ik besluit er verder ook niet meer achteraan te gaan. Het kan alleen maar tot speculaties leiden en 
de problemen die er waren zijn inmiddels opgelost.
