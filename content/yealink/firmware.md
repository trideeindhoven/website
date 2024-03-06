+++
author = "Jeroen Hermans"
title = "Firmware"
date = "2024-02-28"
description = "Firmware"
tags = [
    "firmware", "Lydis", "Yealink"
]
image = "img/yealink/pexels-markus-spiske-2004161.jpg"
+++
In april 2023 brengt zowel Lydis als Yealink een redelijk cryptische memo naar buiten. Het is niet eenvoudig in te zien 
wat de strekking van deze memo is, maar wat op dat moment nog niemand weet is dat de oorzaak van deze memo ikzelf ben 
en een direct gevolg van mijn samenwerking met Yealink en Lydis.
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
hier voor gekozen is, maar ik neem aan dat de 
{{< a_blank "SoC" "https://nl.wikipedia.org/wiki/System-on-a-chip" >}}
in de apparatuur niet krachtig genoeg is om het volledige filesystem
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
Als we nu in de Nederlandse firmware kijken, dan zien we voor dit device firmware: 146.85.188.8. Het patchniveau is dus "8" en 
dus ouder dan de firmware voor alle andere landen buiten het werkgebied van Lydis.  

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
Dit betekent dat we hieruit dus het volgende kunnen concluderen:
- Klanten buiten de BeNeLux krijgen een patch voor een 0-day waar Yealink zelf en advisory voor heeft gemaakt pas na 
jaren aangeboden
- Klanten in de BeNeLux krijgen hun firmware exclusief in de "188" versie van Lydis
- In bovenstaand voorbeeld is uit het patchniveau af te leiden dat de klanten van Lydis nog steeds geen patch hebben
voor de CVSS van 8.8

Uiteraard heb ik ook aan Lydis gevraagd of het klopt dat hun firmware achter loopt op de internationale versie. Tijdens 
een interview met de technisch directeur van Lydis geeft hij aan dat dit komt:
{{< quote cloudquote >}}Zo houden we rust in de markt he. Omdat we veel carrier klanten hebben, die willen niet elke maand een nieuwe update willen ontvangen en die testen doorlopen. Nu kunnen we zelf min of meer bepalen wanneer we een grote update uitbrengen gebaseerd op de internationale versie en normaliter lopen we daar een aantal weken op achter omdat ze die nieuwe versie moeten maken. Maar we kunnen zelf beslissen naar carrier klanten moet je wel updaten of moet je niet updaten{{< /quote >}} (evidence-code: 2301171230)

Hier geeft Lydis dus duidelijk aan dat de "188" firmware een ander release schema heeft dan de "0" internationale 
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
- VofafoneOne (sic)  

Dat klinkt in elk geval als een lijst van belangrijke partijen in Nederland en Belgie. Maar welke informatie staat er nu
daadwerkelijk zichtbaar in de firmware? Bestudering van het bestand autop_code.cfg levert de volgende data op:
- provisioning urls
- gebruikersnamen en wachtwoorden
- (base64 geëncode) AES sleutels voor de common en MAC specifieke configuratie

Goede beveiliging zal nooit op een enkele beveiligingslaag vertrouwen. Maar op deze manier worden er wel een aantal 
belangrijke lagen van beveiliging weggepeld. Nu ben ik iemand die dit netjes aan Lydis en Yealink heeft gemeld (vandaar 
de memo die naar grote klanten is uitgestuurd), maar het is natuurlijk niet bekend wie verder nog deze informatie in 
handen heeft gekregen. Dit leidt dan ook tot zeer ernstige beveiligingsvraagstukken voor enorm grote groepen gebruikers
bij de grote carriers in Nederland en België.  

Maar hoe ziet de configuratie er dan uit? Ik heb een voorbeeld genomen van een van de providercodes (Lydis, 188):

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
Het moge duidelijk zijn dat deze gegevens in handen van de verkeerde mensen de beveiliging en privacy van zeer grote 
groepen klanten van partijen als KPN, Vodafone en Proximus in gevaar brengen.  
Maar wat ook opvalt is dat er verschillende providercodes zijn zonder een AES sleutel. Dat betekent dat het document
niet versleuteld wordt met de methode zoals deze in het artikel over de [versleuteling]({{< ref "versleuteling" >}}) is
beschreven. Deze extra laag van beveiliging lijkt hier dan ook volledig te ontbreken.  
Ook zijn er enkele providers welke zelfs geen gebruikersnaam en wachtwoord hebben gebruikt voor hun provisioning. Ik
kan alleen maar gissen naar de beweegredenen om deze extra laag beveiliging niet te gebruiken.  

