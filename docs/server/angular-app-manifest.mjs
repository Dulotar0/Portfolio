
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
    'index.csr.html': {size: 3613, hash: '5802ce42e391925da465187e511462d80c8189211b1b47f7daf9f3dfac593b25', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3409, hash: 'fe01e56841e7bbc178764721c31657696fd1ba44238c920a114867ace75dea9c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18363, hash: 'b26e624f4ed4cd0d00b8cb721a69618184f28afe63ff7faa3da95c7007959c61', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15195, hash: '24894aa685b9c205c4957ff4e76d507380f0502e7321995c654938e09adc7091', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 17851, hash: '8714ba82dc2bfdec3c59f6244a1840263db8f01adc7ac1bc82ce2fbdd916d98b', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'proyects/index.html': {size: 20360, hash: '578ef441f89133ff770ab773b4cdc49276bd4460ed3ddee7da746080e0ec9202', text: () => import('./assets-chunks/proyects_index_html.mjs').then(m => m.default)},
    'styles-LICQ23OS.css': {size: 1882, hash: 'K6y8lhRILes', text: () => import('./assets-chunks/styles-LICQ23OS_css.mjs').then(m => m.default)}
  },
};
