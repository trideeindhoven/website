+++
author = "Jeroen Hermans"
title = "Historische staat van beveiliging"
date = "2024-03-11"
description = "Historische staat van beveiliging"
tags = [
    "historisch", "beveiliging", "lekken", "CVE", "Lydis", "Yealink"
]
image = "img/yealink/pexels-mike-bird-350784.jpg"
+++
Het is niet voor te stellen dat ik de eerste en enige beveiligingsonderzoeker ben die tegen problemen bij Yealink is 
aangelopen. En dus heb ik besloten om onderzoekers te gaan onderzoeken. Een speurtocht die soms meer dan 10 jaar terug in
de tijd gaat.
<!--more-->
I have added international translations of the articles using google translate:  

[{{< img alt="EN" src="img/uxwing/united-kingdom-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/historisch/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="DE" src="img/uxwing/germany-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/historisch/?_x_tr_sl=nl&_x_tr_tl=de&_x_tr_hl=nl&_x_tr_pto=wapp)
[{{< img alt="FR" src="img/uxwing/france-flag-icon.svg" style="margin-top:5px;margin-bottom:5px;width:50px;">}}](https://cloudaware-eu.translate.goog/yealink/historisch/?_x_tr_sl=nl&_x_tr_tl=fr&_x_tr_hl=nl&_x_tr_pto=wapp)  

Volgens de 
{{< a_blank "Security FAQ" "https://www.lydis.nl/over-ons/yealink-security-faq" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240306181308/https://www.lydis.nl/over-ons/yealink-security-faq" >}}
van Lydis worden de producten onafhankelijk getest en deze testhuizen
{{< quote cloudquote >}}komen tot de conclusie dat er "geen kwetsbaarheden" te vinden zijn.{{< /quote >}}

Het is eigenlijk pas tijdens het schrijven van dit artikel dat het mij opvalt dat "geen kwetsbaarheden" tussen 
aanhalingstekens staat. Met de kennis van wat ik hieronder ga schrijven is dit wel heel erg sarcastisch.  

Laten we dat dan gaan proberen te staven. En ik vind vrij snel een presentatie van Cal Leeming uit de UK. Zijn presentatie
heet
{{< a_blank "Auto provisioning sucks" "https://www.slideshare.net/sleepycal/auto-provisioning-sucks" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20230223063802/https://www.slideshare.net/sleepycal/auto-provisioning-sucks" >}}
en dat is natuurlijk al een behoorlijk pakkende titel. 

En meteen aan het begin van de presentatie verwoordt hij het in niet al te voorzichtige woorden:
{{< quote cloudquote >}}how would you feel if..
- You found a vulnerability that allows malicious user to extract user creds remotely with no authentication
- Your supplier was shipping you vuln devices by default
- The vendor did not fix the problem entirely
- All your customers were affected

This is the BS I had to deal with in June 2012 {{< /quote >}}

Ook geeft hij aan dat hij een disclosure procedure met Yealink heeft gevolgd
{{< quote cloudquote >}}Disclosed June 2012, patched Aug 2012, problem still exists{{< /quote >}}

Dat klinkt niet echt alsof er in 2012 "geen kwetsbaarheden" waren in Yealink apparatuur. En in zijn presentatie wordt het
ook maar al te duidelijk dat de RPS een centrale rol in de problemen speelt...Toen ook al.  

Wat verder ook opvalt in zijn presentatie is dat het toen ook al kinderlijk eenvoudig was om de 
[firmware uit te lezen]({{< ref "firmware" >}}). Iets waar ik in een eerder artikel ook al over geschreven heb. 
Daar lijkt in 12 jaar tijd dan bijzonder weinig in gewijzigd te zijn.  

Hij sluit zijn presentatie af met de woorden
{{< quote cloudquote >}}Poke around, you will be shocked at what you find.{{< /quote >}}  

Dit klinkt als iemand die verstand van zaken heeft met een wellicht wat ongebruikelijke manier van verwoorden. Ik wil Cal
uiteraard graag spreken en ik stuur hem een emailbericht
{{< quote cloudquote >}}You are the only person though whom i know that has actually disclosed a vulnerability to Yealink. I am very interested in that process.

Would you be willing to have a phonecall with me or an online meeting to discuss some of these issues? {{< /quote >}}

Ik zal nooit meer iets horen van Cal Leeming ondanks dat ik ook geen foutmelding terug krijg van de emailserver waar ik
het bericht naartoe heb gestuurd.

En als ik verder zoek dan vind ik een artikel in Heise Online met de titel 
{{< a_blank "Grave Vulnerabilities Discovered in Yealink‘s VoIP Services" "https://www.heise.de/news/Grave-Vulnerabilities-Discovered-in-Yealink-s-VoIP-Services-4654617.html" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20230506103652/https://www.heise.de/news/Grave-Vulnerabilities-Discovered-in-Yealink-s-VoIP-Services-4654617.html" >}}.
Het artikel is 8 jaar na de presentatie van Cal Leeming gedateerd, maar ook in dit artikel zijn de onderzoekers niet 
heel positief over de beveiliging van de cloud service van Yealink. Ik begin het artikel te lezen en mijn vermoeden wordt 
bevestigd dat de beveiligingsproblemen zich in een groot deel van het portfolio voordoen.

{{< quote cloudquote >}}VTrust’s research indicates that the company’s entire product line is susceptible to the flaws
<span>Heise.de</span>{{< /quote >}}

De onderzoekers van Vtrust hebben veel dieper naar de technologie gekeken dan ik heb gedaan en dus is het interessant 
om te lezen of er mogelijk data weggelekt kan zijn. Het artikel beschrijft dat de onderzoekers van Vtrust gebruikersdata
hebben kunnen "swipen", waaronder

{{< quote cloudquote >}}users‘ login credentials, phone books, caller lists, programmed shortcuts and other user-specific information by hijacking the service.{{< /quote >}}

Het klinkt bijzonder ernstig en het bevestigt het sterke vermoeden wat ik zelf al had. Hier wil ik natuurlijk meer van weten
en ik neem contact op met Vtrust. In een online meeting spreek ik met de twee oprichters van het bedrijf uit een dorpje
vlakbij Frankfurt. Zij zijn niet verbaasd dat ik ook tegen problemen in de beveiliging van Yealink ben gelopen. Ik vraag
hen hoe ze eigenlijk weten dat ze aan die gevoelige gegevens kunnen komen. Trots vertellen ze mij dat ze een python script
hebben gemaakt waarmee het mogelijk is om voor een telefoon de provisioning gegevens op te halen. Het maakt hierbij niet 
uit waar ter wereld deze telefoon staat of dat deze telefoon ingeschakeld is. Ik ben uiteraard erg benieuwd en het tweetal
besluit hun terminal te delen met mij. Op het scherm zie ik een Linux prompt waar een commando ingetikt wordt. Het 
opgestarte programma vraagt om het MAC adres van een Yealink telefoon. Ik geef hen het MAC adres van mijn test-telefoon
en na ongeveer 10 seconden staat de configuratie van mijn eigen telefoon op hun scherm. Het is duidelijk dat het "client
certificaat" om verbinding te maken met de RPS dienst van Yealink on-the-fly aangemaakt wordt. Ik vraag hen hoe ze dat 
doen, want hier zullen ze toch een root certificaat voor nodig hebben wat door de RPS server van Yealink vertrouwd wordt.  
Even is het stil en dan geven ze toe dat ze dit certificaat hebben gevonden in de Android firmware van Yealink. Opnieuw 
een gelekt certificaat dus.  

We besluiten de meeting op een hartelijke manier en spreken af om in contact te blijven. De volgende week neem ik weer 
contact met hen op met aanvullende vragen. Meteen aan het begin van het gesprek is de toon bijzonder defensief. Ze hebben 
contact gehad met Yealink geven ze aan en ze hebben geen vertrouwen dat ik ter goede trouw handel. Ik geef aan dat ik
daar best aan wil werken zodat dat vertrouwen er wel komt. Ik stel voor om hen in contact te brengen met FTM. Het lijkt 
mij een goede stap om te laten zien dat ik geen kwaadaardige hacker ben die hun bevindingen wil misbruiken. Maar de 
boodschap is duidelijk: er is geen vertrouwen en ze willen niet meer met mij praten.  
Verbijsterd leg ik de telefoon neer en vraag me af wat hier nou eigenlijk besproken is met Yealink. Ik zal er nooit 
achter komen en de communicatie met Vtrust wordt nooit meer hersteld. Dit is al de tweede keer dat een beveiligingsonderzoeker
niet meer met mij wil praten.  

En dan krijg ik een 
{{< a_blank "brief" "yealink/letter_to_commerce_re_yealink_report.pdf" >}}
in handen van Amerikaanse senator 
{{< a_blank "Chris Van Hollen" "https://en.wikipedia.org/wiki/Chris_Van_Hollen" >}}
van de democratische partij. Hij schrijft aan Gina Raimondo, Secretary U.S. Department of Commerce dat hij zich zorgen 
maakt over een recent beveiligingsrapport over de Yealink T54W VoIP telefoon en...
het Yealink Device Management Platform.
{{< quote cloudquote >}}We would appreciate if you could respond to us in writing as to whether you are aware of the security concerns raised by this report{{< /quote >}}

In plaats van alleen naar China te wijzen is het volledige, zeer gedetailleerde, rapport bij de brief gevoegd.  
De conclusies in het rapport zijn keihard:
{{< quote cloudemail >}}
- The Yealink Device Management Platform (YDMP) is a source of significant vulnerability and threat to any VoIP systems operator or company that relies upon it
- The T54W exhibits poor security behavior when installed in its default configuration on a standard VoIP network
- The Yealink IP phone, as designed and as the firmware is implemented, provides the ability for a malicious 3rd party, with access to the phone’s network, to conduct a Man-In-The-Middle (MITM) attack on the customer phone/network with plausible deniability on the part of Yealink.
{{< /quote >}}
En hier zien we een aantal zaken terug komen die we in eerdere artikelen van mij ook terug zagen komen. De matige
default instellingen hebben we het over gehad in het artikel over de [open poort]({{< ref "open_poort" >}}). Het is ook interessant te zien dat de plausible deniability hier genoemd wordt. Dit is een uitspraak die ik ook te horen kreeg van 
een cryptografie expert waar ik over schreef in het artikel over de [publicatie]({{< ref "publicatie" >}}).  

Maar ik ben eigenlijk ook geïnteresseerd in hoe Lydis en Yealink zelf vulnerabilities bekend maken. Ik ga naar de website 
van Lydis en bezoek de pagina over 
{{< a_blank "security adviezen" "https://www.lydis.nl/over-ons/yealink-security-adviezen" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240306181049/https://www.lydis.nl/over-ons/yealink-security-adviezen" >}}.
Het valt op dat deze pagina redelijk leeg is. Het Yealink management platform heeft maar één enkele CVE (CVE-2021-27561). Ik besluit de 
{{< a_blank "advisory" "https://www.yealink.com/en/trust-center/security-advisories/yealink-device-management-ssrf-vulnerability" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240111192244/https://www.yealink.com/en/trust-center/security-advisories/yealink-device-management-ssrf-vulnerability" >}} er bij te nemen en te bestuderen.
In de advisory is te lezen dat het behoorlijk fout is gegaan:
{{< quote cloudemail >}}Yealink Device Management allows command injection as root via the /sm/api/v1/firewall/zone/services URI, without authentication.{{< /quote >}}
Ik besluit op de link naar CVE-2021-27561 te klikken. Ik kom terecht op de 
{{< a_blank "NIST" "https://nvd.nist.gov/vuln/detail/CVE-2019-14657" >}}
pagina van deze CVE. NIST geeft de CVE een CVSS van 8.8 mee, dus dit is een behoorlijk gevoelige CVE. Maar wacht even...
De link naar NIST komt helemaal niet terecht bij CVE-2021-27561, maar bij CVE-2019-14657!  
5 seconden later ben ik naar 
{{< a_blank "CVE-2021-27561" "https://nvd.nist.gov/vuln/detail/CVE-2021-27561" >}}
aan het kijken.  
Het blijkt ook een CVE te zijn voor het Device Management platform van Yealink. Maar deze CVE heeft een CVSS van 9.8 critical.
Bijna de hoogste score dus. En aan deze CVE is een 
{{< a_blank "externe vulnerability disclosure gekoppeld" "https://ssd-disclosure.com/ssd-advisory-yealink-dm-pre-auth-root-level-rce/" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20231203114407/https://ssd-disclosure.com/ssd-advisory-yealink-dm-pre-auth-root-level-rce/" >}}.
De Vulnerabity Disclosure laat een kinderlijk eenvoudige omzeiling van de authenticatie zien waar niet veel meer voor nodig
is dan curl.  
Yealink lijkt een probleem te hebben om dit soort authenticatie problemen onder de knie te krijgen. Veel disclosures en CVE's
gaan over authenticatie en authorisatie. Het maakt de opmerking in het eerder genoemde rapport over plausible
deniability bijzonder interessant.  

Dus is het interessant om te gaan kijken naar de 
{{< a_blank "Security Advisories" "https://www.yealink.com/en/trust-center/security-advisories" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240311224749/https://www.yealink.com/en/trust-center/security-advisories" >}}
op de website van Yealink zelf. Hier vallen meteen een aantal zaken op.  
Het is een redelijk kort lijstje en de links leiden naar de interne disclosure pagina's van Yealink. Maar, zo lijkt het 
op het moment dat een vulnerability spannend wordt, dan is het lastiger om een CVE te vinden. Een van de 
{{< a_blank "advisories" "https://www.yealink.com/en/trust-center/security-advisories/2f2b990211c440cf" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240212044709/https://www.yealink.com/en/trust-center/security-advisories/2f2b990211c440cf" >}}
gaat over de Yealink Meeting Server. De advisory van Yealink zelf vermeldt
{{< quote cloudquote >}}The Yealink Meeting Server file upload interface is vulnerable to OS command injection, allowing attackers to execute root-level commands by manipulating the file upload process.{{< /quote >}}
Nou heb ik in een ver verleden nog wel eens colleges gegeven op een Hogeschool en als studenten met zoiets aan kwamen 
zetten dan was dat niet bevorderlijk voor hun punt. De advisory vermeldt verder: "CVE Number: NA". Nu kunnen we met een 
recente advisory aannemen dat er *nog* geen CVE nummer gepubliceerd is. Maar dat is natuurlijk niet zo, want er is allang
een CVE nummer toegewezen en wel: 
{{< a_blank "CVE-2024-24091" "https://nvd.nist.gov/vuln/detail/CVE-2024-24091" >}}.  
Hoewel vrijwel elke advisory een link naar de CVE bevat is dat bij de advisory over de 
{{< a_blank "Yealink IP Phone Directory Traversal Vulnerability" "https://www.yealink.com/en/trust-center/security-advisories/yealink-ip-phone-directory-traversal-vulnerability" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240313132454/https://www.yealink.com/en/trust-center/security-advisories/yealink-ip-phone-directory-traversal-vulnerability" >}}
niet het geval. Een korte zoektocht laat zien dat het niet een CVE is
{{< a_blank "om trots op te zijn" "https://nvd.nist.gov/vuln/detail/CVE-2020-24113" >}}. De CVE krijgt een CVS Score van 
9.1 Critical mee. Het is toevallig dat juist deze CVE geen link vanuit de website van Yealink heeft.  

Maar deze advisory pagina is op meerdere manieren apart te noemen. Voor verschillende CVE's worden (interne?) CVE nummers
gebruikt die niet vindbaar zijn op het internet. Zo zie ik een CVE nummer 
 {{< a_blank "YVD-2024-1298699" "https://www.yealink.com/en/trust-center/security-advisories/30a6a00b46324ecc" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240313132843/https://www.yealink.com/en/trust-center/security-advisories/30a6a00b46324ecc" >}}.
Nu vind ik het al bijzonder eng als je interne CVE nummers 7 digits per jaar nodig hebben, maar dat is een ander vraagstuk.
De advisory heeft als titel "Yealink device management platform Unauthorized RCE vulnerability". Als ik de advisory ga lezen zie
ik in de summary staan:
{{< quote cloudquote >}}The Yealink device management platform’s file upload interface is vulnerable to unauthorized operating system (OS) command injection. Attackers can execute malicious OS commands by carefully crafting a payload during the unauthorized file upload process.{{< /quote >}}
...dat...klinkt...bekend. In mijn hoofd hoor ik een echo met de woorden "plausible deniability". Ik kan zo snel geen extern
CVE nummer voor deze vulnerability vinden, maar gezien de laatste CVE met een RCE kunnen we raden naar het oordeel van 
Mitre.  

Maar er gebeuren nog meer vreemde zaken. Ik zie dat er nog geen CVE is gepubliceerd voor de 
[gelekte RSA sleutel]({{< ref "versleuteling" >}})
die ik gevonden heb. Ik neem contact op met Mitre in februari 2024 en vraag een CVE-reservering aan. Het duurt even 
voordat Mitre reageert met een CVE nummer:
{{< a_blank "CVE-2022-48625" "https://nvd.nist.gov/vuln/detail/CVE-2022-48625" >}}.
En dat is GEEN 2024 CVE nummer, maar uit 2022. Ik kan alleen maar concluderen dat *iemand* in 2022 de RSA sleutel heeft
gevonden en om een reden die mij niet bekend is heeft besloten om deze CVE niet te publiceren na reservering. Op
de pagina van NIST is duidelijk te zien dat de CVE pas in februari 2024 is gepubliceerd en dat is na mijn disclosure.  
Het is duidelijk dat ik 
{{< a_blank "niet" "https://fuo.fi/CVE-2020-24113/" >}}
{{< a_blank "de enige" "https://hackmd.io/@tahaafarooq/auth_rce_voip" >}}
ben die vragen stelt bij Yealink security, maar Yealink en Lydis zorgen er op verschillende manieren voor dat het vulnerability
disclosure proces gefrustreerd wordt, waardoor transparantie ver te zoeken is. Ik denk dat het goed is om dat in gedachten
te houden bij het lezen van de 
{{< a_blank "Security FAQ" "https://www.lydis.nl/over-ons/yealink-security-faq" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240306181308/https://www.lydis.nl/over-ons/yealink-security-faq" >}}
van Lydis waar in mooie marketing woorden beweert wordt:
{{< quote cloudquote >}}Yealink scoort positief op cvedetails en blijft voortdurend investeren in het verbeteren van hun producten en het vermijden van beveiligingsproblemen. Ze werken samen met experts van Netspi, Spirent en Miercom voor gedetailleerde onafhankelijke controles.{{< /quote >}}  
En dat is een interessante uitspraak. En dan heb ik het niet over een "scoort positief op cvedetails". Die laat ik maar even
varen. Dan heb ik het over de onafhankelijke controles van o.a. NetSPI.  

Tijdens een van mijn eerste emails met de technisch directeur van Lydis in 2022 breng ik dit ook ter sprake. Hij geeft aan dat
alles extern getest wordt en hij stuurt mij als bewijs het rapport op van NetSPI. Op de website van Yealink staat de
{{< a_blank "samenvatting van het rapport" "https://web.archive.org/web/20231023195308/https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20230711/20230711055726204cc9361774cb1909c483a8eebf7ef.pdf" >}}.
In dit document staat dat de Yealink clouddienst getest is volgende de OWASP top-10. Ik lees het document grondig door
om de resultaten te vinden, maar ik kan nergens zien wat de resultaten nou eigenlijk waren. Het document sluit af met
{{< quote cloudquote >}}our approach analyzes the current security posture and results in recommendations for strengthening security controls
<span>{{< censuur red >}}***{{< /censuur >}} COO NetSPI</span>{{< /quote >}}
Maar wat deze recommendations nou precies zijn geweest is nergens weergegeven. Ik kan mij voorstellen dat dit document
best wel wat gewicht kan geven aan de security van het product. Maar... de technisch directeur van Lydis stuurt mij het
penetration test rapport van NetSPI op. Helaas kan ik dit document hier niet delen omdat op elke pagina duidelijk 
vermeld staat dat het document "Proprietary & Confidential" is. Maar dat het goed mis is met de centrale clouddiensten 
van Yealink is duidelijk. Het rapport beschrijft tien vulnerabilities. En onder die vulnerabilities zitten ook vier "high
severity" findings, waaronder:
- A1 - Injection
- A2 - Broken Authentication
- A5 - Broken Access Control
- A7 - Cross-Site Scripting (XSS)

Het moet gezegd worden dat, volgens het NetSPI rapport deze findings allemaal opgelost zijn, maar de technische details 
laten een kinderlijk eenvoudige manier zien om authenticatie volledig te omzeilen. Omzeilen van authenticatie...waar hadden
we dat ook al weer eerder gezien? Een lijn begint zich af te tekenen.  
De clouddiensten van Yealink worden door alle klanten (ook Teams!) van Yealink gebruikt. Dit is door een onafhankelijke
onderzoeker van een Nederlandse universiteit bevestigd. Het is mij niet bekend of er nadien onderzoek is uitgevoerd door 
Yealink of deze ernstige beveiligingsgaten misbruikt zijn. Zo bestond er blijkbaar al 2 jaar een CVE reservering voor
de gelekte RSA sleutel zonder dat dit tot een disclosure heeft geleid.  

Na de sommaties is de communicatie tussen mij en Yealink en Lydis even wat minder. Als ik begin 2024 op 
{{< a_blank "LinkedIn" "https://www.linkedin.com/posts/jeroenhermans_beste-volger-het-is-in-de-afgelopen-maanden-activity-7153007672601055232-3ILE" >}}
aankondig dat ik mijn dossier op internet ga publiceren gebeuren er een aantal zaken. Veel mensen die interactie hebben op mijn LinkedIn 
posts krijgen...extra aandacht van Lydis. En in het bijzonder van de technisch directeur van Lydis. Een hooggeplaatste
overheidsambtenaar in mijn netwerk reageert naar hem:
{{< quote cloudquote >}}
Beste {{< censuur red >}}*******{{< /censuur >}}, is er een reden voor het connectieverzoek? Het bewust benaderen van mensen die een onwelgevallig bericht liken is namelijk niet oke.
<span>hooggeplaatste ambtenaar</span>
{{< /quote >}}
De technisch directeur reageert met een (naar later blijkt) gestandaardiseerd bericht:
{{< quote cloudquote >}}Hallo {{< censuur red >}}*******{{< /censuur >}},

We zijn elkaar waarschijnlijk nog niet eerder tegengekomen, maar ik zou mijn netwerk graag willen uitbreiden met mensen uit de cybersecurity, CISO markt omdat we zien dat dit steeds meer raakvlakken heeft met producten die wij distribueren. 
Via gezamelijke contacten kwam ik jou naam tegen en vandaar heb ik je een uitnodiging gestuurd.

Met vriendelijke groeten,
{{< censuur red >}}*******{{< /censuur >}}
{{< /quote >}}

Ik spreek meerdere mensen die een reactie ontvangen van deze man die vrijwel identiek is. Het lijkt dus om een template 
te gaan. Ik spreek verschillende mensen die ineens een uitnodiging krijgen van de directeur van de partij waar
ik net van heb gepubliceerd dat zij mij ernstig juridisch bedreigen. De argumentatie die hierboven gebruikt wordt dat Lydis
heel erg graag hun cybersecurity netwerk wil uitbreiden lijkt erg dun te worden op het moment als ik hoor dat ook mensen in
sales een dergelijke uitnodiging hebben gekregen. De uitnodiging wordt door verschillende mensen als bijzonder intimiderend
ervaren.  
Maar niet lang hierna benadert Lydis iemand uit mijn netwerk en huurt hem in om te helpen met de problemen die spelen 
op het gebied van cybersecurity. Deze persoon contacteert mij meteen en vertelt het mij voordat ik het via een andere weg 
hoor. We besluiten dat het beter is dat we vanaf dat moment de zaak niet meer met elkaar bespreken omdat het een conflict
of interest is.  

Op 14 februari 2024 komt de 
[video boodschap]({{< ref "video_boodschap" >}}) naar buiten waarin ik uitleg wat er allemaal is gebeurd en wat ik in de komende
periode zal gaan publiceren. En zo gebeurt het dat ik de dag na de videoboodschap in een Teams meeting zit samen met de 
technisch directeur van Lydis. Lydis
wil van deze affaire leren en aan hun transparantie werken. Ik vraag of het dan ook de bedoeling is om te gaan bevestigen 
dat het versturen van sommaties aan mij een vergissing was en dat er geen intentie is om een Nederlandse beveiligingsonderzoeker
die nooit een geheim heeft gemaakt van zijn identiteit en bedoelingen aan te klagen. Het verbijsterende antwoord is dat
Lydis dat niet kan doen, omdat Lydis mij niet vertrouwt en dat vertrouwen moet eerst groeien.  
De security expert uit mijn netwerk die nu voor Lydis werkt stelt voor dat ik mijn publicaties deel voor de publicatiedatum. 
Ik vraag nog tijdens de meeting aan mijn advocaat die ook in de meeting zit of dit wellicht een risico voor mij kan 
opleveren. Als hij aangeeft dat dit niet het geval is en dat hij hier geen problemen mee heeft stem ik toe. Die middag
stuur ik de volledige tekst van de [volgende publicatie]({{< ref "inleiding" >}}) naar Lydis op.  
Ik krijg een email bericht van hem terug waarin hij aangeeft dat
{{< quote cloudquote >}}Wij vinden het spijtig dat dit destijds zo is geëscaleerd.
<span>technisch directeur Lydis</span>{{< /quote >}}
en hij vervolgt met
{{< quote cloudemail >}}Wij zouden deze kwestie graag volledig oplossen via de weg van transparantie. In dat kader vernemen we graag of er nog punten zijn waar jij meer transparantie van Lydis / Yealink wenst / op zijn plaats acht. Anderzijds zouden wij graag door jou voorgenomen publicaties ruimer van tevoren inzien, zodat op een werkbare wijze eventuele onjuistheden op tijd kunnen worden rechtgezet. Daarnaast willen we graag onze klanten informeren over jouw publicaties omdat we de eerste vragen al ontvangen hebben. Het zou goed zijn als we die informatie gezamenlijk opstellen.{{< /quote >}}
We hebben dit eerder gezien waarbij Lydis [invloed]({{< ref "publicatie" >}}) probeerde uit te oefenen op de publicatie 
van FTM. Gezien de precaire juridische situatie bedank ik hier voor. Lydis heeft namelijk hier ook al iemand voor ingehuurd
uit mijn eigen netwerk die hier waarschijnlijk een van de beste in Nederland in is.  

In de weken die volgen komen er maar weinig concrete stappen die wijzen op de voorgenomen transparantie. Een van de 
vragen die ik aan Lydis heb gesteld is waar de GDPR claims op gebaseerd zijn. Op hun website en tijdens webinars
laat Lydis duidelijk weten dat Yealink apparatuur GDPR gecertificeerd is. Nadat ik wekenlang geen antwoord krijg op deze basale vragen
laat ik Lydis weten dat ik onze overeenkomst voor het delen van publicaties ga pauzeren omdat het op een eenzijdige afspraak
begint te lijken.  
Maar zo geeft hij aan:
{{< quote cloudquote >}}We kunnen je informeren dat Lydis voornemens is om, naar breed geaccepteerde CVD normen, geen juridische stappen te ondernemen naar melders van kwetsbaarheden die geen misbruik maken van de kwetsbaarheden.<span>technisch directeur Lydis</span>{{< /quote >}}
Dat is in elk geval fijn om te horen, maar op het moment dat Lydis het woord "norm" gebruikt, dan ga ik toch even wat rechter
op zitten. Dus ik vraag om verduidelijking:

{{< quote cloudemail >}}Ik ben enthousiast over het initiatief van Lydis om vanaf nu de CVD normen te volgen. Helaas kan ik geen CVD / responsible disclosure procedure op jullie website vinden. Ook is er geen security.txt beschikbaar op jullie website. Het is mij dan ook niet helemaal duidelijk wat jullie definitie van "breed geaccepteerde CVD normen" is. Kunt u dit verduidelijken?{{< /quote >}}
Ik krijg het volgende antwoord terug:
{{< quote cloudquote >}}Wat betreft de vraag over de CVD-normen die we voornemens zijn om te volgen, hebben we in de praktijk te maken met Yealink die als fabrikant de issues afhandelt. Yealink heeft zelf een Vulnerability Disclosure Policy gepubliceerd: https://www.yealink.com/en/trust-center/resources waar jij ook gebruik van kunt maken.

Het heeft nog wat tijd nodig voordat Lydis haar eigen beleid kan publiceren, maar we ondersteunen en volgende deze manier van aanpak in principe nu al wel.
<span>technisch directeur Lydis</span>{{< /quote >}}

Dit mag geen verrassend antwoord heten. En dus duik ik in de
{{< a_blank "Yealink Vulnerability Disclosure Policy" "https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20230718/2023071801063423643ed8be449a48cef9595e4903e27.pdf" >}}
{{< a_blank "mirror" "https://web.archive.org/web/20240306174811/https://www.yealink.com/website-service/attachment/trust_center_resource/documents/20230718/2023071801063423643ed8be449a48cef9595e4903e27.pdf" >}}
die blijkbaar ook door Lydis toegepast wordt zo lang zij er zelf geen hebben.  
De policy heeft een aantal wat vreemde bedingen zoals:
- "Do not attempt to verify vulnerabilities yourself"
- Out of scope: "The attack requires MITM or physical access to user devices". Dit betekent dus ook dat er geen
"Safe Harbor" is voor mensen die een local attack kunnen laten zien op Yealink apparatuur of software!

Maar zoals altijd zit het venijn hem helemaal achterin het document in de kleine lettertjes:
{{< quote cloudemail >}}Regardless of whether the report submission is confirmed to be valid, you hereby agree to transfer all rights and interests (including all intellectual property) of all submitted vulnerability reports to Yealink.{{< /quote >}}

Het zal juridisch ongetwijfeld anders heten, maar wat hier staat dat je alle IP verliest over je eigen disclosure en je 
als beveiligingsonderzoeker dus niet meer kunt publiceren over je eigen onderzoek. Bovendien verlies je elke controle 
over het proces van publicatie van een CVE. Wellicht ligt hier een verklaring waarom Yealink zo "positief op cvedetails" 
scoort? Ik lees dit vooral als een NDA en dat proeft niet echt als de transparantie waar zowel Yealink als Lydis nu
mee schermen. Maar blijkbaar vindt Lydis het een goed idee om dit een "breed geaccepteerde CVD norm" te noemen en 
over te nemen voor hun eigen organisatie.  
Het moge duidelijk zijn dat ik nooit akkoord ben gegaan met dit document en dat ook nooit zal doen. *Echte* transparantie
is o zo belangrijk in de security wereld en als er iets duidelijk is geworden in mijn publicaties in de afgelopen weken
is het wel dat dit soms ver te zoeken is.  

In de volgende publicatie gaan we het hebben over duurzaamheid. Als zelfs Tony's Chocolonely voor Lydis en Yealink kiest
dan moet dit toch wel een heel belangrijk onderwerp zijn. Of is toch niet alles zoals het lijkt?

[Naar het volgende artikel]({{< ref "duurzaamheid" >}})
