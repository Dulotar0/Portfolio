
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
    'index.csr.html': {size: 3391, hash: '3e23ab8eff2c399604841c85886c004f931fc501b4a5e50064067b5347fd3be6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3407, hash: '6f184cab2f86621c5504ddebce1567b9f0957b8389fbf1453435b28fe4f47a8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 17129, hash: 'ff43171e6ee581a330fa03d38ab08600e4204c8b4bfccce156d198ca8b750265', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21708, hash: '6b78c1dfbe5e7241b249fd7a9eaccbfdae830583e875f2fee40efaba9f62cd07', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16241, hash: 'f60d42456f21c716e4436187bb9a1b4b0072ab6526625dd8f6e213ebd192831a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17549, hash: '887ef83e89326f9650b0323a5bdf59a5459e95b9115f9c7c32c81ccc4186fbb3', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-LZGRCS7F.css': {size: 470, hash: 'Mv0ru3jB4C0', text: () => import('./assets-chunks/styles-LZGRCS7F_css.mjs').then(m => m.default)}
  },
};
