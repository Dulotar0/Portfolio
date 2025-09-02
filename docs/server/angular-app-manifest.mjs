
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
    'index.csr.html': {size: 3657, hash: 'b9c23738ab566f1541406ea5a8732a929eb9a701838e810e5b9b34617318d3e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3453, hash: 'e59d897c88b815b5eafba3a1eef340a7acb3c500d23f63829aae9d9c4d82880e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19142, hash: '3c2be533094fae507d0c6a95d25a622aa51b88565b048db32b3c0c4f77434e82', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 22301, hash: '11262acd5e69a4747c86a05caa81a4a3a65f637764ec4c982a9a9643de67d94d', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 18630, hash: '4266eaa75d1697f13fbfcfedfa6899bc717ad7d683192321f2ea0894efdfc280', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15974, hash: '11d5afeb7257d992b2307fe9c16f2425019b9274889fdcf651de43b67c91881b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LICQ23OS.css': {size: 1882, hash: 'K6y8lhRILes', text: () => import('./assets-chunks/styles-LICQ23OS_css.mjs').then(m => m.default)}
  },
};
