
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
    'index.csr.html': {size: 3613, hash: '70bab63bbbb4c2a2f98e00a719f6e658fd147a9f679047cd15440a35aa26aa6c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3409, hash: '6e5002295ea4321a83c036c5e687ba9b63f012d2d3ff47a6c698de9be895b230', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18187, hash: '0f20f8bfa2196e031968a53a5326a8ae1d794fa4398d56c510bc3935055e1526', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 20184, hash: '2ce7b55becc1574f1a6e73a00dbf5165fff77463758b6a64e5dc64ba779f0dac', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15019, hash: '7857d8becb6d1c3a2b5da04db1707c93f4b540cc830d62c5a887ce1389496116', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17675, hash: 'ed1b8194fe92277a480aa617d0d68e05708dec9206ee06a06f81bfc0bc11b820', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-LICQ23OS.css': {size: 1882, hash: 'K6y8lhRILes', text: () => import('./assets-chunks/styles-LICQ23OS_css.mjs').then(m => m.default)}
  },
};
