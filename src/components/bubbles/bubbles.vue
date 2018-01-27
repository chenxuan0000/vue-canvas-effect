<template>
    <canvas ref="canvas" style="position: absolute;top: 0;left: 0;"></canvas>
</template>
<script>
  export default {
    name: 'bubblesEffect',
    data () {
      return {}
    },
    props: {
      options: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    computed: {
    },
    components: {},
    methods: {},
    mounted () {
    },
    beforeDestroy () {
    }
  }
</script>