IN = """2018-04 Pong
2018-10 Halloween Game Jam
2019-05-13 Game Jam 2d puzzle Platformer JamDNA
2019-10 projet DIE image recogn by machine learning
2019-10 Stéréogram générator
2019-11-17 Hackathon « Insomnihack »
2019-12 Advent of code
2020-01-17 Game Jam 2D Cute Adventure Puzzle Game
2020-01-25 Esir game jam
2020-01 Projet Bloons TD
2020-12 Advent of code
2021-02 Projet Chatbot
2021-02 Renergie
2021-03 Dofus OCR Sniffer
2021-06 GMTK Game Jam DuctTape Boy
2021-09-20 Dofus Packet Sniffer
2021-10-14 Break the code by Sopra Steria
2021-11-25 Orange CTF
2021-11 Character generator NFT
2021-12 Advent of code
2022-01-28 Hackathon Challenge Digital Transformer
2022-04-12 Laval Virtual Europe 2022
2022-04-25 SWERC 2022 itali
2022-05-19 Esir Prog2 GameJam
2022-05-25 Audio-Mixing C++ tool
2022-05 Time keeper
2022-06-02 Irkurk language translator
2022-08 Chateau Du Hallay Project
2022-09 cdy.pw URL shortener
2022-10 AUTE 3d editor
2022-11 Break The Code 2022
"""

for line in IN.splitlines():
    if line:
        date, name = line.split(" ", 1)
        name_without_space = name.replace(" ", "-")
        print(date, name)
        # create a markdown file with the name of the project
        with open(f"src/pages/projects/{date}-{name_without_space}.md", "w") as f:
            f.write(f"""---
layout: ../../layouts/ProjectLayout.astro
title: {name}
date: {date.replace("-", "/")}
sumary: ~
tags: ~
value: ~
thumbnails: ~
---""")