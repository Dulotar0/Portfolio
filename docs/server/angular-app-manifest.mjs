
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
    'index.csr.html': {size: 3613, hash: '61d107acfb11ff6a26eed5620158e7ac870c7df3b8311180bea871c38a92b998', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3409, hash: '24a5695617608a40084c42503eec80d4c2889bae36df8bb48f34253f035218a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18271, hash: '0a6f63602a61dbb17745451a38833d3cd916145888b8f7ba0da72119de4b7c7e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15103, hash: 'f97c010a407ce52279abe42fec8ec31d625b2a06f34fe6e9f617d574861c3c20', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17759, hash: '7427037a527982803cb47de3243ead5d182ffa62ed40d14da1b8c41df9b48348', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 20268, hash: '4094c828adb54757ed6cc3e21947ad58e26ed719bf80da989b21e653893de20f', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'styles-LICQ23OS.css': {size: 1882, hash: 'K6y8lhRILes', text: () => import('./assets-chunks/styles-LICQ23OS_css.mjs').then(m => m.default)}
  },
};
