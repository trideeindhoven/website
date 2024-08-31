+++
title = "Paxton en de luchtige licentie"
description = "CloudAware"
date = "2024-08-30"
aliases = []
author = "Jeroen Hermans"
image = "img/blog/pexels-kindelmedia-7714892.jpg"
+++
Als een firma licenties voor hun producten verkoopt is het natuurlijk wel de bedoeling dat deze licenties niet omzeild
kunnen worden.
<!--more-->
Het is een aantal maanden na het onderzoek naar de beveiliging van gebouwtoegangssystemen van de [firma Paxton]({{< ref "paxton_tls" >}}).






    <License>
          <Id>42424242-4242-4242-4242-424242424242</Id>
          <Type>Standard</Type>
          <Customer>
            <Name>Mark Rutte</Name>
            <Email>m.rutte@overheid.nl</Email>
          </Customer>
          <Expiration>Sun, 23 Jun 3022 23:20:20 GMT</Expiration>
          <LicenseAttributes>
            <Attribute name="Company">Ministerie Algemene Zaken</Attribute>
            <Attribute name="ClientID">d2664aa0-0b74-41f3-82d9-f6a3e034fb4c</Attribute>
          </LicenseAttributes>
    <Signature>Tm8gd2F5IHRoaXMgaXMgVEhJUyBlYXN5Lg==</Signature>
    </License> 

Laten we even wat beter kijken naar deze licentiefile. De licentie begint met een "Id". Het moge duidelijk zijn dit dit
niet het id van het leven, universum en alles is, maar vrij random door mij gekozen is.  
Ik heb niet veel tijd gestoken in het "Type" en ik heb dit op "Standaard" laten staan.  
De "Customer" gegevens heb ik een random naam en emailadres voor gekozen. Als we er van uitgaan dat deze persoon niet 
heeft gereageerd op een bevestigingsmail, dan kunnen we voorlopig aannemen dat hier geen validatie plaatsvindt.  
Om te voorkomen dat ik opeens de licentie niet meer kan gebruiken heb ik een (geldige) datum in de toekomst gekozen. 
Vreemd genoeg vond hier wel een validatie op plaats.  
Ook de bedrijfsnaam in de licentie mag ik zelf kiezen zonder dat hier een validatie op plaatsvindt. Het clientID is een 
UUIDv4. Zo lang dit een geldig UUIDv4 is, zal dit worden geaccepteerd als geldige licentie.  

Maar. Paxton heeft een "Signature" in de licentie geplaatst. En zoals zo vaak zit het venijn in de staart. Echter de
oplettende lezer heeft al gezien dat dit een BASE64 string is. Het is vrij eenvoudig om de (door mij gemaakte) Signature
door 
{{< a_blank "cyberchef" "https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9%2B/%3D',true,false)&input=VG04Z2QyRjVJSFJvYVhNZ2FYTWdWRWhKVXlCbFlYTjVMZz09" >}}
te halen.


{{< a_blank "POC exploit" "https://github.com/gitaware/poc_exploit_paxton_license" >}}

