+++
title = "DKIM"
description = "DomainKeys Identified Mail (DKIM)"
date = "2024-09-26"
aliases = ["dkim", "email"]
author = "Jeroen Hermans"
+++
### Wat is DKIM voor e-mail?

**DKIM** staat voor **DomainKeys Identified Mail** en is een e-mailauthenticatieprotocol dat helpt om de integriteit en authenticiteit van e-mails te waarborgen. Met DKIM kunnen e-mailontvangers controleren of een e-mail daadwerkelijk door de eigenaar van een domein is verzonden en of het bericht tijdens het transport niet is gewijzigd.

DKIM werkt door een digitale handtekening toe te voegen aan de headers van uitgaande e-mails. Deze handtekening is uniek en wordt gegenereerd met behulp van een privécryptografische sleutel die alleen bekend is bij de verzendende server. De ontvangende server kan vervolgens met behulp van een publieke sleutel, die is opgeslagen in de DNS-instellingen van het verzendende domein, controleren of de e-mail authentiek is en of de inhoud onderweg niet is aangepast.

### Waarom is DKIM belangrijk?

1. **Bescherming tegen vervalsing en manipulatie**  
DKIM biedt bescherming tegen aanvallers die proberen e-mails te onderscheppen en de inhoud ervan aan te passen. De digitale handtekening zorgt ervoor dat de ontvanger kan verifiëren dat de e-mail niet is gewijzigd nadat deze is verzonden. Dit helpt bij het voorkomen van aanvallen zoals **man-in-the-middle-aanvallen** of het manipuleren van de inhoud van een bericht.

2. **Verificatie van de afzender**  
DKIM zorgt ervoor dat de ontvanger kan verifiëren dat een e-mail daadwerkelijk afkomstig is van de geclaimde domeinnaam. Dit helpt om phishing-aanvallen en e-mailspoofing tegen te gaan, waarbij aanvallers proberen om legitieme domeinen te imiteren.

3. **Verbeterde e-mailreputatie en leverbaarheid**  
Net als SPF helpt DKIM bij het verbeteren van de reputatie van het verzendende domein. Wanneer een e-mailprovider ziet dat e-mails correct zijn ondertekend met DKIM, is de kans groter dat die e-mails in de inbox van de ontvanger terechtkomen in plaats van in de spammap. Dit leidt tot een betere leverbaarheid van e-mails.

4. **Onderdeel van een complete e-mailbeveiliging**  
DKIM is een van de drie belangrijkste e-mailauthenticatieprotocollen, naast **SPF** (Sender Policy Framework) en **DMARC** (Domain-based Message Authentication, Reporting & Conformance). Samen bieden deze protocollen een robuuste bescherming tegen e-mailfraude, zoals phishing en spoofing. DKIM versterkt de betrouwbaarheid van e-mails door de inhoud te valideren, terwijl SPF controleert welke servers e-mails mogen versturen namens een domein, en DMARC zorgt voor naleving van beide protocollen.

5. **Bescherming van de merkidentiteit**  
Voor organisaties is DKIM ook belangrijk voor het beschermen van hun merkidentiteit. Door e-mails te ondertekenen, wordt voorkomen dat kwaadwillenden misbruik maken van uw domein voor het versturen van frauduleuze e-mails, wat zou kunnen leiden tot reputatieschade en verlies van vertrouwen bij klanten en partners.

### Conclusie

DKIM is een essentieel beveiligingsmechanisme voor e-mailverkeer. Het waarborgt de integriteit van e-mails en helpt bij het voorkomen van spoofing en manipulatie van berichten. Samen met SPF en DMARC vormt DKIM een belangrijk onderdeel van een effectief e-mailbeveiligingsbeleid dat de reputatie van uw domein beschermt en de leverbaarheid van uw e-mails verbetert.
