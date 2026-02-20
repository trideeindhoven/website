+++
title = "Dutch National Police using Yealink"
description = "CloudAware"
date = "2026-02-16"
aliases = []
author = "Jeroen Hermans"
image = "img/blog/Flag_of_the_Dutch_National_Police.png"
+++
*The Marconi man onboard the unsinkable ship Titanic looks up when the paper ribbon chatters to life. It is another iceberg report with coordinates right on the ship’s intended line. He pencils the position on a chart blotter, tears the strip, and quickly heads to the bridge.*  

*When he delivers the message on the bridge, the captain gives the report a glance and nods. "Noted" comes the answer. "Maintain speed. Maintain course." Aware of the risk that just has been taken the operator returns to the Marconi room.*  

*The sea is glassy-black and deceptively empty when the sound of the bell in the crow's nest sounds. The captain orders a sharp turn of the vast vessel, but his eyes betray that he already knows. His gaze lock onto the visible part of the iceberg, knowing the invisible part will be the most dangerous. Impact is imminent now and all potential mitigation is too late now.*  
<!--more-->
The Titanic was considered to be unsinkable. The vessel did not sink because of a lack of knowledge. It was the lack of response. This is more than often also the case in cybersecurity. Warnings are, for a variety of reasons, ignored and when the invisible part hits the proverbial hull all possible mitigations are too late.  

In the past few years i have written many articles in The Netherlands and abroad about Yealink. I have proven vulnerabilities, made Proof of Concept attacks and warned about severe liability issues when using these devices. But what if you are aware Yealink devices are vulnerable? What if you know you are using EOL devices that cause even bigger risks? What if you configure them in such a way that sensitive data travels through these devices every single day? Will you be the captain to adjust speed and course in time, or will you be the leader that looks into the headlights like a deer without taking appropriate action.  

Cue this week when the "RTC Security Newsletter" https://www.enablesecurity.com/newsletter/2026-01-rtcsec-news/ by Sandro Gauci of Enable Security was published. In this newsletter the research of Stefan Gloor {{< a_blank "(stefan-gloor.ch)" "https://stefan-gloor.ch/" >}} and myself are mentioned. The vulnerabilities we have found were downplayed in Yealink' s own advisories. Now months later Yealink has assigned a CVE (https://www.yealink.com/en/trust-center/security-bulletins/yealink-unauthorized-access-to-rps-vulnerability) for independant review and it has received a cvss severity "high" (CVE-2025-68644).  
The advisory Yealink made also includes a "Web Application Penetration Test" by NetSPI. The findings includes a list of OWASP Top 10 vulnerabilites. In 2024 i contacted OWASP director of projects Starr Brown. I asked him if OWASP Top 10 even is a pentest methodology. His response was as clear as damning: "Hi Jeroen - You are correct. OWASP Top 10 is not a pentest methodology.". Please keep in mind: this is the director of the organisation that made this Top 10.  
Using Yealink devices in large organisations has become a huge liability for boardrooms under the NIS2 directive, or in the words of Sandro Gauci: "It took over six months from initial disclosure to a formal CVE acknowledgement. The timeline is worth noting for anyone dealing with Yealink vulnerability disclosures in the future."  

During the very first stages of my research in 2023 i was contacted about the fact that the Dutch police was using Yealink devices. In the next few years i received multiple reports from several sources that the Dutch Police was still using Yealink devices in their network. In some cases even EOL devices. In 2024 i even received information from a source from within the Dutch Police. I was informed by this source that the AVIM department, dealing with and identifying aliens was using T27 + 
{{< a_blank "EXP20" "https://www.yealink.com/en/product-detail/accessories-exp20" >}} 
{{< a_blank "mirror" "https://web.archive.org/web/20251216181321/https://www.yealink.com/en/product-detail/accessories-exp20" >}}
 expansion modules. Both were already EOL for years. The EOL Yealink devices were also used during interrogations of aliens using interpreters.  

{{< img alt="Yealink phone at Dutch Police" src="img/blog/AVIM_Yealink.png" >}}  

As part of the vulnerability disclosure procedure Stefan and myself contacted the NCSC-NL as per instructions in the security.txt of the Dutch Police. Unfortunately recently i was made aware that it seems that the Dutch Police have taken the same approach the captain of the Titanic has taken: hope the iceberg will not be on it's course and hope the invisible part of the iceberg will not be as impactful.  
Let me be clear: i do not believe Yealink is going to spy on the Dutch Police. But their security is so poorly implemented that the risk of being compromised by a third party is not improbable and should be mitigated as soon as possible.  

