---
title: "Ambisonic Fixations of Error"
date: 2019-06-06T15:40:39+01:00
draft: true
image: "./img/ambfix2.png"
description: "Web VR Experience"
year: "2018"
categories: ["VR/AR"]
tags: ["PhD Research", "Field Recording", "Ars Electronica", "Web VR", "Aframe"]
weight: 100
---

As part of my artistic research of documentation and conservation of sound 
installations based on consumer VR technology I found it important to investigate
gallery soundscapes. With help from Sennheiser Austria and Ars Electronica Festival 
I recorded ambisonic audio at the festival site and prepared a Web VR Experience to make 
ephemeral sound art felt after its physical manifestation ceased to exist.

Prolog
-------

Als Teil meiner künstlerischen Forschung zu Consumer Virtual Reality
Technologie als Basis zur Archivierung und Dokumentation von räumlichen
Klanginstallationen war es mir wichtig zu ergründen, wie sich eine
museale Soundscape gestalten kann und wie sich eine Reproduktion
derselben erfahren lässt. Da im Zusammenhang mit dem Trend zu 360° Grad
Videos -- und ich benutze an dieser Stelle ganz bewusst nicht den Term
"VR-Video" -- auch der Markt für Ambisonic Mikrofonie in Schwung
gekommen ist, bieten namhafte Hersteller brauch- und leistbare
semiprofessionelle Lösungen an. Dankenswerterweise hat mir Sennheiser
Österreich für den Zweck, Aufnahmen (bzw. Fixierungen) am Ars
Electronica Festival vorzunehmen, ein Mikrofon des Typs Ambeo VR Mic zur
Verfügung gestellt. Das vorliegende Dokument behandelt sowohl den
Aufnahmeprozess, als auch die Verarbeitung der Aufnahmen zu einer WebVR
Präsentation.

Soundwalk durch Error
-------

Auch wenn im Jahr 2018 keine Preise für Digitale Musik und Sound Art
vergeben wurden, haben sich alleine anhand der Werkbeschreibungen einige
Arbeiten hervorgetan, die -- auch wenn visuelle, skulpturale oder
kinetische Elemente vordergründig zu sein schienen -- für eine
Konservierung ihrer raumklanglichen Wirkung interessant waren. Die
Entscheidung das Aufnahme-Equipment an einem bestimmten Ort in Betrieb
zu nehmen fiel aber immer spontan, während ich mit offenen Ohren durch
das Labyrinth der Ausstellungsräume der Post City ging. Die
Positionierung des Mikrofons wurde wenn möglich mittig in der
Installation vorgenommen. Niemals aber wurde eine Position gesucht, die
nicht von herkömmlichen BesucherInnen erreichbar gewesen wäre.
Schließlich ging es darum, das Erlebnis eines klanglastigen Kunstwerks
aus der Sicht der RezipientInnen einzufangen. Audiofixierungen wurden
von folgenden Werken angefertigt: _πTon_ von Cod.Act,
_LightTank_ von arc/sec Lab (Uwe Rieger,
Yinan Liu),_unearth / Paleo-Pacific_ von
Shun Owada, _The Water Resistance Laboratory "Toboggans"_ von Claudia González Godoy, 
_DSD-08S_ von Stefan Tiefengraber und _tangible Flux φ plenumorphic chaosmosis_
von Navid Navab. Es handelte sich dabei großteils um Rauminstallationen,
wobei mit _πTon_ eine Performance inkludiert war, die eine
kinetische Skulptur in den Mittelpunkt stellte.

Nachbearbeitung der Aufnahmen
-----

Zuerst galt es die im Ambisonic A-Format erstellten Aufnahmen in das für
die korrekte Wiedergabe nötige B-Format zu konvertieren. Sennheiser
stellt dafür ein Plugin zur Verfügung, als Host-Software kam Reaper zum
Einsatz. Um binaurales Monitoring zu ermöglichen wurde die Plug-in Suite
von Mathias Kronlachner eingesetzt. Für die Präsentation der _Ambisonic
Fixations of Error_ wurde eine
web-basierte Variante gewählt. Dafür mussten die unkomprimierten
B-Format Aufnahmen in ihrer Größe geschrumpft werden. Als geeigneter
Codec hat sich dafür OGG Opus herausgestellt. Die Aufnahmen wurden
weitestgehend nicht editiert, jedoch Loop-freundlich gekürzt - eine
weitere Maßnahme zur Reduktion der Bandbreite. Da RezipientInnen von
Installationen immer öfters Interaktivität voraussetzen, musste bei
einer Aufnahme das Klopfen eines Besuchers an das Mikrofon
herausgeschnitten werden.

{{< image src="./img/ambfix1.png" title="Listening Platform" >}}

Gestaltung der WebVR Präsentation
-----

Die visuelle Repräsentation war bereits in der Planungsfrage eine
wichtige konzeptionelle Frage. Um den Fokus eindeutig auf die auditive
Wahrnehmung zu lenken, wurde die Aufnahme von 360°-Videos von vornherein
ausgeschlossen. Da jedoch ein Anreiz für die Benützung eines VR-Headsets
(eine technische Notwendigkeit für die Wiedergabe von Head-tracked
Binaural Audio) geschaffen werden musste, wurde eine 3D-Szenerie
geschaffen, die zur Navigation und Auswahl der _Fixations_ dient. 
3D-Modelle wurden in Blender erstellt,
Texturen in Substance Designer. AFrame, ein Entity-Component-Framework
für webbasiertes VR, kombiniert die einzelnen Assets zu einer Szene und
kümmert sich um das Rendering und die Interaktion. Für die Wiedergabe
von Ambisonic Audio mit Head Tracking wurde eine eigene Komponente für
Aframe erstellt, die sich der OmniTone Bibliothek von Google bedient, um
Audio zu rendern. In der 3D Szene werden neben dem Titel des
aufgenommenen Werks Fotos von der Aufnahmesituation präsentiert, um eine
grobe Verortung der Hörposition zu ermöglichen. Die Navigation innerhalb
der Szene ist Blick-basiert, somit wird kein Controller benötigt, ein
simples VR Headset im Stil von Google Cardboard genügt um den vollen
Funktionsumfang genießen zu können.

Fazit
----

Die Kreierung des Prototyps "Ambisonic Fixations of Error" hatte im
wesentlichen zwei vorteilige Ergebnisse: Erkenntnisgewinn über die
Zusammensetzung einer musealen Soundscape und einen ungemeinen
Lerneffekt im Umgang mit den Werkzeugen, mit denen im Zuge des Doktorats
aufwendigere Projekte realisiert werden können. Bedauerlich ist, dass
kein geeigneter Kanal zur Präsentation des Projekts gefunden wurde.

_Ambisonic Fixations of Error_ kann [hier](https://ambeoars18.firebaseapp.com/)
erlebt werden.