+++
author = "Jeroen Hermans"
title = "Versleuteling"
date = "2024-01-03"
description = "Versleuteling"
tags = [
    "versleuteling", "encryptie", "AES", "RSA", "Lydis", "Yealink"
]
image = "img/yealink/pexels-george-becker-114741.jpg"
+++
De aanleiding van dit onderzoek waren enkele zaken in de versleuteling in het provisioning proces die ik niet goed 
begreep. Ik kon toen niet vermoeden dat ik hier 2 jaar later nog steeds ee bezig zou zijn.
<!--more-->
Zoals in de inleiding uitlegd is provisioning het systeem wat gebruikt wordt om configuratie bestanden veilig te 
transporteren van een configuratieserver naar een systeem. Dit systeem kan een VoIP telefoon zijn, maar hetzelfde geldt
ook voor b.v. videobars.  

In deze provisioning bestanden staan zaken als:
- gebruikersnaam
- wachtwoord
- voipserver
- nummerherkenning

Dit zijn dus zeer gevoelige data en in veel gevallen ook persoonsgegevens zoals gedefinieerd in AVG wetgeving. Het 
privé houden van deze data tijdens transport over het internet is daarom van groot belang.


AES versleuteling
AES TUX
al vroeg gelekt
RSA sleutel ook gelekt
zie presentatie, maar basically levert Lydis tech dir. zelf 3 voorbeeld bestanden aan


Allereerste email28 juli 2022
"2) We hebben de firmware van Lydis bekeken en we zien dat de provisioning sleutel zelf versleuteld is met private key EKs35XacP6eybA25 Aangezien deze hard coded is, lijkt ons dit een reëel risico. Welke mogelijke oplossing kan Lydis (samen met Yealink?) ons bieden om dit risico weg te nemen?"

Antwoord van Zijlstra:
"We hebben vanuit verschillende onderzoeken door gerenommeerde partijen vastgesteld dat Yealink een veilig product op de markt zet. Zowel SISO afdelingen van onder andere financiële instellingen als gemeentelijke en overheidsinstellingen bevestigen dit."

https://nl.wikipedia.org/wiki/SISO


Ook voor Teams
