---
title: "📎 System Configuration"
nav_order: 4
parent: "🏠 OpenMower Guide"
layout: default
permalink: /docs/Guide-OpenMower-Mowgli/configuration-systeme/
---

import links from '@site/src/data/links';

![System configuration illustration](/img/configuration-systeme.png)

<div class="alert alert--warning">
  <div class="alert-title">⚠️ Important</div>
  <p><strong>⚠️ Don't forget to set a fixed IP address or MAC reservation for your Raspberry Pi in your router settings so it is always reachable. ⚠️</strong></p>
</div>

# 🧰 Raspberry Pi Setup and Configuration

## 🛠️ Step 1: Update Pi OS

Before starting, make sure your system is up to date.

```sh
sudo apt update && sudo apt upgrade -y
```

## 🛣️ Step 2: Install Docker

Install Docker by running the following command:

```sh
curl https://get.docker.com | sh
```

## 🧹 Step 3: Configure udev

1. Create and edit the udev rules file:

```sh
sudo nano /etc/udev/rules.d/50-mowgli.rules
```

2. Add the following rules:

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
  <div class="alert-title">🔍 Tip</div>
  <p>If you are using a specific GPS, run the <code>lsusb</code> command once the device is connected to find the <code>vendorId</code> and <code>productID</code>.</p>
</div>

3. Reload the udev rules:

```sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

## 📅 Step 4: Clone the repository

Retrieve the code to generate the Docker containers.

Repository: <a href={links.firmware.mowgliDocker} target="_blank">github.com/cedbossneo/mowgli-docker</a>

```sh
sudo apt install git
git clone https://github.com/cedbossneo/mowgli-docker
cd mowgli-docker
```

## ⚙️ Step 5: Environment Configuration

1. Create and edit the `.env` file (you must be in the mowgli-docker directory):

```sh
sudo nano .env
```

2. Replace the `ROS_IP` and `MOWER_IP` values with your Raspberry Pi's IP address:

```sh
# ROS_IP is the IP of the machine running the Docker container
# MOWER_IP is the IP of the mower
# When not in ser2net mode, both IPs must be the same
ROS_IP=192.168.X.XX
MOWER_IP=192.168.X.XX
IMAGE=ghcr.io/cedbossneo/mowgli-docker:cedbossneo
```

Press Ctrl + O then Enter to save, Ctrl + X to exit.

## 🚀 Step 6: Start the Containers

1. Start the Docker containers:

```sh
sudo docker compose up -d
```

<div class="alert alert--info">
  <div class="alert-title">☕ Patience</div>
  <p>This step may take a while depending on your internet connection: Docker images need to be downloaded.</p>
</div>

2. Update the configuration file

<div class="alert alert--warning">
  <div class="alert-title">⚠️ Mandatory configuration</div>
  <p><strong>⚠️ Since 12/10/2024, modifying a file is mandatory for the robot to function correctly. Without this, the robot may not work properly.</strong></p>
</div>

Edit the `mower_config.sh` file:

```sh
sudo nano config/om/mower_config.sh
```
Add the following line or modify it if already present:
```sh
export OM_NO_COMMS=true
```

To use a UM-9XX GPS, you need to change the `OM_GPS_PROTOCOL` parameter to `NMEA`:
```sh
# GPS protocol. Use UBX for u-blox chipsets and NMEA for everything else
export OM_GPS_PROTOCOL=NMEA
```

Then press Ctrl + O to save, confirm with Enter, then Ctrl + X to exit the editor.

Finally, reboot the Raspberry Pi:
```sh
sudo reboot
```

## ⏹️ Step 7: Stop / Update Docker Containers

Stop the containers:

```sh
sudo docker compose down
```

<details>
  <summary>🔄 Update Docker containers (advanced)</summary>

```sh
sudo docker compose pull
sudo docker compose up -d
```
</details>

## 📄 Step 8: Log Monitoring (optional)

<details>
  <summary>📋 Display logs for debugging</summary>

```sh
sudo docker compose logs -f
```
To exit: Ctrl + C
</details>
