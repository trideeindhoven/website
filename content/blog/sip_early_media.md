+++
author = "Jeroen Hermans"
title = "The detective, the professor and early media RTP"
date = "2025-08-30"
description = "SIP early media"
tags = [
    "SIP", "RFC3959", "RFC3261", "early media", "forensic", "number station"
]
image = "img/blog/da_vinci_final_supper.jpg"
+++
“You have to dial an access code to pick up your messages.” Sophie Neveu says to professor Langdon. After a confused look he dials the three digit access code written on the paper Mrs. Neveu gave him. The secret message he hears changes everything...
<!--more-->
I press the pause button on my remote control. Secret messages...over a phone line? Not only a good movie plot, but incredibly current with the discussions about chat control and encryption back doors into messaging application.  

After a recent visit to the rather brilliant {{< a_blank "Crypto Museum" "https://www.cryptomuseum.com/spy/owvl/32620/index.htm" >}} my mind went to number stations. Some quick background information: number stations were (are?) AM radio stations that transmitted encoded messages far across the Iron Curtain during the cold war. The messages were numbers being read out by a (usually) female voice. The simplicity made this system so powerful. Your adversary was able to hear the messages, but it was near impossible to know who was able to decode the messages. These messages were hiding in plain sight without a possibility to know what these messages were and to whom they were send to.  

Now, this is more complicated in telephony systems. Not only do carriers maintain Call Detail Records (CDR) for law enforcement and billing purposes, but there is a non-zero chance the phone line is being recorded by law enforcement or potentially a third party. Phone lines are not encrypted after all (gross simplification).  

So I got up from the couch and started reading Request For Comments (RFC) relevant to VoIP telephony. Particularly {{< a_blank "RFC3261" "https://datatracker.ietf.org/doc/html/rfc3261" >}} about SIP signaling and {{< a_blank "RFC3959" "https://datatracker.ietf.org/doc/html/rfc3959" >}}. Early Media is not a news broadcast in the morning, but this is a form of signalling used in *every single phone call*. You may know Early Media as the ringing you hear when the remote end has not yet picked up their phone. Although nowadays less common, sometimes you can hear the ringing tone on the other end sounds “long distance”. This means that the audio you hear is not locally or regionally generated! This audio is actually send by the VoIP equipment (PBX/SBC) on the far end of the call. But the RFC does not limit this audio to just beeps at a certain frequency. You can actually send voice audio. This is also a feature most of us are familiar with. We have all heard the “This number is not in service right now”-message. A nice collection of (early media) phone sounds have been collected at {{< a_blank "Telephone World" "https://telephoneworld.org/telephone-sounds/international-telephone-sounds/" >}}  

But what happens when we combine cold war era messaging with modern VoIP signaling? And I came up with the following idea: the person who wants to receive a secret message calls a specific (one-time?) phone number. The message he or she hears is encoded. Even if the phone line is recorded by a third party they will not be able to understand the message.  
Then the phone line gets disconnected even before it gets answers with a “this number does not exist” SIP message (UNALLOCATED_NUMBER). Your local phone carrier now plays a sound to you indicating that the number is not in service and, this is important, records this call outcome in the CDR records. The CDR records now show the following:  
* X dialed number 0123456789 (we will call this person Y)
* The remote party Y did not pick up the phone. Call time was 0 seconds
* The phone number Y does not exist  

We now know 2 things:  
* X received an encoded message from Y
* According to the CDR’s X was unable to reach Y
* According to the CDR’s Y’s number does not exist

We now run into the following hypothetical scenario:  
A criminal is in prison for some horrible crimes. It is absolutely of the utmost importance that he is not able to receive any messages from the outside. But of course he is allowed to call his family every once in a while. Of course Mr. X in prison wants to keep receiving criminal information from the ourside and on his weekly call he dials number Y. After a while he receives the encrypted message from outside. The prison’s phone system and the CDR’s and the prison’s phone carrier see a failed call though. The public prosecutor is not dumb though and they know very well that Mr. X is still receiving criminal information from the outside. When Mr. X is in front of a judge a few weeks later the public prosecutor argues that even in prison Mr. X received criminal information from the outside over the phone in prison. Mr. X is highly surprised and argues that that is absolutely not the case. If the prosecutor is so sure of his case he should get the CDR data from the carrier. Surely that will show who is right.  
Another few weeks later the group is again in front of the judge. The prosecutor has subpoenaed the CDR data and what do you know: the data clearly shows that Mr. X did NOT make a successful phone call and therefore cannot be held accountable for that.  The judge agree with the defence and Mr. X is acquitted of the new charges.  
In the meantime other lawyer take note of this verdict. Their clients have been convicted based on CDR evidence that, obviously, can be tampered with. Or: reasonable doubt as it is called in law. The streets flood with criminals and Gotham City is born.  

Oh Sophie what have you unleashed. As I am rather happy with the city I live in and I would hate that my findings would result in Gothams around the world I contact the Dutch police. Asking questions about the forensic assurance of phone records is a complicated question. A response takes weeks, but then I receive a message from my contact. My contact at the Dutch police assures me that the above scenario is impossible with the current equipment the police are using when intercepting phonecalls. Both “normal” audio and “early media” are both recorded. I ask them if we can set up a proof of concept test, but that request is politely but firmly rejected.  

As it stands now we, defence lawyers and judges can only have a blind trust in digital forensic data. I have written about this challenge in digital forensic evidence before in [articles]({{< ref "paxton_tls" >}}) [about]({{< ref "phera" >}}) [building]({{< ref "mch2022_knock" >}}) [entrance]({{< ref "paxton_licentie" >}}) [systems]({{< ref "knock_why2025" >}}).  

But the current developments seem to suggest that digital forensic data is going to be used in many more situations. It is extremely complicated for someone not in law enforcement to check and/or audit this data. This enforced blind trust can potentially lead to a miscarriage of justice with dramatic consequences.  
If we could actually audit forensics that would lead to evidence “beyond reasonable doubt”. And that can only be good for society as a whole.
