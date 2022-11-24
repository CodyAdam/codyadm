---
layout: ../../layouts/ProjectLayout.astro
title: Hackathon Competitive AI
date: 2021/01
sumary: A programming contest on the CodingGame platform in which the goal is to create the smartest AI using Python. The AI will have to play a game against other AIs in duels.
tags: 
  - challenge
  - problem solving
  - ai
stack: 
  - python
value: 4
rank: 35/543
thumbnails: ~
---


# About

![](/md/ghost1.jpg)
![](/md/ghost2.jpg)

Hackathon by Sopra Steria. A duration of 10 day. The goal is to create the best AI to fight in a 1v1 against other players.

Sopra Steria is launching a 10-day challenge for you, in the form of a hackathon in France only. The contest starts on January 21 at 6:00 p.m. and ends on January 31, 2021 at 11:59 p.m.

# My performance 
rank 35/543 (168 submissions). 
For the event I used python3.

[Leaderboard](https://www.codingame.com/hackathon/sopra-steria-coding-challenge/leaderboard/global)


![leaderboard](https://github.com/CodyAdam/puzzle__AI-ghost-contest/raw/main/leaderboard.gif)

# Objective

Capture more ghosts than the opposing team.

## Rules

The game takes place on a map of 16001 width and 9001 height. The coordinates X=0, Y=0 represent the upper left corner.

Each player controls a team of several busters. Each team starts at an opposite corner of the map, near their base. Ghosts are spread across the map, and must be captured and brought back to base. Each ghost captured by a buster or brought back to base is worth one point. However, you can lose a point if one of your busters releases their ghost somewhere other than your base.
#### The map works as follows:

- There are always 2 teams in play.
- At the start of the game, each player receives a team ID. He indicates at which base his team starts. The upper left corner ( X=0, Y=0) is for team 0. The lower right corner ( X=16000, Y=9000) is for team 1.
- The fog makes it impossible to know the positions of ghosts or opposing busters, unless they are within a radius of 2200 units of one of your own busters.
- Each buster has a unique ID. Each ghost has a unique ID. A Ghost and a Buster with the same ID are not related.
- Busters work as follows:
- Each buster has a specific role and associated actions:
  - The HUNTER: This is your first buster, he can use BUST. It has a red outline in the viewer.
  - THE CATCHER: This is your second buster, he can use TRAP and RELEASE. It has a green outline in the viewer.
  - THE ASSISTANT: This is your first buster, he can use STUN and RADAR. It has a blue outline in the viewer.
- In addition, all busters can use MOVE.
- MOVE followed by coordinates will move the buster 800 units forward to the chosen point. The position will be rounded to the nearest integer.
- BUST followed by a ghost ID will allow the buster to target a ghost with his proton gun, and cause him to lose 1 stamina point. This action works - if the ghost finds within a radius less than 1760 units but greater than 900 units from the buster.
- TRAP followed by a ghost ID will allow the buster to try to suck the ghost into their trap. It will succeed if the ghost has 0 stamina points and the ghost - finds within a radius less than 1760 units but greater than 900 units of the buster. Captured ghosts are no longer visible on the map.
- A buster can carry at most 1 ghost simultaneously.
- RELEASE will order the buster to release the ghost he is carrying. If a ghost is released within 1600 units of a map corner that is a base, the ghost is removed from play and the base owner scores a point.
- STUN followed by a buster's id will produce a lightning bolt that stuns the target buster. A stunned buster cannot perform actions for 10 turns. THE ASSISTANT must reload - his weapon for 20 rounds before he can stun again. A stunned buster will release any ghost it is carrying.
- THE ASSISTANT can stun an opponent within a radius of 1760 units.
- RADAR will allow the buster to gain vision through the fog and thus be able to see all entities within a radius of 4400 units around him for the - next turn. The ASSISTANT can use this action once per game.
- The Busters do their actions at the same time but the effects linked to the actions, including movement, are applied at the end of the turn.
- Ghosts work as follows:
- The ghosts are stationary if on their starting point and the busters are more than 2200 units away if the ghost is undergoing a BUST. If a ghost is - not on its starting point, it will move towards it unless at the end of this movement it would be at a distance of less than 2200 units from a buster. If busters are - close, he will flee from the point at the barycenter of the nearby Busters unless he is undergoing a BUST.
- Ghosts move at a speed of 400 units.
- Stamina does not regenerate.
- The game ends when all ghosts have been captured or after a limit of 250 turns.

The state of the game during a turn is given to you as a list of entities, each with an id, position, type, role, state and value.
#### The value of type will be:

- 0 for a team buster 0.
- 1 for a team 1 buster.
- -1 for a ghost.

#### The role value will be:

- 0 for the HUNTER.
- 1 for the CATCHER.
- 2 for the ASSISTANT.
- -1 for a ghost.

#### The value of state will be:

- For busters:
  - 0: Buster not carrying ghost.
  - 1: Buster carrying a ghost.
  - 2: Buster knocked out.
  - 3: Buster trapping a ghost.
  - 4: Buster BUST a ghost.

- For ghosts, this value is their stamina rate.

#### value could be:

- For a buster:

  - if this buster carries a ghost, the id of this ghost.
  - If this buster is stunned, the number of turns before it can move again.

- For a ghost, it is the number of busters trying to TRAP or BUST it.

### Victory Conditions

Have captured more ghosts than the opposing team at the end of the game.

### Defeat Conditions

- Your program produces invalid output.
- Your program exceeds the time limit.
- You have less ghost than your opponent at the end of the game.

## Rules for Experts

- The starting positions of busters and ghosts are symmetrical.
- The movements of the ghosts are done 1 turn after having spotted you.
- If a ghost leaves the map after a move, its new coordinates are limited with those of the map.
- Using STUN on an already stunned buster will stun them for 10 new rounds.
- If a buster carrying a ghost is knocked out in a base, the ghost is removed from play and the owner of the base scores a point.## Note

Your program must first read the initialization data from standard input, then, in an infinite loop, read the game context data and write the actions for your busters to standard output.

## Game entries

### Initialization entries

Line 1: an integer bustersPerPlayer for the number of busters controlled by the team.
Line 2: a ghostCount integer for the number of ghosts on the map.
Line 3: an integer myTeamId the identifier of your team.

### Entries for a game round

Line 1: an integer entities the number of entities visible to you for this turn.
The following entities lines: 6 integers separated by spaces, entityId , x , y , entityType , entityRole , state & value . Represent a buster or ghost.

### Out for a round of play

A line for each of your busters: one of the following actions:

- MOVE followed by two integers x and y
- BUST followed by an integer ghostId
- TRAP followed by an integer ghostId
- RELEASE
- STUN followed by an integer busterId
-RADAR

You can add text after your instructions, it will be shown in the player (one message per buster).

Your first line will be for your HUNTER who can use MOVE or BUST,
the second line will be for your CATCHER which can use MOVE, TRAP or RELEASE,
and the last line will be for your ASSISTANT who can use MOVE, STUN or RADAR.

## Constraints

bustersPerPlayer = 3
8 ≤ ghostCount ≤ 13
stamina in {3, 15, 40}

Response time per revolution ≤ 100 ms
