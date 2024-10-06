+++
title = "Bronnen Datalekken"
description = "Bronnen Datalekken"
date = "2024-10-06"
aliases = ["datalek", "bron"]
author = "Jeroen Hermans"
+++
# Welke bronnen gebruikt CloudAware of u in een datalek voorkomt?

##Adobe
In oktober 2013 werden 153 miljoen Adobe-accounts gehackt. Elk account bevatte een interne ID, gebruikersnaam, e-mailadres, versleuteld wachtwoord en een wachtwoordhint in platte tekst. De wachtwoordversleuteling was slecht uitgevoerd, waardoor veel wachtwoorden snel terug naar platte tekst konden worden herleid. De onversleutelde hints gaven bovendien <a target="_blank" href="https://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html">veel informatie</a> over de wachtwoorden, wat het risico voor honderden miljoenen Adobe-klanten verder vergrootte.

##Anti Public Combo List
In december 2016 verscheen een <a target="_blank" href="https://www.troyhunt.com/password-reuse-credential-stuffing-and-another-1-billion-records-in-have-i-been-pwned">enorme lijst met combinaties van e-mailadressen en wachtwoorden</a> in een zogenaamde "combo list" genaamd "Anti Public". De lijst bevatte 458 miljoen unieke e-mailadressen, waarvan veel met meerdere verschillende wachtwoorden die gehackt waren uit diverse online systemen. Deze lijst werd breed verspreid en gebruikt voor "credential stuffing". Hierbij proberen aanvallers andere online systemen te identificeren waar de eigenaar van het account hetzelfde wachtwoord opnieuw heeft gebruikt.

##Apollo
In juli 2018 liet de sales engagement startup Apollo een <a target="_blank" href="https://www.wired.com/story/apollo-breach-linkedin-salesforce-data/">database met miljarden gegevenspunten</a> openbaar toegankelijk zonder wachtwoord. De gegevens werden ontdekt door beveiligingsonderzoeker <a target="_blank" href="http://www.vinnytroia.com/">Vinny Troia</a>, die vervolgens een deel van de dataset met 126 miljoen unieke e-mailadressen in handen kreeg. De data die door Apollo was blootgesteld, werd gebruikt in hun "revenue acceleration platform" en bevatte persoonlijke informatie zoals namen en e-mailadressen, evenals professionele gegevens, waaronder werkplekken, functietitels en locaties. Apollo benadrukte dat de blootgestelde gegevens geen gevoelige informatie bevatten zoals wachtwoorden, burgerservicenummers of financiële gegevens. Op de website van Apollo is een <a target="_blank" href="https://www.apollo.io/contact">contactformulier beschikbaar</a> voor mensen die in contact willen komen met de organisatie.

##Bitly
In mei 2014 maakte het linkbeheerbedrijf Bitly bekend dat ze slachtoffer waren geworden van een <a target="_blank" href="https://bitly.com/blog/urgent-security-update-regarding-your-bitly-account/">datalek</a>. Het datalek bevatte meer dan 9,3 miljoen unieke e-mailadressen, gebruikersnamen en gehashte wachtwoorden, waarvan de meeste gebruik maakten van SHA1, met een klein aantal dat bcrypt gebruikte.

##Canva
In mei 2019 vond er <a target="_blank" href="https://support.canva.com/contact/customer-support/may-24-security-incident-faqs/">een datalek</a> plaats bij de website van de grafische ontwerptool Canva, waarbij 137 miljoen gebruikers werden getroffen. De gelekte gegevens bevatten e-mailadressen, gebruikersnamen, namen, woonplaatsen en wachtwoorden die als bcrypt-hashes waren opgeslagen voor gebruikers die geen gebruik maakten van social logins.

##Cit0day
In november 2020 werd een verzameling van meer dan 23.000 gecompromitteerde websites bekend als Cit0day beschikbaar gesteld voor download op verschillende hackingforums. De data bestond uit 226 miljoen unieke e-mailadressen samen met wachtwoordparen, zowel in wachtwoord-hashes als in gekraakte, platte tekstversies. Onafhankelijke verificatie van de gegevens heeft aangetoond dat het veel legitieme, eerder ongepubliceerde datalekken bevat.

##Collection #1
In januari 2019 werd een grote verzameling van credential stuffing-lijsten gevonden die werd verspreid op een populair hackingforum. Deze lijsten bevatten bijna 2,7 miljard records, waaronder 773 miljoen unieke e-mailadressen, samen met de wachtwoorden die deze adressen op andere gecompromitteerde diensten hebben gebruikt. Volledige details over het incident en hoe je de gecompromitteerde wachtwoorden kunt doorzoeken, zijn te vinden in de blogpost <a href="https://www.troyhunt.com/the-773-million-record-collection-1-data-reach" target="_blank">The 773 Million Record "Collection #1" Data Breach</a>.

