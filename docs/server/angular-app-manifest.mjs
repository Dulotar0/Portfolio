
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
    'index.csr.html': {size: 3363, hash: '69b3c592d19bc73de3d28943dc8ac730a512b52e25a9976324d65b85e49980b7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3379, hash: '9bd43fea87a282ccbdb94f4859e63f52da299b4bc5aee24c0bf2c7561b131ac4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17521, hash: '7369e667d86ad1464df0efce16cec52fae1fff49a46a70f93b696ba5b9ca00bc', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16111, hash: '3a353e104bae9e51b1e351fc3a8fd2260cb3a7497c7350de36946e0b6d3d3d38', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 17101, hash: '57e864f2f4f76b9252b97fe6c46477ba6e16a4a18e6f25c7a5d77d02e1aa720c', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21680, hash: '94c74512b252cbab3f2f5bf604c224ddff7e4e0161c945755eb42518b5fe5a68', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-LZGRCS7F.css': {size: 470, hash: 'Mv0ru3jB4C0', text: () => import('./assets-chunks/styles-LZGRCS7F_css.mjs').then(m => m.default)}
  },
};
