
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
    'index.csr.html': {size: 3391, hash: '07add92ba7e51488e47d94476dc2a8df3e4c5f2a3cc7c68f3041e0ba5439f484', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3407, hash: 'f6f08ef74ed16ce418854d1607905b92b1328352e3887d0d1f28edbdef004722', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16261, hash: '3578ac20785b45f713992e5148fd0dd7ac8b6875572653181903a9229922da72', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21731, hash: '0f1d8e3a568911602d674af5914a53979ed03165b6c312e6c88b02b70c1ba2de', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 19790, hash: 'ea7de37f9292617294b3b70c89e9e2d17c8bc2271a00c60eed2ae2db8b619c1e', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17569, hash: '99ee44b372f87514bcf4ad937937d9061fab79a47dbc8292f7375f1480d719f1', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-ZK6VSK33.css': {size: 477, hash: 'sjBj2wUENlQ', text: () => import('./assets-chunks/styles-ZK6VSK33_css.mjs').then(m => m.default)}
  },
};
