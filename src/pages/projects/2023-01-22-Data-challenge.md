---
layout: ../../layouts/ProjectLayout.astro
title: Data Challenge 2023 Winner
date: 2023/01/22
sumary: A 24-hour hackathon where a team of 5 was tasked with solving an industry problem. Successfully won the challenge by implementing an AI genetic algorithm solution.
coauthors: 
  - Aussant Antoine
  - Delapart Thomas
  - Larmet-Demenay Gwendal
  - Delisle Juliette
tags: 
  - group project
  - ai
  - challenge
  - data
  - visualization
value: 4
stack: 
  - python
thumbnails: 
  - https://github.com/CodyAdam/datachallenge2023/raw/main/documentation/img/win.jpg
rank: 1
repo: https://github.com/CodyAdam/datachallenge2023
---



# Gagnat du Data Challenge 2023

**Première place** sur 18 équipes au Data Challenge 2023.

**L'Équipe** :
- Adam Cody
- Aussant Antoine 
- Delapart Thomas
- Delisle Juliette
- Larmet-Demenay Gwendal 


![Photo](https://github.com/CodyAdam/datachallenge2023/raw/main/documentation/img/pres.jpg)
![Photo](https://github.com/CodyAdam/datachallenge2023/raw/main/documentation/img/working.jpg)
![Price](https://github.com/CodyAdam/datachallenge2023/raw/main/documentation/img/win.jpg)

# Data Challenge 2023

Le Master Mathématiques Appliquées, Statistique (Universités de Rennes 1 et Rennes 2), le Master Monnaie, Banque, Finance Assurance (Université de Rennes 1), TAC ECONOMICS et l'association Rennes Data Science, organisent un data challenge les 20 et 21 janvier 2023 à la Faculté des Sciences Economiques de Rennes.

# Le problème

Voir les 2 sujets du data challenge [ici](https://github.com/CodyAdam/datachallenge2023/blob/main/documentation/challenge/documentation.pdf).

Nous avons choisi le sujet suivant : **Optimisation du positionnement des sites Enedis en Bretagne**.

# Notre solution

![Solution](https://github.com/CodyAdam/datachallenge2023/raw/main/data/img/b40_gen_200.png)

Animation des générations de notre algorithme génétique :

![SolutionGif](https://github.com/CodyAdam/datachallenge2023/raw/main/documentation/img/40b.gif)

### Détail de notre solution [ici (`documentation/rapport_technique`)](https://github.com/CodyAdam/datachallenge2023/blob/main/documentation/rapport_technique.md).

### Structure du projet

```
📦datachallenge2023
 ┣ 📂data
 ┃ ┣ 📂bzh_shapefile                        // Shapefile de la Bretagne
 ┃ ┣ 📂img                                  // Plots Saved
 ┃ ┣ 📜communes_bre.csv
 ┃ ┣ 📜niveau_interventions.csv
 ┃ ┣ 📜niveau_interventions_improved.csv
 ┃ ┣ 📜temps_trajet30.csv
 ┃ ┗ 📜temps_trajet30_filtered.csv
 ┣ 📂documentation                          
 ┣ 📂src
 ┃ ┣ 📜data challenge_doc final.R           // Script R prétraitement
 ┃ ┣ 📜main.py                              // Programme principal
 ┃ ┣ 📜parse.py                             // Fonctions de traitement
 ┃ ┣ 📜genetic.py                           // Algorithme génétique
 ┃ ┗ 📜utils.py                             // Fonctions utilitaires
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┗ 📜requirements.txt                       // packages Pythons nécessaires
 ```

# Installation et utilisation

## Prérequis

- Python 3.X
- Pip

Pour installer les packages nécessaires, exécuter la commande suivante :

```bash
pip install -r requirements.txt
```

## Utilisation

Pour lancer le programme, exécuter la commande suivante :

```bash
python main.py
```