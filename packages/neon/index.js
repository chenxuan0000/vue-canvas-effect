import neon from './src/main';

/* istanbul ignore next */
neon.install = function(Vue) {
  Vue.component(neon.name, neon);
};

export default neon;
