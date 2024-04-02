+++
author = "Jeroen Hermans"
title = "Conclusie"
date = "2024-03-16"
description = "Conclusie"
tags = [
    "conclusie", "Lydis", "Yealink", "AVG", "GDPR"
]
image = "img/yealink/pexels-jan-kroon-1038935.jpg"
+++
De afgelopen twee jaar waren een bizarre aaneenschakeling van gebeurtenissen. In het bijzonder de laatste maanden waren 
een rollercoaster waar heel erg veel gebeurd is.
<!--more-->
Het heeft geleid tot een serie van artikelen waarin ik uitgebreid ben ingegaan op alle feiten. Wellicht heeft u als lezer 
niet de tijd om alle artikelen te lezen. Of wellicht vindt u het fijn om alles nog een keer op een rijtje te zien.  

Daarom sluit ik vandaag, voorlopig, deze serie artikelen af. Ik zeg hierbij voorlopig, want het betekent niet dat ik
gestopt ben met mijn onderzoek. Er staan nog veel vragen open en door de serie artikelen waarin u nu aan het lezen bent
zijn er ook veel personen uit de telecom industrie naar mij toe gekomen met nieuwe informatie.  
Wordt vervolgt dus. Maar voorlopig ga ik mij even focussen op andere zaken zoals sporten en contacten met mijn vrienden.
Dat heeft de afgelopen maanden onvoldoende aandacht gekregen!  

# Techniek
Laten we beginnen met de techniek. Ik denk dat een groot deel van de lezers een sterke affiniteit met techniek hebben,
dus laten we daar dan ook mee beginnen. Mocht u deze affiniteit niet hebben: lees dan verder in het volgende hoofdstuk
en beschouw dit de samenvatting: Het ziet er niet zo goed uit!

## Versleuteling
Zoals ik in het artikel over [versleuteling]({{< ref "versleuteling" >}}) uitgebreid heb beschreven was dit onderwerp 
het startpunt van mijn onderzoek. Het ontwerpen en implementeren van een provisioning systeem leverde vrijwel meteen heel
serieuze vragen op over veiligheid. De keuze voor ECB-mode versleuteling heb ik tot op de dag van vandaag geen verklaring 
voor kunnen vinden.  
Ook is het onbegrijpelijk dat een firmware van de afmeting van Yealink a) een AES sleutel verliest in 2012 en hier b) 
pas in 2020 een oplossing voor verzint. In het meest gunstige geval getuigt dit van en onbeschrijfelijke nalatigheid.  
Wat deze zaak nog pijnlijker maakt is dat het Yealink lukt om de RSA private key van de "gerepareerde" encryptie tool
vrijwel meteen opnieuw te verliezen doordat deze netjes als .pem bestand meegeleverd werd. Wat hierdoor ook duidelijk 
is geworden, is dat de kennis van Lydis op dit vlak onvoldoende is gebleken. Naar aanleiding van mijn melding dat ook
de nieuwe RSA sleutel uitgelekt was heeft Lydis meerdere {{< a_blank "malen" "yealink/y000000000065_1.cfg" >}} 
{{< a_blank "voorbeeld" "yealink/y000000000065_2.cfg" >}} bestanden opgestuurd heeft waarin deze sleutel gebruikt werd.  
De latere uitleg van Lydis en Yealink dat het om een "demo" sleutel gaat die *uiteraard* niet gebruikt mag worden
moet dus met een korreltje zout genomen worden. Dat de encryption tool met grote spoed van de website gehaald werd
en vervangen door een nieuwe versie waar deze sleutel niet meer in zat spreekt dan ook boekdelen.  

## Open poort
Maar dat het gebrek van kennis niet ophoudt bij versleuteling blijkt wel tijdens de uitgebreide communicatie met Yealink 
en Lydis over [onverwachts netwerk gedrag]({{< ref "open_poort" >}}) van Yealink apparatuur. Op de VoIP telefoons blijkt 
poort 5060 open te staan. Op het moment dat de door Yealink voorgestelde oplossing doorgevoerd werd leverde dat alleen maar
grotere beveiligingsproblemen op.  
Nog schokkender is de verklaring die door Yealink gegeven wordt voor het open staan van een netwerkpoort. Uit deze 
verklaring blijkt heel duidelijk dat Yealink eenvoudigweg het verkeerde hoofdstuk van de betreffende
{{< a_blank "RFC" "https://www.rfc-editor.org/rfc/rfc3261.html" >}} heeft toegepast op hun apparatuur.  
Het getuigt van een gevaarlijk gebrek aan fundamentele kennis over netwerkwerking. Wat het nog pijnlijker maakt is dat
Yealink als grote speler in de telecommarkt regelmatig blijft verwijzen naar hun collega's, zoals Cisco en Poly. Zelfs 
op het moment dat Yealink geconfronteerd wordt dat deze beweringen onwaar zijn blijven ze dit volhouden. Het lijkt er 
haast op dat het om een soort helpdesk-script gaat.

