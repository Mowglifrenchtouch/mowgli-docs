---
title: "📎 Configuration système"
nav_order: 4
parent: "🏠 Guide OpenMower"
layout: default
permalink: /docs/Guide-OpenMower-Mowgli/configuration-systeme/
---

import links from '@site/src/data/links';

![Illustration configuration-systeme](/img/configuration-systeme.png)

<div class="alert alert--warning">
  <div class="alert-title">⚠️ Important</div>
  <p><strong>⚠️ N'oubliez pas de fixer l'adresse IP ou l'adresse MAC de votre Raspberry Pi via votre box pour qu'il soit toujours accessible. ⚠️</strong></p>
</div>

# 🧰 Préparation du Raspberry Pi et configuration

## 🛠️ Étape 1 : Mise à jour de Pi OS

Avant de commencer, assurez-vous que votre système est à jour.

```sh
sudo apt update && sudo apt upgrade -y
```

## 🛣️ Étape 2 : Installation de Docker

Installez Docker en exécutant la commande suivante :

```sh
curl https://get.docker.com | sh
```

## 🧹 Étape 3 : Configuration de udev

1. Créez et éditez le fichier de règles udev :

```sh
sudo nano /etc/udev/rules.d/50-mowgli.rules
```

2. Ajoutez les règles suivantes :

```sh
SUBSYSTEM=="tty" ATTRS{product}=="Mowgli", SYMLINK+="mowgli"
# simpleRTK USB
SUBSYSTEM=="tty" ATTRS{idVendor}=="1546" ATTRS{idProduct}=="01a9", SYMLINK+="gps"
# ESP USB CDC - RTK1010Board
SUBSYSTEM=="tty" ATTRS{idVendor}=="303a" ATTRS{idProduct}=="4001", SYMLINK+="gps"
# UM982 - WittMotion WTRTK-982
SUBSYSTEM=="tty" ATTRS{idVendor}=="1a86" ATTRS{idProduct}=="7523", SYMLINK+="gps"
```

<div class="alert alert--info">
  <div class="alert-title">🔍 Astuce</div>
  <p>Si vous utilisez un GPS spécifique, exécutez la commande <code>lsusb</code> une fois l'appareil connecté pour trouver les <code>vendorId</code> et <code>productID</code>.</p>
</div>

3. Rechargez les règles udev :

```sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

## 📅 Étape 4 : Clonage du dépôt

On récupère le code pour la génération des conteneurs Docker.

Dépôt : <a href={links.firmware.mowgliDocker} target="_blank">github.com/cedbossneo/mowgli-docker</a>

```sh
sudo apt install git
git clone https://github.com/cedbossneo/mowgli-docker
cd mowgli-docker
```

## ⚙️ Étape 5 : Configuration de l'environnement

1. Créez et éditez le fichier `.env` (il faut être dans le répertoire mowgli-docker) :

```sh
sudo nano .env
```

2. Remplacez les valeurs `ROS_IP` et `MOWER_IP` par l'adresse IP de votre Raspberry Pi :

```sh
# ROS_IP est l'IP de la machine exécutant le conteneur Docker
# MOWER_IP est l'IP de la tondeuse
# Lorsque vous n'êtes pas en mode ser2net, les deux IPs doivent être les mêmes
ROS_IP=192.168.X.XX
MOWER_IP=192.168.X.XX
IMAGE=ghcr.io/cedbossneo/mowgli-docker:cedbossneo
```

Faites Ctrl "o" puis Entrée pour enregistrer, Ctrl "x" pour quitter.

## 🚀 Étape 6 : Lancement des Conteneurs

1. Lancez les conteneurs Docker :

```sh
sudo docker compose up -d
```

<div class="alert alert--info">
  <div class="alert-title">☕ Patience</div>
  <p>Cette étape peut être longue selon votre connexion Internet : les images Docker doivent être téléchargées.</p>
</div>

2. Mise à jour du fichier de configuration

<div class="alert alert--warning">
  <div class="alert-title">⚠️ Configuration obligatoire</div>
  <p><strong>⚠️ Depuis le 12/10/2024, la modification d'un fichier est obligatoire pour le bon fonctionnement de votre robot. Sans cela, celui-ci pourrait ne pas fonctionner correctement.</strong></p>
</div>

Editez le fichier `mower_config.sh` :

```sh
sudo nano config/om/mower_config.sh
```
Ajoutez la ligne suivante ou modifiez la si présente : 
```sh
export OM_NO_COMMS=true
```

Pour utiliser un GPS UM-9XX, il est nécessaire de modifier le paramètre `OM_GPS_PROTOCOL` pour le mettre à la valeur `NMEA`:
```sh
# GPS protocol. Use UBX for u-blox chipsets and NMEA for everything else
export OM_GPS_PROTOCOL=NMEA
```

Ensuite, appuyez sur « Ctrl + o » pour enregistrer, validez avec la touche « Entrée », puis appuyez sur « Ctrl + x » pour quitter l’éditeur.

Enfin, redémarrez le Raspberry Pi :
```sh
sudo reboot
```

## ⏹️ Étape 7 : Arrêter / mettre à jour les conteneurs Docker

Arrêter les conteneurs :

```sh
sudo docker compose down
```

<details>
  <summary>🔄 Mettre à jour les conteneurs Docker (avancé)</summary>

```sh
sudo docker compose pull
sudo docker compose up -d
```
</details>

## 📄 Étape 8 : Surveillance des Logs (optionnel)

<details>
  <summary>📋 Afficher les logs pour déboguer</summary>

```sh
sudo docker compose logs -f
```
Pour quitter : Ctrl + C
</details>