##Combolists Posted to Telegram
In mei 2024 zijn 2 miljard rijen gegevens met 361 miljoen unieke e-mailadressen verzameld uit kwaadaardige Telegram-kanalen. De gegevens bevatten 122 GB aan informatie verspreid over 1.7k bestanden met e-mailadressen, gebruikersnamen, wachtwoorden en in veel gevallen de website waarop ze zijn ingevoerd. De gegevens lijken afkomstig te zijn van een combinatie van bestaande combolijsten en info-stealer malware.

##Disqus
In oktober 2017 kondigde de blogcommentaarservice <a href="https://blog.disqus.com/security-alert-user-info-breach" target="_blank">Disqus aan dat ze slachtoffer waren geworden van een datalek</a>. Het datalek dateerde uit juli 2012, maar werd pas jaren later ontdekt toen de gegevens eindelijk opdoken. Het datalek bevatte meer dan 17,5 miljoen unieke e-mailadressen en gebruikersnamen. Gebruikers die inloggegevens op Disqus aanmaakten, hadden gezouten SHA1-hashes van wachtwoorden, terwijl gebruikers die inlogden via sociale providers alleen verwijzingen naar die accounts hadden.

##Dropbox
In het midden van 2012 heeft Dropbox te maken gehad met een datalek waarbij de opgeslagen inloggegevens van tientallen miljoenen klanten zijn blootgesteld. In augustus 2016 <a href="https://motherboard.vice.com/read/dropbox-forces-password-resets-after-user-credentials-exposed" target="_blank">dwongen ze klanten om hun wachtwoorden te resetten waarvan ze geloofden dat ze mogelijk in gevaar waren</a>. Een groot volume aan gegevens, in totaal meer dan 68 miljoen records, <a href="https://motherboard.vice.com/read/hackers-stole-over-60-million-dropbox-accounts" target="_blank">werd vervolgens online verhandeld</a> en omvatte e-mailadressen en gesalte hashes van wachtwoorden (de helft ervan SHA1, de andere helft bcrypt).

##Exploit.In
In de late zomer van 2016 verscheen er een enorme lijst met e-mailadressen en wachtwoordparen in een "combo-lijst" die "Exploit.In" werd genoemd. De lijst bevatte 593 miljoen unieke e-mailadressen, waarvan vele met meerdere verschillende wachtwoorden die waren gehackt uit diverse online systemen. De lijst werd breed verspreid en gebruikt voor "credential stuffing", dat wil zeggen dat aanvallers deze gebruiken in een poging om andere online systemen te identificeren waar de account eigenaar zijn/haar wachtwoord had hergebruikt. Voor gedetailleerde achtergrondinformatie over dit voorval, lees <a href="https://www.troyhunt.com/password-reuse-credential-stuffing-and-another-1-billion-records-in-have-i-been-pwned" target="_blank">Wachtwoordhergebruik, credential stuffing en nog een miljard records</a>.

##Gravatar
In oktober 2020 <a target="_blank" href="https://www.bleepingcomputer.com/news/security/online-avatar-service-gravatar-allows-mass-collection-of-user-info/">publiceerde een beveiligingsonderzoeker</a> een techniek voor het verzamelen van grote hoeveelheden gegevens van Gravatar, de dienst die wereldwijd unieke avatars biedt. Vervolgens werden 167 miljoen namen, gebruikersnamen en MD5-hashes van e-mailadressen, die werden gebruikt om gebruikersavatars te koppelen, verzameld en verspreid binnen de hackergemeenschap. 114 miljoen van deze MD5-hashes werden gekraakt en samen met de oorspronkelijke hash verspreid, waardoor de oorspronkelijke e-mailadressen en bijbehorende gegevens openbaar werden gemaakt. Naar aanleiding van dit incident bracht Gravatar een <a target="_blank" href="https://en.gravatar.com/support/data-privacy">FAQ uit met uitleg</a> over de situatie.

##Houzz
In het midden van 2018 heeft de woningontwerpwebsite <a href="https://help.houzz.com/s/article/security-update?language=en_US" target="_blank">Houzz een datalek gehad</a>. Het bedrijf ontdekte het incident later dat jaar en maakte het in februari 2019 bekend aan de getroffen leden. Bij het datalek waren bijna 49 miljoen unieke e-mailadressen betrokken, samen met namen, IP-adressen, geografische locaties en ofwel salted hashes van wachtwoorden of links naar sociale media-profielen die werden gebruikt om toegang tot de dienst te authenticeren.

