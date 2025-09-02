
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
    'index.csr.html': {size: 3657, hash: '1a680805094e457097d16a4d1f690bfd0ca4299ddce32d254f1442efb964b60e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3453, hash: '93dbab58188e0d795da14bb06d289523bbab875a56b43d1cbb3fb33af7d5616c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 22301, hash: '2ff0f7d9a6dc03db8f0b4bf8d7c2d4bb436fe440093f0275cc5f07a0fbe655f8', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15974, hash: 'cf019aaa14cf1ea3a7f42379c3e67f016c5c44855413c9bdade8528db4dca3d9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 18630, hash: 'c8c21195802305a32c9af94aa2fd89387ca1053b921bc9b2404a07cd90899f7b', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19142, hash: 'ce1381a795fa4d3bef693d0001c0c586c83e73a1601497ab3837c5c96f49aaca', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-LICQ23OS.css': {size: 1882, hash: 'K6y8lhRILes', text: () => import('./assets-chunks/styles-LICQ23OS_css.mjs').then(m => m.default)}
  },
};
