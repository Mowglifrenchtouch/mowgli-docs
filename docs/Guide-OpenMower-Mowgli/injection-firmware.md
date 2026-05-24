---
title: "📀 Injection Firmware"
nav_order: 5
permalink: /docs/injection-firmware/
parent: "🏠 Guide OpenMower"
layout: default
---

import links from '@site/src/data/links';
import YoutubeEmbed from '@site/src/components/YoutubeEmbed';

<div style={{textAlign:"center"}}>
  <img src={require('@site/static/img/injection_firmware_cover.png').default} alt="Illustration firmware" style={{maxWidth:"200px", margin:"1rem auto", borderRadius:"10px", boxShadow:"0 2px 6px rgba(0,0,0,0.2)"}} />
</div>


# 📀 Compilation et injection du Firmware Mowgli

## 🗅️ Sauvegarde du firmware initial

Avant toute modification, sauvegardez votre firmware actuel avec un **STLINK** ( Optionnel: pas utile pour 500/500B ).

<div class="alert-blue">
  <div class="alert-title">ℹ️ Firmware d'origine 500/500B</div>
  <p>Besoin du firmware d'origine ? Le firmware Yardforce 500/500B officiel est disponible ici :<br />
  <a href={links.hardware.firmwareYardforceOrig} target="_blank">🗅️ Télécharger le firmware Yardforce</a></p>
</div>

**Branchement STLINK** :

<div style={{display:"flex", flexDirection:"column", gap:"1.5rem", alignItems:"center", marginTop:"1rem"}}>
  <img src={require('@site/static/img/stlink-mowgli-500b.jpg').default} alt="Branchement STLINK sur Mowgli 500B" style={{width:"100%", maxWidth:"700px", borderRadius:"8px", boxShadow:"0 2px 6px rgba(0,0,0,0.3)"}} />
  <img src={require('@site/static/img/stlink-cote-carte-mere.jpg').default} alt="Branchement STLINK côté carte mère" style={{width:"100%", maxWidth:"700px", borderRadius:"8px", boxShadow:"0 2px 6px rgba(0,0,0,0.3)"}} />
</div>

:::warning Erreur `init mode failed` — connexions ST-Link
En cas d'erreur `Error: init mode failed (unable to connect to the target)`, vérifiez les connexions du ST-Link V2 — elles sont souvent inversées. Si le problème persiste malgré des connexions correctes, le ST-Link V2 lui-même peut être défectueux : des cas documentés montrent que le remplacement de l'appareil a résolu le problème.
:::

<div class="alert-blue">
  <div class="alert-title">🗅️ Drivers ST-Link (Windows) - STSW-LINK009</div>
  <p>
    Ce pilote USB est essentiel pour les cartes ST-LINK/V2, ST-LINK/V2-1 et STLINK-V3, ainsi que leurs dérivés (kits Discovery, cartes Nucleo et d'évaluation STM8/STM32).<br /><br />
    💻 Il permet au système de reconnaître les interfaces USB du ST-LINK :<br />
    ✅ ST Debug<br />
    ✅ Port COM virtuel<br />
    ✅ ST Bridge interfaces<br /><br />
    ⚠️ Installation requise avant connexion pour ST-LINK/V2 et V2-1.<br />
    🔹 Facultative pour STLINK-V3 (mais permet de personnaliser les noms des ports COM virtuels).<br /><br />
    💫 <a href={links.hardware.stlink009drivers} target="_blank">Lien de téléchargement</a>
  </p>
</div>

<div class="alert-blue">
  <div class="alert-title">🛠️ Téléchargez STM32CubeProgrammer (STM32CubeProg)</div>
  <p>
    STM32CubeProgrammer est un outil logiciel multi-OS tout-en-un conçu pour la programmation des produits STM32.<br /><br />
    Il offre une interface intuitive et efficace pour lire, écrire et vérifier la mémoire des microcontrôleurs via :<br />
    🔹 Interfaces de débogage : JTAG & SWD<br />
    🔹 Interfaces bootloader : UART, USB DFU, I2C, SPI & CAN<br /><br />
    Avec STM32CubeProgrammer, vous pouvez :<br />
    ✅ Programmer les mémoires internes (Flash, RAM, OTP) et externes<br />
    ✅ Gérer les options de programmation et vérifier le contenu<br />
    ✅ Automatiser la programmation via des scripts<br /><br />
    Disponible en interface graphique (GUI) et en ligne de commande (CLI).<br /><br />
    💫 <a href={links.hardware.stm32cubeprog} target="_blank">Lien de téléchargement</a>
  </p>
</div>

---

# 📀 1. Téléchargement du firmware

**Pour Yardforce 500** (panel fonctionnel de base — aucune configuration spécifique requise)  
🧸 <a href={links.firmware.cedbossneo} target="_blank">GitHub - CEDBOSSNEO / Mowgli (main)</a>

**Lien direct** : [ZIP](https://github.com/cedbossneo/Mowgli/archive/refs/heads/main.zip)

**Pour Yardforce 500B** (firmware spécifique requis pour panel fonctionnel — clavier + voyants)  
🧸 <a href={links.firmware.nekraus500b} target="_blank">GitHub - Nekraus / Mowgli (yardforce-500b)</a>

**Lien direct** : [ZIP](https://github.com/Nekraus/Mowgli/archive/refs/heads/yardforce-500b.zip)

<div class="alert-green">
  <div class="alert-title">✅ Note pour les utilisateurs Yardforce 500B</div>
  <p>
    Le firmware de Nekraus pour le Yardforce 500B permet d'utiliser pleinement le tableau de bord du robot.<br />
    Cela améliore l'expérience utilisateur en gardant l'affichage actif et fonctionnel.
  </p>
</div>

---

# 🛠️ 2. Compilation du firmware

<div class="alert-blue">
  <div class="alert-title">🎥 Vidéo explicative : Compilation du firmware</div>
  <YoutubeEmbed id={links.youtube.firmwareCompilation} title="Compilation du firmware Mowgli" />
</div>

---

# 🚀 3. Injection du firmware

## 📁 Option 1 : Via Visual Studio Code

<div class="alert-blue">
  <div class="alert-title">🎥 Vidéo explicative : Injection avec VSCode</div>
  <YoutubeEmbed id={links.youtube.firmwareVSCode} title="Injection du firmware via VSCode" />
</div>

## 📁 Option 2 : Via STM32CubeProgrammer

<div style={{textAlign:"center", marginTop:"1rem"}}>
  <img src={require('@site/static/img/injection-cubeprogrammer.gif').default} alt="Démonstration injection firmware via STM32CubeProgrammer" style={{maxWidth:"100%", borderRadius:"8px", boxShadow:"0 2px 8px rgba(0,0,0,0.3)"}} />
</div>

---