##LinkedIn
###2016
In mei 2016 had LinkedIn 164 miljoen e-mailadressen en wachtwoorden openbaar gemaakt. Oorspronkelijk gehackt in 2012, bleef de data uit het zicht totdat deze 4 jaar later te koop werd aangeboden op het darkweb. De wachtwoorden in de inbreuk waren opgeslagen als SHA1-hashes zonder salt, waarvan de overgrote meerderheid snel werd gekraakt in de dagen na de vrijgave van de data.

###2017
In de eerste helft van 2021 werd LinkedIn het <a target="_blank" href="https://www.businessinsider.com.au/linkedin-data-scraped-500-million-users-for-sale-online-2021-4">doelwit van aanvallers</a> die gegevens van honderden miljoenen openbare profielen verzamelden en later online verkochten. Hoewel het verzamelen van deze gegevens geen datalek betrof en er geen persoonlijke informatie werd verkregen die niet openbaar toegankelijk was, werd de verzamelde data toch te gelde gemaakt en breed verspreid in hackingkringen. De verzamelde gegevens bevatten ongeveer 400 miljoen records met 125 miljoen unieke e-mailadressen, evenals namen, geografische locaties, geslachten en functietitels. LinkedIn gaat specifiek in op het incident in <a target="_blank" href="https://news.linkedin.com/2021/june/an-update-from-linkedin">hun bericht</a> over "Een update over gerapporteerde verzamelde data".

##2023
In november 2023 werd er <a target="_blank" href="https://www.troyhunt.com/hackers-scrapers-fakers-whats-really-inside-the-latest-linkedin-dataset/">op een populair hackingforum beweerd</a> dat miljoenen LinkedIn-gegevens waren verzameld en gelekt. Bij nader onderzoek bleek het te gaan om een combinatie van legitieme gegevens die van LinkedIn waren verzameld en e-mailadressen die waren samengesteld op basis van de namen van de getroffen personen.

##Nitro
In september 2020 heeft de Nitro PDF-service een <a target="_blank" href="https://www.bleepingcomputer.com/news/security/massive-nitro-data-breach-impacts-microsoft-google-apple-more/">enorm datalek</a> gehad, waardoor meer dan 70 miljoen unieke e-mailadressen zijn gelekt. Het datalek heeft ook namen, bcrypt-wachtwoordhashes en de titels van geconverteerde documenten blootgesteld.

##Not SOCRadar
In augustus 2024 werden er meer dan 332 miljoen rijen met e-mailadressen gepost op een populair hackforum. De post beweerde dat de adressen waren verzameld van het cybersecuritybedrijf SOCRadar, echter concludeerde een <a href="https://socradar.io/socradars-response-to-the-usdods-claim-of-scraping-330-million-emails/" target="_blank">onderzoek</a> namens hen dat &quot;de actor slechts gebruik maakte van functionaliteiten die inherent zijn aan de standaard aanbiedingen van het platform, ontworpen om informatie te verzamelen uit openbaar beschikbare bronnen&quot;. Er is geen aanwijzing dat het incident de beveiliging van SOCRadar in gevaar heeft gebracht of enig risico voor hun klanten heeft gevormd. In totaal bevatte de dataset 282 miljoen unieke adressen in een geldig e-mailadresformaat.

##Data Enrichment Exposure From PDL Customer
In oktober 2019 ontdekten beveiligingsonderzoekers <a target="_blank" href="https://www.troyhunt.com/data-enrichment-people-data-labs-and-another-622m-email-addresses">Vinny Troia en Bob Diachenko</a> een onbeveiligde Elasticsearch-server met 1,2 miljard records van persoonlijke gegevens. De blootgestelde data bevatte een index die aangaf dat het afkomstig was van data-enrichmentbedrijf People Data Labs (PDL) en bevatte 622 miljoen unieke e-mailadressen. De server was niet in bezit van PDL, en men vermoedt dat een klant er niet in slaagde de database correct te beveiligen. De blootgestelde informatie omvatte e-mailadressen, telefoonnummers, social media-profielen en gegevens over werkgeschiedenis.

##River City Media Spam List
In januari 2017 werd er <a href="https://web.archive.org/web/20170426084052/https://mackeeper.com/blog/post/339-spammergate-the-fall-of-an-empire" target="_blank">een enorme hoeveelheid data van River City Media online vrijgegeven</a>. De data bleek bijna 1,4 miljard records te bevatten, waaronder e-mail- en IP-adressen, namen en fysieke adressen, die allemaal werden gebruikt als onderdeel van een enorme spamoperatie. Na deduplicatie waren er 393 miljoen unieke e-mailadressen binnen de blootgestelde data.