## Firmware
Maar het gebrek aan technische kennis houdt daar niet op. Yealink gebruikt een eenvoudig algoritme om hun firmware onleesbaar
te maken. Hierdoor is het voor mij mogelijk om de firmware uit te lezen en hier belangrijke data uit te kunnen halen.  
Hierdoor is het voor mij mogelijk om te verifiëren dat er Open Source Software (OSS) gebruikt wordt waar de licentie
niet nagekomen wordt.  
Ook is duidelijk dat de BeNeLux de enige regio ter wereld is met haar eigen firmware die exclusief door Lydis verspreid
wordt: de "188" firmware. En het is al snel duidelijk dat deze firmware behoorlijk ouder is dan de firmware die de rest
van de wereld aangeboden krijgt. Niet alleen levert dit problemen op met beveiligingsgaten in de firmware die door Lydis
verspreidt wordt. Het levert soms ook vervelende problemen op zoals het niet kunnen doorverbinden. Een probleem wat al
gerepareerd was in de internationale firmware, maar waar de BeNeLux nog maanden op moest wachten.  

Maar daar blijft het niet bij. In de firmware staan ook heel erg gevoelige zaken, zoals de "provider codes". Dit zijn 
zaken zoals geheime sleutels en de url's van provisioning servers van partijen als Vodafone, KPN en Proximus.  

De reactie van Yealink en Lydis is het wijzigen van het versleutelingsalgoritme en het achteraf aanpassen van vrijwel 
alle firmwares. Ook voor EOL devices wordt de firmware aangepast soms meer dan 6 jaar na de laatste firmware update.  
Dat Yealink niet trots is op deze stap is duidelijk als ze niet alleen nieuwe firmware uploaden naar hun website, maar 
ook de uploaddatums naar 2015 wijzigen, zodat niet meer te zien is wanneer een firmware is aangepast.

## Historisch
Tijdens het (beperkte) onderzoek wat ik zelf heb kunnen uitvoeren zijn er dusdanig veel problemen naar voren gekomen dat
de vraag rijst of ik nu de eerste en enige ben die tot deze conclusie is gekomen... En dat blijkt niet zo te zijn.  
Gedurende het onderzoek [blijkt]({{< ref "historisch" >}}) dat er regelmatig beveiligingsonderzoekers met heel 
concrete conclusies naar buiten treden. Het lukt niet om met deze onderzoekers in contact te treden. De enige onderzoekers
die ik te spreken krijg willen nadat zij contact hebben gehad met Yealink niet meer met mij praten.  
In de verschillende documenten die ik tijdens het onderzoek boven water krijg komen nogal wat zaken aan bod. Zo schrijven 
onderzoekers dat zij persoonsdata via de RPS servers van Yealink hebben kunnen verkrijgen. Lydis verdraait in 
{{< a_blank "hun reactie" "https://portal.lydis.com/download/lydis/ftm/Article%20FTM-Yealink-160923-NL-Lydis_detail_reaction_short-v2.4.pdf" >}} {{< a_blank "mirror" "yealink/Article FTM-Yealink-160923-NL-Lydis_detail_reaction_short-v2.4.pdf" >}}
op het FTM artikel deze woorden door te zeggen dat er geen data op de RPS servers van Yealink wordt opgeslagen. Maar
als Lydis 
{{< a_blank "het artikel" "https://www.ftm.nl/artikelen/yealink-apparatuur-overheid-vitale-sectoren" >}}
correct gelezen had, dan hadden ze ook kunnen zien dat er staat dat deze persoonsdata "ontsloten" wordt via deze RPS
servers. En dat is ook precies wat deze (externe) beveiligingsonderzoekers hebben gedaan.  

Maar ook Yealink past strategieën toe om er voor te zorgen dat er zo weinig mogelijk transparantie is. Zo worden er
CVE nummers gebruikt welke niet terug te vinden zijn online en zijn links naar "spannende" CVE's incorrect.  
Ook wordt er regelmatig geschermd met beveiligingsrapporten van de firma's NetSPI, Spirent en Miercom. Maar als ik om deze
rapporten vraag om de bevindingen van mij en andere onderzoekers te ontkrachtigen blijft het heel erg stil.  
Ook lijken door TÜV Rheinland (positief) gepresenteerde bevindingen van een penetration test haaks te staan op een 
confidentieel rapport wat ik in handen heb gekregen van de Amerikaanse firma Chain Security. Het 
{{< a_blank "uitvoerige rapport" "yealink/letter_to_commerce_re_yealink_report.pdf" >}}
laat kinderlijke fouten in de beveiliging zien.