Als ik de firmware verder bestudeer zie ik ook het Nederlandse taalbestand staan wat de Lydis "188" firmware zo belangrijk
maakt in de BeNeLux. Helaas is het niveau van de vertaling bijzonder laag. Een aantal voorbeelden uit het (grote) 
taalbestand:
- Het Engelse "level" wordt als "nivo" vertaald. Nu vroeg ik mij meteen af if dit wellicht een toegestane 
schrijfwijze is. Maar een korte zoektocht bij Van Dale en 
{{< a_blank "andere sites" "https://taaladvies.net/buro-of-bureau-nivo-of-niveau-kado-of-cadeau/" >}}
laat duidelijk zien dat dit geen correct Nederlands is.
- Maar dan zie ik ook dat er verschillende Engelse termen niet vertaald zijn. Denk hierbij aan "Call Push" wat vertaald 
wordt als "Push". En dit keer hoef ik niet op te zoeken of dit een correct Nederlands woord is.
- Maar het kan nog erger. De Nederlandse vertaling van "Invalid Common AES Key!" lijkt wel geautomatiseerd door een 
computer gedaan. De vertaling is namelijk: "Ongeldige Standaard AES toets!". Hier is duidelijk dat de vertaling niet is
gemaakt door iemand die het Nederlands machtig is en waarschijnlijk een google-translate vertaling is.

De matige kwaliteit van de vertaling is extra zuur aangezien hier per telefoon extra voor betaald moet worden. Ik heb 
zelf een tijd lang telefoons uit Oostenrijk geïmporteerd. Deze telefoons hadden een (meer up-to-date) internationale 
firmware en ik laadde hier zelf een Nederlands taalpakket in. Deze constructie kostte (zelfs met verzendkosten in kleine 
hoeveelheden) minder dan "Nederlandse" telefoons bij Lydis inkopen.  

Tijd om vragen te gaan stellen dus. In december 2022 stel ik de eerste vragen over de "188" firmware aan Yealink:

{{< quote cloud >}}Who produces the "188" Dutch Lydis firmware? Is this Lydis or Yealink? Can you elaborate on the release procedure of this special firmware?{{< /quote >}}
 
Pas eind januari krijg ik antwoord van Yealink
{{< quote cloudemail >}}Yealink produces the 188 Dutch firmware which based on the latest international firmware with customer’s customization items, like Dutch language and etc.{{< /quote >}}
Dit wordt later ook door Lydis bevestigd dat zij deze firmware niet zelf bouwen, maar dat zij hiervoor alleen samenwerken
met Yealink in China.  

Als ik Lydis vraag of zij zelf eigenlijk wel eens onderzoeken hebben gedaan naar de beveiliging krijg ik van de 
directeur van Lydis het antwoord dat het allemaal op vertrouwen is gebeurd. Een ongelofelijke uitspraak die wellicht
prima verklaart wat ik tot nu toe allemaal gevonden heb.

