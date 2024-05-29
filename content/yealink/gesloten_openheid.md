+++
author = "Jeroen Hermans"
title = "Gesloten openheid"
date = "2024-05-29"
description = "Gesloten openheid"
tags = [
    "openheid", "Lydis", "Yealink", "AVG", "GDPR"
]
image = "img/yealink/pexels-pixabay-139392.jpg"
+++
Aangezien ik bezig ben met een aantal heel erg mooie zakelijke en privé projecten had ik niet verwacht om voor de zomervakantie weer opnieuw te gaan publiceren. Maar ik denk dat het goed is om toch nog even een korte tussen publicatie te maken.
<!--more-->
I have added international translations of the articles using google translate:  

[{{< img alt="EN" src="img/uxwing/united-kingdom-flag-icon.svg" style="display:inline; margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/gesloten_openheid/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="DE" src="img/uxwing/germany-flag-icon.svg" style="display:inline; margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/gesloten_openheid/?_x_tr_sl=nl&_x_tr_tl=de&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="FR" src="img/uxwing/france-flag-icon.svg" style="display:inline; margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/gesloten_openheid/?_x_tr_sl=nl&_x_tr_tl=fr&_x_tr_hl=nl&_x_tr_pto=wapp)  

Gedurende de serie publicaties over Yealink en Lydis gaf een lid van de directie van Lydis B.V. aan dat zij ook vonden dat de samenwerking op sommige punten wellicht nog beter had gekund en dat Lydis eigenlijk ook geen eerdere ervaring had met een responsible disclosure procedure.  
Evidence code: 2402161646  
  
Nou goed. Ook al heeft Lydis behoorlijk tegen mij geblaft, ik ben de laatste om dan niet te zeggen: “Zand er over” en de ogen voorwaarts, want hier ligt duidelijk een intentie om het in de toekomst beter te gaan doen. Dit wordt vanuit de Lydis directie nog een keer bevestigd als zij dit voornemen ook per email bevestigen:  

{{< quote cloudquote >}}We zijn van mening dat we volledig transparant zijn in het delen van informatie
<span>Lid directie Lydis B.V.</span>{{< /quote >}}

Uiteraard ben ik bijzonder geïnteresseerd in hoe deze nieuwe inzichten zich in de praktijk uiten en dus schrijf ik mij in voor een aantal webinars van Lydis.

De eerste van deze serie vindt plaats op 5 maart 2024 en heeft de interessante titel: “Videoconferentie in de Juridische sector”. Maar wat schetst mijn verbazing: tijdens deze presentatie wordt opnieuw aan de aanwezigen trots verteld over de AVG certificering. Uiteraard stel ik hier meteen een vraag over en een directielid antwoordt terug:

{{< quote cloudquote >}}De vermelding in het seminar was inderdaad niet correct en is er in het maken van de content doorheen geslopen. We hebben verdere maatregelen intern genomen om herhaling te voorkomen.
<span>Lid directie Lydis B.V.</span>{{< /quote >}}
Evidence code: 2403141641

Een bijzonder slordige fout, want dit is toch wel iets waar we het inmiddels al meer dan een half jaar over hebben en waar ook Follow The Money al over geschreven heeft. Het is in elk geval geen slordigheidje die je verwacht van een firma die videoconferencing apparatuur levert aan de juridische sector.

Ik besluit het nog maar eens te proberen op 19 maart 2024. Lydis organiseert opnieuw een webinar met een online “Q&A” sessie over Yealink. Ik heb mij een week eerder ingeschreven en een uur voor het webinar krijg ik een link opgestuurd:
{{< quote cloudemail>}}Je ontvangt deze herinneringsmail omdat u zich heeft geregistreerd voor het evenement: Live Q&A: Yealink videoconferentie.”.{{< /quote >}}

Maar wat schetst mijn verbazing: als ik op de link klik, zie ik:
{{< img alt="Screenshot geweigerd webinar" src="img/yealink/20240521_demio_blocked.png" >}}  

Blijkbaar vindt Lydis het toch niet zo’n goed idee om de voorgenomen “transparantie” ten uitvoer te brengen als het gaat om beveiligingsonderzoekers (die klant zijn en ook een debiteurnummer hebben).

Maar ik heb inmiddels geleerd dat ik terughoudend moet zijn met mijn vertrouwen en dus ben ik ook ingeschreven onder een andere naam. Met deze aanmeld link kan ik wel terecht in de meeting.

Ik vraag Lydis om commentaar en zij geven aan dat

{{< quote cloudquote >}}Wij denken niet dat het productief voor samenwerking is om onder valse naam deel te nemen aan een webinar dat georganiseerd is voor klanten.<span>Lid directie Lydis B.V.</span>{{< /quote >}}
Evidence code: 2405292343

Nu doet zich de bijzonder situatie voor dat Lydis en ik het helemaal met elkaar eens zijn. Zo hoort het niet te gaan. Maar de reden dat ik onder een andere naam in die webinars deelneem is niet omdat ik daar genoegen uit schep. De reden is omdat Lydis er alles aan doet om mij niet op de hoogte te houden. Dit ondanks dat we expliciet iets anders hebben afgesproken. En dus zit ik in de vervelende situatie dat ik zelf ook informatie achter moet houden. Ik kan immers niet vertellen welke klanten en medewerkers van Lydis mij informatie toespelen.

En dit verhaal herhaalt zich opnieuw op 21 mei wanneer ik opnieuw niet toegelaten word in een webinar van Lydis. Uiteraard zit mijn alter ego wel in deze meeting en hier vallen een aantal zaken op:

Allereerst zijn alle sheets en claims over security en privacy over de Yealink producten verdwenen. Hier worden dus geen onterechte claims meer gemaakt...maar dus ook geen terechte claims!

Op de sheets over de Yealink Room panels valt meteen iets op:
De room panels hebben een Android versie die niet meer ondersteund wordt: Android 10 of 11 (afhankelijk van het type). Het moge duidelijk zijn dat dit Android versies zijn die EOL zijn en geen security updates meer ontvangen: {{< a_blank "Android version history" "https://en.wikipedia.org/wiki/Android_version_history" >}}. Een eenvoudige zoekactie op "Android" en een cvss score van hoger dan 9 produceert een lijst van {{< a_blank "tientallen CVE's" "https://www.cvedetails.com/vulnerability-search.php?f=1&product=Android&cvssscoremin=9&page=1" >}}.
Uiteraard vraag ik importeur en distributeur Lydis weer om commentaar, maar ik krijg het teleurstellende antwoord:

{{< quote cloudquote >}}De Android-versie is nu echt zo’n voorbeeld waar Yealink als fabrikant de situatie en informatie bepaalt, en de vraag/opmerking daarom bij hun thuis hoort<span>Lid directie Lydis B.V.</span>{{< /quote >}}

Een te moeilijke vraag blijkbaar waarmee ik mij maar mee naar Xiamen moet wenden. En: dat zal ik uiteraard doen, maar het is wel heel erg bijzonder te noemen dat een Nederlandse importeur deze, vrij serieuze, security vragen niet kan òf wil beantwoorden.  
En uiteraard is het mogelijk dat Yealink eigenhandig alle tientallen "critical" security problemen in deze stokoude Android-versies heeft gerepareerd. Maar: dan moeten zij deze wijzigingen wel met de buitenwereld delen, omdat zij anders (opnieuw) de [GPL]({{< ref "duurzaamheid" >}}) overtreden. Welke van deze twee opties het is zal ik uiteraard meteen laten weten op het moment dat ik antwoord krijg uit Xiamen.

Maar dit is niet alleen een security probleem, het is ook een probleem voor alle organisaties die een ISO27001 voeren en volgens control A8.19 een procedure moeten hebben om “securely manage software installation on operational systems”.

Het directielid verhaalt verder dat:

{{< quote cloudquote >}}Het is belangrijk mee te nemen in het artikel dat Android 10 of 11 veelvuldig gebruikt wordt in de markt, en niet alleen Yealink dit toepast en dat de toepassing hier andere risico-afwegingen met zich meebrengt dan bij een doorsnee smartphone.<span>Lid directie Lydis B.V.</span>{{< /quote >}}

Het is een argument wat ik ook al vaker bij Yealink ben tegengekomen: "Iemand anders doet het ook, dus het moet wel goed zijn". In het artikel over de [netwerk poorten]({{< ref "open_poort" >}}) heb ik hier ook al over geschreven. Wat de "risico-afwegingen" nou precies zijn die hier gemaakt worden is mij eigenlijk geheel niet duidelijk.  

Maar zo schrijft het directielid:
{{< quote cloudquote >}}Yealink heeft wel een proces om meldingen over kwetsbaarheden af te handelen als die bekend worden<span>Lid directie Lydis B.V.</span>{{< /quote >}}

Dat is interessant dat hij hier over begint. Want over exact dit proces heb ik eerder geschreven in het artikel over de [historische staat van beveiliging]({{< ref "historisch" >}}). Deze "responsible disclosure" procedure is niets meer dan een wurgcontract voor beveiligingsonderzoekers. Niet alleen levert deze procedure geen enkele juridische veiligheid voor een onderzoeker ("Safe Harbor") ook betekent het tekenen van deze procedure dat je alle intellectueel eigendom over je eigen bevindingen kwijt raakt. Publiceren zit er dan in elk geval niet meer in!

We zouden het kunnen samenvatten als:
- Er worden besturingssystemen gebruikt die al jaren geen updates meer ontvangen.
- Er zijn tientallen "critical" CVE's bekend.
- De Nederlandse importeur wil of kan geen antwoorden geven hierover en verwijst naar de fabrikant.
- De beveiligings risico's van het merk beperken zich niet alleen tot VoIP en video producten, maar blijkbaar ook tot andere delen van het portfolio.

We lijken hier te maken te hebben met een organisatie die zegt te willen leren van hun eerdere gedrag, maar in de praktijk hier bijzonder slecht in scoort. Ik heb moeite om hardware en software te gebruiken van een organisatie die security denkt te bereiken door kritische onderzoekers buiten een webinar te houden. Daar hebben wij in de industrie een term voor: “Security through obscurity” en die term is dusdanig krachtig dat ik die niet eens hoef uit te leggen.

Tot slot ben ik natuurlijk heel erg benieuwd naar de “grote impact” die mijn publicaties heeft gehad op Lydis. In de [sommaties]({{< ref "sommatie_akd" >}}) die Lydis aan mijzelf en mijn B.V. heeft gestuurd wordt namelijk gesproken over een "serieus omzetverlies van minimaal 7 miljoen euro". Volgende week moet Lydis de jaarrekening 2023 opgemaakt hebben, waarna deze ({{< a_blank "uiterlijk" "https://www.kvk.nl/deponeren/uiterste-termijn-deponeren-jaarrekening/" >}}) over 2 maanden en 8 dagen gedeponeerd moet worden bij de Kamer van Koophandel.  
Er is uiteraard een uitstel mogelijk “in geval van bijzondere omstandigheden”. Mocht hier gebruik van gemaakt worden, dan ben ik uiteraard hoogst geïnteresseerd waarom de Nederlandse marktleider "bijzondere omstandigheiden" moet claimen.  

Wordt vervolgd...




