import bubbles from './bubbles.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component(bubbles.name, bubbles)
}

export default bubbles
