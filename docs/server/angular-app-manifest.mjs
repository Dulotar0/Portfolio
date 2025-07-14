
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
    'index.csr.html': {size: 3293, hash: 'e7af5a717d9578bc42ba4ce2d58d664222ba1ae8a878f01ff7db3ab90795ff80', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3309, hash: '024271bcf5b7395401b59e2ca5ed33fcb7027b322df1a78c53ec22859b66bd3e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21610, hash: 'fdae3945cebc618385b7e4630fddd7715dbe4ce941a035903193799899474104', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17451, hash: 'ef6dbff3582357df35f61b03327275860480a86fb06cf4a1f8be26e05c2b8156', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 17031, hash: '576550aec0dfc232810ffc24655057dff0c7d783740d86d0eeb23633ac551f4a', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16041, hash: '5a3c092d724959ebd503bbdcadb9c8ba661c1e46c5625e0d24ef480b7fa0ce1e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LZGRCS7F.css': {size: 470, hash: 'Mv0ru3jB4C0', text: () => import('./assets-chunks/styles-LZGRCS7F_css.mjs').then(m => m.default)}
  },
};