{{< img alt="Interrogation at AVIM using Yealink phone" src="img/blog/AVIM_verhoor.png" >}}  

In the Netherlands, the NIS2 directive is being transposed through the Cyber Resilience Act’s sister legislation (the Dutch Cybersecurity Act/Cyberbeveiligingswet) and will apply to “essential” and “important” entities across designated sectors (e.g., energy, digital infrastructure, health) as well as to the public administration sector (central government ministries and their agencies, provinces, municipalities, and water authorities). There is, however, a clear and convenient exception: public administration entities whose activities are predominantly in national or public security, defence, or law enforcement are out of scope (NIS2 Article 2(7) ). This includes the police. In short, the police are not legally required to comply with NIS2/CBW, although the Dutch government expects excluded bodies to achieve a comparable level of cyber resilience under other frameworks (such as the BIO) and sectoral rules.  

The BIO is the baseline security framework that all Dutch government layers must apply to and is built on ISO/IEC 27001/27002 with a risk‑based ISMS at its core. That means known vulnerabilities are treated as identified risks that require timely risk treatment and proportional controls. Ignoring credible vulnerability intelligence (for example on EOL devices conflicts with the BIO’s requirement to select and implement measures based on actual risk, and to demonstrate control effectiveness during annual accountability. Even if a residual‑risk acceptance is considered, under the BIO it must be explicit, justified, time‑bound, and revisited. Something hard to defend when viable mitigations (segmentation, replacement, compensating controls) exist.  
In short: “we knew but didn’t act” is a process failure against the BIO’s risk‑driven approach. An approach we already have seen the captain of the Titanic  fail at.  

BIO2 (the updated baseline now used as “verplichtende zelfregulering” pending the Cyberbeveiligingswet) strengthens this position by aligning more tightly to modern ISO controls and NIS2‑driven expectations. That makes prompt handling of vulnerability intelligence (control 5.7), not just incident response, part of baseline hygiene, with leadership expected to oversee and evidence these choices. For entities like the police that follow BIO rather than NIS2 directly, failure to act on known vulnerabilities (control 8.8) still creates findings in BIO assurance (e.g., ENSIA/ISMS audits) and exposes the organization to avoidable operational and reputational risk.  

In 2025 another source contacts me. The source tells me that an interrogation was performed where the report was typed on a computer that was directly connected to a Yealink phone. Even if VLAN tagging is used this is a complete failure of network segmentation. Something i was told the IT department of the police was correctly implementing. This seems like an enormous risk to accept given the fact that previous research my Stefan Gloor has shown that random, unsigned software could be installed on these phones.  

{{< img alt="Network daisy chain on Yealink phones" src="img/blog/1675119860907-image.png" >}}  

And early this year i received another report of Yealink devices being used. In this case the Yealink devices were also being used in sensitive areas. PCs had been daisy chained to the phone so that all sensitive data was directly travelling through these devices.  

If assets are end‑of‑life, you also fail lifecycle, supplier, and configuration controls because you cannot maintain a supported security state; any risk acceptance must be explicit, temporary, and backed by strong compensating controls, otherwise auditors will record a BIO finding… in the best possible scenario. In the case of accepting risks vectors it seems logical to take industry-standard measures to reduce a possible attack vector. Not using network segmentation seems like a risky move and complicated to be compliant with ISO27001 and/or BIO(2).  

We really need to do better. Multiple security researchers have now shown severe vulnerabilities. Vulnerabilities have been downplayed by the manufacturer which creates another level of vulnerability. If you insist on using devices that are grossly cheaper than the competition, please…take a little bit of that saved money to make public data safer.  

*The captains eyes are locked onto the white object nearing the bow of the ship. His hands clench the steering wheel in a last effort to find comfort. His mind wanders off to the message of the Marconi man. If only… he could have… he should have…*  

{{< quote cloudemail >}}<2026-02-16>The Dutch Police have been asked to comment on questions regarding this article. Although the questions should have been rather straight forward, so far no response from the Dutch Police has been received. If that happens, this postscript will be updated.  
<2026-02-18>The Dutch Police have responded with the following reaction: "U ontvangt van de politie geen reactie op onderstaande beweringen." or in English: "U will not receive a response from the police to the statements below"{{< /quote >}}  

