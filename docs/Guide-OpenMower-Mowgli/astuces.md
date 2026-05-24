---
title: "💡 Astuces"
nav_order: 95
permalink: /docs/Guide-OpenMower-Mowgli/astuces/
layout: default
parent: "🏠 Guide OpenMower"
---

import links from '@site/src/data/links';

# 💡 Astuces Mowgli

Retrouvez ici toutes les astuces du guide regroupées en un seul endroit.

---

## 🔧 Matériel & Installation

### 🧠 Pas d'imprimante 3D ?
> *Source : [Matériel requis](/docs/Guide-OpenMower-Mowgli/materiel-requis)*

Si vous n'avez pas d'imprimante 3D, les pièces nécessaires peuvent être imprimées sur demande. Contactez Juditech3D sur <a href={links.community.telegramFR} target="_blank">Telegram</a> ou à [juditech3d@gmail.com](mailto:juditech3d@gmail.com).

---

### 🔌 Brancher la manette PS3 sans ouvrir le robot
> *Source : [Manette PS3](/docs/Guide-OpenMower-Mowgli/manette-ps3)*

Branchez une **rallonge USB** sur la **prise USB externe existante du robot** (reliée au Raspberry Pi). Vous pouvez ainsi connecter la manette directement à l'extérieur du robot, sans avoir à l'ouvrir. Pratique pour les sessions de cartographie !

---

### 🎮 Manette Xbox compatible
> *Source : [Manette PS3](/docs/Guide-OpenMower-Mowgli/manette-ps3)*

Une manette Xbox USB est également compatible avec OpenMower et fonctionne de la même façon — les boutons correspondent directement sans conversion.

---

### 🔍 Trouver les IDs de votre GPS (lsusb)
> *Source : [Configuration système](/docs/Guide-OpenMower-Mowgli/configuration-systeme)*

Si vous utilisez un GPS spécifique, exécutez la commande suivante une fois l'appareil connecté pour trouver les `vendorId` et `productID` à renseigner dans les règles udev :

```sh
lsusb
```

---

### 🖨️ Impression 3D — Paramètres recommandés
> *Source : [Pièces à imprimer en 3D](/docs/Guide-OpenMower-Mowgli/impression-3d)*

Pour les pièces structurelles, prévoyez :
- **Taux de remplissage** : 30 à 50 %
- **Parois** : 3 à 6 selon la solidité souhaitée
- **Matériaux** : PETG, ABS ou ASA (résistants à la chaleur et à l'humidité)

---

## 📡 GPS & Positionnement

### ✅ Vérifier le statut RTK Fix
> *Source : [Configuration OpenMower](/docs/Guide-OpenMower-Mowgli/configuration-openmower)*

Une fois le NTRIP connecté, le statut GPS dans l'interface (port `4006`) doit passer à **RTK Fix**. Sans RTK Fix, le robot ne peut pas fonctionner en toute sécurité.

---

### 📐 Valeur par défaut de l'offset antenne GPS
> *Source : [Offset antenne GPS](/docs/Guide-OpenMower-Mowgli/offset-antenne-gps)*

La valeur par défaut fournie par cedbossneo est `X=0.3` (30 cm vers l'avant), `Y=0.0` (centré). Pour le Yardforce 500/500B avec le support GPS imprimé en 3D, mesurez votre installation réelle pour affiner la précision.

---

## 🗺️ Cartographie & Navigation

### 🧭 Initialisation de l'orientation — Vérification visuelle
> *Source : [Configuration OpenMower](/docs/Guide-OpenMower-Mowgli/configuration-openmower)*

Le robot ne connaît pas lui-même la qualité de son estimation d'orientation. C'est la **visualisation dans l'app** qui vous confirme que l'orientation est correcte :
- Ligne droite → visualisation droite, sans sauts
- Rotation sur place → visualisation stationnaire, sans sauts

---

### 💾 Sauvegarde préventive de la carte
> *Source : [Problèmes & Solutions](/docs/Guide-OpenMower-Mowgli/probleme-solution)*

Sauvegardez régulièrement votre carte `map.bag` pour éviter de tout perdre en cas de crash :

```sh
cp config/om/map.bag config/om/map.bag.backup
```

---

## 🐳 Docker & Diagnostic

### 🔍 Diagnostic rapide via les logs Docker
> *Source : [Problèmes & Solutions](/docs/Guide-OpenMower-Mowgli/probleme-solution)*

Consultez les logs en temps réel pour identifier rapidement l'origine d'un blocage :

```sh
cd mowgli-docker
sudo docker compose logs -f
```

Pour quitter : `Ctrl + C`

---

### 📡 Redémarrer en cas de déconnexion NTRIP
> *Source : [Problèmes & Solutions](/docs/Guide-OpenMower-Mowgli/probleme-solution)*

En cas de déconnexion NTRIP persistante, redémarrez les conteneurs :

```sh
sudo docker compose down && sudo docker compose up -d
```

---

## 🌿 Tonte & Terrain

### 🧠 Améliorer la traction sur terrain pentu
> *Source : [Problèmes & Solutions](/docs/Guide-OpenMower-Mowgli/probleme-solution)*

L'ajout de **roues lestées** peut améliorer significativement l'adhérence sur terrain en pente. Les fichiers STL sont disponibles dans la section [Pièces à imprimer en 3D](/docs/Guide-OpenMower-Mowgli/impression-3d).

---

## 🖼️ Schéma de câblage

### ✏️ Modifier le schéma Draw.io en ligne
> *Source : [Schéma de câblage](/docs/Guide-OpenMower-Mowgli/schema-de-cablage)*

Le schéma de câblage est modifiable en ligne directement via [Draw.io](https://draw.io) — importez le fichier `.drawio` disponible sur la page dédiée.
