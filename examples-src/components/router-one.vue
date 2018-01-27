<template>
    <div class="router1">
        <neon-effect :options="option"></neon-effect>
    </div>
</template>
<script>
  import neonEffect from 'src/components/neon'

  export default {
    data () {
      return {
        option: {
          rate: 22,

        }
      }
    },
    props: {},
    computed: {},
    components: {
      neonEffect
    },
    methods: {}
  }
</script>