
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 841, hash: '3062fff4ef5d48d5f57ad40972b8434155b3564fa173f3b362477f3aea56cc31', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: '0726c69bb4f593796b670709d39bcc485d4911d1e32a694e96bb02df2615178d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12950, hash: 'f7cbb4507e9ead5358c7e6a6246734d20d916ce3fdfd4c02f9c23d11752ed655', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FZI4UDBJ.css': {size: 499, hash: 'RBODG8lc3+8', text: () => import('./assets-chunks/styles-FZI4UDBJ_css.mjs').then(m => m.default)}
  },
};
