
import neon from './src/components/neon'

const components = [
  neon
];

const install = function(Vue, opts = {}) {

  components.map(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  neon
};

module.exports.default = module.exports;
