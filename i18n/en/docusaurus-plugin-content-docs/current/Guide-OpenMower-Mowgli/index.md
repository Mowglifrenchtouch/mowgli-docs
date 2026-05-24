---
title: "⚠️ Warnings"
sidebar_position: 1
---

import links from '@site/src/data/links';

![Warning illustration](/img/illustration-avertissements.png)
# ⚠️ Warnings

Welcome to this guide dedicated to converting your **Yardforce 500 or 500B** robotic mower into an autonomous robot using the **OpenMower + Mowgli** project.

:::tip 🔗 Recommended Resources
The success of your installation depends on a good understanding of the overall project. We strongly recommend consulting these key resources:

* <a href={links.openmower.docs} target="_blank">**OpenMower Documentation**</a>: The original build guide.
* <a href={links.firmware.cedbossneo} target="_blank">**Mowgli Fork (GitHub)**</a>: The heart of the project.
* <a href={links.firmware.mowgliDocker} target="_blank">**Mowgli Docker**</a>: The simplified software solution.
* <a href={links.community.telegramFR} target="_blank">**Telegram Community (FR)**</a>: The essential help group.
:::

---

## ℹ️ Why read this page?

Before diving into the technical aspects, it is crucial to be aware of the following points:
* The precise **compatibility** of your hardware.
* Current **functional limitations**.
* **Hardware and safety risks**.
* The **firmware maturity** status.

---

## ✅ Compatible models

This guide is specifically optimised for:
* ✅ **Yardforce 500**
* ✅ **Yardforce 500B**

> **Hardware Prerequisite:** Your robot must have its original motherboard (**STM32F103** or **STM32F4xx**). Compatibility with other models using these boards is possible but remains experimental.

---

## ⚙️ Features & Limitations

Depending on your model and chosen firmware, some functions (buttons and indicator lights on the cover) may behave differently.

### Yardforce 500
* ✅ **Lift indicator** functional.
* ✅ **Low battery indicator** functional.
* ✅ **Charging indicator** functional.
* *These elements operate natively, without specific firmware modification.*

### Yardforce 500B
* 🚀 **Optimisation via Nekraus firmware (v. 25/04/2025):**
    * ✅ **Keypad** fully operational.
    * ✅ **Indicator lights** fully functional.
* ⚠️ **Note:** Using other firmwares may disable or cause malfunction of these interfaces.

---

## 🛑 Disclaimer

:::danger WARNING
Software and hardware modification of your robot is performed **entirely at your own risk**. By continuing to read this guide, you accept the following risks:

1.  **Warranty void:** Opening the robot and flashing the firmware voids the manufacturer warranty.
2.  **Safety:** A mower is a potentially dangerous tool. Unexpected behaviour may occur during testing phases.
3.  **Hardware risk:** Incorrect handling may cause permanent failure of your components.

**The author and contributors disclaim all responsibility** for hardware damage, injury, or mishandling.
:::

---

## 🔁 Guide updates

The project evolves very quickly. Don't stay on an outdated version:

👉 [**View the update changelog**](/docs/Guide-OpenMower-Mowgli/mise-a-jour-guide)
