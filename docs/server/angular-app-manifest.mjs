
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
    'index.csr.html': {size: 3657, hash: 'e573a4bdc9cdd8b772ca6c7e3ee687aab206698e843c69c619872b189dba8b72', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3453, hash: 'ac0cbac8d7fdc09086cbfa0719b8d656d6d99eb444eb9d1d98aee128f7ab865e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15239, hash: 'f8d6d436666029eec25f75c004da1f0b115fe2671b58472637f06123ff5c8759', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17895, hash: '89ba783ddc01bb9223895d593ec76cb109192eb1008ae0b34162de8aa2ff1d92', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 21566, hash: '96e646b6e9456462f623504e134833032c5329321c689fe14ff05510d9368689', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18407, hash: 'c3257aecfb47c63c5775e7fb4c90bfc22bdbcc7386cdfdfee46217dd08378540', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-LICQ23OS.css': {size: 1882, hash: 'K6y8lhRILes', text: () => import('./assets-chunks/styles-LICQ23OS_css.mjs').then(m => m.default)}
  },
};
