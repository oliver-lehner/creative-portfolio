---
title: "LARD"
date: 2017-12-05T09:57:33+01:00
draft: true
image: "./img/LARD_finished.jpg"
description: "Interactive Installation"
year: 2015
categories: ["Interaction Design", "Installation"]
tags: ["Sonic Warfare", "LRAD", "Directional Sound", "Interactive Art", "Protest", "Ars Electronica", "Python", "Raspberry Pi", "OpenCV"]
---
Military and police in numerous countries around the globe use Long Range Acoustic Devices (LRADs) 
as weapons against agitated crowds. LRADs emit a focused sound beam with an intensity that is high 
enough to permanently damage human hearing. Because it is not desirable for a governmental entity to 
use weapons, even the non-lethal type, against its own citizens, the manufacturer markets these sonic 
weapons as “hailing device,” a device that facilitates communication between the authorities and the mob.
LARD aims to level the playing field on the sonic battleground and uses similar technologic principals 
in a miniaturized form. Voices of protest from all over the globe are collected and their messages 
whispered to everyone who would stop and listen. The technology used to silence and disperse 
crowds is turned around to do the exact opposite.

{{< vimeo 139796964 >}}

LARD consists of a Raspberry Pi 2 computer, a Raspberry Pi camera board, two mini servo motors, 
a Soundlazer directional audio developer board and an LED floodlight. The Soundlazer is mounted to 
a motorized pan/tilt mechanism that allows to precisely aim the sound beam towards recipients. 
The position of the recipients is determined using face detection. A script queries the twitter API 
every 5 minutes for messages that are tagged with “protest,” not only in English but in twelve different 
languages. Audio files are then created with a simple text-to-speech library and are played back as 
soon as a recipient faces the installation.

{{< image src="./img/LARD_visitor.jpg" title="Visitor interacting with LARD at Ars Electronica Festival" >}}

