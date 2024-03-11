+++
author = "Jeroen Hermans"
title = "Duurzaamheid"
date = "2024-03-02"
description = "Duurzaamheid"
tags = [
    "duurzaamheid", "meehelpen", "Lydis", "Yealink"
]
image = "img/yealink/pexels-hasan-zahra-2118560.jpg"
+++
Hernoemen naar betrouwbaarheid/continuïteit?
<!--more-->
I have added international translations of the articles using google translate:  

[{{< img alt="EN" src="img/uxwing/united-kingdom-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/duurzaamheid/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="DE" src="img/uxwing/germany-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/duurzaamheid/?_x_tr_sl=nl&_x_tr_tl=de&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="FR" src="img/uxwing/france-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/duurzaamheid/?_x_tr_sl=nl&_x_tr_tl=fr&_x_tr_hl=nl&_x_tr_pto=wapp)  

sommaties, ook aan prive persoon
bereid om mijn leven kapot te maken
niet aan regels voldoen
- jaarstukken
- GDPR compliancy in EULA en bij datalek

# RPS
Van RPS afgegooid

{{< img alt="enterprise is frozen" src="img/yealink/20230302_rps_frozen.png" >}}

hoog risico als partner of reseller

# CVD 
denk ook aan 
{{< a_blank "Yealink Vulnerability Disclosure Policy" "https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20230718/2023071801063423643ed8be449a48cef9595e4903e27.pdf" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240224142647/https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20230718/2023071801063423643ed8be449a48cef9595e4903e27.pdf" >}}
op website Yealink
{{< quote cloudemail >}}Regardless of whether the report submission is confirmed to be valid, you hereby agree to transfer all rights and interests (including all intellectual property) of all submitted vulnerability reports to Yealink.{{< /quote >}}

Afschrikwekkend voor onderzoekers, vals gevoel veiligheid voor vendors

# Open source

GPL license
Lijst met open source software (incompleet)
{{< a_blank "open source software" "https://www.yealink.com/website-service/download/offer-source-of-open-source-software.pdf" >}}
{{< a_blank "mirror" "yealink/Offer Source of Open Source Software.pdf" >}}

Uit de {{< a_blank "Lydis security FAQ" "https://www.lydis.nl/over-ons/yealink-security-faq" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240226235252/https://www.lydis.nl/over-ons/yealink-security-faq" >}}
"Waarom bevat de Yealink software open source software?
Yealink heeft haar eigen software heeft geschreven voor de open source modules. Deze software zorgt ervoor dat de veiligheid van het complete product gegarandeerd is."


# API
In maart 2023 ben ik bezig om een python koppeling te maken met de 
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

Maargoed. Het "list device" endpoint dus. Ik krijg heel veel informatie terug als ik dit endpoint opvraagd, maar wat mij 
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

Zoals ik ook al in het email bericht zei: ik denk niet dat dit iets illegaals is, maar het laat maar weer zien hoe
weinig er door Lydis aan controle gedaan wordt. Maar het laat ook zien dat ik ook op dit vlak zaken aan Lydis heb gemeld.
En we hebben dit soort persoonlijke zaken ook uit het artikel in FTM gehouden. En als Lydis niet stelselmatig en regelmatig
met artikelen naar buiten waren gekomen over het artikel, mij en mijn bedrijf dan was dit ook nooit naar buiten gekomen.
De reden dat ik dit nu wel doe is om te laten zien wat voor support Lydis meer dan een jaar van mij heeft gehad.



Persoonsgegevens
14-3-2023
{{< quote cloudemail >}}Nog even wat aanvullende informatie:
Als ik voor "Lydis" mac adressen gegevens opvraag aan YMCS via de API, dan krijg ik de volgende gegevens terug:

        "resellerId": "306",
        "resellerName": "Lydis {{< censuur red >}}*************{{< /censuur >}}",

Uiteraard niets illegaals oid, maar ik neem aan dat het niet de bedoeling is dat je persoonlijk genoemd wordt in de API van Yealink?
{{< /quote >}}

Diezelfde dag:

{{< quote cloudemail >}}Ok ,ik schrik hier van,ga er aan werken

Bedankt{{< /quote >}}



