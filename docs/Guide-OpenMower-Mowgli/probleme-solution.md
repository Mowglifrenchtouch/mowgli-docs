---
title: "🛠️ Problèmes et Solutions"
sidebar_label: "🛠️ Dépannage"
nav_order: 90
permalink: /docs/Guide-OpenMower-Mowgli/probleme-solution/
layout: default
parent: "🏠 Guide OpenMower"
---

import links from '@site/src/data/links';

# 🛠️ Problèmes et Solutions

Cette page regroupe les problèmes couramment rencontrés ainsi que leurs solutions et des astuces pour optimiser votre Mowgli.

---

## 🔧 Problèmes techniques

### ❌ Le robot ne démarre pas

**Symptômes :** Le robot reste inerte après mise sous tension.

**Vérifications :**
- La batterie est correctement chargée
- Le bouton d'arrêt d'urgence (STOP) n'est pas enclenché
- Les conteneurs Docker sont bien démarrés (`sudo docker compose ps`)
- Le firmware a été correctement flashé sur la carte STM32

---

### 📶 GPS instable ou déconnexions fréquentes

**Symptômes :** Le statut GPS alterne entre Fix et No Fix, ou se déconnecte aléatoirement.

**Solutions :**
1. Utilisez un **câble USB blindé** entre le Raspberry Pi et le module GPS
2. Vérifiez que la **masse (GND)** est bien partagée entre tous les composants
3. Vérifiez la stabilité de l'alimentation 5V (module LM2596S bien réglé)
4. Assurez-vous que l'antenne GPS a une **vue dégagée sur le ciel**, sans obstacles métalliques proches
5. Éloignez le câble USB GPS des câbles moteurs (perturbations électromagnétiques)

---

### 🚫 Le GPS n'atteint pas le statut RTK Fix

**Symptômes :** Le GPS reste en `GPS Fix` ou `Float` mais n'atteint jamais `RTK Fix`.

**Causes possibles et solutions :**

| Cause | Solution |
|-------|----------|
| Base NTRIP trop éloignée | Choisir un point de montage NTRIP à moins de 30–40 km |
| NTRIP mal configuré | Vérifier host, port, mount point dans l'interface (port 4006) |
| Vue du ciel insuffisante | Déplacer l'antenne, éviter les zones ombragées ou sous les arbres |
| Antenne de mauvaise qualité | Préférer une antenne BT603 ou HA901A |

:::danger Fonctionnement sans RTK Fix impossible
Le robot **ne peut pas fonctionner en sécurité** sans un statut RTK Fix. Ne lancez jamais une tonte sans avoir vérifié ce point.
:::

---

### 📡 Problèmes de configuration ou de signal F9P

:::tip Retour d'expérience terrain
Les points suivants sont issus d'une expérience réelle avec le module F9P. Ce sont des causes fréquentes souvent négligées.
:::

**1. Vérifier le câble d'antenne et ses connexions**

Un mauvais serrage ou une connexion faible sur le câble SMA entre le module F9P et l'antenne suffit à empêcher le RTK de fonctionner. Vérifiez :
- Le connecteur SMA **bien vissé à la main**, sans excès (pas de clé)
- Le câble SMA **sans pliure ni écrasement**
- Les broches du connecteur **non oxydées ou déformées**

:::warning
Un serrage insuffisant ou une connexion intermittente = **pas de RTK Fix**, même si tout le reste est correct.
:::

**2. Antenne humide ou ayant pris l'eau**

L'humidité ou l'eau infiltrée dans l'antenne dégrade fortement la réception des signaux GNSS. Vérifiez :
- L'antenne ne présente **aucune trace d'humidité** à l'intérieur
- Le joint d'étanchéité (si présent) est intact
- L'antenne n'est pas restée exposée à la pluie sans protection

> En cas de doute, laissez l'antenne sécher à l'air libre plusieurs heures avant de retester.

**3. Environnement défavorable**

Certains emplacements de jardin rendent le RTK Fix difficile à obtenir de façon stable :

| Obstacle | Impact |
|----------|--------|
| **Nombreux arbres** à feuilles larges | Masquage et réflexion des signaux satellites |
| **Bâtiments proches** (murs, toits) | Multi-trajets = signal parasite |
| **Zones en creux** (talus, haies hautes) | Réduction du ciel visible |

