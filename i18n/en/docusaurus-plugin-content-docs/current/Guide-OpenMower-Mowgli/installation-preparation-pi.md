---
title: "💾 Pi / SD / SSD Installation & Setup"
sidebar_label: "💾 Pi/SD/SSD Setup"
nav_order: 3
parent: "🏠 OpenMower Guide"
layout: default
permalink: /docs/Guide-OpenMower-Mowgli/installation-preparation-pi/
---
![Installation and preparation illustration](/img/illustration-installation.png)

# 💾 Raspberry Pi Installation and Setup

This section guides you step by step to configure your Raspberry Pi so it is ready to run the services required by OpenMower.

---

## 📀 SD / SSD Card Preparation

First, you need to prepare your SD or SSD card with **Raspberry Pi OS Lite (64-bit)**.

### 🔧 Steps:
- Use [**Raspberry Pi Imager**](https://www.raspberrypi.com/software/) to flash Raspberry Pi OS Lite (64-bit).
- You can follow the video below to see how to do it:

![Raspberry Pi Imager Tutorial](https://github.com/juditech3D/Guide-DIY-OpenMower-Mowgli-pour-Robots-Tondeuses-Yard500-et-500B/blob/main/M%C3%A9dia/Tuto%20raspberry%20pi%20imager%20%E2%80%90%20R%C3%A9alis%C3%A9e%20avec%20Clipchamp.gif)

---

## 📡 Wi-Fi and SSH Configuration

To automatically connect your Raspberry Pi to a Wi-Fi network and enable SSH on startup, two methods are available:

✅ Via Raspberry Pi Imager (simplest, shown in the GIF above)  
🔧 Or manually by editing files on the SD card

---

### ⚙️ Manual Configuration: Wi-Fi & SSH
<details>
<summary>📂 Expand to see</summary>

#### 1. SD Card Preparation

1. Flash the Raspberry Pi OS (64-bit) image onto the SD card with **Raspberry Pi Imager** or **Balena Etcher**
2. Insert the card into your computer
3. Access the `boot` partition (visible from Windows/macOS/Linux)
4. Open a text editor (Notepad++, TextEdit, Nano…)

#### 2. Create the `wpa_supplicant.conf` file

```sh
country=GB
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="Your_SSID"
    psk="Your_Password"
    key_mgmt=WPA-PSK
}
```

#### 💡 For multiple networks:
```sh
network={
    ssid="First_SSID"
    psk="First_Password"
    key_mgmt=WPA-PSK
    priority=2
}

network={
    ssid="Second_SSID"
    psk="Second_Password"
    key_mgmt=WPA-PSK
    priority=1
}
```

---

#### 3. Enable SSH

Create an empty file named `ssh` (no extension) in the `boot` partition.

---

#### 4. Save and eject

- Save the files
- Safely eject the SD or SSD card

</details>

---

## 🚀 Boot the Raspberry Pi and connect via SSH

Once the card is ready, insert it into the Raspberry Pi and connect it to power (and optionally Ethernet).

---

### 🔍 Find the Raspberry Pi IP address
<details>
<summary>📡 Expand to see</summary>

#### 🌐 Method 1 – From your router

- Access your router (e.g. `192.168.1.1`)
- Look for a device named **raspberrypi**

#### 🛠️ Method 2 – With [Advanced IP Scanner](https://www.advanced-ip-scanner.com/)

- Download, scan your network
- Look for a device named Raspberry Pi

![Advanced IP Scanner](https://github.com/juditech3D/Guide-DIY-OpenMower-Mowgli-pour-Robots-Tondeuses-Yard500-et-500B/blob/main/images/Advanced%20ip%20scanner/Advanced%20ip%20scanner.png)

</details>

---

### 🔑 Connecting via SSH

Once the IP is identified, connect via SSH with MobaXTerm, PuTTY or the command line:

```sh
ssh pi@192.168.X.XX
```

:::info Password
Since **Raspberry Pi OS Bookworm** (2023+), there is no longer a default password. The username and password are set **during the setup phase in Raspberry Pi Imager** (the "Advanced OS Settings" step). Use the credentials you entered at that time.
:::

---

✅ Once connected, proceed to the system software installation and configuration.
