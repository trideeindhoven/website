+++
title = "Aras Phera"
description = "CloudAware"
date = "2024-09-18"
aliases = []
author = "Jeroen Hermans"
image = "img/blog/pexels-life-of-pix-4291.jpg"
+++
Tijdens een bezoek aan een van mijn klanten kwam ik het "Aras Phera" gebouw toegangssysteem tegen. Omdat ik dit 
systeem niet eerder was tegengekomen: tijd om in de security te duiken!
<!--more-->
"Toegangscontrole betekent dat je zekerheid hebt over wie jouw pand betreed".  
Zo begint de website 
{{< a_blank "phera.nl" "https://www.phera.nl/nl/" >}} 
{{< a_blank "mirror" "https://web.archive.org/web/20240715122628/https://www.phera.nl/nl/" >}}. 
Het is de website van het product Phera van beveiligingsfirma Aras. En dit artikel gaat eigenlijk om deze allereerste 
zin. De grammaticafout in de eerste zin geeft eigenlijk al aan dat dit product wellicht met net iets te hoge spoed op 
de markt gebracht is. Laten we eerst kijken naar wat Phera eigenlijk is.  
Phera is een systeem om mensen digitaal toegang te verlenen tot een object. Aras zelf geeft hierbij als voorbeelden 
kantoren, winkels en kinderdagverblijven. En dat zijn uiteraard plekken waar toegangscontrole van belang is om
uiteenlopende redenen. Een systeem dus wat in een maatschappelijk gevoelige plek ingezet wordt.
Zoals zo vaak bij mijn onderzoeken ga ik eerst kijken naar welke informatie er eigenlijk online te vinden is over
een systeem. Ik vind een heel mooi
{{< a_blank "PDF bestand" "https://phera.nl/images/Documentatie/phera_brc_04_web.pdf" >}} 
{{< a_blank "mirror" "https://web.archive.org/web/20240715121430/https://phera.nl/images/Documentatie/phera_brc_04_web.pdf" >}}
met de ironische titel "Phera in alle opzichten toegankelijk".  

Het document praat over "Veilige communicatie tussen alle Apparaten", want er wordt gebruik gemaakt van "DES" 
versleuteling. Ik kijk even op van mijn pc. DES versleuteling? Iedereen met een security achtergrond zal hier wellicht 
even grinnikken, maar laat ik toch even uitleggen wat hier zo opvallend aan is.  
{{< a_blank "Data Encryption Standard (DES)" "https://en.wikipedia.org/wiki/Data_Encryption_Standard" >}} versleuteling
is ongeveer een halve eeuw geleden ontwikkeld. Al in het begin van de jaren '90 wordt een theoretische crypto aanval
voor deze vorm van versleuteling ontwikkeld, maar door de snelle opkomst van GPU rekenmethoden in de laatste jaren mag
DES inmiddels als volledig gebroken worden beschouwd. Al in 1997 besluit het National Institute of Standards and 
Technology (NIST) dat DES geen veilige encryptiemethode meer is en dat het vervangen dient te worden.  
Het document waar ik in aan het lezen ben bevat 27 keer het woord "veilig" of een combinatie hiervan, zoals "beveiliging".
Het is duidelijk dat het de bedoeling is om dit systeem aan de hoogste beveiligings standaarden te laten voldoen. Als
dit systeem namelijk voor kinderdagverblijven in de markt gezet wordt, dan neem ik aan dat het de bedoeling is dat het ook 
veiligheid biedt.  

Goed. Tot zo ver de blauwe ogen van Aras. Laten we dan zelf maar eens even kijken wat dit systeem voor technologieën gebruikt.
Phera maakt gebruik van de welbekende "druppels" die te koop zijn op de 
{{< a_blank "website van Aras" "https://www.aras.nl/ph-2c-key-10-phera-2crypt-tag-set-van-10-oranje" >}}. 
Een korte test laat zien dat het om een eenvoudige Mifare kaart gaat. Voor de tweede keer die avond kijk ik even op
van mijn pc. Mifare? Dat klink niet heel erg gunstig. In 2015 heeft journalist en oud-collega Brenno de Winter al
uitvoerig aangetoond dat de cryptosleutel van deze kaarten 
{{< a_blank "uitgelekt is" "https://www.nu.nl/internet/4023707/chip-ov-chipkaart-en-toegangspassen-blijkt-eenvoudig-kraken.html" >}}.
In het PDF bestand van ARAS kunnen we lezen
{{< quote cloudemail >}}In eerste instantie is de standaard beveiliging aanwezig van een Mifare kaart, 
met de beveiligingssleutel die daarbij hoort.{{< /quote >}}
Ik denk dat we deze "standaard" beveiliging in 2024 gevoegelijk "plaintext" mogen noemen. 
Maar zo lezen we in het PDF bestand wat ik eerder aanhaalde:
{{< quote cloudemail >}}Vervolgens wordt het kaartnummer nogmaals versleuteld in de kaart opgeslagen, gelinkt aan het serienummer van de kaart. Ook al wordt de volledige inhoud van de kaart gekopieerd naar een andere kaart. Dan zal deze niet meer matchen met het serienummer en zal de kaart geweigerd worden door de kaartlezer.{{< /quote >}}  

Ik kan het niet laten om toch nog eens keer op te kijken van mijn pc. Het kan toch niet zo zijn dat Aras niet op de 
hoogte is van de honderden Chinese Mifare clone kaarten waar sector 0 prima schrijfbaar is? En waarmee het is ook prima 
mogelijk is om ook het serienummer van de kaart te kopieren?  

