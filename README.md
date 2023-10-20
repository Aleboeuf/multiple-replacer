
# Multiple Replacer

## Description

Ce projet permet de remplacer plusieurs occurences en même temps dans un fichier.

## Utilisation

On lui indique les fichier à modifier.
On lui indique le fichier de définition des clés et valeurs de remplacement au format .json.

On lance le programme et les fichiers seront parcouru et modifiés selon la configuration donnée. 
Un fichier .old avec l'ancien état est créé pour chaque fichier édité.

## Configuration

Le nom du (ou des) fichier(s) à modifier est à définir dans le fichier `src/configuration/config.ts` dans la propriété `srcFile`.
Le nom du fichier de définition des clés et valeurs de remplacement est à définir dans le fichier `src/configuration/config.ts` dans la propriété `defFile`.

## Installation des dépendances

Lancer la commande `npm install` à la racine du projet pour installer les dépendances.


## Lancement du programme

Utiliser la commande ```bash npm run start``` pour lancer le programme en mode production.


## Developpement

Utiliser la commande ```bash npm run start:dev``` pour lancer le programme en mode développement et avoir un compilation et un relancement automatique à chaque sauvegarde.