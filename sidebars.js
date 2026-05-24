// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🤖 Mowgli V1 — Guide complet',
      link: {
        type: 'doc',
        id: 'Guide-OpenMower-Mowgli/index',
      },
      items: [
        'Guide-OpenMower-Mowgli/materiel-requis',
        'Guide-OpenMower-Mowgli/installation-preparation-pi',
        'Guide-OpenMower-Mowgli/configuration-systeme',
        'Guide-OpenMower-Mowgli/injection-firmware',
        'Guide-OpenMower-Mowgli/configuration-openmower',
        'Guide-OpenMower-Mowgli/manette-ps3',
        'Guide-OpenMower-Mowgli/offset-antenne-gps',
        'Guide-OpenMower-Mowgli/schema-de-cablage',
        'Guide-OpenMower-Mowgli/impression-3d',
        'Guide-OpenMower-Mowgli/serigraphie-Mowgli',
        'Guide-OpenMower-Mowgli/astuces',
        'Guide-OpenMower-Mowgli/probleme-solution',
        'Guide-OpenMower-Mowgli/a-propos',
        'Guide-OpenMower-Mowgli/aide-contribution',
        'Guide-OpenMower-Mowgli/mise-a-jour-guide',
      ],
    },
    {
      type: 'category',
      label: '🤖 Mowgli V2 — Informations',
      link: {
        type: 'doc',
        id: 'mowgli-v2/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: '🚀 Mowglinext — En conception',
      link: {
        type: 'doc',
        id: 'mowglinext/index',
      },
      items: [],
    },
  ],
};

export default sidebars;
