+++
title = "Paxton's database"
description = "CloudAware"
date = "2025-02-10"
aliases = []
tags = [
    "paxton", "mssql", "database", "CVE-2024-55447"
]
author = "Jeroen Hermans"
image = "img/blog/pexels-markus-winkler-1430818-3828944.jpg"
+++
Paxton zijn we op dit blog al eens eerder tegengekomen. In november leek het een tijd om ook de laatste versie van
Paxton Net2 te testen op beveiliging. En wat er toen gebeurde zal je verbazen...(oprecht)...
<!--more-->
In de laatste paar jaren heb ik regelmatig onderzoek gedaan naar gebouwtoegangssystemen. Vrijwel elke keer als ik in mijn onderzoek naar een gebouwtoegangssysteem ging kijken bleken er, vaak basale, zaken mis te zijn.   In 2022 deed ik onderzoek naar de firma Comelit wat gepresenteerd werd op hackers conferentie {{< a_blank "MCH2022" "https://cloudaware.eu/blog/mch2022_knock/" >}}.  
Het belangrijkste verweer van Comelit was dat het systeem geen beveiligingssysteem was, maar een toegangssysteem voor gebieden die een lage mate van beveiliging nodig hebben.  

Ik had dan ook heel andere verwachtingen toen ik ging kijken naar het volgende systeem. Dit gebouwtoegangssysteem "{{< a_blank "Phera" "https://cloudaware.eu/blog/phera/" >}}" wordt op de markt gebracht door beveiligingsfirma ARAS.
In de {{< a_blank "brochure" "https://www.aras.nl/files/21/AC/8728E33BEADA.pdf" >}} staat op 20 pagina's 27 keer het woord "veilig". Er staan krachttermen als "Hoogste beveiligingsgraad door toepassing encryptie" in de brochure, dus mijn interesse is gewekt. En die interesse wordt niet minder als ik even verderop in de brochure zie dat er "DES" encryptie wordt gebruikt. Een vorm van versleuteling die al meer dan een kwart eeuw als niet veilig wordt beschouwd.  
Als ik de technisch directeur een kinderlijk eenvoudige manier presenteer om de beveiliging te omzeilen geeft hij aan:
{{< quote cloudemail >}}Dat heb ik zelf ook wel eens een keer gedaan en als ik het kan, dan zijn er meer mensen die dat kunnen.{{< /quote >}}
Maar ook hier blijkt een belangrijk argument te zijn dat het systeem van beveiligingsbedrijf ARAS ineens niet meer geschikt te zijn voor beveiliging, maar meer als vervanging van een sleutelplan.  