# Follow The Money
En toen was het september 2023. Het dossier is dusdanig concreet geworden met tientallen opnames van interviews en gigabytes
aan bewijsmateriaal dat ik samen met een aantal andere beveiligingsexperts als bron optreedt voor Follow The Money. Ik
heb immers vanaf de allereerste email met Lydis duidelijk aangegeven dat er gepubliceerd gaat worden.  
Het samenwerken met ervaren journalisten is een ervaring op zichzelf. Als je meer dan een jaar lang gegevens verzameld 
hebt over jaarrekeningen en technische bevindingen heb je nog geen artikel. Ervaren journalisten
{{< a_blank "Siem Eikelenboom" "https://www.ftm.nl/auteur/siem-eikelenboom" >}} en
{{< a_blank "Sebastiaan Brommersma" "https://www.ftm.nl/auteur/sebastiaan-brommersma" >}} hebben deze lastige rol op
zich genomen. Iets wat in mijn hoofd heel logisch leek bleek op papier niet zo uit de verf te komen. En 100-en keren
te horen krijgen "waarom" en "hoe kunnen we dat zeker weten" is het resultaat het
{{< a_blank "mooie artikel" "https://www.ftm.nl/artikelen/yealink-apparatuur-overheid-vitale-sectoren" >}} in FTM, De Tijd
en het Franstalige l'Echo.

# AVG / GDPR
25-3-2024
{{< quote cloudemail >}}Ik denk dat Lydis vorige week heel duidelijk heeft laten zien dat transparantie niet de bedoeling is toen ik uit het Q&A webinar ben gegooid. Uiteraard heb ik het webinar wel kunnen meevolgen omdat ik hier al op geanticipeerd had. Ik heb weer een aantal interessante zaken gehoord.

Ik wil heel duidelijk zijn: mijn vragen zijn aan Lydis gericht en niet aan Yealink.

Aangezien Lydis tot op de dag van vandaag GDPR teksten, logo's en (dode) links naar het ingetrokken GDPR certificaat blijft aanbieden, waar zijn deze GDPR claims op gebaseerd?{{< /quote >}}

25-3-2024
{{< quote cloudemail >}}Bedankt voor je mail {{< censuur red >}}*************{{< /censuur >}} is ziek thuis en zal later antwoorden.{{< /quote >}}

Ook AKD weer op de CC

| 20 maart 2024 | 27 maart 2024 |
|---------------|---------------|
| "Yealink Security - zorgeloos beveiligd" |
| {{< a_blank "before" "https://web.archive.org/web/20240320111558/https://www.lydis.nl/yealink-beveiliging-maatregelen" >}} {{< img style="border: 4px solid #999;" alt="Webpagina 20 maart 2024" src="img/yealink/20240320_screenshot_zorgeloosbeveiligd.png" >}} | {{< a_blank "after" "https://web.archive.org/web/20240327142007/https://www.lydis.nl/yealink-beveiliging-maatregelen" >}} {{< img style="border: 4px solid #999;" alt="Webpagina 27 maart 2024" src="img/yealink/20240327_screenshot_zorgeloosbeveiligd.png" >}} |
| "Veilige & Betrouwbare Yealink Hardware" |
| {{< a_blank "before" "https://web.archive.org/web/20240320111617/https://www.lydis.nl/oplossingen/yealink-security" >}} {{< img style="border: 4px solid #999;" alt="Webpagina 20 maart 2024" src="img/yealink/20240320_screenshot_yealinksecurity.png" >}} | {{< a_blank "after" "https://web.archive.org/web/20240327142034/https://www.lydis.nl/oplossingen/yealink-security" >}} {{< img style="border: 4px solid #999;" alt="Webpagina 27 maart 2024" src="img/yealink/20240327_screenshot_yealinksecurity.png" >}} |
| "Yealink Security & Compliance" |
| {{< a_blank "before" "https://web.archive.org/web/20240320111209/https://www.lydis.nl/support/yealink-security-en-opvolging" >}} {{< img style="border: 4px solid #999;" alt="Webpagina 20 maart 2024" src="img/yealink/20240320_screenshot_securityopvolging.png" >}} | {{< a_blank "after" "https://web.archive.org/web/20240327141354/https://www.lydis.nl/support/yealink-security-en-opvolging" >}} {{< img style="border: 4px solid #999;" alt="Webpagina 27 maart 2024" src="img/yealink/20240327_screenshot_securityopvolging.png" >}} |
| "Yealink Privacy Statement" |
| {{< a_blank "before" "https://web.archive.org/web/20240320111152/https://www.lydis.nl/support/yealink-privacy-en-security" >}} {{< img style="border: 4px solid #999;" alt="Webpagina 20 maart 2024" src="img/yealink/20240320_screenshot_privacysecurity.png" >}} | {{< a_blank "after" "https://web.archive.org/web/20240327141501/https://www.lydis.nl/support/yealink-privacy-en-security" >}} {{< img style="border: 4px solid #999;" alt="Webpagina 27 maart 2024" src="img/yealink/20240327_screenshot_privacysecurity.png" >}} |

# Bedrijfseconomisch

# Juridisch

# Uitkomst
Grote partijen zeggen van Yealink af te stappen
Ella / Hugo
encryption / decryption tool

# Bedankt
