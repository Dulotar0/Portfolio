
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/proyects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3368, hash: 'db37fff32f37db8e592185fc441fd4fd37171a8a1ed52db8482bc5d46d9c726b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3407, hash: 'd42edf405cadf57de043fe80c8e2a44cd5b98323578ac60885aea2c86dc11461', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14791, hash: 'bb8149c043108737459167614a4b56ace902ae0dd0f6eef75c8c45d8b50fdef4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 17940, hash: '01a465e44bec260d50957129369bfb04e8e63fc31fc3064dd53e8a26afab80d8', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17435, hash: 'a8c2e01402d263da2a344dd9fa6045ca78ad846a32d00541ad42a13513ec42a1', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 19944, hash: 'c8b852ba36359ace7327d7e6bd216b0232d16a3fd560f3925d9f3e13e1256dae', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'styles-ZG7WSFKT.css': {size: 1635, hash: 'aMDpzScuNQI', text: () => import('./assets-chunks/styles-ZG7WSFKT_css.mjs').then(m => m.default)}
  },
};
