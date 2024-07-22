+++
title = "Knock knock, is your door locked?"
description = "CloudAware"
date = "2024-07-22"
aliases = []
author = "Jeroen Hermans"
image = "img/blog/pexels-eye4dtail-114741.jpg"
+++
In 2022 i gave a talk at conference May Contain Hackers. Because the feedback on this talk was so positive i have included it here on this blog including a transcription.
<!--more-->
{{< youtube dR9SttG-d1o >}}  
Thank you very much.
I am Jeroen Hermans and let's start with page one of the theory on presentations: A little bit of
audience participation so i hope you're all ready for this, so let's start.  
Knock knock..  
[audience]:who's there?  
Doesn't matter i'm already in  
[Laughter]  
Very good, so let's first talk a little bit about me, who i am and how i ended up here.
As i said my background is in electrical engineering that's what i studied and in 2002 i started my own company
in technical consultancy. It is a bit difficult to understand what i exactly do, because in a
word cloud you can see it is a lot. There's a lot of different technologies and this is because i usually go to
mostly non-technical companies and i solve their technical questions. About 10 years ago i also
started a a telecommunications company and as far as i know and please do correct me if i'm wrong i am the only
telecommunications company in Europe that can actually deliver emergency services 112 in every member state in Europe.  
If you want to talk to me after the talk you can find me in the in the Swiss Village which is exactly there so that
is that is very convenient.  
So let's talk a little bit about how this talk came to be. Well as everyone during Covid i was
slightly bored and everyone knows that a bored hacker is a very bad thing. So i was walking through my apartment
and i saw this on my wall.  
And i thought interesting what's in there and how does it work? So about five seconds later
it looked like this and i thought it gets even more interesting! So i thought let's zoom in a little bit. So i
did and now you can see four wires coming the wall. Well two of them from my doorbell, so that was not too
interesting, but the other two are from a bus. And i thought that is interesting i want to
know more more about this bus.  
Every sticker in this device has "Comelit" on it and i was not familiar with the company Comelit, so i
thought who is it and i went on the website and i saw this screenshot from their website.
They make video entry technology so basically the device that you just saw and one of their
mottos is design, technology.... and security...  
...in that order  
I thought that's interesting too so there's a lot of interesting stuff going on now.
So i thought okay so i'm going to have a look at this bus system and i found a few things on this bus:  
It has DC power on it to power all the different phones in the apartment building.  
It has audio baseband on it that is interesting because you could basically hook up a
usb audio card on it with raspberry pi and record all the audio on the bus.  
At 25 kilohertz, which is probably chosen because it's a lot higher than the audio, there is binary data and i'll
show you a little bit later how that works.  
And the video is also on the bus it is frequency shifted but it is baseband video.  
Okay so now we know a little bit about the signals that are on this bus, so i'm going to dive a little bit
into this first one: the audio.  
It is base band audio so it's pretty much as easy as taking the bus, pass it through a low pass filter, amplify it and
you can use a headphone or evil  recording device to use this audio.  
It's extremely easy, but i also think it is very personal data. As someone rings the bell and asks my
neighbor do you want to open the door and they potentially tell their name and stuff
like that so i should not be able to receive this.  
So let's have a little look at the binary data.  
This is an actual scope picture of the binary data on the bus and there's a lot going on so let's
first see where it starts.  
This is the so-called preamble. The preamble is a 25 kilohertz tone. This signal is 25 kilohertz,
it lasts for 3 milliseconds then it's quiet for 17
milliseconds and then the address starts and after the address is the actual command sent on the
on the bus. And then there's a checksum.  
Now you probably already saw that i say address 48 but 48 is not 4 times 0 1 1 and that is because it is a least
significant bit system. I'm not entirely sure why they did this it might be because they're
using a specific type of processor or maybe they thought it was because of obfuscation i'm not entirely sure but
this is the how they do it.
The checksum is basically the number of ones in the packets so in this particular situation the green signal
is the address has two ones the red part is the command has also two ones so the checksum is four
and if we take zero zero one that is actually four, so the checksum is correct.
After the packet that it has been sent you can see four bigger pulses and those are the acknowledgement 
basically from from the far end.  
So we know pretty much what sort of signal is on there. Now we need to recover it because there's a 25
kilohertz signal on there and it's built length encoded. We still don't have all the data
and i think it is as easy as this. It's a PLL, a Phase Locked Loop. And what we basically do is we run a
Voltage Controlled Oscillator at 25 kilohertz and it is constantly pushed in the correct
frequency by the input signal, vi.
If we take the output of the loop filter that is basically a dc signal or "dc like" signal and that is 
the bits of of the signal. So it's very easy to recover the 25 kilohertz binary data from this bus.  
So now we have the audio based band, we can listen to it with the headphone and we have the binary data. We can now
see when someone rang the doorbell for apartment 5.  
We now have to get a little bit into the security part and you probably still remember this part of the
screenshot:  design, technology and security  
So obviously i rang Comelit and i asked them for a reaction and their reaction was: We are going to the police because you
are a hacker that wants money from us. I responded with: No no, i don't want any money.  
But the discussion got a little bit sour so i went to the police and i said please don't spend any 
resources to find for three weeks a evil hacker that is trying to extort Comelit. It's me and 
just call me and they actually really appreciated that.  
So basically this bus system it's unauthenticated there are no users. It's unauthorized because there are 
no users you can also not say this user is allowed to do this. It's unencrypted as we just saw i can
just see who is sending which packets. It's a broadcast system so for everyone on the bus 
i can see everyone's signals so i can see who opens the door, i can listen in on their conversations with
the person at the front door and if i would shift the video signal i could actually see the video 
with a for example a USB videograbber.  
Another interesting thing is it has no sender verification. So for example if you have an apartment
building with 10 apartments and i just sent a signal on this bus: "Hello i'm apartment 200 and please open the door"
it will actually open the door. It actually doesn't care who's on the bus.  
I asked Comelit about this about a year ago and i asked so do you want my help on this? Are you going to
change anything about this? Their response was basically: We don't think it's very
important what you found, because it's not a security product, so this is this is not a big deal.  
And then i thought: really? Let's have a look at how Comelit markets this product. So i found on the website of
Comelit a press release from 2020 and it actually says "Comelit achieves secured by design membership". 
Well i've used this wording more often here and i thought: That's interesting. But then again: during my talks
with Comelit i also said this and their response was: We have newer systems, this is a system from
the 90s and it's old. I said: oh really so which percentage of the of your systems that you are selling is
still using this system. Their response was: It's more than 50%, so it's still very current it's still used a lot.  
This bus system is called the simple bus and if i zoom in a little bit on this press release, you can see
that two of the door entry systems of Comelit are certified in the UK apparently. And one of them is 
the two wires simple bus. So there's something interesting going on here: Either the the
board of directors of Comelit Holland don't know about his press release or, let me put it politically, something
else is going on.  
So i think definitely in this system there's room for improvement let me put it mildly and funny enough 
today i looked at the website of Comelit it and i think they now agree. So if you are looking for a job, 
i can give you a few hints on what the job will be in the next two years.  
Back to the why. So i asked Comelit: Why did you build it this way because it's not that difficult to put some of
the restrictions in there i mean in the 90s it's possible to make encryption or do sender verification.
They said: Well this is basically because of the bouwbesluit. So this is a Dutch, i don't want to call it a law, 
but it is a it is a document that describes how you built a house. And they said: If we build our system better
than is needed in this Dutch law, the Bouwbesluit, then we will be more expensive than our competition 
and we won't sell any systems anymore. So this is the real reason that we are doing it this way.  
So i thought let's have a look at the at Bouwbesluit and here it is. It's a Dutch
website from the government and it directly stems from article 6.51. I've translated it for the
english-speaking people. It literally says: "prevention of common criminality in a building for living".
And this document does indeed not speak about any security for the systems that are meant for security.
So there's definitely some room for improvement there. I think it should be.
We have seen in The Netherlands in the past few months definitely a few incidents, also with ministers.
Lots of organizations are using the Comelit system and safety and security should be at the top of the list i think.  
Digital and analog electrically there is some room for improvement, but surely physical security in this system is
better? So i looked at that too. And here we are so this is an actual Comelit and at the right side you can see the
bottom part of the doorbell. And you can see that it does not have any special screws in there. You can just
use a 5 cent screwdriver from any building material shop and just open these up two little screws and you're in there.  
That's the left picture that you see there and indeed again you see this bus there but you also see other wires 
and the other wires are actually going to the lock.  
So i ask Comelit so what happens if i take a paperclip and i bridge the system from the bus to the lock? Does it open?
And Comelit responded with: Yes it does but who opens this? Okay fair point, i don't know that. But surely
there are some really easy measures that you can take to improve this? So how important is it? 
i mean is it just people's buildings, people's first front door so you can get in the
hallway where the staircases are to the apartments or is it something more important?
Can you actually get into buildings and specifically can you get into important buildings?  
So i looked into that too. So who is using Comelit? It's a lot of buildings! Sometimes it's complete streets,
but i made a nice selection here of Comelit systems that i found. 
There are some important customers there. You can see UNICEF is using it. As soon as you are at UNICEF you can
actually get into the building. So it's not just the first door that you get into.  
Landal, it's a holiday park company they are using that too and again you can get indoors there too.
But maybe the most important one is on the right side there. Maybe it's a little bit difficult to
read but it actually says "reclassering". And maybe the dutch people now say: ooh! Because this is an 
important company. It is actually the Dutch probation service so it is actually tied to
prison system in The Netherlands.  
So last week i called them and they thought it was really important and they are definitely going to look into
this. From other companies i got a less than enthusiastic reply and they just said you know just
send an email to the info@ email address and yeah we'll see if anyone wants to look at it.  
Yeah so there's a lot of negative things. So i thought is there any upside to this whole story?
Well i can think of one. It would be really easy to connect it to your home automation system
I mean: it's it's really easy to make your own home automation gateway for this and
connect it to any of one of these pieces of software and you can actually open
your door for someone while you're on holiday if that's would be needed with your
own app without Google or Amazon  having use your data.  
So i would like to end on a positive note. So Comelit did actually manage to build a system that has a
really, really, open interface!  
Thank you very much
