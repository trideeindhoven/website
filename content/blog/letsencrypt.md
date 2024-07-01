+++
title = "Let's encrypt intermediate certificates"
description = "CloudAware"
date = "2024-06-26"
aliases = []
author = "Jeroen Hermans"
image = "img/blog/pexels-markus-winkler-1430818-19856610.jpg"
+++
Ik werd vorige week door een klant bij een probleem met hun certificate chain geroepen. Zij gebruiken Let's encrypt certificaten
en het bleek dat de certificate chain niet meer in orde was. Hoewel dit probleem in een uurtje geanalyseerd en opgelost was,
is het wellicht toch interessant om hier even over te berichten.
<!--more-->
Laten we eerst even kijken naar wat Let's Encrypt is en hoe het werkt.  
Let's Encrypt is een dienst waarmee het mogelijk is om kostenloos Transport Layer Security (TLS) certificaten aan te 
vragen voor webservers en emailservers. Deze 
dienst is opgezet door de {{< a_blank "Internet Security Research Group (ISRG)" "https://www.abetterinternet.org/" >}}. De ISRG 
zet zich in voor een "secure and privacy-respecting world" in het digitale domein. Zij doen heel veel mooie zaken en overweeg 
dan ook om een kleine donatie te doen aan deze organisatie.  
De organisatie heeft boardmembers van grote organisaties zoals Mozilla, Cisco, EFF en Amazon. Vervolgens hebben zij alle grote partijen
met een eigen certificate trust store zo ver gekregen om hun eigen self-signed certificate toe te voegen in hun trust store.
Nu zijn dit niet heel veel partijen die zo'n trust store beheren, maar het zijn wel heel grote partijen zoals Microsoft, Apple, 
Mozilla, maar ook Linux distributie makers zoals Red Hat. ISRG heeft twee van deze root certificates: X1 en X2. Alle certificaten 
welke door deze certificaten ondertekent worden zullen nu vertrouwd worden in je browser.  

{{< img alt="Mozilla trust store" src="img/blog/20240629_mozilla_trust_store.png" >}}  

ISRG heeft er echter voor gekozen om geen certificaten uit te geven met deze X1 en X2 certificaten, maar om hier nog een "tussen" 
certificaat tussen te plaatsen. Deze intermediate certificaten van ISRG zijn R10, R11, E5 en E6. 
De reden dat ISRG uitgegeven certificaten niet direct met de twee root certificaten X1 en X2 ondertekent kom ik zo op terug.  

Dit betekent dat een certificaat voor domein.nl een keten aan certificaten heeft. Elk certificaat in de keten hoort vertrouwd
te zijn voordat een website een "slotje" laat zien in de browser. Voor cloudaware.eu ziet dit (op dit moment) dan als volgt uit:
ISRG X1 -> ISRG E5 -> cloudaware.eu

{{< img alt="cloudaware.eu certificate chain" src="img/blog/20240629_ssllabs_cloudaware.eu.png" >}}  

Het eerste certificaat X1 is geïnstalleerd op je computer via een van de trust stores en is dus vertrouwd.  
Het E5 certificaat is ondertekend door het X1 certificaat en dus ook vertrouwd. Het cloudaware.eu certificaat is vertrouwd, 
omdat het ondertekend is door het E5 certificaat.  
Deze keten heet de "certificate chain". Elke stap in deze keten hoort "vertrouwd" te zijn. "Vertrouwd" betekent dat dat
certificaat aan een aantal zaken voldoet:
- huidige datum is niet voor de "Not Before" datum
- huidige datum is niet na de "Not After" datum
- het certificaat is geïnstalleerd in de certificate store van de computer OF is ondertekend door een vertrouwd certificaat in de keten.
- het domein in het certificaat komt overeen met de website URL. Dit gaat soms mis als iemand alleen domein.nl aanvraagt en de website ook op www.domein.nl bereikbaar moet zijn

