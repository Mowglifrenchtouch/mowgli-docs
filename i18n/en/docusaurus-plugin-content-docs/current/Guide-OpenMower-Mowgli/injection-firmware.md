---
title: "📀 Firmware Injection"
nav_order: 5
permalink: /docs/injection-firmware/
parent: "🏠 OpenMower Guide"
layout: default
---

import links from '@site/src/data/links';
import YoutubeEmbed from '@site/src/components/YoutubeEmbed';

<div style={{textAlign:"center"}}>
  <img src="/img/injection_firmware_cover.png" alt="Firmware illustration" style={{maxWidth:"200px", margin:"1rem auto", borderRadius:"10px", boxShadow:"0 2px 6px rgba(0,0,0,0.2)"}} />
</div>


# 📀 Mowgli Firmware Compilation and Injection

## 🗅️ Backup your original firmware

Before any modification, back up your current firmware with an **STLINK** (Optional: not needed for 500/500B).

<div class="alert-blue">
  <div class="alert-title">ℹ️ Original 500/500B Firmware</div>
  <p>Need the original firmware? The official Yardforce 500/500B firmware is available here:<br />
  <a href={links.hardware.firmwareYardforceOrig} target="_blank">🗅️ Download Yardforce firmware</a></p>
</div>

**STLINK Wiring**:

<div style={{textAlign:"center"}}>
  <img src="/img/branchement_stlink.jpg" alt="STLINK connection diagram" style={{maxWidth:"300px", margin:"auto"}} />
</div>

<div class="alert-blue">
  <div class="alert-title">🗅️ ST-Link Drivers (Windows) - STSW-LINK009</div>
  <p>
    This USB driver is essential for ST-LINK/V2, ST-LINK/V2-1 and STLINK-V3 boards, as well as their derivatives (Discovery kits, Nucleo boards and STM8/STM32 evaluation boards).<br /><br />
    💻 It allows the system to recognise the ST-LINK USB interfaces:<br />
    ✅ ST Debug<br />
    ✅ Virtual COM Port<br />
    ✅ ST Bridge interfaces<br /><br />
    ⚠️ Required installation before connecting for ST-LINK/V2 and V2-1.<br />
    🔹 Optional for STLINK-V3 (but allows customising virtual COM port names).<br /><br />
    💫 <a href={links.hardware.stlink009drivers} target="_blank">Download link</a>
  </p>
</div>

<div class="alert-blue">
  <div class="alert-title">🛠️ Download STM32CubeProgrammer (STM32CubeProg)</div>
  <p>
    STM32CubeProgrammer is an all-in-one multi-OS software tool designed for programming STM32 products.<br /><br />
    It provides an intuitive and efficient interface to read, write and verify memory of microcontrollers via:<br />
    🔹 Debug interfaces: JTAG & SWD<br />
    🔹 Bootloader interfaces: UART, USB DFU, I2C, SPI & CAN<br /><br />
    With STM32CubeProgrammer, you can:<br />
    ✅ Program internal (Flash, RAM, OTP) and external memories<br />
    ✅ Manage programming options and verify content<br />
    ✅ Automate programming via scripts<br /><br />
    Available as graphical interface (GUI) and command line (CLI).<br /><br />
    💫 <a href={links.hardware.stm32cubeprog} target="_blank">Download link</a>
  </p>
</div>

---

# 📀 1. Firmware Download

**For Yardforce 500** (basic functional panel — no specific configuration required)  
🧸 <a href={links.firmware.cedbossneo} target="_blank">GitHub - CEDBOSSNEO / Mowgli (main)</a>

**Direct link**: [ZIP](https://github.com/cedbossneo/Mowgli/archive/refs/heads/main.zip)

**For Yardforce 500B** (specific firmware required for functional panel — keypad + indicator lights)  
🧸 <a href={links.firmware.nekraus500b} target="_blank">GitHub - Nekraus / Mowgli (yardforce-500b)</a>

**Direct link**: [ZIP](https://github.com/Nekraus/Mowgli/archive/refs/heads/yardforce-500b.zip)

<div class="alert-green">
  <div class="alert-title">✅ Note for Yardforce 500B users</div>
  <p>
    The Nekraus firmware for the Yardforce 500B allows full use of the robot's dashboard.<br />
    This improves the user experience by keeping the display active and functional.
  </p>
</div>

---

# 🛠️ 2. Firmware Compilation

<div class="alert-blue">
  <div class="alert-title">🎥 Explanatory video: Firmware compilation</div>
  <YoutubeEmbed id={links.youtube.firmwareCompilation} title="Mowgli firmware compilation" />
</div>

---

# 🚀 3. Firmware Injection

## 📁 Option 1: Via Visual Studio Code

<div class="alert-blue">
  <div class="alert-title">🎥 Explanatory video: Injection with VSCode</div>
  <YoutubeEmbed id={links.youtube.firmwareVSCode} title="Firmware injection via VSCode" />
</div>

## 📁 Option 2: Via STM32CubeProgrammer

<div class="alert-blue">
  <div class="alert-title">🎥 Explanatory video: Injection with STM32CubeProgrammer</div>
  <YoutubeEmbed id={links.youtube.firmwareCubeProg} title="Firmware injection via STM32CubeProgrammer" />
</div>

---
