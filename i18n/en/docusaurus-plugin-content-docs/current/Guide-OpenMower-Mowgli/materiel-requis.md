---
title: "🧰 Required Hardware"
nav_order: 2
parent: "🏠 OpenMower Guide"
layout: default
permalink: /docs/Guide-OpenMower-Mowgli/materiel-requis/
---
![Required hardware illustration](/img/illustration-materiel.png)

# 🧰 Required Hardware

This project uses the **original** motherboard of the **Yardforce 500 / 500B** models, without deep hardware modification. Here is the hardware I personally used, tested and validated to build my autonomous robotic mower.

---

### 🔧 Main Electronics

| Equipment | References / Useful Links | Notes |
|-----------|----------------------------|-------|
| 🧠 **Raspberry Pi 4** | [Kubii](https://www.kubii.com/fr/370-raspberry-pi-4-pi-400/)<br/>[Amazon](https://amzn.eu/d/hwgFRWU) | Pi 4 recommended for performance |
| ⚡ **LM2596S Power Module** | [Amazon](https://amzn.eu/d/jhNev6j)<br/>[AliExpress](https://fr.aliexpress.com/item/32991657981.html)<br/>[Conrad](https://www.conrad.fr/) | To convert 24V to 5V |
| 🔗 **ST-Link V2 (for firmware)** | [Amazon](https://www.amazon.fr/)<br/>[AliExpress](https://fr.aliexpress.com/)<br/>[Kubii](https://www.kubii.fr/) | To flash the STM32 board |

### 📡 GPS and Connectivity

| Equipment | References / Useful Links | Notes |
|-----------|----------------------------|-------|
| 📡 **RTK GPS F9P (Ardusimple)** | [Ardusimple](https://fr.ardusimple.com/product/simplertk2b/?attribute_pa_header-options=without-headers)<br/>[AliExpress](https://fr.aliexpress.com/item/1005004690761874.html)<br/>[Tindie](https://www.tindie.com/) | Essential for centimetre-level precision |
| 📶 **GNSS Antenna (BT560 or BT603)** | [AliExpress BT560](https://fr.aliexpress.com/item/32991527632.html)<br/>[AliExpress BT603](https://fr.aliexpress.com/item/32991527632.html) | BT603 is more powerful |
| 📶 **GNSS Antenna HA901A** | [AliExpress](https://www.aliexpress.com/)<br/>[Amazon](https://www.amazon.fr/) | Compact and high-performance alternative |
| 🔌 **SMA Antenna Cable** | [AliExpress](https://fr.aliexpress.com/item/1005004690761874.html)<br/>[Amazon](https://www.amazon.fr/) | To connect the GPS to the antenna |

### 📟 Sensors, Cables and Connectors

| Equipment | References / Useful Links | Notes |
|-----------|----------------------------|-------|
| 📦 **Dupont Cables (M-M, M-F)** | [Amazon](https://www.amazon.fr/)<br/>[AliExpress](https://www.aliexpress.com/) | To connect components to GPIO |
| 🔌 **HY2.0 Wires - 20cm (4P to 9P)** | — | Quick and clean wiring for GPS or STM32 connectors |
| 🎯 **IMU MPU6050 / BNO055 / QMC5883L** | [AliExpress](https://fr.aliexpress.com/)<br/>[Amazon](https://www.amazon.fr/) | To detect inclination, movement and heading |
| 🔌 **Logic Level Converter** | [AliExpress](https://fr.aliexpress.com/)<br/>[Amazon](https://www.amazon.fr/) | Useful for interfacing 3.3V and 5V signals |

### 🖥️ Useful Software

| Equipment | References / Useful Links | Notes |
|-----------|----------------------------|-------|
| 🖥️ **Mobaxterm (SSH)** | [Mobaxterm](https://mobaxterm.mobatek.net/download-home-edition.html)<br/>[Pi Connect](https://connect.raspberrypi.com) | To control the Raspberry Pi |

---

<div class="alert alert--warning">
  <div class="alert-title">💡 Recommendation</div>
  Don't forget to ensure <strong>stable Wi-Fi coverage across the entire mowing area</strong>. OpenMower Mowgli needs to remain permanently connected to the local network to function correctly.
</div>

---

<h2 id="impressions-3d">🖨️ Custom 3D Printed Parts</h2>

**Custom** parts (RPi bracket, F9P bracket, weighted wheels, beacon light, etc.) have been **specifically designed** for this project.

They are available **for free** on MakerWorld:

👉 <a href="https://makerworld.com/en/@juditech3d" target="_blank">MakerWorld profile — Juditech3D</a>

👉 <a href="https://makerworld.com/fr/@user_3228887730" target="_blank">MakerWorld profile — Pepeuch</a>

📦 [See the 3D Printing section](/docs/Guide-OpenMower-Mowgli/impression-3d/)

---

<h2 id="schema-cablage">🖼️ Wiring Diagram</h2>

Here is an overview of the complete Mowgli robot wiring, based on <a href="https://github.com/cedbossneo/mowgli-docker" target="_blank">cedbossneo's</a> diagram, which I **adapted for clarity**:

![Mowgli Wiring Diagram](/img/yardforce_wiring2.drawio.png)

> ✅ This diagram is also editable in `.drawio` format on the dedicated page: [View the interactive diagram](/docs/Guide-OpenMower-Mowgli/schema-de-cablage/)

---

<div class="alert alert--success">
  <div class="alert-title">🧠 Tip</div>
  If you don't have a 3D printer, I can print the necessary parts for your project. Contact me on <a href="https://t.me/+mOlwROGsP3AyYTlk" target="_blank">Telegram</a> or <a href="mailto:juditech3d@gmail.com">by email</a>.
</div>
