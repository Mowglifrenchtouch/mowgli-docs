/**
 * Fichier centralisé de tous les liens importants du guide.
 * Pour mettre à jour un lien, modifiez uniquement ce fichier.
 */

const links = {

  // ─── Vidéos YouTube ───────────────────────────────────────────────────────
  // Remplacez null par l'ID YouTube (ex: "dQw4w9WgXcQ") une fois uploadé
  youtube: {
    firmwareCompilation:  null, // Vidéo : compilation du firmware
    firmwareVSCode:       null, // Vidéo : injection via VSCode
    firmwareCubeProg:     null, // Vidéo : injection via STM32CubeProgrammer
    manoettePS3Demo:      "3s2RossudJE", // Vidéo : démonstration manette PS3 sur Mowgli
    recordAreas:          "QPiIJIMYiIk", // Vidéo : enregistrement de la zone de tonte
  },

  // ─── Firmware GitHub ──────────────────────────────────────────────────────
  firmware: {
    cedbossneo:           "https://github.com/cedbossneo/Mowgli/tree/main",
    nekraus500b:          "https://github.com/Nekraus/Mowgli/tree/yardforce-500b",
    nekraus500bPanel:     "https://github.com/Nekraus/Mowgli/tree/yardforce-500b-FeaturePanel",
    mowgliDocker:         "https://github.com/cedbossneo/mowgli-docker",
  },

  // ─── Documentation officielle ─────────────────────────────────────────────
  openmower: {
    docs:                 "https://openmower.de/latest/docs/",
    recordAreas:          "https://openmower.de/latest/docs/step-by-step/4-record-areas-and-use-it/",
    initOrientation:      "https://openmower.de/latest/docs/step-by-step/4-record-areas-and-use-it/#step-42-initialize-the-orientation",
    gpsRtk:              "https://openmower.de/latest/docs/knowledge-base/rtk-gps/",
  },

  // ─── GPS & matériel ───────────────────────────────────────────────────────
  hardware: {
    ardusimpleF9P:        "https://fr.ardusimple.com/product/simplertk2b/?attribute_pa_header-options=without-headers",
    makerworld:           "https://makerworld.com/en/@juditech3d",
    stlink009drivers:     "https://mega.nz/folder/XEdGVTaB#KnQNzVhi9RzjMeEXjzvQ-g",
    firmwareYardforceOrig:"https://mega.nz/folder/icshEICL#QWDtu9Y2y_YmrNRwHSYzbA",
    stm32cubeprog:        "https://mega.nz/folder/2ZMHjJhT#DXUiH4I_ma5rL42wuUkJ_Q",
  },

  // ─── Outils GPS / Coordonnées ─────────────────────────────────────────────
  gpsTools: {
    rtkCoordinates:       "https://lvawebprojects.ovh/rtk/rtk.php", // Outil coordonnées datum recommandé
    coordonneesgps:       "https://www.coordonnees-gps.fr/",
  },

  // ─── NTRIP ────────────────────────────────────────────────────────────────
  ntrip: {
    centipedeMap:         "https://map.centipede-rtk.org/",
    centipedeCaster:      "caster.centipede.fr",
    centipedeCasterPort:  "2101",
    rtk2go:               "http://www.rtk2go.com/",
  },

  // ─── Pièces 3D ────────────────────────────────────────────────────────────
  parts3d: {
    githubStl:            "https://github.com/Mowglifrenchtouch/mowgli-3d-parts",
    makerworld:           "https://makerworld.com/en/@juditech3d",
    makerworldPepeuch:    "https://makerworld.com/fr/@user_3228887730",
  },

  // ─── Mowglinext ───────────────────────────────────────────────────────────
  mowglinext: {
    website:              "https://mowgli.garden",
    github:               "https://github.com/cedbossneo/mowglinext",
    issues:               "https://github.com/cedbossneo/mowglinext/issues",
    discussions:          "https://github.com/cedbossneo/mowglinext/discussions",
  },

  // ─── Communauté ───────────────────────────────────────────────────────────
  community: {
    telegramFR:           "https://t.me/+x6U3UwU5lB4yOWNk",
    discord:              "https://discord.gg/jE7QNaSxW7",
    github:               "https://github.com/Mowglifrenchtouch/mowgli-docs",
  },

};

export default links;
