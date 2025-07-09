
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio/proyects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7550, hash: '07e29ef89014058f139476b6a8af33db05c17b3e40a75e44b437f2ffcd8695e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7566, hash: '545c863e33dd3eca4160a6c68186b519f1bb8377c753bf3e1f7137d37f16893c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IYUVKO5D.css': {size: 679, hash: 'bNaiE5u+bus', text: () => import('./assets-chunks/styles-IYUVKO5D_css.mjs').then(m => m.default)}
  },
};
