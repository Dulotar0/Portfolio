
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
    'index.csr.html': {size: 3613, hash: '58968e80a98908ebca89ae04f7a0867472bfde70236c0bc46eebefd5dd32802c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3409, hash: '8d5d8fba834c16f172fe4c92a6fca40b07e07755ec43f7c58e23037476e470b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17755, hash: 'b6fa2146c5749834c27caa0419767c90c1003c5b751fd2119042a78e6ee93781', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 20264, hash: '94a0adc1c3f71831a490f8d7b7033f124b6314370c2f2cc1e0704a928cad65a7', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18267, hash: 'aa170f64a60f6b55ca144a66d9afac83418d0f792d07115387b30e61568dd772', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15099, hash: 'd2dd8239144ab2da3b98b1c760452c0458776363fa785144710df13d6fb4515e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LICQ23OS.css': {size: 1882, hash: 'K6y8lhRILes', text: () => import('./assets-chunks/styles-LICQ23OS_css.mjs').then(m => m.default)}
  },
};