Vervolgens kom ik in aanraking met het gebouwtoegangssysteem van Paxton. Dit systeem wordt naar eigen zeggen gebruikt voor gevoelige objecten zoals ziekenhuizen, vliegvelden, tv studio's en zelfs gevangenissen. Ook hier blijkt het een en ander niet helemaal in orde te zijn en het leidt tot twee artikelen  
[De root van het probleem/certificaat]({{< ref "paxton_tls" >}})  
[Paxton's API licentie]({{< ref "paxton_licentie" >}})  
en de publicatie van twee Common Vulnerabilities and Exposures ({{< a_blank "CVE's" "https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures" >}}):  
{{< a_blank "CVE-2023-43870" "https://nvd.nist.gov/vuln/detail/CVE-2023-43870" >}}  
{{< a_blank "CVE-2024-48939" "https://nvd.nist.gov/vuln/detail/CVE-2024-48939" >}}  

En met deze veel te lange introductie zijn we aanbeland bij mijn laatste onderzoek naar het gebouwtoegangssysteem van Paxton.

Het is een zwaar bewolkte en koude dag dinsdag 12 november 2024 als ik mijn emailbericht aan Paxton schrijf.
Ik leg uit dat ik erg blij ben met de manier waarop zij hebben gereageerd op mijn onderzoeken, waardoor we samen een veiliger product en uiteindelijk maatschappij hebben bewerkstelligd.
Ik geef aan dat ik ook graag de nieuwe versie van hun systeem wil testen. De vraag is: willen jullie mij de laatste versie opsturen?  
Maar in plaats van de directe en prettige samenwerking waarvan eerder sprake was hoor ik nu helemaal niets meer. Het blijft wekenlang stil. OP een gegeven moment is mijn geduld op en neem ik contact op met een bevriende installateur. Hij zorgt er voor dat ik diezelfde dag nog het installatiebestand in mijn mailbox heb. Ik installeer de laatste versie van de Paxton Net2 software en ga aan de slag.  
Mijn doel is dit keer iets anders: de database waar de Paxton software mee communiceert. Het duurt niet lang voordat ik mijzelf administrator toegang tot deze database heb verschaft. De manier waarop ik dat doe is kinderlijk eenvoudig:  
Ik stop eenvoudigweg de MSSQL server en voeg mijn eigen administrator account toe als ik de MSSQL server tijdelijk "single user" opstart. Daarna herstart ik de MSSQL server weer op de normale manier.  
Nu ik mijn eigen administrator account heb ga ik rondneuzen in deze database. En deze database staat vol met niet-versleutelde persoonsgegevens, toegangskaarten serienummers en audit log gegevens.  
Diezelfde dag nog stuur ik een email bericht naar Paxton om hen te informeren dat ik weer een probleem heb gevonden met hun software. Ik vraag heb om als manufacturer om een 
{{< a_blank "CVE" "https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures" >}}  te reserveren bij de betreffende {{< a_blank "CNA" "https://www.cve.org/ResourcesSupport/Glossary?activeTerm=glossaryCNA" >}}. Een CNA heeft niets te maken met het warenhuis wat tot voor kort in elke grote Nederlandse stad te vinden was. Het is een "CVE Numbering Authority". Maw: zij reserveren CVE nummers voor gevonden beveiligingsproblemen.  
Een dag later maak ik Proof Of Concept (POC) exploit code om de problemen inzichtelijk te maken. De POC is een python script wat het starten en stoppen van de MSSQL server in luttele ogenblikken automatisch uitvoert, zodat het niet opvalt dat iemand ineens administrator rechten heeft gekregen op de database.  
Gezien de gevoeligheid van de zaak besluit ik om de POC alleen met Paxton te delen en niet publiek op het internet vrij te geven.  
Die volgende maandag krijg ik antwoord van Paxton. Maar van hun meewerkende toon bij eerdere onderzoeken is nu helemaal geen sprake meer. De Chief IT Architect van Paxton schrijft:
{{< quote cloudemail >}}After careful consideration, we have determined that this method does not qualify for a CVE against the Net2 product.{{< /quote >}}  
Oei, maar dat is natuurlijk niet aan Paxton om dat te bepalen. Het gaat wat ver om helemaal uit te leggen, maar het CVE systeem is een peer-reviewed systeem. Als een CVE geen vulnerability blijkt te zijn, dan zal deze niet gepubliceerd worden en blijft het bij een reservering. De manufacturer mag natuurlijk niet zelf gatekeeper spelen bij het toewijzen van CVE nummers.  

Maar ook dit is niet ongebruikelijk in de wereld van cybersecurity en dus bestaat hier ook een procedure voor. De Mitre organisation is de primaire CNA in dit soort gevallen. Ik besluit om een CVE nummer te laten reserveren door Mitre. En omdat de vulnerability niet erkend wordt door Paxton besluit ik ook om de vulnerability op een verantwoorde wijze te publiceren. Organisaties die het systeem gebruiken moeten immers op de hoogte zijn van het risico wat ze lopen en maatregelen kunnen treffen voordat er iets ernstigs gebeurd.  
Diezelfde dag nog {{< a_blank "publiceer" "https://seclists.org/fulldisclosure/2024/Dec/0" >}}  ik op de full disclosure mailinglijst de vulnerability. Het is inmiddels december en hierdoor is het even een aantal weken wat stiller. Ik reis zelf naar Zwitserland en Frankrijk om aan het volgende artikel over Yealink te werken (~herfst 2025).  
Als ik in januari weer goed en wel ben opgestart met alles krijg ik een email bericht in mijn mailbox.
{{< quote cloudemail >}}Hello Jeroen,
My name is {{< censuur red >}}****** *******{{< /censuur >}}, I am with the "drie letters"{{< /quote >}}  
Een glimlach tekent zich af op mijn gezicht. Sure...sure... Maar voordat ik het bericht verwijder, bekijk ik toch een tweede keer. Het bericht is inmiddels door mijn spamfilter heen gekomen.  
De CC-lijst van het email-bericht staat vol met .org en .gov mailadressen, variërend van Amerikaanse {{< a_blank "CERTS" "https://en.wikipedia.org/wiki/Computer_emergency_response_team" >}} tot mailadressen van 3-letter agencies. De handtekening onderaan het mailbericht ziet er met een overheidslogo ook serieus uit.  
Zonder al te veel in te gaan op wat er nou precies gecommuniceerd werd: zij hadden mijn full disclosure ook gelezen en maakten zich wat zorgen. Met de vraag of ik hen wilde inlichten over wat er precies aan de hand was en hoe het opgelost kon worden.  
Voor een aantal weken communiceren we op en neer. Het tijdsverschil is duidelijk merkbaar in de vertraging die dit oplevert. Het is aan de overkant van de oceaan ook duidelijk dat het een ongewenste situatie is. Wellicht dat er wat druk is uitgeoefend in de VS, maar niet veel later komt ook Mitre weer op de lijn met een reservering van een CVE nummer. Ik {{< a_blank "publiceer" "https://seclists.org/fulldisclosure/2025/Feb/6" >}} het CVE nummer met bijgewerkte advisory weer op de full disclosure mailinglijst.  
Het is mooi om te zien hoe anno 2025 procedures op het internet zijn geregeld. Vaak wordt het internet als het Wilde Westen beschouwd. Dat is zeer zeker niet het geval. Vrijwel alles ligt vast in procedures, richtlijnen en soms zelfs wetten. Het is echter wel zo dat in de, heel erg niet digitale, wereld de *handhaving* echter totaal ontbreekt. Met maakt de zelf regulering op het internet extra bijzonder.  

Helaas heeft het dit keer niet geleidt tot een beter beveiligd product aangezien Paxton de vulnerability niet erkent. Maar de gebruikers zijn wel ingelicht over de risico's en hebben andere maatregelen kunnen treffen om hacks te voorkomen. En dat is ook wat waard.

