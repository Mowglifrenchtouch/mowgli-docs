---
title: "⚙️ OpenMower Configuration"
nav_order: 6
permalink: /docs/Guide-OpenMower-Mowgli/configuration-openmower/
layout: default
parent: "🏠 OpenMower Guide"
---

import links from '@site/src/data/links';

# ⚙️ OpenMower Configuration

This section covers the configuration of the OpenMower interface: GPS coordinates, NTRIP base, and mowing map creation.

:::danger Only modify what is indicated
Do **not modify any parameter** beyond those explicitly mentioned in this guide. Any unplanned change may cause malfunction of the application or the robot.
:::

---

## 🌐 Web interface access

Once the Docker containers are started, two interfaces are available from your local network:

| Interface | Port | Recommended use |
|-----------|------|----------------|
| 🖥️ **Advanced interface** | `4006` | PC — configuration and diagnostics |
| 📱 **Simplified interface** | `4005` | Mobile — daily operation |

**Access**: open your browser and type:

```
http://192.168.X.XX:4006
```

> Replace `192.168.X.XX` with the fixed IP address of your Raspberry Pi.

---

## 📍 Step 1: Your property coordinates

OpenMower needs the precise GPS coordinates of your property to initialise the mowing map.

1. Go first to <a href={links.gpsTools.rtkCoordinates} target="_blank">this dedicated RTK tool</a> — it directly displays coordinates in the format expected by OpenMower **and shows RTK bases available near your location**
2. Otherwise: <a href={links.gpsTools.coordonneesgps} target="_blank">coordonnees-gps.fr</a> or Google Maps
3. Centre the map on your garden and note the **latitude** and **longitude** (decimal format, e.g. `51.507400` / `-0.127800`)

:::warning Privacy
Never share your real GPS coordinates publicly (forum, GitHub, Telegram…).
:::

4. In the web interface (port `4006`), section **Configuration**, enter:
   - `Datum Latitude` → your latitude
   - `Datum Longitude` → your longitude

---

## 📡 Step 2: NTRIP Configuration (RTK corrections)

NTRIP allows your GPS to achieve centimetre-level accuracy in real time via a reference base.

### 🔍 Find a nearby NTRIP base

- 🥇 <a href={links.gpsTools.rtkCoordinates} target="_blank">Dedicated RTK tool</a> — directly shows RTK bases available near your location **(recommended)**
- <a href={links.ntrip.centipedeMap} target="_blank">RTK-France (Centipède)</a> — free open source network map
- <a href={links.ntrip.rtk2go} target="_blank">RTK2GO</a> — European network

### ⚙️ Parameters to enter in the interface (port `4006`)

| Parameter | Value |
|-----------|-------|
| `NTRIP Host` | Server address (e.g. `caster.centipede.fr`) |
| `NTRIP Port` | Server port (e.g. `2101`) |
| `NTRIP Mount Point` | Nearest mount point |
| `NTRIP User` | Username (often empty for Centipède) |
| `NTRIP Password` | Password (often empty for Centipède) |

:::tip Verification
Once connected, the GPS status in the interface should change to **RTK Fix**. Without RTK Fix, the robot cannot operate safely.
:::

---

## 🗺️ Step 3: Creating the mowing map

The mowing map defines the areas where the robot can operate.

:::info Official reference
Follow the official OpenMower documentation for creating and saving the map:
<a href={links.openmower.recordAreas} target="_blank">openmower.de — Record Areas & Use it</a>
:::

**Important points:**
- Save your map regularly (click **Save**)
- After any map modification, **restart the Docker containers**:

```sh
cd mowgli-docker
sudo docker compose down
sudo docker compose up -d
```

---

## 🧭 Step 4: Orientation Initialisation (IMU)

The robot has no compass: it derives its orientation from its movements. This step is mandatory before the first mow.

**Control methods:**
- On-screen joystick in the OpenMower app
- USB controller connected wired to the Raspberry Pi (Xbox/PS3 compatible)

**Procedure:**
1. Drive the robot over **at least 50 metres** varying trajectories: straight lines and figure-eight manoeuvres
2. **Do not lift the robot** during this step — orientation would be lost

**Verification in the app:**
- ✅ Straight line → straight visualisation, no jumps
- ✅ On-the-spot rotation → stationary visualisation, no jumps

:::tip
The robot does not know the quality of its own estimation. It is the visualisation in the app that confirms the orientation is correct.
:::

👉 [**See the full PS3 controller configuration**](/docs/Guide-OpenMower-Mowgli/manette-ps3)

---

## ✅ Final checks

Before launching your first mow, verify:

- [ ] GPS status: **RTK Fix** displayed in the interface
- [ ] Datum coordinates entered
- [ ] Mowing map saved
- [ ] IMU calibrated
- [ ] Docker containers restarted after configuration

---

## 🔗 Useful resources

- <a href={links.openmower.docs} target="_blank">Official OpenMower documentation</a>
- <a href={links.ntrip.centipedeMap} target="_blank">NTRIP Centipède network — Base map (FR)</a>
- [Common issues → Troubleshooting](/docs/Guide-OpenMower-Mowgli/probleme-solution)
