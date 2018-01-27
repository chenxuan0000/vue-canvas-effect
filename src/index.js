import Neon from './components/neon';

const components = {
  Neon
};

const canvas = {
    ...components
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(canvas).forEach(key => {
        Vue.component(key, canvas[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install,
    ...components
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
