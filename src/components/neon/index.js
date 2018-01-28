import neon from './neon.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component(neon.name, neon)
}

export default neon
