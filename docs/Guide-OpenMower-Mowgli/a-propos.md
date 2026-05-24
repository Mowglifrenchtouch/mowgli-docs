---
title: "👤 À propos du projet"
nav_order: 98
permalink: /docs/Guide-OpenMower-Mowgli/a-propos
---

import links from '@site/src/data/links';

![À propos du projet Mowgli](/img/a-propos-illustration.png)

# 👤 À propos du projet Mowgli

Bienvenue sur la documentation officielle personnalisée du projet **Mowgli** — un ensemble de projets open source permettant de transformer une tondeuse **Yardforce 500 / 500B** en robot tondeuse autonome.

---

## 🗂️ Les versions du projet

### 🤖 Mowgli V1 — OpenMower

La première génération, objet principal de ce guide. Elle s'appuie sur le firmware **Mowgli** développé par **cedbossneo**, qui repose lui-même sur le projet **OpenMower** de _Clemens Elflein_.

- Tondeuses supportées : Yardforce 500, 500B
- Navigation GPS RTK (ArduSimple F9P)
- Interface OpenMower (Docker, ROS)
- Firmware STM32 modifié (carte RM-ECOW-V1.x)

:::info
Ce guide est entièrement dédié à la V1. Les autres versions ont leur propre section dans la barre latérale.
:::

---

### 🤖 Mowgli V2 — En développement

Version intermédiaire, encore en cours de développement actif. Elle conserve une architecture proche de la V1, mais l'effort principal porte sur l'adaptation — tant bien que mal — à la **nouvelle interface d'OpenMower**, qui a évolué de façon significative. **Non stable** à ce jour — documentation à venir.

---

### 🚀 Mowglinext — Prochaine génération

**Mowglinext** est une refonte complète du projet, conçue par **cedbossneo** (auteur original de Mowgli).

:::note Indépendance vis-à-vis d'OpenMower
Contrairement aux versions V1 et V2, **Mowglinext est un projet entièrement autonome** — il ne dépend plus d'OpenMower. Architecture modernisée, pile logicielle repensée de zéro.
:::

- Site officiel : <a href={links.mowglinext.website} target="_blank">**mowgli.garden**</a>
- GitHub : <a href={links.mowglinext.github} target="_blank">github.com/cedbossneo/mowglinext</a>
- Actuellement **en phase de conception** — tutoriel non disponible

---

## 🧑‍💻 Auteurs et contributeurs

Ce guide a été rédigé par [**Judicaël (Juditech3D)**](https://github.com/juditech3D) à partir de son expérience personnelle sur le Yardforce 500B.

Un grand merci à :

- [**Cedric / cedbossneo**](https://github.com/cedbossneo) — auteur du firmware Mowgli, du dépôt Docker Mowgli, et du projet **Mowglinext**
- [**Nekraus**](https://github.com/Nekraus) — firmware amélioré compatible clavier et voyants (Yardforce 500B)
- [**Pepeuch**](https://makerworld.com/fr/@user_3228887730) — pièces 3D pour l'intégration matérielle (support RPi+GNSS+F9P, adaptateur moteur SA→500B) et **contributeur actif au développement de Mowglinext**
- **Etienne (Mowgli PCB)** — conception et développement des **cartes PCB** dédiées au projet Mowgli
- [**kamaradclimber**](https://github.com/kamaradclimber) — contributions documentation : dépannage ST-Link V2 et avertissement configuration webui
- La communauté Telegram 🇫🇷 pour leur aide précieuse dans le débogage et les retours d'expérience :
  Rejoindre le canal 👉 <a href={links.community.telegramFR} target="_blank">**Telegram Mowgli fr**</a>

:::note
Ils sont bien plus nombreux sur Telegram — auteurs, testeurs, bricoleurs passionnés qui font avancer le projet chaque jour. Les remercier tous ici serait trop long, mais leur contribution est tout aussi précieuse — et ils se reconnaîtront. 🙏
:::

---

## 💡 Objectif du projet

- Rendre accessible la robotisation des tondeuses existantes
- Fournir une documentation claire, illustrée, et **adaptée aux débutants**
- Proposer une approche **open hardware** + **open source**

---

## 🤝 Contribuer

Tu peux :

- Forker le dépôt GitHub : <a href={links.community.github} target="_blank">github.com/Mowglifrenchtouch/mowgli-docs</a>
- Suggérer des corrections ou améliorations via les Issues
- Rejoindre le canal 👉 <a href={links.community.telegramFR} target="_blank">**Telegram Mowgli fr**</a> pour échanger

---

## 💬 Contact

Pour toute question ou suggestion, rejoins la <a href={links.community.telegramFR} target="_blank">communauté Telegram</a> ou consulte les dépôts GitHub du projet.