Zo veel vragen, te weinig antwoorden. Tijd om contact op te nemen met Aras. Ik schrijf een korte mail aan Aras waarin
ik mijn standaard uitleg geef wie ik ben en wat ik doe. Ik sluit de mail af met:
{{< quote cloudemail >}}Ik heb een aantal vragen over de beveiliging van uw systeem. Kunt u mij doorverwijzen naar de domeindeskundige op dit vlak?{{< /quote >}}  
Binnen een aantal uren neemt de "Productmanager toegangscontrole" contact met mij op. Hij denkt dat de "Technisch 
Directeur" wellicht de beste persoon is om mijn vragen te beantwoorden. Ik stel mijn vragen opnieuw aan hem en hij 
reageert dat hij mij liever even aan de telefoon wil hebben. Uiteraard stem ik daar mee in en een dag later zit ik in 
een telefoongesprek met de technisch directeur van Aras.

Na mijn introductie over wie ik ben en wat ik doe stel ik meteen een belangrijke vraag: Is het niet kinderlijk eenvoudig 
om goedkope Mifare kaarten via het internet te kopen en zo alsnog toegangsdruppels te kopieren? Het antwoord is verrassend 
open en eerlijk.
{{< quote cloudemail >}}Het serienummer kun je natuurlijk ook kopiëren. Dus dan kun je eventueel een Chinese pas kopen waar je het serienummer van kan wijzigen. Dan kun je effectief een kaart clonen.{{< /quote >}}

Maar eerlijk of niet, het staat wel in direct contrast met de bewoording "Hoogste beveiligingsgraad" op de
{{< a_blank "website" "https://phera.nl/en/over-phera" >}} van Phera.  
Als ik een jaar geleden hem vraag of het dan geen probleem is als ik ga publiceren geeft hij aan dat:

{{< quote cloudemail >}}In zekere zin doet dat niet zo heel veel schade. Hoewel de publiciteit zou niet fijn zijn. Maar dat je die key kan achterhalen, dat is geen nieuws. Dat heb ik zelf ook wel eens een keer gedaan en als ik het kan, dan zijn er meer mensen die dat kunnen.{{< /quote >}}

Ik vraag verder over de DES encryptie die in hun brochure gebruikt wordt. Het is even stil aan de andere zijde van de 
telefoon. De technisch directeur is uiteraard op de hoogte van de kwetsbaarheden in de DES encryptie. Na even nadenken
geeft hij aan dat het waarschijnlijk om iets gaat wat "ergens in het paneel zelf" terugkomt.

Ik krijg niet meteen een gevoel dat het systeem hele veilig is en ik wil graag weten voor wie dit systeem dan wel 
gebruikt mag worden. Ik vraag of Phera gezien mag worden als een security product. Nadat de extreme voorbeelden zoals
kerncentrales voorbij komen geeft hij aan: "MKB. Een ondernemer met een aantal deuren. Voor vervanging van onhandig 
pasbeheer en dan extra logging krijgt ed."

En dat is een interessante uitspraak, want juist die logging is een heikel punt. Ik vraag hem of deze logging in het geval 
van een incident gebruikt kan worden door de politie als forensisch bewijs. Hij geeft aan dat dit inderdaad het geval is, 
mits ondersteund door ander bewijs. Ik vraag hier over door, want als ik hem vraag of hij met forensisch bewijs bedoeld 
dat er geen rede twijfel over kan bestaan geeft hij aan dat het "daar dan toch niet onder valt". Als het immers mogelijk 
is om kinderlijk eenvoudig druppels te kopiëren in seconden tijd, dan is het ook niet meer mogelijk om de logging 
achteraf te gebruiken om te bepalen wie er binnen is geweest.  
Maar zo blijft hij herhalen dat het systeem veiliger is dan "het gros". Het is een redenering die ik zelf gevaarlijk 
vind. Door het systeem op deze manier neer te zetten in hun
{{< a_blank "communicatie" "https://phera.nl/images/Infographic_pasveilig_Phera.pdf" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240715174609/https://phera.nl/images/Infographic_pasveilig_Phera.pdf" >}}
, ontstaat een beeld van een systeem wat ingezet kan worden bij kinderdagverblijven om kinderen veilig te houden. Hiermee 
wordt klanten de kans ontnomen om een keuze te maken die past bij het gewenste beveiligingsniveau.  
Dat dit niet irreëel is blijkt wel dat de productiehal van mijn klant met het Phera systeem is beveiligd. Een indringer
's nachts of in het weekend kan voor tonnen of zelfs miljoenen schade veroorzaken met alle gevolgen van dien.  

Maar net zoals [Comelit]({{< ref "mch2022_knock" >}}) en [Paxton]({{< ref "paxton_tls" >}}) maakt Aras geen gebruik
van een direct distributiekanaal. Deze keuze kan verstandig zijn, maar het maakt de keuze en installatie van een 
systeem heel erg afhankelijk van de kennis en kunde van de installateur. En het blijkt dat dit bij gebouwtoegangssystemen
toch wel een probleem blijkt te zijn in de praktijk.  

Samenvattend denk ik dat er best een markt is voor een systeem als Phera, net zoals er een markt is voor SKG2 sloten. 
Maar het is essentieel dat eindklanten op de hoogte zijn van het beveiligingsniveau wat er geboden wordt. Het gebruik van 
Mifare Classic en DES encryptie levert problemen op met een ISO27001-2022 o.a. control 7.2, 7.3, 7.4 en 8.24. Hoewel
ik dit niet onderzocht heb, is het ook van belang om te kijken naar de AVG. De logbestanden houden immers de fysieke 
lokatie van medewerkers in de gaten. Dat is een persoonsgegeven en ik ben b.v. geen maatregel tegengekomen voor het recht op
inzage of bewaartermijnen in het Phera systeem.
