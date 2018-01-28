<template>
    <div class="router2">
        <span class="router-h5">bubblesEffect(气泡效果)</span>
        <bubbles></bubbles>
    </div>
</template>
<style lang="scss" scoped>
    .router2 {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        background-image: url('http://p39fp1l31.bkt.clouddn.com/demo1.jpg');
    }
</style>
<script>
  import bubbles from 'src/components/bubbles'

  export default {
    data () {
      return {}
    },
    computed: {},
    components: {
      bubbles
    }
  }
</script>