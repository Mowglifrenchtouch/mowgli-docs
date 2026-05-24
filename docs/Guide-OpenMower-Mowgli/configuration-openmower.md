---
title: "⚙️ Configuration OpenMower"
nav_order: 6
permalink: /docs/Guide-OpenMower-Mowgli/configuration-openmower/
layout: default
parent: "🏠 Guide OpenMower"
---

import links from '@site/src/data/links';
import YoutubeEmbed from '@site/src/components/YoutubeEmbed';

# ⚙️ Configuration OpenMower

Cette section couvre la configuration de l'interface OpenMower : coordonnées GPS, base NTRIP, et création de la carte de tonte.

:::danger Ne modifiez que ce qui est indiqué
Ne modifiez **aucun paramètre** au-delà de ceux explicitement mentionnés dans ce guide. Toute modification non prévue peut entraîner un dysfonctionnement de l'application ou du robot.
:::

---

## 🌐 Accès aux interfaces web

Une fois les conteneurs Docker démarrés, deux interfaces sont disponibles depuis votre réseau local :

| Interface | Port | Usage recommandé |
|-----------|------|-----------------|
| 🖥️ **Interface avancée** | `4006` | PC — configuration et diagnostics |
| 📱 **Interface simplifiée** | `4005` | Mobile — pilotage quotidien |

**Accès** : ouvrez votre navigateur et tapez :

```
http://192.168.X.XX:4006
```

> Remplacez `192.168.X.XX` par l'adresse IP fixe de votre Raspberry Pi.

---

## 📍 Étape 1 : Coordonnées de votre terrain

OpenMower a besoin des coordonnées GPS précises de votre propriété pour initialiser la carte de tonte.

1. Rendez-vous en priorité sur <a href={links.gpsTools.rtkCoordinates} target="_blank">cet outil dédié RTK</a> — il affiche directement les coordonnées au format attendu par OpenMower **et indique les bases RTK disponibles à proximité de votre position**
2. Sinon : <a href={links.gpsTools.coordonneesgps} target="_blank">coordonnees-gps.fr</a> ou Google Maps
3. Centrez la carte sur votre jardin et relevez la **latitude** et la **longitude** (format décimal, ex : `48.853400` / `2.348700`)

:::warning Vie privée
Ne partagez jamais vos coordonnées GPS réelles publiquement (forum, GitHub, Telegram…).
:::

4. Dans l'interface web (port `4006`), section **Configuration**, renseignez :
   - `Datum Latitude` → votre latitude
   - `Datum Longitude` → votre longitude

---

## 📡 Étape 2 : Configuration NTRIP (corrections RTK)

Le NTRIP permet à votre GPS d'atteindre une précision centimétrique en temps réel via une base de référence.

### 🔍 Trouver une base NTRIP proche

- 🥇 <a href={links.gpsTools.rtkCoordinates} target="_blank">Outil RTK dédié</a> — affiche directement les bases RTK disponibles à proximité de votre position **(recommandé)**
- <a href={links.ntrip.centipedeMap} target="_blank">RTK-France (Centipède)</a> — carte du réseau open source gratuit
- <a href={links.ntrip.rtk2go} target="_blank">RTK2GO</a> — réseau européen

### ⚙️ Paramètres à renseigner dans l'interface (port `4006`)

| Paramètre | Valeur |
|-----------|--------|
| `NTRIP Host` | Adresse du serveur (ex : `caster.centipede.fr`) |
| `NTRIP Port` | Port du serveur (ex : `2101`) |
| `NTRIP Mount Point` | Point de montage le plus proche |
| `NTRIP User` | Identifiant (souvent vide pour Centipède) |
| `NTRIP Password` | Mot de passe (souvent vide pour Centipède) |

:::tip Vérification
Une fois connecté, le statut GPS dans l'interface doit passer à **RTK Fix**. Sans RTK Fix, le robot ne peut pas fonctionner en toute sécurité.
:::

---

## 🗺️ Étape 3 : Création de la carte de tonte

La carte de tonte définit les zones où le robot peut évoluer.

:::info Référence officielle
Suivez la documentation officielle OpenMower pour la création et l'enregistrement de la carte :
<a href={links.openmower.recordAreas} target="_blank">openmower.de — Record Areas & Use it</a>
:::

**Points importants :**
- Enregistrez régulièrement votre carte (bouton **Save**)
- Après toute modification de carte, **redémarrez les conteneurs Docker** :

```sh
cd mowgli-docker
sudo docker compose down
sudo docker compose up -d
```

---

## 🧭 Étape 4 : Initialisation de l'orientation (IMU)

Le robot n'a pas de boussole : il dérive son orientation à partir de ses mouvements. Cette étape est obligatoire avant la première tonte.

**Méthodes de pilotage :**
- Joystick à l'écran dans l'application OpenMower
- Manette USB connectée en filaire au Raspberry Pi (compatible Xbox/PS3)

**Procédure :**
1. Pilotez le robot sur **au moins 50 mètres** en variant les trajectoires : lignes droites et manœuvres en huit
2. **Ne soulevez pas le robot** pendant cette étape — l'orientation serait perdue

**Vérification dans l'app :**
- ✅ Ligne droite → visualisation droite, sans sauts
- ✅ Rotation sur place → visualisation stationnaire, sans sauts

:::tip
Le robot ne connaît pas lui-même la qualité de son estimation. C'est la visualisation dans l'app qui vous confirme que l'orientation est correcte.
:::

👉 [**Voir la configuration complète de la manette PS3**](/docs/Guide-OpenMower-Mowgli/manette-ps3)

---

## 🗺️ Étape 5 : Enregistrement de la zone de tonte

Une fois le robot correctement configuré et l'IMU calibrée, vous pouvez enregistrer votre zone de tonte directement depuis l'interface OpenMower.

:::info Référence officielle
Documentation complète : <a href={links.openmower.recordAreas} target="_blank">openmower.de — Record Areas & Use it</a>
:::

<YoutubeEmbed id={links.youtube.recordAreas} title="Enregistrement de la zone de tonte — OpenMower" />

---

## ✅ Vérifications finales

Avant de lancer votre première tonte, vérifiez :

- [ ] Statut GPS : **RTK Fix** affiché dans l'interface
- [ ] Coordonnées datum renseignées
- [ ] Carte de tonte enregistrée
- [ ] IMU calibrée
- [ ] Zone de tonte enregistrée
- [ ] Conteneurs Docker redémarrés après configuration

---

## 🔗 Ressources utiles

- <a href={links.openmower.docs} target="_blank">Documentation officielle OpenMower</a>
- <a href={links.ntrip.centipedeMap} target="_blank">Réseau NTRIP Centipède — Carte des bases (FR)</a>
- [Problèmes courants → Problèmes & Solutions](/docs/Guide-OpenMower-Mowgli/probleme-solution)
