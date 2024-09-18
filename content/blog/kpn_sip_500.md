+++
title = "Aras Phera"
description = "CloudAware"
date = "2024-07-30"
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
dit systeem namelijk voor kinderdagverblijven gemarket wordt, dan neem ik aan dat het niet de bedoeling is dat er 
indringers naar binnen kunnen.  

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
hoogte is van de honderden Chinese Mifare clone kaarten waar sector 0 prima schrijfbaar is. En waarmee het is ook prima 
mogelijk is om ook het serienummer van de kaart te kopieren?  

Zo veel vragen, te weinig antwoorden. Tijd om contact op te nemen met Aras. Ik schrijf een korte mail aan Aras waarin
ik mijn standaard uitleg geef wie ik ben en wat ik doe. Ik sluit de mail af met:
{{< quote cloudemail >}}Ik heb een aantal vragen over de beveiliging van uw systeem. Kunt u mij doorverwijzen naar de domeindeskundige op dit vlak?{{< /quote >}}  
Binnen een aantal uren neemt de "Productmanager toegangscontrole" contact met mij op. Hij denkt dat de "Technisch 
Directeur" wellicht de beste persoon is om mijn vragen te beantwoorden. Ik stel mijn vragen opnieuw aan hem en hij 
reageert dat hij mij liever even aan de telefoon wil hebben. Uiteraard stem ik daar mee in en een dag later zit ik in 
een telefoongesprek met de technisch directeur van Aras.

"Het serienummer kun je natuurlijk ook kopiëren. Dus dan kun je eventueel een Chinese pas kopen waar je het serienummer van kan wijzigen. Dan kun je effectief een kaart clonen."

"Alles bij elkaar is het iets veiliger van Mifare Classic, maar zeker niet zo veilig als Desfire"

Ik: "DES encryptie is dat niet al in de jaren ´90 gekraakt?"
"Die DES die komt ergens terug in het paneel zelf"

Ik: "Wordt dit gezien als een security product?"
"Het is wel een security product. Het is toegangscontrole, dus dan is het automatisch een security product, maar het is niet high-security. Wij zouden dit niet adviseren bij een kerncentrale of een bank of iets dergelijks."
Ik: "Wat is dan wel de doelgroep waar het voor bedoeld is?"
"MKB. Een ondernemer met een aantal deuren. Voor vervanging van onhandig pasbeheer en dan extra logging krijgt ed."

Ik: "Maar als je passen kunt kopieren, dan weet je niet wie er is binnengekomen. Dan is de logging nou juist een zwak punt"
"Nee daar heb je gelijk in, maar weet je... er is een markt voor vanalles"

Geven aan dat DESfire veiliger is, maar dat is "ook zeker niet in ieders belang"

PDF met kaarttypes per email opgestuurd
https://phera.nl/images/Infographic_pasveilig_Phera.pdf
https://web.archive.org/web/20240715174609/https://phera.nl/images/Infographic_pasveilig_Phera.pdf

2crypt staat heel veilig aangeschreven omdat het kopieren lastiger gaat.
"en dat is ook nog met de informatie die jij nu hebt. Dat staat bewust niet met zo veel detail op de website. Dat zou eerst dan iemand zelf moeten uitvogelen."

"Mifare classic gebruikt een sleutel voor sector codering. Betekent dat dat alle Phera systemen dezelfde sleutel gebruiken voor sector codering?"
- "Ja dat klopt. Er is geen key diversification. Dat kan wel, maar daar is niet voor gekozen."
"waarom is daar niet voor gekozen?"
- "Onze cardreaders die ondersteunen dat niet."

"Dat betekent dat de sector sleutel die al jullie klanten gebruiken is dus een trade secret? Als die zou uitlekken dat zou geen goede zaak zijn?"
- "In zekere zin doet dat niet zo heel veel schade. Hoewel de publiciteit zou niet fijn zijn. Maar dat je die key kan achterhalen, dat is geen nieuws. Dat heb ik zelf ook wel eens ene keer gedaan en als ik het kan, dan zijn er meer mensen die dat kunnen."

"Zijn jullie klanten er van op de hoogte dat dat mogelijk is?"
- "Je moet dit in de context zien van de huidige systemen die in de markt draaien. <knip> Wij bieden een oplossing die veiliger is dan 80% van de concurrentie"
Bovendien informeren ze met een pasveiligheid infographic.

Ik merk op dat het in de markt wordt gezet als iets wat erg veilig is.
"Erg veilig is relatief."
Als ik opmerk dat op phera.nl/en/veilig de eerste zin is: "In alle opzichten veilig" is het antwoord:
"Ja, veilig aan de voorzijde, je beveiligt je pand er mee, pasveiligheid is over nagedacht, dataveiligheid aan de achterkant is over nagedacht. Dus met toegangscontrole voeg je een hoop veiligheid toe aan je pand."

"Stel als een misdrijf plaatsvindt, zouden jullie dan adviseren om de logbestanden, die te manipuleren zijn door het kopieren van kaarten, te gebruiken als forensisch bewijs?"
- "Ik zou het meenemen in het complete verhaal ja. Maar dan gecombineerd met camerabeelden. Je zult meer bewijs moeten hebben dan alleen dat lijkt mij. Het zou wel raar zijn om het niet mee te nemen toch?"
"Maar forensisch bewijs moet natuurlijk boven gerede twijfel staan"
- "Als dat het criterium is, dan valt dat daar natuurlijk niet onder nee."

Vraag uitgezet bij Mischa

Blijft herhalen dat het veel veiliger is dan "het gros".

Staat of valt bij de kennis van de installateurs. Durft hij zijn hand niet voor in het vuur te steken.
Verantwoordelijkheid wordt daar bij afgeschoven?

Mifare classic

Single DES:



ARAS *Security*
Contact met Technisch Directeur ARAS Security

Aliexpress sector 0 schrijfbare kaarten
goedkope RFID schrijver



