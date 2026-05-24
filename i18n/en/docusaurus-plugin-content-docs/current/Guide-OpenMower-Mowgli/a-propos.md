---
title: "👤 About the Project"
nav_order: 98
permalink: /docs/Guide-OpenMower-Mowgli/a-propos
---

import links from '@site/src/data/links';

![About the Mowgli project](/img/a-propos-illustration.png)

# 👤 About the Mowgli Project

Welcome to the official documentation of the **Mowgli** project — a collection of open-source projects enabling you to transform a **Yardforce 500 / 500B** mower into an autonomous robot.

---

## 🗂️ Project versions

### 🤖 Mowgli V1 — OpenMower

The first generation, and the main subject of this guide. It is built on the **Mowgli** firmware developed by **cedbossneo**, which itself relies on the **OpenMower** project by _Clemens Elflein_.

- Supported mowers: Yardforce 500, 500B
- RTK GPS navigation (ArduSimple F9P)
- OpenMower interface (Docker, ROS)
- Modified STM32 firmware (RM-ECOW-V1.x board)

:::info
This guide is entirely dedicated to V1. Other versions have their own section in the sidebar.
:::

---

### 🤖 Mowgli V2 — In development

An intermediate version, still under active development. It retains an architecture close to V1, but the main effort is focused on adapting — as best as possible — to the **new OpenMower interface**, which has changed significantly. **Not stable** at this time — documentation coming soon.

---

### 🚀 Mowglinext — Next generation

**Mowglinext** is a complete redesign of the project, created by **cedbossneo** (original author of Mowgli).

:::note Independent from OpenMower
Unlike V1 and V2, **Mowglinext is a fully autonomous project** — it no longer depends on OpenMower. Modernised architecture, software stack redesigned from scratch.
:::

- Official website: <a href={links.mowglinext.website} target="_blank">**mowgli.garden**</a>
- GitHub: <a href={links.mowglinext.github} target="_blank">github.com/cedbossneo/mowglinext</a>
- Currently **in the design phase** — tutorial not yet available

---

## 🧑‍💻 Authors and contributors

This guide was written by [**Judicaël (Juditech3D)**](https://github.com/juditech3D) based on his personal experience with the Yardforce 500B.

Many thanks to:

- [**Cedric / cedbossneo**](https://github.com/cedbossneo) — author of the Mowgli firmware, Mowgli Docker repository, and the **Mowglinext** project
- [**Nekraus**](https://github.com/Nekraus) — improved firmware with keypad and indicator light support (Yardforce 500B)
- [**Pepeuch**](https://makerworld.com/fr/@user_3228887730) — 3D parts for hardware integration (RPi+GNSS+F9P support, SA→500B motor adapter) and **active contributor to Mowglinext development**
- **Etienne (Mowgli PCB)** — design and development of dedicated **PCB boards** for the Mowgli project
- [**kamaradclimber**](https://github.com/kamaradclimber) — documentation contributions: ST-Link V2 troubleshooting and webui configuration warning
- The French 🇫🇷 Telegram community for their invaluable help with debugging and user feedback:
  Join the channel 👉 <a href={links.community.telegramFR} target="_blank">**Telegram Mowgli fr**</a>

:::note
There are many more on Telegram — authors, testers, passionate tinkerers who push the project forward every day. Listing them all here would take too long, but their contribution is just as valuable — and they know who they are. 🙏
:::

---

## 💡 Project goals

- Make the robotisation of existing mowers accessible to everyone
- Provide clear, illustrated documentation **adapted for beginners**
- Offer an **open hardware** + **open source** approach

---

## 🤝 Contribute

You can:

- Fork the GitHub repository: <a href={links.community.github} target="_blank">github.com/Mowglifrenchtouch/mowgli-docs</a>
- Suggest corrections or improvements via Issues
- Join the channel 👉 <a href={links.community.telegramFR} target="_blank">**Telegram Mowgli fr**</a> to exchange ideas

---

## 💬 Contact

For any questions or suggestions, join the <a href={links.community.telegramFR} target="_blank">Telegram community</a> or consult the project's GitHub repositories.
