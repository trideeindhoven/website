+++
author = "Jeroen Hermans"
title = "Inleiding"
date = "2024-01-01"
description = "Inleiding"
tags = [
    "inleiding", "Lydis", "Yealink", "AKD", "Martin Hemmer"
]
+++
Laten we beginnen met de vragen waarom, wie en wat. In die volgorde...
<!--more-->
# Waarom
*"Jeroen waarom doe je dit nu eigenlijk?"*. Een vraag die ik regelmatig van vrienden, collega's en familie krijg. Een
schijnbaar onschuldige vraag die wellicht toch belangrijker is dan deze op het eerste gehoor lijkt.
Als we even wat langer hier over nadenken dan lijkt het wel vreemd om een security researcher wel te vragen naar zijn 
beweegredenen, maar dit b.v. niet te doen bij een willekeurige andere beroepsgroep.  
Maar dat er ook ernstige verwarring over kan ontstaan bleek wel eerder tijdens het onderzoek toen de sommatie van 
AKD N.V. hier een daadwerkelijke complot theorie over op papier durfde te zetten:

{{< quote cloudquote >}}
Uw acties komen dus niet voort uit oprechte interesse maar vanwege externe opdrachtgevers met hun eigen belangen 
(Lydis tast in het duister over wie dat zijn (concurrenten, of zoals u zelf aangeeft misschien zelfs 
inlichtingendiensten uit welk land dan ook?) <span>Mr. Martin Hemmer - AKD N.V.</span>
{{< /quote >}}

Nu ik in een officieel juridisch document als een ware 007 neergezet wordt lijkt het mij tijd om dan toch maar in te gaan
op mijn beweegredenen.  
Het moge duidelijk zijn dat ik nooit geclaimd heb dat ik dit onderzoek voor een 
inlichtingendienst in binnen- of buitenland heb uitgevoerd. Dit is een zware verdraaiing van mijn woorden welke, 
blijkbaar zo maar door een advocaat in Nederland op papier gezet mag worden. Hoe hilarisch dit dan ook is, moeten we 
voor het echte begin van dit onderzoek een aantal jaren terug in de tijd.  
In de eerste maanden van 2016 kreeg ik een redelijk grote telecom opdracht van een klant van mij. Dit betekende dat er 
stapels aan telefoons geconfigureerd moesten worden. Nadat alles besteld was en aankwam in mijn appartement in Eindhoven, 
mijn toenmalige woonplaats, werden ook meteen de zogenaamde porteringen van honderden telefoonnummers ingediend. Het 
gaat wellicht wat ver om op dit proces in te gaan, maar het betekent dat er een deadline staat waar niet meer 
eenvoudig van afgeweken kan worden. De planning zag er goed uit, maar toen kwam toch meneer Murphy om de hoek kijken. 
En hoe! Mijn vader kwam te overlijden en dit betekende dat ik alle apparatuur naar mijn ouderlijk huis in Limburg 
verhuisde. Gedurende de dag was ik met mijn moeder en zus bezig om zaken te regelen zoals het uitkiezen van een kist 
voor mijn vader, terwijl ik in de avonduren en in de nacht op mijn oude tienerkamer bezig was om alles in orde te 
maken voor mijn klant.  

Toen ik die week ook nog private beveiliging moest inhuren om mijn ouderlijk huis, waar de voorraad lag, te bewaken 
tijdens de begrafenis nam ik me voor om een zogenaamd provisioning systeem te gaan implementeren. Provisioning is een
proces waarbij een nieuw apparaat, in dit geval telefoons, automatisch geconfigureerd worden als ze de eerste keer 
aangesloten worden. Hierdoor is het mogelijk om de apparatuur direct naar klanten te versturen zonder dat ik deze in 
mijn handen heb gehad. Het is een veel sneller en minder foutgevoelig proces.  

Het moge duidelijk zijn dat provisioning een gevoelig proces is. Tijdens dit proces worden gegevens zoals gebruikersnamen
en wachtwoorden over het internet verzonden. Het is daarom van belang dat dit proces veilig verloopt. Zonder hier in de 
inleiding al te diep in te gaan op de materie moge het duidelijk zijn dat ik toen al opmerkte dat de beveiliging van
de Yealink provisioning te wensen over liet. Door andere prioriteiten heb ik op dat moment besloten om hier zelf een 
extra beveiligingslaag voor te maken.  

Zes jaar later in 2022 bleek dat dezelfde beveiligingsproblemen zich nog steeds voordeden bij de Yealink apparatuur. Ik 
heb toen besloten om contact op te nemen met de distributeur die in de BeNeLux toendertijd het alleenrecht had op 
distributie van VoIP producten van het merk Yealink. Tijdens dit contact wat meer dan een jaar lang heeft geduurd 
kwamen steeds meer vraagstukken naar boven. Ook kregen verschillende partijen in de markt lucht van mijn onderzoek en 
namen spontaan contact met mij op met aanvullende informatie.  

Het besluit om dit onderzoek door te zetten is dan ook bedoeld om er voor te zorgen dat mijn telecom-klanten
gebruik kunnen maken van veilige technologie, maar ook uitmaatschappelijk belang. Door mijn uitgebreide ervaring met
beveiligingsvraagstukken kan ik hier een bijdrage aan leveren, wat vervolgens leidt tot betere producten en een
veiligere samenleving.

# Wie
Laten we het dan ook even hebben over de spelers in dit spel. Wie is wie?

## Yealink
De hoofdrol wordt ongetwijfeld door deze firma opgeëist. Het is een redelijk grote fabrikant van telecom apparatuur uit 
Xiamen, Fujian China. De firma is opgericht in 2001 en werkt inmiddels, naar eigen zeggen, samen met grote operators 
als Verizon, AT&T, Britisch Telecom, KPN, Proximus en Vodafone. Sinds enkele jaren heeft Yealink een Nederlandse B.V.
met een roerige geschiedenis. Hierover later meer.
## Lydis
Lydis is in 2013 opgericht en is gevestigd in Almere. Het overgrote deel van hun omzet halen zij uit de verkoop van 
producten van Yealink. Sinds 2023 maken zij via een aantal tussen-BV's deel uit van het beursgenoteerde Econom.
## Jeroen Hermans / CloudAware
CloudAware is de firma welke ik in mijn studententijd in 2002 heb opgericht. In de meer dan 20 jaar dat mijn firma 
bestaat heb ik gewerkt aan elektronische oorlogsvoering voor het Ministerie van Defensie, TNO, maar ook voor 
particuliere firma's.   

Waarom is dit relevant? Nadat Lydis mij via advocatenkantoor AKD de mond probeerde te snoeren door mij sommaties aan
zowel mijn prive-persoon als mijn B.V. te sturen hebben zij stelselmatig en regelmatig zelf over deze zaak gepubliceerd. 
Hierbij werd ik elke keer aangehaald als
{{< quote cloudquote >}}
zelfbenoemde security expert <span>Lydis</span>
{{< /quote >}}

Dit is bijzonder omdat ik toch al jaren met werk in (cyber-) security en hier soms (wanneer dat toegestaan is) hier over
in de publiciteit treed. Zo is mijn onderzoek naar een gebouwtoegangssysteem gepubliceerd: [Comelit](https://www.youtube.com/watch?v=dR9SttG-d1o)  
Ook heb ik in datzelfde jaar gepubliceerd over de homologatie van regelgeving van banken in de EER [PSD2](https://www.youtube.com/watch?v=8d2upc95-HE)  

Eind 2023 heb ik na een langdurige responsible disclosure procedure samen met de firma Paxton een [kritiek beveiligingslek](https://nvd.nist.gov/vuln/detail/CVE-2023-43870) gerepareerd.  
En recentelijk heb ik met mijn firma als teamlead opgetreden van een securityteam in een ministerie. Het feit dat Lydis 
niet van mij op de hoogte is betekent natuurlijk niet dat ik "zelfbenoemd" ben.  

Dan blijft er natuurlijk wel nog de vraag open staan waarom Mr. Hemmer van AKD een complottheorie over mij op papier
zet. Ik heb in het verleden met en voor inlichtingendiensten in binnen- en buitenland gewerkt. Ik heb hier nooit een 
geheim van gemaakt, maar ook niet als zodanig mee naar buiten getreden. Ik kan alleen maar concluderen dat het complot
in de sommaties voortkomt uit een ernstige verdraaiing van mijn woorden tijdens onze meeting op kantoor in Almere. 
Ach ja... het leverde mij uiteindelijk wel een glimlach op en "gelukkig hebben we de opnames nog". En uiteraard zal hier
een aparte publicatie aan gewijd worden.

# Wat
Dat brengt ons bij de "wat". Wat is er nou eigenlijk aan de hand? In het kort gaat het om een uit de hand gelopen
responsible disclosure traject, waarbij zowel Lydis als Yealink zich (juridisch) dreigend naar mij uitgelaten hebben.  
Maar los van hoe deze firma's op mij hebben gereageerd zijn er zo veel feiten op tafel gekomen in de afgelopen 1.5 jaar
dat ook al deze randverschijnselen interessant beginnen te worden. Denk hierbij aan economische delicten van 
beursgenoteerde bedrijven, aantoonbare leugens van een van de grootste certificerings en audit firma's in Europa, 
zwijgende security experts die in het verleden gepubliceerd hebben en hoe komt een Chinese firma eigenlijk aan een
70% marktaandeel in de BeNeLux?.  

Deze serie van publicaties zal een zo compleet mogelijk document worden van alle bevindingen die ik heb gevonden, maar
ook hoe dit door mijzelf ervaren is. Ik hoop dan ook van harte dat het een interessant document is waar 
beveiligingsonderzoekers die met eenzelfde traject bezig zijn iets aan hebben.  

Tot slot wil ik nog het volgende kwijt aan directeur Cor Heide en Gijsbert Zijlstra van Lydis: ik betreur de harde toon die 
jullie hebben gebruikt naar aanleiding van mijn bevindingen. Bevindingen die ik in 2022 exclusief met jullie heb gedeeld
om Lydis te helpen een beter product op de Nederlandse markt te brengen. Ik heb jullie nooit om geld gevraagd en ik heb 
met grote interesse gevolgd toen jullie invloed probeerden uit te oefenen op leden van de Nederlandse pers.
Laten we dat in de toekomst ajb anders doen.