# Reactie Yealink
En dus komt Yealink met een 
{{< a_blank "reactie" "https://portal.lydis.com/download/yealink/gz_new_fw/YEALINK_IP_PHONE_SECURITY_ISSUE_APR2023.PDF" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240302220402/https://portal.lydis.com/download/yealink/gz_new_fw/YEALINK_IP_PHONE_SECURITY_ISSUE_APR2023.PDF" >}}

Uit deze reactie hebben we al eerder een quote gezien in de inleiding. Het is een interessante zinssnede:
{{< quote cloudemail >}}The Yealink genetic (sic...?) firmware don’t have customized URL information preset, but Lydis customized firmware is affected because it has auto provisioning code.{{< /quote >}}
Wat deze "auto provisioning code" is en welke gevoelige data van grote hoeveelheden carrier klanten hiervan gebruik maken
weten we inmiddels. Het advies van Yealink is dan ook:
{{< quote cloudquote >}}Change the AutoProvision URL/username/password{{< /quote >}}

En hoewel dat als een goed advies klinkt zou het ook verwoord kunnen worden als: "We hebben de credentials gelekt van alle
grote carriers met meer dan 70% marktaandeel in de BeNeLux". Maar ik begrijp dat zo een mailing voorzichtig verwoord moet 
worden. Maar ik betwijfel of de carriers de noodzaak van deze memo hebben begrepen.

# Reactie Lydis
Maar ook Lydis ziet de noodzaak om zelf met een mailing te komen naar aanleiding van mijn melding. Zij sturen een 
{{< a_blank "mailing" "yealink/Mailing_Lydis_Klanten_260423.pdf" >}} naar hun grote klanten in april 2023.  

De memo begint met 
{{< quote cloudquote >}}Beste “contactpersoon”{{< /quote >}}
Die aanhef geeft alvast "vertrouwen" in dit document. Het document gaat verder met te vermelden:

{{< quote cloudemail >}}ondanks dat we vanuit de Benelux nog geen berichten ontvangen hebben, maar omdat het in theorie een security issue is.{{< /quote >}}

Er zijn wel berichten vanuit de BeNeLux en wel van mij. En het is niet in theorie een security issue, maar ik heb de provider codes uit de firmware gehaald. En hier zeg ik niet alleen zelf van dat dit gevoelige informatie is, maar ook Yealink en Lydis 
zijn dat met mij eens. Het is niet mogelijk om te weten voor zowel Yealink als Lydis of ik de enige persoon ben die deze
codes heeft ingezien of dat er nog 100 mensen de software van GitHub hebben gedownload en deze providercodes hebben 
ingezien. Bovenstaand is dus een grove manier van downplayen die wederom de belangrijke carrierklanten niet het gevoel
geeft dat er iets belangrijks heeft plaatsgevonden.  

Maar dit past wel in het plaatje wat ik van Lydis heb. In hun
{{< a_blank "security FAQ" "https://www.lydis.nl/over-ons/yealink-security-faq" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240226235252/https://www.lydis.nl/over-ons/yealink-security-faq" >}}
schrijven zij namelijk onder het kopje "Waar kan ik zien welke kwetsbaarheden er gevonden zijn in de beveiliging van Yealink producten?" het volgende:
{{< quote cloudemail >}}Yealink scoort positief op cvedetails.com{{< /quote >}}

cvedetails.com Is geen Libris Literatuurprijs. Het is een verzameling van CVE's en disclosures. Maar als we dan voor het
gedachtenexperiment meegaan in deze denkwijze, laten we dan even kijken wat er inderdaad op cvedetails.com over Yealink
gezegd wordt. Een van de eerste zoekresultaten is
{{< a_blank "CVE-2021-27561" "https://www.cvedetails.com/cve/CVE-2021-27561/" >}}.
En inderdaad is dit een mooie CVSS score: 10 op een schaal van 10. "unauthenticated remote code execution.". Het is wel
kenmerkend voor CVE's voor Yealink dat er iets mis is met hun authenticatie of authorisatie. Maar ook Remote Code
Execution (RCE) is iets wat is te vaak tegenkom voor een firma van deze statuur.  
cvedetails.com vervolgt het rapport met: "Probability of exploitation activity in the next 30 days: 97.42%"  

We kunnen dus inderdaad concluderen dat Yealink behoorlijk scoort op cvedetails.com. Het hangt er dan wel van af natuurlijk
wat de 
{{< a_blank "kleur van je hoedje" "https://veiliginternetten.nl/thema/kinderen-online/op-school/wat-het-verschil-tussen-een-white-hat-en-een-black/" >}}
is.

En dus besluit de telecomgigant uit Xiamen om de obfuscation van hun firmware aan te passen. En ze doen dit met terugwerkende
kracht ook voor EOL devices. Soms is dat wel {{< a_blank "6 jaar" "https://support.yealink.com/en/portal/docList?archiveType=software&productCode=85585442c3aeb1fb" >}}
na de laatste firmware update.  

{{< img alt="SIP-T27P firmware releases" src="img/yealink/20240202_yealink_sipt27p_firmware.png" >}}

Wat hier opvalt is dat de firmware update bijna een half jaar na de memo's van Yealink en Lydis verschijnt.  
Ook valt op dat de firmware ineens 8% groter is geworden. Ik zou niet weten waarom dit zou zijn. Het ZOU natuurlijk iets
met het nieuwe algoritme te maken kunnen hebben wat gebruikt wordt om de firmware onleesbaar te maken. Volgens de 
{{< a_blank "changelog" "https://support.yealink.com/en/portal/docDetail?documentCode=4a1a04e0b6be4a1b" >}}
{{< a_blank "mirror" "yealink/Yealink SIP Phone Release Notes.pdf" >}}
van de SIP-T27P zijn er in elk geval geen wijzigingen in de firmware zelf doorgevoerd.  

Maar zo zal Yealink zich toch niet helemaal goed hebben gevoeld bij deze surprise firmware update en hoe enorm zichtbaar
dit voor iedereen is. En daarom besluit de telecomgigant om alle {{< a_blank "release datums" "https://support.yealink.com/en/portal/docList?archiveType=software&productCode=b0d249cb02451c0d" >}} van firmware aan te passen naar maart 2015:
{{< img alt="SIP-T28P firmware releases" src="img/yealink/20240302_sipt28p_firmwareversions.png" >}}


Het blijft opvallen dat de transparantie van zowel Lydis en Yealink vaak ver te zoeken is. Hierbij moet ik wel opmerken
dat Lydis mij na een meeting enkele weken geleden beloofd heeft dat zij meer transparantie willen gaan uitdragen.  
Dit gebrek aan transparantie is opvallend te noemen aangezien zowel Yealink als Lydis dit voortdurend als verwijt naar
mij toe gebruiken. En....Lydis laat het niet bij verwijten. De advocaat van Lydis schrijft in beide sommaties:

{{< quote cloudquote >}}Tevens verzoeken danwel sommeren we u om per ommegaande doch uiterlijk aanstaande maandag 18 september 2023 om 12:00 uur helderheid te verschaffen aan ondergetekende over uw beweegredenen en opdrachtgever(s) althans daar in ieder geval transparant over te zijn
<span>Mr. {{< censuur red >}}******{{< /censuur >}} van AKD N.V.</span>{{< /quote >}}

Het blijft mij dan ook verbazen dat het juist op alle vlakken aan deze transparantie ontbreekt bij vrijwel alle 
bedrijven die bij Yealink betrokken zijn. Het is voor mij niet vast te stellen wat de beweegredenen hier achter zijn  
Tot zo ver dit artikel over Yealink en Lydis. Het volgende artikel komt uit op vrijdag 8 maart. Tot dan!

[Naar het volgende artikel]({{< ref "publicatie" >}})
