---
title: "🛠️ Troubleshooting"
nav_order: 90
permalink: /docs/Guide-OpenMower-Mowgli/probleme-solution/
layout: default
parent: "🏠 OpenMower Guide"
---

import links from '@site/src/data/links';

# 🛠️ Troubleshooting

This page compiles commonly encountered issues along with their solutions and tips to optimise your Mowgli.

---

## 🔧 Technical Issues

### ❌ Robot won't start

**Symptoms:** The robot remains inert after powering on.

**Checks:**
- Battery is correctly charged
- Emergency stop (STOP) button is not engaged
- Docker containers are properly started (`sudo docker compose ps`)
- Firmware has been correctly flashed onto the STM32 board

---

### 📶 Unstable GPS or frequent disconnections

**Symptoms:** GPS status alternates between Fix and No Fix, or disconnects randomly.

**Solutions:**
1. Use a **shielded USB cable** between the Raspberry Pi and the GPS module
2. Verify that **ground (GND)** is properly shared between all components
3. Check 5V power supply stability (LM2596S module properly adjusted)
4. Make sure the GPS antenna has a **clear view of the sky**, with no nearby metal obstacles
5. Keep the GPS USB cable away from motor cables (electromagnetic interference)

---

### 🚫 GPS cannot reach RTK Fix status

**Symptoms:** GPS stays on `GPS Fix` or `Float` but never reaches `RTK Fix`.

**Possible causes and solutions:**

| Cause | Solution |
|-------|----------|
| NTRIP base too far away | Choose an NTRIP mount point less than 30–40 km away |
| NTRIP misconfigured | Check host, port, mount point in the interface (port 4006) |
| Insufficient sky view | Move the antenna, avoid shaded areas or under trees |
| Low quality antenna | Prefer a BT603 or HA901A antenna |

:::danger Operation without RTK Fix impossible
The robot **cannot operate safely** without RTK Fix status. Never start a mow without verifying this first.
:::

---

### 📡 F9P configuration or signal issues

:::tip Field experience
The following points come from real experience with the F9P module. These are frequent causes that are often overlooked.
:::

**1. Check the antenna cable and connections**

A loose connection or weak contact on the SMA cable between the F9P module and the antenna is enough to prevent RTK from working. Check:
- The SMA connector is **hand-tightened**, without excess (no tool)
- The SMA cable has **no bends or crushing**
- The connector pins are **not oxidised or deformed**

:::warning
Insufficient tightening or an intermittent connection = **no RTK Fix**, even if everything else is correct.
:::

**2. Wet or water-damaged antenna**

Moisture or water infiltration in the antenna strongly degrades GNSS signal reception. Check:
- The antenna shows **no signs of moisture** inside
- The sealing gasket (if present) is intact
- The antenna has not been left exposed to rain without protection

> If in doubt, let the antenna dry in open air for several hours before retesting.

**3. Unfavourable environment**

Some garden locations make stable RTK Fix difficult to obtain:

| Obstacle | Impact |
|----------|--------|
| **Many broad-leaved trees** | Signal masking and reflection from satellites |
| **Nearby buildings** (walls, roofs) | Multipath = parasitic signal |
| **Hollow areas** (embankments, high hedges) | Reduced sky visibility |

**Solutions:**
- Mount the antenna as **high as possible** on the robot to maximise sky view
- Reposition the robot in a more open area to test
- Consult the sky view map in the F9P interface (via u-center) to visualise received satellites

---

### 🔌 Raspberry Pi USB port reset (without reboot)

**Symptoms:** GPS or Mowgli are no longer recognised after an incident, without possibility of rebooting.

**Solution 1 — Reload the USB module:**
```sh
sudo modprobe -r usb_storage && sudo modprobe usb_storage
```

**Solution 2 — Restart the USB controller:**
```sh
sudo sh -c 'echo -n "0000:01:00.0" > /sys/bus/pci/drivers/xhci_hcd/unbind'
sudo sh -c 'echo -n "0000:01:00.0" > /sys/bus/pci/drivers/xhci_hcd/bind'
```

> If the above solutions do not work, a full Raspberry Pi reboot remains the safest solution.

---

### 🔗 ST-Link not detected by Visual Studio Code

**Symptoms:** VSCode does not recognise the ST-Link programmer during firmware compilation/injection.

**Solutions:**
1. **Restart VSCode** completely (close and reopen)
2. **Check ST-Link drivers** (STSW-LINK009) — see the [Firmware Injection](/docs/Guide-OpenMower-Mowgli/injection-firmware) page
3. **Unplug / replug** the ST-Link
4. Use **STM32CubeProgrammer** instead of VSCode — it also lets you verify whether the ST-Link driver is correctly installed and whether the probe is functional (automatic detection when the software opens)

---

### 💥 Crash during map merge (map.bag)

**Symptoms:** The application crashes or becomes unstable after merging multiple mowing zones.

**Cause:** Known bug during multiple map merges.

**Solution:**
```sh
cd mowgli-docker
sudo docker compose down
rm -f config/om/map.bag
sudo docker compose up -d
```

> You will need to recreate your mowing map from the web interface. Remember to **back up** your map (`map.bag`) regularly to avoid losing everything.

:::tip Preventive backup
```sh
cp config/om/map.bag config/om/map.bag.backup
```
:::

---

### ⚠️ Only flash the motherboard — never the panel

:::danger Risk of irreversible damage
Only the **motherboard** (STM32) should be flashed with the Mowgli firmware. It then manages the communication with the dashboard (keypad and indicator lights).

**Never attempt to modify the control panel firmware.** If you flash the panel, there is a high risk it will become **completely unusable and unrecoverable**.

Validated firmwares for the motherboard only:
- **Yardforce 500** → <a href={links.firmware.cedbossneo} target="_blank">CEDBOSSNEO firmware</a>
- **Yardforce 500B** (active keypad + indicator lights) → <a href={links.firmware.nekraus500bPanel} target="_blank">Nekraus firmware — FeaturePanel</a>
:::

---

## 💡 Tips & Optimisations

### 🧠 Improve traction on sloped terrain

Adding **weighted wheels** can significantly improve grip on sloped terrain. The STL files are available in the [3D Printed Parts](/docs/Guide-OpenMower-Mowgli/impression-3d) section.

---

### 🔍 Quick diagnosis via Docker logs

Check live logs to identify the source of a problem:

```sh
cd mowgli-docker
sudo docker compose logs -f
```

To exit: `Ctrl + C`

---

### 📡 Check NTRIP connection

From the web interface (port `4006`), the NTRIP connection status is visible in real time. In case of disconnection, restart the containers:

```sh
sudo docker compose down && sudo docker compose up -d
```

---

## 🤝 Contribute to this list

If you have solved an issue not listed here, feel free to [contribute to the guide](/docs/Guide-OpenMower-Mowgli/aide-contribution) to help other users!
