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
test123
<!--more-->
# Unpack
Eenvoudig om firmware uit te pakken

{{< a_blank "reversing firmware" "https://www.synacktiv.com/en/publications/no-grave-but-the-sip-reversing-a-voip-phone-firmware" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20231101233259/https://www.synacktiv.com/en/publications/no-grave-but-the-sip-reversing-a-voip-phone-firmware" >}}

Uitleggen hoe uitpakken werkte
YAFFS filesystem
- alleen eerste 512 bytes van de headers van het filesystem versleuteld.
- "File content is contained in cleartext blocks"
- "The firmware is not signed"
- "The custom encryption scheme of the upgrade file is very weak, and the new ones are all using the same shared AES key in ECB mode."
AES ECB waar hebben we dat eerder gezien?
[versleuteling]({{< ref "versleuteling" >}})

Carrier providercodes in te zien
Vertalingen in te zien.

188 firmware
NL firmware loopt achter en dat doen ze voor compatibiliteit. Security is hier van ondergeschikt belang.

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

Reactie "unpacking" brief Lydis  
{{< a_blank "mailing" "yealink/Mailing_Lydis_Klanten_260423.pdf" >}} in april 2023  


{{< quote cloudquote >}}Beste “contactpersoon”{{< /quote >}}
Die aanhef geeft alvast "vertrouwen" in dit document.

"ondanks dat we vanuit de Benelux nog geen berichten
ontvangen hebben, maar omdat het in theorie een security issue is."

Er zijn wel berichten vanuit de BeNeLux en wel van mij. En het is niet in theorie een security issue, maar ik heb de provider codes uit de firmware gehaald.


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

