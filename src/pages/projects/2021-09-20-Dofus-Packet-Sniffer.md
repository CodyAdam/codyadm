---
layout: ../../layouts/ProjectLayout.astro
title: Dofus Packet Sniffer
date: 2021/09/20
sumary: A tool to extract information from the game Dofus using packet sniffing.
tags: 
  - automation
  - hacking
  - networking
  - reverse engineering
  - tool
stack:
  - python
  - pyshark
value: 1
thumbnails: ~
repo: https://github.com/CodyAdam/Dofus-Packet-Sniffer
---

# What is this ?

This is a packet sniffer for the game Dofus. It read a large amount of data using [packet sniffing](https://en.wikipedia.org/wiki/Packet_analysis) to then generate a JSON containing all the captured data.

To extract the data from received packets, I had to decode each packet bytes structure by reverse engineering the game source code. This was done using [Pyshark](https://kiminewt.github.io/pyshark/).