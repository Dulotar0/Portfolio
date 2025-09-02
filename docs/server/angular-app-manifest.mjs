
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
    'index.csr.html': {size: 3657, hash: '0c1ca586b8383bde55f70c2e764e1e12b01ec0a489cce869cf7cb72adfe937e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3453, hash: '4c741e68f12f6931dc953bc5f13d5e65272ca7c820dc13c5653bf1af844667b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 22298, hash: '7a364c9f9b6b19a995e7db671773e24363a562867294b5cd541a4a457bef449d', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 18627, hash: '8ad7c428d47edc50c39ee7bbc5cb68b2d2c456fad34e11c9c648afae45f2908f', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19139, hash: '19c9f1595f551e7c87308461ebdf96bb6bba55ebaabdc53d3b38a3db3dff3b48', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15971, hash: 'e04502e52f851cddd8553520e56a028217db39636be798d90631e4f62ed8ef24', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LICQ23OS.css': {size: 1882, hash: 'K6y8lhRILes', text: () => import('./assets-chunks/styles-LICQ23OS_css.mjs').then(m => m.default)}
  },
};
