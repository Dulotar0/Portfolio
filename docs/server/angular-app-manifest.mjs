
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
    'index.csr.html': {size: 3391, hash: '9d8dae756472f5a2c2d5d040387ceada064f46ab066b23bf6858124c2588914f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3407, hash: '0eec4169904b91e1e37f1d52cf07dc0db942b9c04f7d38c6a70d8aa58cea3e08', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15002, hash: 'dfdd67b9deceb830e426f01328c51fc7488f3f35dc5bdb70e815171b4220b776', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 19468, hash: '1cc8c738c8c03cb5ea53e0dcd93fd032db0757c0801af388a5d6efb2a5393612', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18185, hash: '8a9557d23d4653822713dba158d61e3019d37fa5dd95f63147bf2a7316aa57e4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 16792, hash: 'b421290959bf2a17c6b07cb06a649d18c39d5e018f99269e334ca4118a0f9ce8', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-ZK6VSK33.css': {size: 477, hash: 'sjBj2wUENlQ', text: () => import('./assets-chunks/styles-ZK6VSK33_css.mjs').then(m => m.default)}
  },
};
