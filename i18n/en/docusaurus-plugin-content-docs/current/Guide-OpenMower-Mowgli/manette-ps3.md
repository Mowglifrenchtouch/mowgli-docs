---
title: "🎮 PS3 Controller — Configuration & Buttons"
sidebar_label: "🎮 PS3 Controller"
nav_order: 7
permalink: /docs/Guide-OpenMower-Mowgli/manette-ps3/
layout: default
parent: "🏠 OpenMower Guide"
---

import links from '@site/src/data/links';
import YoutubeEmbed from '@site/src/components/YoutubeEmbed';

# 🎮 PS3 Controller — Configuration & Buttons for OpenMower

This page details the connection and button mapping of a PS3 controller with OpenMower functions.

<YoutubeEmbed id={links.youtube.manoettePS3Demo} title="PS3 controller demo on Mowgli" />

---

## 🔌 Connection

Connect the PS3 controller via **USB cable** directly to the Raspberry Pi. OpenMower detects it automatically with no additional configuration.

:::tip Tip — External USB port
On my robot, I plugged a **USB extension cable** into the **existing external USB port on the robot** (connected to the Raspberry Pi). This allows you to connect the controller directly to the outside of the robot, **without needing to open it**. Very practical for mapping sessions!
:::

:::warning Recording mode required
The controller only works when OpenMower is in **recording mode**. This mode starts automatically if no map exists yet.
:::

---

:::warning Partial experience feedback
Not all PS3 controller features have been exhaustively tested on Mowgli. It is possible that some commands listed below may not all be usable or functional in your configuration. Feel free to share your feedback on the <a href={links.community.telegramFR} target="_blank">Telegram group</a>.
:::

## 🕹️ PS3 ↔ OpenMower Button Mapping

| PS3 Button | Xbox Equivalent | Action |
|-----------|----------------|--------|
| ✕ (Cross) held + left stick | A + left stick | 🕹️ **Drive** the robot |
| R1 | RB | ⚡ **Turbo** mode (increased speed) |
| ○ (Circle) | B | ⏺️ **Start / stop** recording a zone |
| △ (Triangle) + ↑ D-PAD | Y + D-PAD UP | 🛣️ Save as **navigation zone** (passage only) |
| △ (Triangle) + ↓ D-PAD | Y + D-PAD DOWN | 🌿 Save as **mowing zone** |
| □ (Square) 1st press | X | 📍 Record the **docking approach point** (~1.5m in front) |
| □ (Square) 2nd press | X | 🏠 Record the **docking entry point** |

:::tip
An Xbox USB controller is also compatible and works the same way — buttons map directly without conversion.
:::

---

## 📖 Resources

- <a href={links.openmower.docs} target="_blank">Official OpenMower documentation</a>
- [← Back: OpenMower Configuration](/docs/Guide-OpenMower-Mowgli/configuration-openmower)