##ShareThis
In juli 2018 heeft de sociale bookmarking- en sharingdienst <a href="https://www.sharethis.com/data-privacy-incident/" target="_blank">ShareThis een datalek gehad</a>. Door het incident lekte 41 miljoen unieke e-mailadressen, samen met namen en in sommige gevallen geboortedata en wachtwoordhashes. In 2019 <a href="https://www.theregister.co.uk/2019/02/11/620_million_hacked_accounts_dark_web/" target="_blank">werd de data te koop aangeboden op een dark web-marktplaats</a> (samen met verschillende andere grote datalekken) en begon vervolgens breder te circuleren.

##Ticketcounter
In augustus 2020 <a target="_blank" href="https://www.bleepingcomputer.com/news/security/european-e-ticketing-platform-ticketcounter-extorted-in-data-breach/">publiceerde de Nederlandse ticketservice Ticketcounter</a> per ongeluk een databaseback-up op een openbaar toegankelijke locatie. Deze werd vervolgens in februari 2021 gevonden en gedownload. De data bevatte 1,9 miljoen unieke e-mailadressen en werd te koop aangeboden op een hackforum. In sommige gevallen omvatte de data ook namen, fysieke en IP-adressen, geslachten, geboortedata, betaalgeschiedenissen en bankrekeningnummers. Ticketcounter werd later gechanteerd met de dreiging dat de gelekte gegevens openbaar zouden worden gemaakt.

##Trello
In januari 2024 zijn er gegevens van <a target="_blank" href="https://twitter.com/H4ckManac/status/1747527579559411959">Trello verzameld en te koop aangeboden</a> op een populair hackforum. De gegevens bevatten meer dan 15 miljoen e-mailadressen, namen en gebruikersnamen. De gegevens zijn verkregen door een publiek toegankelijke bron te doorlopen met e-mailadressen uit eerdere datalekken. Trello heeft aangegeven dat er geen ongeautoriseerde toegang heeft plaatsgevonden.

##Trik Spam Botnet
"In juni 2018 was de command-and-controlserver van een kwaadwillend botnet, bekend als het \'Trik Spam Botnet\', <a target="_blank" href="https://www.bleepingcomputer.com/news/security/trik-spam-botnet-leaks-43-million-email-addresses/">verkeerd geconfigureerd</a>, waardoor de e-mailadressen van meer dan 43 miljoen mensen werden blootgesteld. De onderzoekers die de blootgestelde Russische server ontdekten, geloven dat de lijst met adressen werd gebruikt om verschillende malwarevarianten te verspreiden via malspamcampagnes (e-mails die zijn ontworpen om malware te leveren)."

##Twitter 2023
In het begin van 2023 verscheen <a target="_blank" href="https://www.bleepingcomputer.com/news/security/200-million-twitter-users-email-addresses-allegedly-leaked-online/">meer dan 200 miljoen records die van Twitter zijn verzameld op een populair hackforum</a>. De gegevens werden in 2021 verkregen door misbruik te maken van een API die het mogelijk maakte om e-mailadressen naar Twitter-profielen te herleiden. De resulterende gegevens werden vervolgens samengevoegd in een gegevensverzameling met e-mailadressen en publieke Twitter-profielinformatie, waaronder namen, gebruikersnamen en aantal volgers.

##Verifications.io
In februari 2019 vond er <a target="_blank" href="https://securitydiscovery.com/800-million-emails-leaked-online-by-email-verification-service">een datalek</a> plaats bij de e-mailvalidatiedienst verifications.io. Dit datalek werd ontdekt door <a target="_blank" href="https://twitter.com/mayhemdayone">Bob Diachenko</a> en <a target="_blank" href="https://twitter.com/vinnytroia">Vinny Troia</a> en was het gevolg van gegevens die werden opgeslagen in een openbaar toegankelijke MongoDB-database zonder wachtwoordbeveiliging. Hierdoor werden 763 miljoen unieke e-mailadressen blootgesteld. Veel van de gegevens bevatten daarnaast aanvullende persoonlijke informatie, zoals namen, telefoonnummers, IP-adressen, geboortedata en geslachten. Er waren geen wachtwoorden opgenomen in de data. De website van Verifications.io ging offline tijdens het openbaar maken van het datalek, maar <a target="_blank" href="https://web.archive.org/web/20190227230352/https://verifications.io/">een gearchiveerde versie</a> blijft beschikbaar.

