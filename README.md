# React PlayOff @ SFEIR

Ce projet a pour but de tester les connaissances et les compétences d'un candidat sur la plateforme React JS

## Setup du project

Installation des packages

```shell
npm install || npm ci
```

Initialisation du server json (dans un premier shell)

```shell
npm run server
```

Run de l'application (dans un autre shell)

```shell
npm start
```

## Avant de Commencer

Expliquer l'architecture de ce projet et les potentiels avantages que nous pouvons en tirer ?

## Features

Vous pouvez réaliser les features dans l'ordre de votre choix, ne restez pas bloqué sur l'une ou l'autre

### Filters

Notre Client souhaiterait pouvoir filter les tasks qui sont affichées dans cette application,

Ces filtres doivent répondre de la sorte

- All: afficher toutes les tasks
- Active: afficher uniquement les tasks qui ne sont pas terminées
- Complete: afficher uniquement les tasks qui sont terminées

Vous pouvez les implémenter comme bon vous semble (state, hooks, routing, query params, ...) pour autant que ces derniers répondent au besoin du Client
Expliquez votre choix

### Création, Récupération, Modification, Suppression (CRUD)

Notre Client souhaiterait que les tasks puissent être sauvegardées, modifiées et supprimées dans le but de rendre l'application utilisable à travers le monde

Actuellement les tasks qui s'affichent sont statiques, il faudra afficher les tasks disponibles dans notre base de données
Pour récupérer ces données nous avons préalablement mis en place un json server.
Celui-ci répond aux APIs classique (get, post, put, delete) sur l'entité "tasks"

Nous aimerions pouvoir créer/editer/supprimer les tasks au sein de l'application afin de la rendre utile.

### Tests

Avant de pouvoir livrer ces nouvelles fonctionnalités, nous devons assurer leur bon fonctionnement
Que pourrions-nous faire pour cela ? N'hésitez pas à nous le montrer directement afin que notre Client soit confiant par rapport au livrable que nous lui fournirons

## \* Optionnel

- Quel(s) avantage(s) pouvons-nous tirer par l'utilisation des Hooks (default et custom ones) ?
- Qu'est-ce qu'un HOC (High Order Component) et quel est l'avantage d'en utiliser ?
- Qu'est-ce que Pipe (et/ou Compose) et quel est l'avantage d'en utiliser ?
- Comment s'assurer qu'un Component dispose de toutes les propriétés nécessaires ?
- Comment faire pour que l'uri de votre API soit définie selon l'env sur lequel nous déploierons ?
- Nous aimerions assurer la qualité, la maintenabilité et la robustesse de cette nouvelle application afin de la rendre future proof, comment faire ?
- ...
