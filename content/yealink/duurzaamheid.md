+++
author = "Jeroen Hermans"
title = "Duurzaamheid"
date = "2024-03-12"
description = "Duurzaamheid"
tags = [
    "duurzaamheid", "meehelpen", "Lydis", "Yealink"
]
image = "img/yealink/pexels-hasan-zahra-2118560.jpg"
+++
Een korte google-actie laat zien dat Lydis en Yealink duurzaamheid 
{{< a_blank "duurzaamheid" "https://www.lydis.nl/blog/hoe-stimuleer-je-een-duurzame-financiele-sector" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240316113956/https://www.lydis.nl/blog/hoe-stimuleer-je-een-duurzame-financiele-sector" >}}
belangrijk vinden. En daar kan ik het niet mee oneens zijn. Maar wat is duurzaamheid eigenlijk en kunnen Lydis en Yealink
zich oprecht duurzaam noemen?
<!--more-->
I have added international translations of the articles using google translate:  

[{{< img alt="EN" src="img/uxwing/united-kingdom-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/duurzaamheid/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="DE" src="img/uxwing/germany-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/duurzaamheid/?_x_tr_sl=nl&_x_tr_tl=de&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="FR" src="img/uxwing/france-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/duurzaamheid/?_x_tr_sl=nl&_x_tr_tl=fr&_x_tr_hl=nl&_x_tr_pto=wapp)  

Je als onderneming duurzaam noemen gaat natuurlijk verder dan alleen een paar zonnepanelen op het dak leggen. Het gaat 
over hoe je met de maatschappij omgaat. Het gaat er over hoe je deze aarde beter achterlaat voor de volgende generaties
dan je heb gekregen hebt. En ik denk dat na een aantal weken publiceren het wel duidelijk moge zijn dat Lydis en Yealink
hier af en toe wel eens een steekje laten vallen.  

# Open source
Yealink maakt veelvuldig gebruik van Open Source Software (OSS). Nu is daar niets mis mee. Sterker nog: uit duurzaamheids 
oogpunt vind ik het een mooie gedachte dat een groep ontwikkelaars samen iets gaat ontwikkelen en gebruiken in plaats
van dit op een eilandje te doen.  
Maar aan het gebruik van OSS zitten voorwaarden. En deze voorwaarden zijn vaak in een licentie vastgelegd. Een veel gebruikte
licentie die OSS gebruikt is de 
"{{< a_blank "General Public License" "https://en.wikipedia.org/wiki/GNU_General_Public_License" >}}".  
Het idee achter de GPL is dat eindgebruikers gebruik kunnen maken van vier vrijheden:
* uitvoeren van software
* bestuderen van software
* delen van software
* wijzigen van software

Deze vrijheden zijn essentieel voor de werking van OSS. Het is ook belangrijk om te vermelden dat OSS niet hetzelfde is 
als gratis software. Er zijn verschillende OSS pakketten waar de term "free" in gebruikt wordt. Maar deze term moet niet 
worden vertaald naar "gratis", maar eerder worden gezien als "vrij". Een veel gebezigde uitspraak in de OSS wereld is dan
ook: "free as in beer": vrij verkrijgbaar...maar niet gratis.  

Als we naar de 
{{< a_blank "lijst met OSS" "https://www.yealink.com/website-service/download/offer-source-of-open-source-software.pdf" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240307205452/https://www.yealink.com/website-service/download/offer-source-of-open-source-software.pdf" >}}
in Yealink apparatuur kijken, dan zien we verschillende OSS licentie modellen zoals GPLv2, BSD, MIT en Apache. Ik ga het 
hier vandaag alleen hebben over de GPLv2, omdat het anders een college rechten gaat worden. Maar je mag aannemen dat 
elke licentie weer eigen eigenaardigheden heeft waar an voldaan moet worden.  
De GPL software die we voor de T5XW IP Phones zien is:

| Naam | Versie | Releasedatum | Leeftijd |
|------|--------|--------------|----------|
| BusyBox | 1.10.3 | 5-6-2008 | 15 jaar, 9 maanden |
| libstrophe | 0.8 | <7-8-2014 | 9 jaar, 7 maanden |
| PJSIP | 2.3 | 3-9-2014 | 9 jaar, 6 maanden |
| libhid | 0.8.0-rc1  | 11-2015? | 8 jaar, 4 maanden |
| Linux Kernel | 4.9.75 | 5-1-2018 | 6 jaar, 2 maanden |
| OpenLDAP | 2.4.46 | 22-3-2018 | 5 jaar, 11 maanden |
| xl2tpd | 1.3.15 | 3-10-2019 | 4 jaar, 5 maanden |
| SRTP | 2.3.0 | 23-12-2019 | 4 jaar, 3 maanden |
| OpenVPN | 2.4.9 | 17-4-2020 | 3 jaar, 10 maanden |
| dnsmasq | 2.85 | 7-4-2021 | 2 jaar, 11 maanden |

En hier vallen meteen een aantal zaken op. De "belangrijkste onderdelen" van de telefoons zijn vele jaren oud. Ook is een
"release candidate" (rc1) gebruikt voor libhid. Voor de niet-technische lezers: een release candidate is een software 
versie die niet in productie omgevingen gebruikt hoort te worden. Deze versie is een versie die gebruikt kan worden of 
er nog zaken opgelost moeten worden in deze versie voordat de echte versie gereleased wordt. De versie van libstrophe is 
dusdanig oud dat ik deze versie niet meer op het internet kan vinden en ik kan alleen zien dat deze versie ouder moet zijn
dan 7 augustus 2014.  
Maar het opvallendste is natuurlijk "Busybox". Busybox is wat de meeste mensen "Linux" noemen. Dat is eigenlijk een 
verkeerde term. Het is een verzameling aan tools die op de Linux kernel draaien. De versie die Yealink volgens kun eigen
document gebruikt komt uit het jaar waarin we hebben kunnen genieten van hossende Nederlanders op het UEFA Euro toernooi
in Zwitserland en Oostenrijk. En dat is inderdaad al een tijdje geleden.  
Maar er is meer mis met de lijst van OSS. De lijst bevat alleen maar een aantal telefoons. De video producten, de USB 
camera's en alle tooling zoals de encryption tool zijn afwezig van deze lijst.
Als ik vragen stel aan Yealink dan komt er eigenlijk niet meer reactie terug dan: we werken de lijst met open source 
software bij naar aanleiding van je vragen. Pas op het moment dat de publicatie in FTM heeft plaatsgevonden komt een
{{< a_blank "schriftelijk reactie" "https://portal.lydis.com/download/lydis/ftm/Yealink_Declaration_letter_from_FTM.PDF" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240316132522/https://portal.lydis.com/download/lydis/ftm/Yealink_Declaration_letter_from_FTM.PDF" >}}
van Yealink. In deze reactie geven zij aan:
{{< quote cloudquote >}}The articles also mentioned the problem that the version of the open software is too old.
In fact, Yealink only used some but not all of the open source modules during the phone development and we have added
our own developed codes which result in a very safe solution.{{< /quote >}}
Dit is een belangrijke quote, want ook Lydis gebruikt deze argumentatie in hun
{{< a_blank "security FAQ" "https://www.lydis.nl/over-ons/yealink-security-faq" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240313191730/https://www.lydis.nl/over-ons/yealink-security-faq" >}}
{{< quote cloudquote >}}Yealink heeft haar eigen software heeft geschreven voor de open source modules. Deze software zorgt ervoor dat de veiligheid van het complete product gegarandeerd is.{{< /quote >}}  

Na een hele hoop data en bewijsmateriaal is het goed om weer even terug te gaan naar wat die GPL nou precies zegt. Want...
duurzaamheid. Laat Yealink hier honderden, misschien wel duizenden ontwikkelaars kostenloos software voor hen ontwikkelen
om vervolgens de licentie niet na te leven?  
Als we de 
{{< a_blank "GPLv2" "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html" >}}
er bij nemen, dan zien we in paragraaf 3 het volgende staan:

{{< quote cloudemail >}}You may copy and distribute the Program *knip* in object code or executable form *knip* provided that you also do one of the following:

    a) Accompany it with the complete corresponding machine-readable source code *knip* or, 
    b) Accompany it with a written offer *knip* a complete machine-readable copy of the corresponding source code *knip* or, 
*niet commerciële knip*

*knip*
If distribution of executable or object code is made by offering access to copy from a designated place, then offering equivalent access to copy the source code from the same place counts as distribution of the source code*knip*{{< /quote >}}

Ik heb hier stevig in geknipt op de aangegeven plekken, maar neem vooral de originele tekst er bij om dit zelf te verifieren!  
Wat hier eigenlijk staat is dat als je zelf software maakt met OSS met een GPL licentie dat je dan ook de broncode moet 
meeleveren. Het moge duidelijk zijn dat dit niet het geval is en al helemaal geen "equivalent access".  

Maar de GPL zegt ook het volgende:

{{< quote cloudemail >}}You may modify your copy or copies of the Program or any portion of it *knip* and copy and distribute such modifications  *knip* provided that you also meet all of these conditions:

    a) You must cause the modified files to carry prominent notices stating that you changed the files and the date of any change. 
    b) You must cause any work that you distribute or publish *knip* to be licensed as a whole at no charge to all third parties under the terms of this License.*knip*{{< /quote >}}
Het moge duidelijk zijn dat hier op geen mogelijkheid aan voldaan wordt. Zowel Lydis als Yealink geven aan dat de OSS
gewijzigd is om er voor te zorgen dat "de veiligheid van het complete product gegarandeerd is".  
Laten we even een juridisch stapje terug doen en het toch weer even over duurzaamheid gaan hebben. Waarom is dit relevant?  

Wat Lydis en Yealink hier beweren is dat zij het harde werk van open source ontwikkelaars van het internet kopiëren en de
licentie vervolgens aan hun laars lappen. Vervolgens gaan zij zelf verbeteringen doorvoeren aan deze software, zoals ze
zelf beweren, maar laten ze het na om deze mooie contributies terug te leveren aan de OSS community en dit voor zichzelf 
te houden.  
Niet alleen is dat heel erg onsympatiek, maar het is ook nog eens illegaal. Maar Lydis en Yealink weten dondersgoed dat ze 
er mee weg kunnen komen omdat de meeste OSS projecten niet de juridische kennis en financiering aan boord hebben om hier
iets tegen te doen.  
Bovendien zal niet iedereen hier van op de hoogte zijn, omdat zij (ook na meerdere aanmaningen van mijzelf) geen licentie
meeleveren met de producten. Of zoals de GPLv2 het zelf verwoord:

{{< quote cloudemail >}}You may copy and distribute verbatim copies of the Program's source code as you receive it, *knip* provided that you *knip* publish on each copy an appropriate copyright notice *knip*; keep intact all the notices that refer to this License *knip* and give any other recipients of the Program a copy of this License along with the Program.{{< /quote >}}

In het kort staat hier: als je OSS software gebruikt, dan moet je de licentie meeleveren met je eigen product. Dat is ook
de reden dat er altijd zo'n licentie briefje bij b.v. je Garmin horloge zit.  

Lydis als importeur en distributeur en Yealink als fabrikant lijken dus bijzonder weinig te doen om daadwerkelijk te voldoen
aan de licentievoorwaarden en houden hun eigen wijzigingen voor zichzelf. En daar beschadig je de community mee en dat is
lastig onder duurzaam te vatten.

# Persoonsgegevens
Yealink en Lydis blijven tot op de dag van vandaag AVG/GDPR compliance claimen. Aangezien de communicatie met China moeizaam
is besluit ik om aan Lydis te vragen waar zij de claim
"{{< a_blank "Yealink voldoet aan de meest recente EU-regelgeving inzake gegevensbescherming" "https://www.lydis.nl/oplossingen/yealink-security" >}}
"
{{< a_blank "mirror" "https://web.archive.org/web/20240313192206/https://www.lydis.nl/oplossingen/yealink-security" >}}
op baseren. Het is niet moeilijk om deze claims op hun website te vinden.  

Ik stuur een email bericht aan de technisch directeur van Lydis:
{{< quote cloudquote >}}Ik heb in de afgelopen week met zeer veel mensen in de industrie gesproken en het is voor hen ook niet meer duidelijk waar de AVG claims op gebouwd zijn. Kunt u op deze vraag ook antwoord geven? Het is natuurlijk van belang dat overheidsorganisaties en, in de woorden van {{< censuur red >}}de algemeen directeur{{< /censuur >}}, "zelfs inlichtingendiensten", deze AVG claims wel op waarde moeten kunnen schatten nu het TÜV certificaat ongeldig is.{{< /quote >}}

{{< quote cloudquote >}}Zoals aangegeven hebben we de vraag voor meer informatie, over pentestrapporten en AVG-certificaat bij Yealink neergelegd{{< /quote >}}

Let wel: Lydis is in hun eigen woorden in december al ingelicht door TÜV dat het certificaat niet meer geldig is. In de 
drie maanden die hierop volgden heeft Yealink het blijkbaar niet nodig gevonden om deze vraag zelf te gaan stellen aan
Yealink. Zij hebben het ook niet nodig gevonden om claims van hun eigen website te halen naar aanleiding van de melding
van TÜV. Het laat zien hoe groot het blind vertrouwen van de Almeerse firma in Yealink is.  
Maar is dit nou een geval van slecht onderhoud van hun website of gaat het hier om beleid?  

Op 5 maart 2024 houdt Lydis een webinar "Videoconferentie in 
de Juridische sector". Aan het einde van dit webinar beweert de enthousiaste medewerker dat Yealink veilig is omdat zij 
een GDPR certificaat hebben.
<TODO: exacte quote beluisteren>
Uiteraard ben ik bijzonder geïnteresseerd in dit certificaat, maar zo weet ik: laat de presentatie even gebeuren, want
het is niet prettig om een presentatie te onderbreken voor je eigen vragen.  
Aan het einde van het webinar geeft de medewerker van Lydis aan dat hij het webinar nog even open laat staan zodat iedereen 
nog even vragen kan stellen. Ik reageer meteen dat ik geïnteresseerd ben in het GDPR certificaat en of hij daar meer over 
kan vertellen.  
De reactie is niet een reactie die ik eerlijk gezegd verwacht had, maar ik moest er toch hartelijk om lachen. Het webinar wordt
abrupt afgesloten door Lydis zonder dat ik of een van de andere luisteraars antwoord krijgen op deze vraag. Of ja... 
misschien juist wel.  
Uiteraard confronteer ik de technisch directeur met de uitspraken van de medewerker. Hij reageert per email met:  

{{< quote cloudquote >}}De vermelding in het seminar was inderdaad niet correct en is er in het maken van de content doorheen geslopen. We hebben verdere maatregelen intern genomen om herhaling te voorkomen.{{< /quote >}}

Dat is apart. Want is Lydis nu op de hoogte van het niet bestaan van een GDPR certificaat ("De vermelding in het seminar 
was inderdaad niet correct") en gebruiken zij deze claim bewust onterecht op hun website en in artikelen? Het alternatief
is dat zij niet op de hoogte zijn van het ingetrokken certificaat en dat ze zonder reden aangeven dat de claim niet in 
het webinar gemaakt had mogen worden. Voor een onderneming die op 14-4-2024 een email afsluit met "We zijn van mening dat we volledig transparant zijn in het delen van informatie" is dit behoorlijk moeilijk te volgen.

Maar: duurzaamheid: hoe gaan we met de maatschappij om? En dat gaat natuurlijk ook over persoonsgegevens. Hoewel bovenstaand
verhaal over de [AVG/GDPR]({{< ref "avg_gdpr" >}}) natuurlijk al niet te positief uitziet, is er natuurlijk geen hard bewijs 
dat er ook echt persoonsgegevens door Yealink of Lydis systemen gelekt worden....Maar is dat wel zo?  

In maart 2023 ben ik bezig om een koppeling te maken met de 
{{< a_blank "API" "https://support.yealink.com/forward2filesystem/attachment/upload/attachment/2019-2-26/5/fe3701af-d78e-4f6c-b78f-7148e6f5aad8/Yealink_Json_API_for_RPS_Management_Platform.pdf" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240311202534/https://support.yealink.com/forward2filesystem/attachment/upload/attachment/2019-2-26/5/fe3701af-d78e-4f6c-b78f-7148e6f5aad8/Yealink_Json_API_for_RPS_Management_Platform.pdf" >}}
van de 
{{< a_blank "Yealink RPS" "https://www.yealink.com/en/onepage/yealink-free-remote-provisioning-service" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20231004172859/https://www.yealink.com/en/onepage/yealink-free-remote-provisioning-service" >}}.
De Redirection and Provisioning Service (RPS) is de dienst waar dit onderzoek mee begonnen is. Het is de dienst waar alle
apparatuur van Yealink contact mee maakt bij het opstarten. Deze RPS dienst vertelt het apparaat (videobar of telefoon)
vervolgens waar de configuratie voor dit apparaat te vinden is.  

Het is mijn doel om mijn eigen provisioning servers te koppelen aan de RPS van Yealink zodat MAC <TODO> addressen van telefoons
automatisch aan mijn eigen servers gekoppeld worden. Een REST API heeft zogenaamde endpoints. Dit is functionaliteit die
gebruikt kan worden. Een van deze endpoints is /api/open/v1/device/list en deze kan gebruikt worden voor "Viewing the 
Device Information". Als test voer ik een POST request uit naar dit endpoint en ik krijg inderdaad een lijst terug
van Yealink devices die door mijn bedrijf beheerd worden. Het is wat vreemd dat dit een POST request moet zijn. Ik zou
zelf verwachten bij een REST API dat dit een GET request zou zijn. Voor de niet-technici onder ons: een POST request
wordt op het internet gebruikt om een object aan te maken ("Voeg een apparaat toe aan de RPS") een GET request 
zal worden gebruikt om informatie over een object op te halen ("Laat mij alle informatie zien van dit apparaat").  

Maargoed. Het "list device" endpoint dus. Ik krijg heel veel informatie terug als ik dit endpoint opvraag, maar wat mij 
ook opvalt is dat er reseller informatie terug komt van de API. Zo kan ik zien waar dit apparaat ooit verkocht is. Nu is 
dit in Nederland door het monopolie op VoIP toestellen niet zo interessant...of toch wel?  
In de reseller informatie staat het volgende:

        "resellerId": "306",
        "resellerName": "Lydis {{< censuur red >}}*************{{< /censuur >}}",

En inderdaad: dat is de volledige naam van de algemeen directeur van Lydis die hier terug komt. Ik vind dit nogal apart
dus ik schrijf hem op 14 maart 2023 een email bericht:

{{< quote cloudemail >}}Nog even wat aanvullende informatie:
Als ik voor "Lydis" mac adressen gegevens opvraag aan YMCS via de API, dan krijg ik de volgende gegevens terug:

        "resellerId": "306",
        "resellerName": "Lydis *********",

Uiteraard niets illegaals oid, maar ik neem aan dat het niet de bedoeling is dat je persoonlijk genoemd wordt in de API van Yealink?
{{< /quote >}}

Nog diezelfde dag komt hij met een geschrokken antwoord:

{{< quote cloudquote >}}Ok ,ik schrik hier van,ga er aan werken
<span>{{< censuur red >}}*************{{< /censuur >}}, algemeen directeur Lydis</span>
{{< /quote >}}

en 10 minuten later laat ook de technisch directeur van Lydis per email van zich horen:

{{< quote cloudquote >}}Het lijkt ons inderdaad niet nodig dat deze naam ook in de API genoemd wordt.
We gaan het laten aanpassen.
<span>{{< censuur red >}}*************{{< /censuur >}}, technisch directeur Lydis</span>
{{< /quote >}}

En hoe je het ook bekijkt: dit zijn identificeerbare persoonsgegevens die uit een publieke API van Yealink komen. 
Het laat maar weer zien hoe weinig er door Lydis aan controle gedaan wordt. Maar het laat ook zien dat ik ook op dit 
vlak zaken aan Lydis heb gemeld. Dit soort persoonlijke zaken zijn ook uit het artikel in FTM gehouden. Als Lydis niet 
stelselmatig en regelmatig met artikelen naar buiten was gekomen om dit soort feiten te ontkennen, dan was dit ook 
nooit naar buiten gekomen.
De reden dat ik dit nu wel doe is om te laten zien wat voor support Lydis meer dan een jaar van mij heeft gehad.
 
# CVD
Een responsible disclosure procedure of Coördinated Vulnerability Disclosure (CVD) is een procedure waarbij je als 
beveiligingsonderzoeker zaken meldt aan de fabrikant. In een normale tijdlijn neem je dan ong. 3-6 maanden waarna je 
zaken kunt publiceren. Je mag er dan van uit gaan dat de beveilingsproblemen zijn opgelost.  
Ik vraag aan Lydis naar hun CVD procedure. Ik krijg antwoord van de technisch directeur van Lydis:

{{< quote cloudquote >}}Wat betreft de vraag over de CVD-normen die we voornemens zijn om te volgen, hebben we in de praktijk te maken met Yealink die als fabrikant de issues afhandelt. Yealink heeft zelf een Vulnerability Disclosure Policy gepubliceerd: https://www.yealink.com/en/trust-center/resources waar jij ook gebruik van kunt maken.

Het heeft nog wat tijd nodig voordat Lydis haar eigen beleid kan publiceren, maar we ondersteunen en volgende deze manier van aanpak in principe nu al wel.
<span>{{< censuur red >}}*************{{< /censuur >}}, technisch directeur Lydis</span>
{{< /quote >}}

Laten we deze 
{{< a_blank "Yealink Vulnerability Disclosure Policy" "https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20230718/2023071801063423643ed8be449a48cef9595e4903e27.pdf" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240224142647/https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20230718/2023071801063423643ed8be449a48cef9595e4903e27.pdf" >}}
er dan maar eens bij nemen. Want wat staat hier eigenlijk in? Ik heb dit document al in meer detail besproken in het
artikel over de [Historische staat van beveiliging]({{< ref "historisch" >}}). Maar helemaal aan het einde van deze 
Disclosure Policy staat een heel belangrijke alinea:

{{< quote cloudemail >}}Regardless of whether the report submission is confirmed to be valid, you hereby agree to transfer all rights and interests (including all intellectual property) of all submitted vulnerability reports to Yealink.{{< /quote >}}

Deze alinea kan worden toegepast als een NDA. Het is een afschrikwekkende maatregel voor onderzoekers. Oppervlakkig 
lijkt het alsof er een goede procedure is voor het melden van datalekken maar in de praktijk blijkt dit een wurgcontract
te zijn waardoor je als beveiligingsonderzoeker niet meer over de rechten van je eigen onderzoek beschikt.  
Het is opvallend te noemen dat Lydis na meer dan tien jaar bestaan nog steeds geen eigen procedure heeft ontwikkeld voor
het melden van beveiligingsproblemen in de producten die zij importeren en distributeren.  

Zoals jullie eerder hebben kunnen lezen heb ik meerdere zaken aan Lydis en Yealink gemeld. Maar toch heeft Lydis
er voor gekozen om een Nederlandse beveiligingsonderzoeker sommaties te sturen.  
Dat is al een heel onprettige manier van zaken doen, maar ook de manier waarop zij dit hebben gedaan is wel heel erg 
bedreigend. Lydis heeft AKD N.V. de opdracht gegeven om niet alleen mijn bedrijf een sommatie te sturen. Maar zij hebben er 
ook voor gekozen om een sommatie aan mijzelf te versturen. De advocaat van Lydis maakt duidelijk dat er 7 miljoen schade
geleden is doordat ik met journalisten heb gesproken. En zij willen dit op mij gaan verhalen. Het leidt er in elk geval
toe dat mijn vrienden mij de man van min zeven miljoen noemen.  

De advocaat van AKD N.V. is er op gebrand om mij te ontlokken dat de uitspraken die ik doe voor zowel mijn B.V. als voor 
mij persoonlijk zijn.

{{< quote cloudquote >}}Zonder andersluidend tegenbericht gaan we er vanuit dat uw berichten ook namens u persoonlijk verstuurd worden.
<span>{{< censuur red >}}*************{{< /censuur >}}, advocaat Lydis</span>{{< /quote >}}

Ik begrijp prima wat hier geprobeerd wordt. En ik reageer met:

{{< quote cloudquote >}}Zoals u begrijpt zijn Epsys B.V. h.o.d.n. CloudAware en mijzelf twee verschillende entiteiten welke elk een eigen reactie zullen geven.{{< /quote >}}

Maar deze man is heel erg met mij begaan met mijn begrip van het juridische proces dus hij reageert vriendelijk terug met:
{{< quote cloudquote >}}Dat begrijp ik inderdaad, de vraag was of u het ook begreep. 
<span>{{< censuur red >}}*************{{< /censuur >}}, advocaat Lydis</span>{{< /quote >}}

Nice try...  

De sommaties zijn op dit moment nog niet publiek. Maar binnenkort ga ik ook volledige inzage geven in het juridische
proces waarbij de sommaties ook integraal gepubliceerd zullen worden. Voor dit artikel voldoet het om het antwoord wat mijn 
advocaat op vrijdag ochtend aan AKD N.V. verstuurd te vermelden:

{{< quote cloudquote >}}Mijn cliënten zullen niet voldoen aan de sommaties. Zij kiezen voor deze kwestie woonplaats aan ons kantoor.{{< /quote >}}

De oplettende lezer ziet het hier ook terug komen: "cliënten". Dat is de man van min zeven miljoen en zijn onderneming. 
Het ziet er wat verwarrend uit, maar juridisch gezien gaat het toch echt om twee verschillende entiteiten.  
De advocaat van AKD N.V. reageert op zaterdagmiddag wat geïrriteerd met:
{{< quote cloudquote >}}Het bericht maakt duidelijk dat aan de zijde van Hermans geen bereidheid bestaat om op enige wijze aan de sommatie gevolg te geven.{{< /quote >}}
Het begrijpend lezen zit er goed in bij deze meneer, want dat is inderdaad letterlijk wat mijn advocaat terug heeft 
gereageerd naar AKD N.V. Hierbij moet worden opgemerkt dat de sommaties bijzonder onsamenhangend zijn. Het is niet
mijn doel om iets illegaals te doen, maar ik moet wel mijn werk kunnen blijven doen. De begrijpend-lezen advocaat gaat
verder met:

{{< quote cloudquote >}}Lydis zal dan ook nadere juridische stappen tegen Epsys BV en de heer Hermans in persoon (ook los van zijn rol als bestuurder overigens) voorbereiden.{{< /quote >}} 

We kunnen er nu wel wat lacherig over doen, maar dit is natuurlijk totale intimidatie. Zo hoort een CVD niet te lopen.
Zoals ik eerder heb laten zien heb ik zelfs aan de directeur van Lydis gemeld als zijn eigen naam door de RPS servers
van Yealink gelekt wordt. Ik ben meerdere malen op kantoor geweest bij Lydis en ik heb nooit enige vergoeding gevraagd 
om mijn onafhankelijkheid te kunnen behouden. Dat een Nederlandse advocaat dit soort zaken op durft te schrijven is 
schokkend vind ik. Miljoenen euro's vorderen betekent dat ik dakloos zou worden. Het geeft aan dat Lydis blijkbaar
bereid was (is?) om mijn leven te verwoesten om zodoende mijn bevindingen uit beeld te houden.  
Ik moet er bij vermelden dat dit ook wel het laatste is wat mijn advocaat en ik over deze zaak van AKD N.V. hebben 
gehoord.

# Wetgeving
In Europa en in Nederland in het bijzonder hebben we allerlei regels en wetten die betrekking hebben op het bouwen van 
een mooie werkende maatschappijk. Denk hierbij aan anti-witwas wetgeving, privacy wetgeving, anti-terreur wetgeving en 
de bijbehorede registers zoals het handelsregister en het Ultimate Beneficial Owner (UBO) register. In het artikel over
het [bedrijfseconomisch overzicht]({{< ref "bedrijfseconomisch" >}}) heb ik duidelijk laten zien dat Yealink, Lydis en 
haar holdings tot aan de beursgenoteerde moedermaatschappijk, Econocom, niet voldoen aan een heel scala van deze wetten 
en regels.  
Op het moment dat je participeert aan een maatschappij en gebruik maakt van de lusten hiervan, zoals de infrastructuur,
het sociale vangnet en hoogopgeleide medewerkers dan ga je ook akkoord met de plichten die hierbij horen. Maar net zoals 
bij de OSS licenties wordt hier een selectief beleid gevoerd waarbij wel de lusten worden geplukt, maar niet de 
(collectieve) lasten worden gedragen.  
Ik begon dit artikel dat duurzaamheid betekent hoe je met de maatschappijk omgaat. Ik denk dat zowel Yealink als Lydis hier
grote steken laten vallen.

# RPS
Maar dat Lydis en Yealink ook een daadwerkelijk bedrijfsrisico kunnen vormen voor je onderneming bleek toen ik door een 
klant van mij werd opgebeld.  
Voor deze klant werk ik aan koppelingen met andere systemen voor zijn telefonie systeem. Een van deze koppelingen is met
het RPS systeem van Yealink. Op deze manier kan hij in zijn telefooncentrales een telefoon aanmaken en wordt deze telefoon
automatisch toegevoegd in het RPS systeem van Yealink. Hierdoor kan hij de telefoons dropshippen naar de eindklant.  
Maar in het telefoontje vertelt hij mij dat een nieuwe klant zijn telefoons niet kan gebruiken. Ik ga met hem meekijken 
met Anydesk en zie inderdaad dat de telefoons nog steeds factory defaults hebben. Ik vul handmatig de provisioning-url
in in alle telefoons, waarna de telefoon werken. Ik sluit de Anydesk verbinding af en bespreek met mijn klant dat ik op
zoek ga naar wat hier nou precies verkeerd is gegaan.  
Al snel zie ik dat het registreren van een telefoon in het RPS systeem niet werkt. Als ik in de web interface probeer in
te loggen krijg ik een mysterieuze melding: "Enterprise is frozen". Dat is vreemd. Ik dubbelcheck de combinatie 
gebruikersnaam/wachtwoord, maar ik blijf deze foutmelding krijgen. En zonder RPS werkt het dropshippen van apparatuur 
uiteraard niet meer. Ik bericht mijn klant dat dit het probleem is en dat hij even een ticket moet aanmaken bij Yealink
om dit opgelost te krijgen.  
Daarna ga ik in mijn eigen RPS proberen in te loggen en wat schetst mijn verbazing?

{{< img alt="enterprise is frozen" src="img/yealink/20230302_rps_frozen.png" >}}

Ook mijn RPS account doet het niet meer. Er zal wel een storing zijn bij Yealink, dus ik bel een concollega op of hij 
even kan proberen in te loggen. En hij kan meteen inloggen. Dat is vreemd. En ik besluit hier zelf op 20 december 2023 
ook een ticket over aan te maken bij Lydis.  
En dan blijft het stil. Heel erg stil. En ik stuur op 2 januari 2024 een reminder naar het ticketing systeem van Lydis. En 
wederom blijft het angstvallig stil. Ook mijn klant heeft nog geen antwoord ontvangen van Yealink. Op 8 januari 2024
stuur ik daarom opnieuw een reminder aan Lydis dat ik nog steeds op een antwoord en oplossing zit te wachten. Een dag later
ontvang ik een kort mailtje terug:

{{< quote cloudquote >}}Ticket is in behandeling, we zijn met Yealink bezig hierover. 

Zodra we meer info hebben zullen we die delen.{{< /quote >}}

En dan blijft het weer stil. Naïef probeer ik het op 2 februari 2024 nog een keer, maar ook op dit email bericht komt 
nooit meer antwoord door Lydis B.V.  

Op 15 februari tijdens de Teams meeting met Lydis stel ik dan ook de vraag: "Wordt CloudAware op een andere manier 
behandeld dan een willekeurige andere klant". De technisch directeur Lydis antwoordt: "Wat mij betreft niet". Ik ga 
verder met het verduidelijken van mijn vraag

{{< quote cloudquote >}}Stel als een Nederlandse klant van Yealink problemen heeft met de clouddiensten van Yealink en zij melden dat via jullie ticketing systeem. Op welke termijn worden zij dan geholpen?{{< /quote >}}

De nonchalant achterover hangende technisch directeur begint het te dagen zo blijkt uit zijn antwoord:

{{< quote cloudquote >}}Normaliter moet dat met een paar dagen gebeuren, maar ik weet wel waar je op doelt. Er staat een ticket open omdat de toegang tot de clouddiensten niet werkt. Ik ik hoop dat je begrijpt dat door de publicatie bij FTM CloudAware een vinkje achter de naam heeft gekregen van: "Wij vertrouwen het niet"
<span>{{< censuur red >}}**********{{< /censuur >}} technisch directeur Lydis</span>{{< /quote >}}

De reden waaarom















hoog risico als partner of reseller
Ook klant die niets met publicaties te maken heeft











