+++
title = "DMARC"
description = "Domain-based Message Authentication, Reporting & Conformance (DMARC)"
date = "2024-09-26"
aliases = ["dmarc", "email"]
author = "Jeroen Hermans"
+++
### Wat is DMARC voor e-mail?

**DMARC** staat voor **Domain-based Message Authentication, Reporting & Conformance** en is een e-mailauthenticatieprotocol dat organisaties helpt om hun e-maildomeinen te beschermen tegen misbruik zoals phishing en e-mailspoofing. DMARC bouwt voort op bestaande protocollen zoals **SPF** (Sender Policy Framework) en **DKIM** (DomainKeys Identified Mail), en voegt daar een extra laag aan toe door richtlijnen op te stellen voor hoe ontvangers moeten omgaan met berichten die deze verificaties niet doorstaan.

DMARC biedt drie belangrijke functies:
1. Het geeft aan of een e-mail wel of niet van een geautoriseerde bron komt (door het controleren van SPF en DKIM).
2. Het stelt de domeineigenaar in staat om te bepalen wat er moet gebeuren met niet-verifieerbare e-mails (bijvoorbeeld markeren als spam of helemaal blokkeren).
3. Het biedt gedetailleerde rapporten over e-mails die namens het domein zijn verzonden, zodat domeineigenaren inzicht krijgen in potentieel misbruik.

### Waarom is DMARC belangrijk?

1. **Bescherming tegen phishing en spoofing**  
DMARC helpt domeineigenaren om e-mailspoofing en phishingaanvallen te bestrijden, waarbij kwaadwillenden proberen e-mails te versturen die lijken te komen van legitieme bronnen. Met DMARC kunnen organisaties specificeren hoe e-mails die niet aan de SPF- en DKIM-controles voldoen, moeten worden behandeld, zoals het markeren als spam of het volledig weigeren van deze berichten.

2. **Versterking van SPF en DKIM**  
Hoewel SPF en DKIM belangrijke protocollen zijn voor het verifiëren van e-mails, bieden ze geen mechanismen om te bepalen wat er moet gebeuren met niet-verifieerbare e-mails. DMARC voegt deze controle wel toe en zorgt ervoor dat e-mails die niet voldoen aan de authenticatieregels, kunnen worden afgewezen of gemarkeerd. Dit maakt het protocol krachtiger dan SPF of DKIM alleen.

3. **Inzicht via rapportage**  
Een van de unieke functies van DMARC is het verstrekken van rapportages aan domeineigenaren. Deze rapporten geven inzicht in wie e-mails namens hun domein verstuurt en hoe goed die e-mails door de DMARC-regels worden gevolgd. Dit helpt bedrijven om misbruik te identificeren en hun e-mailverzending te optimaliseren.

4. **Bescherming van de merknaam en reputatie**  
Met DMARC kunnen organisaties hun domeinen beschermen tegen aanvallen waarbij hun merknaam of reputatie in gevaar komt. Door duidelijk te maken welke e-mails legitiem zijn, kunnen bedrijven voorkomen dat hun domeinen worden gebruikt voor frauduleuze activiteiten. Dit zorgt voor meer vertrouwen bij klanten, partners en andere ontvangers.

5. **Verbeterde e-maillevering**  
Door DMARC correct in te stellen, verbeteren bedrijven de betrouwbaarheid van hun e-mails. Wanneer e-mailproviders zien dat een domein gebruikmaakt van DMARC en de e-mails voldoen aan de authenticatieregels, worden deze berichten vaker afgeleverd in de inbox in plaats van de spambox. Dit zorgt voor een hogere leveringsbetrouwbaarheid en meer succes bij e-mailcampagnes.

### Hoe werkt DMARC?

DMARC werkt door domeineigenaren een DMARC-record toe te laten voegen aan hun DNS-instellingen. Dit record geeft aan hoe e-mails die namens het domein worden verzonden, moeten worden geverifieerd en wat er moet gebeuren als ze niet aan de authenticatie-eisen voldoen. De drie mogelijke acties zijn:
- **None**: Geen actie ondernemen, alleen rapporteren over de resultaten.
- **Quarantine**: De e-mail markeren als verdacht, vaak belandt deze in de spamfolder.
- **Reject**: De e-mail volledig weigeren.

De DMARC-rapporten geven waardevolle feedback over de prestaties van het e-mailauthenticatiebeleid en helpen bij het detecteren van ongeautoriseerd gebruik van het domein.

### Conclusie

**DMARC** is een cruciaal e-mailbeveiligingsprotocol dat organisaties helpt om e-mailfraude zoals spoofing en phishing te bestrijden. Door gebruik te maken van DMARC kunnen domeineigenaren richtlijnen instellen voor hoe e-mails worden behandeld en krijgen ze inzicht in wie er namens hun domein e-mails verstuurt. Het gebruik van DMARC in combinatie met SPF en DKIM versterkt de e-mailbeveiliging aanzienlijk, beschermt de reputatie van het domein en verbetert de leverbaarheid van e-mails.