Er zijn nog andere voorwaarden waar een certificaat aan moet voldoen, maar dit zijn de belangrijkste.  
Zelf de certificate chain van een website testen (en nog veel meer) kan kostenloos op de website van 
{{< a_blank "Qualys" "https://www.ssllabs.com/ssltest/" >}}.  

Nu hoor ik jullie sommigen van jullie al denken: E5? Het is toch R3? En dit is correct. Tot voor kort was het meest gebruikte intermediate 
certicate van Let's Encrypt R3. Dit R3 certificaat was in gebruik sinds september 2020, maar verloopt in september 2025 en het
is daarom nodig om voor die tijd alle nieuwe Let's Encrypt certificaten te gaan ondertekenen met een nieuw intermediate certificate.
En dat is het E5 (of R10, R11, E6) certificaat geworden. En dat was ook exact wat was misgegaan bij de klant. De certificate chain bevatte nog 
steeds het R3 certificaat, terwijl het domein.nl certificaat was ondertekend door E5. Het nieuwe E5 certificaat (en de 
andere intermediate certificaten) is geldig tot maart 
2027, dus over niet al te lange tijd moeten we weer goed gaan opletten dat de certificaat keten klopt.  
Uiteraard is het mogelijk om Let's Encrypt automatisch een correcte certificaat keten te laten genereren, maar in dit specifieke 
geval was er voor gekozen om het intermediate certificate vast te configureren.  

Laten we het even kort hebben over de term TLS. Sommigen van jullie denken wellicht: "Wacht eens even. Dit heet toch SSL?".
Dat is "soort van" correct. Secure Socket Layer (SSL) is de voorloper van TLS. Inmiddels gebruiken we al jaren geen SSL meer, maar
uitsluitend de opvolger TLS. De term SSL is echter zo ingeburgerd dat deze term nog vaak gebruikt wordt als we het over 
TLS hebben.  

Dan nog even over de intermediate certificates. Waarom niet gewoon het root certificaat (X1 of X2) gebruiken om certificaten 
uit te geven. Dit reduceert de lengte van de certificaat keten en maakt e.a. eenvoudiger. Er is echter een probleem met deze oplossing.
Als het root certificaat alle certificaten gaat ondertekenen, dan is het ook nodig om de private key van dit root certificaat 
elke keer te gebruiken voor de ondertekening. De kans van het uitlekken van deze key wordt hierdoor groter dan handig. Dit
is exact de situatie die is ontstaan bij het beruchte incident met DigiNotar. Doordat het root certificaat X1 en X2 geïnstalleerd is
in de trust stores van deze grote partijen is het ook lastig(er) om deze root-certificaten weer in te trekken en/of te vervangen.
Door eens in de paar jaar een nieuw intermediate certificate te maken is het niet meer nodig om voor elk uitgegeven certificaat 
de gevoelige private key van het root certificate te gebruiken.  
Bovendien is het mogelijk om intermediate certificates in te trekken aangezien deze niet in de trust-store geïnstalleerd zijn.
Dit werkt vrij eenvoudig doordat elke Certificate Authority (CA) zoals Let's Encrypt een Certificate Revocation List (CRL)
publiceert. Dit is in principe niets meer dan een lijst van certificaten die niet gewoon verlopen zijn in de tijd, maar actief 
ingetrokken zijn.  

In het geval van de klant was het probleem dus eenvoudig op te lossen door het statische R3 intermediate certificaat te vervangen 
door het statische E5 certificaat. De Apache server heeft in de documentatie staan:
{{< quote cloudemail >}}Alternatively the SSLCertificateChainFile can be the same as SSLCertificateFile when the CA certificates are directly appended to the server certificate for convinience.{{< /quote >}}

Door nu ook deze eenvoudige aanpassing te maken is de SSLCertificateChainFile ook dynamisch geworden en gaat dit in de toekomst automatisch goed bij het vervangen van het intermediate certificate.

