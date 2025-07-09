
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
    'index.csr.html': {size: 7530, hash: '3bb6e124e92ad26dd16bab26018d62c47f22a9a8dfa6a6796389f47ae9115ba8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7546, hash: 'c2af1b2b679f015cf856ba75ca9d6d2b9127549250cb20691ba0ddaf6fa9d1a8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17389, hash: 'd915bfd34b9a090c4a7b9c09ea380ed45a701626b97b6fb1fe8b1bb58f9a4b48', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 22882, hash: '54b302915d212bba741c7a4909c9f81a9ffc569465b8ff68ab3d5e2ff2a8471f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 17390, hash: '2ae73c79a05480ee1a927eb277f22c3dd0155d7445390eb8186fb848ec21f8d4', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 18577, hash: '702873fc7fa56d2fe3f0c7bc8df064de1b19c7c8a0bdf950a6826a5638edfb31', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IYUVKO5D.css': {size: 679, hash: 'bNaiE5u+bus', text: () => import('./assets-chunks/styles-IYUVKO5D_css.mjs').then(m => m.default)}
  },
};
