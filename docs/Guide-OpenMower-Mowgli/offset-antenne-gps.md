---
title: "📐 Offset antenne GPS"
nav_order: 8
permalink: /docs/Guide-OpenMower-Mowgli/offset-antenne-gps/
layout: default
parent: "🏠 Guide OpenMower"
---

import links from '@site/src/data/links';

# 📐 Offset antenne GPS Mowgli

L'offset antenne GPS permet d'indiquer à OpenMower la position exacte de l'antenne GPS **par rapport au centre de référence du robot** (milieu de l'axe des roues arrière). Sans cette configuration, le robot calculera sa position avec une erreur systématique.

---

![Schéma offset antenne GPS Mowgli Yardforce 500/500B](/img/offset-antenne-gps.jpg)

## 🧭 Comprendre le système de coordonnées

Le robot utilise un repère local centré sur **l'axe des roues arrière** :

| Axe | Direction | Valeur positive |
|-----|-----------|----------------|
| **X** | Avant / Arrière | Vers l'avant du robot |
| **Y** | Gauche / Droite | Vers la gauche du robot |

> L'antenne GPS est généralement montée **en avant et au centre** du robot — offset X positif, Y à zéro.

---

## 📏 Comment mesurer votre offset

Mesurez physiquement sur votre robot :

1. **OM_ANTENNA_OFFSET_X** — Distance horizontale (en mètres) entre le **centre de l'axe des roues arrière** et la **base de l'antenne GPS**, dans l'axe avant/arrière.
2. **OM_ANTENNA_OFFSET_Y** — Décalage latéral (en mètres). Si l'antenne est parfaitement centrée → `0.0`.

:::tip Valeur par défaut
La valeur par défaut fournie par cedbossneo est `X=0.3` (30 cm vers l'avant), `Y=0.0` (centré).  
Pour le Yardforce 500/500B avec le support GPS imprimé en 3D, mesurez votre installation réelle pour affiner la précision.
:::

---

## ⚙️ Configuration de l'offset

Les réglages de l'offset antenne se font directement depuis l'**interface web** (port `4006`), section **Configuration**. C'est la méthode recommandée.

<details>
<summary>🔧 Avancé — Modifier manuellement via mower_config.sh</summary>

Les paramètres correspondants dans `mower_config.sh` sont les suivants :

```sh
# Set default GPS antenna offset
export OM_ANTENNA_OFFSET_X=0.3   # distance en mètres (avant = positif)
export OM_ANTENNA_OFFSET_Y=0.0   # décalage latéral en mètres (gauche = positif)
```

Ces valeurs sont écrasées par celles saisies dans le dashboard.

Pour modifier manuellement et appliquer :

```sh
sudo nano ~/mowgli-docker/config/om/mower_config.sh
```

Sauvegardez avec `Ctrl + O` puis `Entrée`, quittez avec `Ctrl + X`, puis redémarrez les conteneurs :

```sh
cd ~/mowgli-docker
sudo docker compose down
sudo docker compose up -d
```

</details>

---

## 🔍 Vérification

Une fois l'offset saisi dans le dashboard (port `4006`), vérifiez que la position affichée du robot correspond bien à sa position réelle sur la carte. Un offset mal configuré se traduit par un décalage visible entre la position GPS et la trajectoire réelle du robot.

---

## 🔗 Ressources

- <a href={links.firmware.mowgliDocker} target="_blank">Dépôt mowgli-docker (cedbossneo)</a>
- [← Retour : Configuration OpenMower](/docs/Guide-OpenMower-Mowgli/configuration-openmower)
