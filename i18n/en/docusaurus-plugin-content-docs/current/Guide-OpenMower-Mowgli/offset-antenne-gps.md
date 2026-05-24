---
title: "📐 GPS Antenna Offset"
nav_order: 8
permalink: /docs/Guide-OpenMower-Mowgli/offset-antenne-gps/
layout: default
parent: "🏠 OpenMower Guide"
---

import links from '@site/src/data/links';

# 📐 GPS Antenna Offset — Mowgli

The GPS antenna offset tells OpenMower the exact position of the GPS antenna **relative to the robot's reference centre** (middle of the rear wheel axle). Without this configuration, the robot will calculate its position with a systematic error.

---

![GPS antenna offset diagram Mowgli Yardforce 500/500B](/img/offset-antenne-gps.jpg)

## 🧭 Understanding the coordinate system

The robot uses a local reference frame centred on **the rear wheel axle**:

| Axis | Direction | Positive value |
|------|-----------|----------------|
| **X** | Forward / Backward | Towards the front of the robot |
| **Y** | Left / Right | Towards the left of the robot |

> The GPS antenna is generally mounted **forward and centred** on the robot — positive X offset, Y at zero.

---

## 📏 How to measure your offset

Physically measure on your robot:

1. **OM_ANTENNA_OFFSET_X** — Horizontal distance (in metres) between the **centre of the rear wheel axle** and the **GPS antenna base**, along the front/rear axis.
2. **OM_ANTENNA_OFFSET_Y** — Lateral offset (in metres). If the antenna is perfectly centred → `0.0`.

:::tip Default value
The default value provided by cedbossneo is `X=0.3` (30 cm forward), `Y=0.0` (centred).  
For the Yardforce 500/500B with the 3D printed GPS bracket, measure your actual installation to improve accuracy.
:::

---

## ⚙️ Offset Configuration

Antenna offset settings are configured directly from the **web interface** (port `4006`), **Configuration** section. This is the recommended method.

<details>
<summary>🔧 Advanced — Manually edit via mower_config.sh</summary>

The corresponding parameters in `mower_config.sh` are:

```sh
# Set default GPS antenna offset
export OM_ANTENNA_OFFSET_X=0.3   # distance in metres (forward = positive)
export OM_ANTENNA_OFFSET_Y=0.0   # lateral offset in metres (left = positive)
```

These values are overridden by those entered in the dashboard.

To manually edit and apply:

```sh
sudo nano ~/mowgli-docker/config/om/mower_config.sh
```

Save with `Ctrl + O` then `Enter`, exit with `Ctrl + X`, then restart the containers:

```sh
cd ~/mowgli-docker
sudo docker compose down
sudo docker compose up -d
```

</details>

---

## 🔍 Verification

Once the offset is entered in the dashboard (port `4006`), verify that the robot's displayed position correctly matches its real position on the map. A misconfigured offset results in a visible shift between the GPS position and the robot's actual trajectory.

---

## 🔗 Resources

- <a href={links.firmware.mowgliDocker} target="_blank">mowgli-docker repository (cedbossneo)</a>
- [← Back: OpenMower Configuration](/docs/Guide-OpenMower-Mowgli/configuration-openmower)