**Solutions :**
- Montez l'antenne le plus **haut possible** sur le robot pour maximiser la vue du ciel
- Repositionnez le robot dans une zone plus dégagée pour tester
- Consultez la carte du ciel dans l'interface F9P (via u-center) pour visualiser les satellites reçus

---

### 🔌 Réinitialisation des ports USB du Raspberry Pi (sans reboot)

**Symptômes :** Le GPS ou le Mowgli ne sont plus reconnus après un incident, sans reboot possible.

**Solution 1 — Rechargement du module USB :**
```sh
sudo modprobe -r usb_storage && sudo modprobe usb_storage
```

**Solution 2 — Redémarrage du contrôleur USB :**
```sh
sudo sh -c 'echo -n "0000:01:00.0" > /sys/bus/pci/drivers/xhci_hcd/unbind'
sudo sh -c 'echo -n "0000:01:00.0" > /sys/bus/pci/drivers/xhci_hcd/bind'
```

> Si les solutions ci-dessus ne fonctionnent pas, un redémarrage complet du Raspberry Pi reste la solution la plus sûre.

---

### 🔗 ST-Link non détecté par Visual Studio Code

**Symptômes :** VSCode ne reconnaît pas le programmeur ST-Link lors de la compilation/injection du firmware.

**Solutions :**
1. **Redémarrez VSCode** complètement (fermer et rouvrir)
2. **Vérifiez les drivers** ST-Link (STSW-LINK009) — voir la page [Injection Firmware](/docs/Guide-OpenMower-Mowgli/injection-firmware)
3. **Débranchez / rebranchez** le ST-Link
4. Utilisez **STM32CubeProgrammer** à la place de VSCode — il permet également de vérifier si le pilote ST-Link est correctement installé et si la sonde est fonctionnelle (détection automatique à l'ouverture du logiciel)

---

### 💥 Crash lors de la fusion de cartes (map.bag)

**Symptômes :** L'application plante ou devient instable après avoir fusionné plusieurs zones de tonte.

**Cause :** Bug connu lors de la fusion de cartes multiples.

**Solution :**
```sh
cd mowgli-docker
sudo docker compose down
rm -f config/om/map.bag
sudo docker compose up -d
```

> Vous devrez recréer votre carte de tonte depuis l'interface web. Pensez à **sauvegarder** régulièrement votre carte (`map.bag`) pour éviter de tout perdre.

:::tip Sauvegarde préventive
```sh
cp config/om/map.bag config/om/map.bag.backup
```
:::

---

### ⚠️ Ne flasher que la carte mère — jamais le panneau

:::danger Risque de dommage irréversible
Seule la **carte mère** (STM32) doit être flashée avec le firmware Mowgli. C'est elle qui gère ensuite la communication avec le tableau de bord (clavier et voyants).

**Ne tentez jamais de modifier le firmware du panneau de contrôle.** Si vous flashez le panneau, il y a un fort risque qu'il devienne **complètement inutilisable et irrécupérable**.

Firmwares validés pour la carte mère uniquement :
- **Yardforce 500** → <a href={links.firmware.cedbossneo} target="_blank">firmware CEDBOSSNEO</a>
- **Yardforce 500B** (clavier + voyants actifs) → <a href={links.firmware.nekraus500bPanel} target="_blank">firmware Nekraus — FeaturePanel</a>
:::

---

## 💡 Astuces & Optimisations

### 🧠 Amélioration de la traction sur terrain pentu

L'ajout de **roues lestées** peut améliorer significativement l'adhérence sur terrain en pente. Les fichiers STL sont disponibles dans la section [Pièces à imprimer en 3D](/docs/Guide-OpenMower-Mowgli/impression-3d).

---

### 🔍 Diagnostic rapide via les logs Docker

Consultez les logs en temps réel pour identifier l'origine d'un blocage :

```sh
cd mowgli-docker
sudo docker compose logs -f
```

Pour quitter : `Ctrl + C`

---

### 📡 Vérifier la connexion NTRIP

Depuis l'interface web (port `4006`), le statut de la connexion NTRIP est visible en temps réel. En cas de déconnexion, redémarrez les conteneurs :

```sh
sudo docker compose down && sudo docker compose up -d
```

---

## 🤝 Contribuer à cette liste

Si vous avez résolu un problème non listé ici, n'hésitez pas à [contribuer au guide](/docs/Guide-OpenMower-Mowgli/aide-contribution) pour aider les autres utilisateurs !
