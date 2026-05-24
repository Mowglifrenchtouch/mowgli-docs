---
title: "🎮 Manette PS3 — Configuration & Boutons"
sidebar_label: "🎮 Manette PS3"
nav_order: 7
permalink: /docs/Guide-OpenMower-Mowgli/manette-ps3/
layout: default
parent: "🏠 Guide OpenMower"
---

import links from '@site/src/data/links';
import YoutubeEmbed from '@site/src/components/YoutubeEmbed';

# 🎮 Manette PS3 — Configuration & Boutons OpenMower

Cette page détaille le branchement et la correspondance des boutons d'une manette PS3 avec les fonctions OpenMower.

<YoutubeEmbed id={links.youtube.manoettePS3Demo} title="Démonstration manette PS3 sur Mowgli" />

---

## 🔌 Branchement

Connectez la manette PS3 via le **câble USB** directement au Raspberry Pi. OpenMower la détecte automatiquement sans configuration supplémentaire.

:::tip Astuce — Port USB externe
Sur mon robot, j'ai branché une **rallonge USB** sur la **prise USB externe existante du robot** (reliée au Raspberry Pi). Cela permet de connecter la manette directement à l'extérieur du robot, **sans avoir à l'ouvrir**. Pratique pour les sessions de cartographie !
:::

:::warning Mode enregistrement obligatoire
La manette ne fonctionne que lorsque OpenMower est en **mode enregistrement**. Ce mode démarre automatiquement si aucune carte n'existe encore.
:::

---

:::warning Retour d'expérience partiel
Toutes les fonctionnalités de la manette PS3 n'ont pas été testées exhaustivement sur Mowgli. Il est possible que certaines commandes listées ci-dessous ne soient pas toutes utilisables ou fonctionnelles dans votre configuration. N'hésitez pas à partager vos retours sur le <a href={links.community.telegramFR} target="_blank">groupe Telegram</a>.
:::

## 🕹️ Correspondance des boutons PS3 ↔ OpenMower

| Bouton PS3 | Équivalent Xbox | Action |
|-----------|----------------|--------|
| ✕ (Croix) maintenu + stick gauche | A + stick gauche | 🕹️ **Conduire** le robot |
| R1 | RB | ⚡ Mode **turbo** (vitesse augmentée) |
| ○ (Rond) | B | ⏺️ **Démarrer / arrêter** l'enregistrement d'une zone |
| △ (Triangle) + ↑ D-PAD | Y + D-PAD UP | 🛣️ Sauvegarder comme **zone de navigation** (passage uniquement) |
| △ (Triangle) + ↓ D-PAD | Y + D-PAD DOWN | 🌿 Sauvegarder comme **zone de tonte** |
| □ (Carré) 1er appui | X | 📍 Enregistrer le **point d'approche** de la station (~1,5 m devant) |
| □ (Carré) 2e appui | X | 🏠 Enregistrer le **point d'entrée** de la station |

:::tip
Une manette Xbox USB est également compatible et fonctionne de la même façon — les boutons correspondent directement sans conversion.
:::

---

## 📖 Ressources

- <a href={links.openmower.docs} target="_blank">Documentation officielle OpenMower</a>
- [← Retour : Configuration OpenMower](/docs/Guide-OpenMower-Mowgli/configuration-openmower)
