+++
author = "Jeroen Hermans"
title = "Firmware"
date = "2024-02-24"
description = "Firmware"
tags = [
    "firmware", "Lydis", "Yealink"
]
image = "img/yealink/pexels-markus-spiske-2004161.jpg"
+++
In april 2023 brengt zowel Lydis als Yealink een redelijk cryptische memo naar buiten. Het is niet eenvoudig in te zien 
wat de strekking van deze memo is, maar wat op dat moment nog niemand weet ben ik de oorzaak van deze memo en een direct 
gevolg van mijn samenwerking met Yealink en Lydis.
<!--more-->
I have added international translations of the articles using google translate:  

[{{< img alt="EN" src="img/uxwing/united-kingdom-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/firmware/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="DE" src="img/uxwing/germany-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/firmware/?_x_tr_sl=nl&_x_tr_tl=de&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="FR" src="img/uxwing/france-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/firmware/?_x_tr_sl=nl&_x_tr_tl=fr&_x_tr_hl=nl&_x_tr_pto=wapp)  

# Unpack
Laten we voorop stellen dat ik een redelijk matige reverse engineer ben, maar het was ook voor mij kinderlijk eenvoudig
om de "versleutelde" firmware van Yealink en Lydis uit te lezen. De reden hierachter was dat iemand al het lastige werk
voor mij gedaan had.  

In augustus 2019 had Tristan Pourcelot namelijk een fantastisch artikel geschreven over 
{{< a_blank "reversing firmware" "https://www.synacktiv.com/en/publications/no-grave-but-the-sip-reversing-a-voip-phone-firmware" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20231101233259/https://www.synacktiv.com/en/publications/no-grave-but-the-sip-reversing-a-voip-phone-firmware" >}}
van de firmware van Yealink.  
En niet alleen had hij een artikel hierover geschreven, hij had ook een GitHub repository gemaakt met de software die 
hij hiervoor gemaakt had. Jaren later in 2022 krijg ik dit artikel onder ogen en kan ik de firmware van Yealink en
Lydis eenvoudig uitlezen.  

De manier waarop de firmware "beveiligd" is leunt sterk op het principe van "security through obscurity". Yealink heeft 
een eigen beveiliging verzonnen die niet bij het grote publiek bekend is. Maar voor Tristan is het meteen duidelijk
hoe deze firmware uitgelezen moet worden.  
In het kort werkt de "beveiliging" als volgt:
- In de .rom file zitten meerdere filesystems aan elkaar geplakt.
- De eerste 512 bytes van de filesystem headers zijn versleuteld.
- Het filesystem zelf is niet versleuteld en is in cleartext blocks aanwezigin het .rom bestand. Ik weet niet waarom 
hier voor gekozen is, maar ik neem aan dat de SoC in de apparatuur niet krachtig genoeg is om het volledige filesystem
tijdens het booten te decrypten.
- De firmware is niet ondertekend (signed), waardoor het vaststellen van de integriteit...lastig is.
- De gebruikte versleuteling is AES-ECB. Waar hebben we dat ook weer eerder [gezien]({{< ref "versleuteling" >}})

Yealink brengt hier zelfs een memo over uit waar ik later op terugkom. In deze memo staat:
{{< quote cloudquote >}}Lydis customized firmware is affected{{< /quote >}}

...Lydis customized firmware... laten we daar even op inzoomen!

# "188" firmware
Het schrijven van een samenhangend verhaal over de findings in dit onderzoek is een aardige opgave. Er is zo veel 
informatie, tijdlijnen moeten worden nagezocht en laten we niet vergeten hoe belangrijk het is om informatie te 
controlen op waarheid. We hebben dat in een eerder artikel ook al gezien.  
En dat is ook voor dit artikel niet anders. En ik denk op dit punt in het verhaal is het goed om het over de "188" firmware te hebben.  

Yealink maakt regelmatig nieuwe 
{{< a_blank "firmware" "https://support.yealink.com/en/portal/docDetail?documentCode=105f1c68a5a54ee4" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240303161233/https://support-cdn.yealink.com/attachment/temp/20221108/24527720-098f-47a8-9513-edc14dd4dd1f.pdf?v=1667909984814" >}}
voor hun apparatuur. Wat hier b.v. opvalt is de firmwareversie in het formaat x.y.0.z.  
Hierbij is:
- x: het apparaat type
- y: de "major" versie
- "0": dit is een Yealink internationale versie
- z: het patch niveau

Als we naar de
{{< a_blank "Nederlandse firmware" "https://portal.lydis.com/download/yealink/Latest_Yealink_Firmware.zip" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240302151931/https://portal.lydis.com/download/yealink/Latest_Yealink_Firmware.zip" >}}
kijken dan zien we dat dit derde getal altijd, voor alle apparatuur, "188" is. De "188" firmware wordt alleen door Lydis
verkocht. Dus als een grote distributeur als Atis of Businesscom een Yealink apparaat verkoopt in Nederland, dan komt dit apparaat van
Lydis af met de "188" firmware.

Als we nu voor device "146" (DECT W70B) gaan kijken, dan zien we dat {{< a_blank "Yealink" "https://support.yealink.com/en/portal/docDetail?documentCode=105f1c68a5a54ee4" >}} 
{{< a_blank "mirror" "https://web.archive.org/web/20240303161233/https://support-cdn.yealink.com/attachment/temp/20221108/24527720-098f-47a8-9513-edc14dd4dd1f.pdf?v=1667909984814" >}}
op major versie 85 zit en op patchniveau 40.  
Als we nu in de Nederlandse firmware kijken, dan zien we voor dit device firmware: 146.85.188.8. Het patchniveau is dus 
32 ouder.  

En nu hoor ik de oplettende lezer denken: nou en? En dat is een terechte èn belangrijke vraag. Want het is duidelijk
dat de firmware versie die Lydis verkoopt in de BeNeLux ouder is dan de versie die alle andere landen ter wereld krijgen. 
Het is eenvoudig om te bepalen of dit een probleem is of niet en dus zoek ik voor dit apparaat een 
{{< a_blank "CVE" "https://nvd.nist.gov/vuln/detail/CVE-2019-14656" >}} er bij met een klinkende 
{{< a_blank "CVSS" "https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System" >}} 
van 8.8 ("do not 
properly check user roles in POST requests"). De CVE is van augustus 2019 en er wordt gesproken over een 
{{< a_blank "0-day exploit" "https://sway.cloud.microsoft/3pCb559LYVuT0eig" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240303162154/https://sway.cloud.microsoft/3pCb559LYVuT0eig" >}}
in juli 2019. Dat is op het moment van schrijven (maart 2024) dus al bijna 5 jaar geleden.  
Yealink geeft in hun 
{{< a_blank "eigen advisory" "https://www.yealink.com/en/trust-center/security-advisories/cve-2019-14656-yealink-phone-privilege-escalation-vulnerabilities" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240303160528/https://www.yealink.com/en/trust-center/security-advisories/cve-2019-14656-yealink-phone-privilege-escalation-vulnerabilities" >}}
aan dat dit gerepareerd is in 146.85.0.35  
Yealink laat de releasedates van hun firmware versies niet online staan, dus dit is niet meer te controleren wanneer dit 
is geweest. Aangezien patchlevel 25 in februari 2022 is uitgekomen, moet het daarna zijn.  
Dit betekent we kunnen hieruit dus het volgende concluderen:
- Klanten buiten de BeNeLux krijgen een patch voor een 0-day waar Yealink zelf en advisory voor heeft gemaakt pas na 
jaren aangeboden
- Klanten in de BeNeLux krijgen hun firmware exclusief in de "188" versie van Lydis
- In bovenstaand voorbeeld is uit het patchniveau af te leiden dat de klanten van Lydis nog steeds geen patch hebben
voor de CVSS van 8.8

Uiteraard heb ik ook aan Lydis gevraagd of het klopt dat hun firmware achter loopt op de internationale versie. Tijdens 
een interview met de technisch directeur van Lydis geeft hij aan dat dit komt:
{{< quote cloudquote >}}Zo houden we rust in de markt he. Omdat we veel carrier klanten hebben, die willen niet elke maand een nieuwe update willen ontvangen en die testen doorlopen. Nu kunnen we zelf min of meer bepalen wanneer we een grote update uitbrengen gebaseerd op de internationale versie en normaliter lopen we daar een aantal weken op achter omdat ze die nieuwe versie moeten maken. Maar we kunnen zelf beslissen naar carrier klanten moet je wel updaten of moet je niet updaten{{< /quote >}} (evidence-code: 2301171230)

Hiet geeft Lydis dus duidelijk aan dat de "188" firmware een ander release schema heeft dan de "0" internationale 
firmware. Tijdens het interview geeft de technisch directeur van Lydis aan dat als er "dringende" zaken zijn, dat er 
dan sneller een release kan plaatsvinden. Maar bovenstaande uiteenzetting van versienummers en datum laat zien dat
het er alle schijn van heeft dat die policy niet effectief is in het voorkomen van security problemen.  
De prioriteit ligt duidelijk op compatibiliteit en certificering van platformen zoals Teams en 3CX, en veel minder op 
security.  

Even terug naar de firmware die ik heb kunnen inzien. Yealink gaf hierover zelf aan dat het voor de internationale
firmware niet zo'n groot probleem was, maar dat de "Lydis customized firmware is affected". Hoe komt dit nou eigenlijk?  

Een van de belangrijke sellingpoints van de "188" firmware is de Nederlandse vertaling die Lydis voor Yealink heeft 
gemaakt. Op moment dat ik in Duitsland een telefoon koop van Yealink, dan kan ik hier geen Nederlandse taal selecteren.  
Doordat ik nu de firmware van Lydis heb kunnen inzien heb ik ook inzage in het Nederlands taalbestand van Lydis. Ik kan 
mij voorstellen dat Lydis dit als een handelsgeheim beschouwd.  

Maar een ander geheim in de "188" firmware zijn de provider codes. Als ik in de lijst van providercodes kijk, dan zie
ik klinkende namen staan:
- Lydis
- KPN
- Lanlogic
- SIP-NL
- VoipIT
- KPN EEN
- HIP Express Office
- Telfort Zakelijk
- Dean Connect (hulde heren voor de provisioning url!)
- Massxess IPCCC
- Esprittelecom Direct
- CBizz
- Tele2
- Telfort
- Proximus
- BellQ
- Mijnconfig
- StormKPN
- VofafoneOne  


Hoe  
``` 
[ autoprovision1 ]
Name = Lydis
code = #*188#
server_address = https://lydisprovisioning.nl
user = supersecret
password = TmljZSB0cnksIG1hYXIgbmVlLg==
AES = T29rIGhpZXIgbmlldHMgdGUgemllbg==
MAC_AES = RG9vcmxvcGVuIGF1Yg==
```


Carrier providercodes in te zien
Vertalingen in te zien.

"level" vertaald als "nivo"
"Call Push" vertaald als "Push
"Invalid Common AES Key!" "Ongeldige Standaard AES toets!"
https://taaladvies.net/buro-of-bureau-nivo-of-niveau-kado-of-cadeau/


1-12-2022:
"Who produces the "188" Dutch Lydis firmware? Is this Lydis or Yealink? Can you elaborate on the release procedure of this special firmware?"
 
20-1-2023:
[Answer]: Yealink produces the 188 Dutch firmware which based on the latest international firmware with customer’s customization items, like Dutch language and etc.
# Reactie Yealink
Yealink geeft een reactie
{{< a_blank "Yealink" "https://portal.lydis.com/download/yealink/gz_new_fw/YEALINK_IP_PHONE_SECURITY_ISSUE_APR2023.PDF" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240302220402/https://portal.lydis.com/download/yealink/gz_new_fw/YEALINK_IP_PHONE_SECURITY_ISSUE_APR2023.PDF" >}}
{{< quote cloudemail >}}The Yealink genetic firmware don’t have customized URL information preset, but Lydis customized firmware is affected because it has auto provisioning code.{{< /quote >}}
en
"Change the AutoProvision URL/username/password"

# Reactie Lydis
Reactie "unpacking" brief Lydis  
{{< a_blank "mailing" "yealink/Mailing_Lydis_Klanten_260423.pdf" >}} in april 2023  


{{< quote cloudquote >}}Beste “contactpersoon”{{< /quote >}}
Die aanhef geeft alvast "vertrouwen" in dit document.

"ondanks dat we vanuit de Benelux nog geen berichten
ontvangen hebben, maar omdat het in theorie een security issue is."

Er zijn wel berichten vanuit de BeNeLux en wel van mij. En het is niet in theorie een security issue, maar ik heb de provider codes uit de firmware gehaald.

Uit de {{< a_blank "Lydis security FAQ" "https://www.lydis.nl/over-ons/yealink-security-faq" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240226235252/https://www.lydis.nl/over-ons/yealink-security-faq" >}}
:
"Waar kan ik zien welke kwetsbaarheden er gevonden zijn in de beveiliging van Yealink producten?"
"Yealink scoort positief op cvedetails.com"

https://www.cvedetails.com/cve/CVE-2021-27561/
"unauthenticated remote code execution."
"Probability of exploitation activity in the next 30 days: 97.42%"




Achteraf aanpassen van firmwares, soms wel 7 jaar na EOL  

{{< a_blank "mailing" "https://support.yealink.com/en/portal/docList?archiveType=software&productCode=85585442c3aeb1fb" >}}
{{< img alt="SIP-T27P firmware releases" src="img/yealink/20240202_yealink_sipt27p_firmware.png" >}}

zie timing in presentatie  
firmware ineens x% groter dan voorheen,  
Van 7.41Mb naar 7.97Mb, dat is bijna 8% meer data

changelog: geen wijzigingen  
{{< a_blank "Changelog SIP-T27P" "https://support.yealink.com/en/portal/docDetail?documentCode=4a1a04e0b6be4a1b" >}}
{{< a_blank "mirror" "yealink/Yealink SIP Phone Release Notes.pdf" >}}


Aanpassen van datums naar maart 2015

{{< a_blank "SIP-T28P" "https://support.yealink.com/en/portal/docList?archiveType=software&productCode=b0d249cb02451c0d" >}}
{{< img alt="SIP-T28P firmware releases" src="img/yealink/20240302_sipt28p_firmwareversions.png" >}}




Open source in ander artikel??
GPL license
Lijst met open source software (incompleet)
{{< a_blank "open source software" "https://www.yealink.com/website-service/download/offer-source-of-open-source-software.pdf" >}}
{{< a_blank "mirror" "yealink/Offer Source of Open Source Software.pdf" >}}


Uit de {{< a_blank "Lydis security FAQ" "https://www.lydis.nl/over-ons/yealink-security-faq" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240226235252/https://www.lydis.nl/over-ons/yealink-security-faq" >}}
"Waarom bevat de Yealink software open source software?
Yealink heeft haar eigen software heeft geschreven voor de open source modules. Deze software zorgt ervoor dat de veiligheid van het complete product gegarandeerd is."



 
14-3-2023
Geachte heer Heide, Beste Cor,

Nog even wat aanvullende informatie:
Als ik voor "Lydis" mac adressen gegevens opvraag aan YMCS via de API, dan krijg ik de volgende gegevens terug:

        "resellerId": "306",
        "resellerName": "Lydis {{< censuur red >}}*************{{< /censuur >}}",

Uiteraard niets illegaals oid, maar ik neem aan dat het niet de bedoeling is dat je persoonlijk genoemd wordt in de API van Yealink?

Diezelfde dag:

Ok ,ik schrik hier van,ga er aan werken

Bedankt





Ook EULA (link naar ander artikel?)

