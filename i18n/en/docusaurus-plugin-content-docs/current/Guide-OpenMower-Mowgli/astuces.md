---
title: "💡 Tips & Tricks"
nav_order: 95
permalink: /docs/Guide-OpenMower-Mowgli/astuces/
layout: default
parent: "🏠 OpenMower Guide"
---

import links from '@site/src/data/links';

# 💡 Mowgli Tips & Tricks

Find all tips from the guide gathered in one place.

---

## 🔧 Hardware & Installation

### 🧠 No 3D printer?
> *Source: [Required Hardware](/docs/Guide-OpenMower-Mowgli/materiel-requis)*

If you don't have a 3D printer, the necessary parts can be printed on request. Contact Juditech3D on <a href={links.community.telegramFR} target="_blank">Telegram</a> or at [juditech3d@gmail.com](mailto:juditech3d@gmail.com).

---

### 🔌 Connect the PS3 controller without opening the robot
> *Source: [PS3 Controller](/docs/Guide-OpenMower-Mowgli/manette-ps3)*

Plug a **USB extension cable** into the **existing external USB port on the robot** (connected to the Raspberry Pi). You can then connect the controller directly to the outside of the robot, without having to open it. Very practical for mapping sessions!

---

### 🎮 Xbox controller compatible
> *Source: [PS3 Controller](/docs/Guide-OpenMower-Mowgli/manette-ps3)*

An Xbox USB controller is also compatible with OpenMower and works the same way — buttons map directly without conversion.

---

### 🔍 Find your GPS IDs (lsusb)
> *Source: [System Configuration](/docs/Guide-OpenMower-Mowgli/configuration-systeme)*

If you are using a specific GPS, run the following command once the device is connected to find the `vendorId` and `productID` to enter in the udev rules:

```sh
lsusb
```

---

### 🖨️ 3D Printing — Recommended settings
> *Source: [3D Printed Parts](/docs/Guide-OpenMower-Mowgli/impression-3d)*

For structural parts, plan for:
- **Infill**: 30 to 50%
- **Walls**: 3 to 6 depending on desired strength
- **Materials**: PETG, ABS or ASA (heat and moisture resistant)

---

## 📡 GPS & Positioning

### ✅ Check RTK Fix status
> *Source: [OpenMower Configuration](/docs/Guide-OpenMower-Mowgli/configuration-openmower)*

Once NTRIP is connected, the GPS status in the interface (port `4006`) should change to **RTK Fix**. Without RTK Fix, the robot cannot operate safely.

---

### 📐 Default GPS antenna offset value
> *Source: [GPS Antenna Offset](/docs/Guide-OpenMower-Mowgli/offset-antenne-gps)*

The default value provided by cedbossneo is `X=0.3` (30 cm forward), `Y=0.0` (centred). For the Yardforce 500/500B with the 3D printed GPS bracket, measure your actual installation to improve accuracy.

---

## 🗺️ Mapping & Navigation

### 🧭 Orientation initialisation — Visual check
> *Source: [OpenMower Configuration](/docs/Guide-OpenMower-Mowgli/configuration-openmower)*

The robot does not know the quality of its own orientation estimate. It is the **visualisation in the app** that confirms the orientation is correct:
- Straight line → straight visualisation, no jumps
- On-the-spot rotation → stationary visualisation, no jumps

---

### 💾 Preventive map backup
> *Source: [Troubleshooting](/docs/Guide-OpenMower-Mowgli/probleme-solution)*

Back up your `map.bag` regularly to avoid losing everything in case of a crash:

```sh
cp config/om/map.bag config/om/map.bag.backup
```

---

## 🐳 Docker & Diagnostics

### 🔍 Quick diagnosis via Docker logs
> *Source: [Troubleshooting](/docs/Guide-OpenMower-Mowgli/probleme-solution)*

Check live logs to quickly identify the source of a problem:

```sh
cd mowgli-docker
sudo docker compose logs -f
```

To exit: `Ctrl + C`

---

### 📡 Restart after NTRIP disconnection
> *Source: [Troubleshooting](/docs/Guide-OpenMower-Mowgli/probleme-solution)*

In case of persistent NTRIP disconnection, restart the containers:

```sh
sudo docker compose down && sudo docker compose up -d
```

---

## 🌿 Mowing & Terrain

### 🧠 Improve traction on sloped terrain
> *Source: [Troubleshooting](/docs/Guide-OpenMower-Mowgli/probleme-solution)*

Adding **weighted wheels** can significantly improve grip on sloped terrain. The STL files are available in the [3D Printed Parts](/docs/Guide-OpenMower-Mowgli/impression-3d) section.

---

## 🖼️ Wiring Diagram

### ✏️ Edit the Draw.io diagram online
> *Source: [Wiring Diagram](/docs/Guide-OpenMower-Mowgli/schema-de-cablage)*

The wiring diagram can be edited online directly via [Draw.io](https://draw.io) — import the `.drawio` file available on the dedicated page.
