+++
author = "Jeroen Hermans"
title = "Historische staat van beveiliging"
date = "2024-03-01"
description = "Historische staat van beveiliging"
tags = [
    "historisch", "beveiliging", "lekken", "CVE", "Lydis", "Yealink"
]
image = "img/yealink/pexels-mike-bird-350784.jpg"
+++

test123
<!--more-->
Bewering dat er geen problemen zijn, maar
- Engelsman
- Duitsers
- Amerikaanse congres
- Verzonnen CVE nummers
- NetSPI

Beveiligingsrapport van NetSPI

CVE's


https://fuo.fi/CVE-2020-24113/
https://hackmd.io/@tahaafarooq/auth_rce_voip


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

Zoals ik al zei: 
