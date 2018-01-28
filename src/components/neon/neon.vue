<template>
    <canvas ref="canvas" style="position: absolute;top: 0;left: 0;"></canvas>
</template>
<script>
  require('comutils/animationFrame')()
  import resize from '../../util/resize'
  const copyObj = require('comutils/copyObj')

  export default {
    name: 'neonEffect',
    data () {
      return {
        defaultOptions: {
          len: 20, //五边形的单边长度
          count: 50, //多少线重叠
          rate: 20, //速度 越小越快
          dieChance: 0.05, //单次绘画失败进行重绘的几率
          spawnChance: 1,
          sparkChance: 0.1, //[0,1] 越大画出的五边形越多重
          sparkDist: 10, //闪烁点的距离
          sparkSize: 2,//闪烁点的大小
          color: 'hsl(hue,100%,light%)',
          contentLight: 60, // [0,100] 色块的亮度
          shadowToTimePropMult: 6, //五边形的内环阴影大小
          LightInputMultiplier: .03,
          cx: window.innerWidth / 2, //动画开始x坐标
          cy: window.innerHeight / 2, //动画开始y坐标
          bgColorArr: [0, 0, 0], //背景色数组
          repaintAlpha: .04,
          hueChange: .1
        },
        requestAniId: null
      }
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
      opts () {
        return copyObj({}, this.defaultOptions, this.options)
      }
    },
    components: {},
    methods: {},
    mounted () {
      let c = this.$refs.canvas,
        w = c.width = window.innerWidth,
        h = c.height = window.innerHeight,
        ctx = c.getContext('2d'),
        _this = this,
        tick = 0,
        lines = [],
        dieX = w / 2 / this.opts.len,
        dieY = h / 2 / this.opts.len,
        baseRad = Math.PI * 2 / 6;
      ctx.fillRect(0, 0, w, h);

      let loop = () => {
        cancelAnimationFrame(this.requestAniId)
        this.requestAniId = requestAnimationFrame(loop)
        ++tick
        ctx.globalCompositeOperation = 'source-over'
        ctx.shadowBlur = 0
        ctx.fillStyle = `rgba(${this.opts.bgColorArr[0]},${this.opts.bgColorArr[1]},${this.opts.bgColorArr[2]},${this.opts.repaintAlpha})`
        ctx.fillRect(0, 0, w, h)
        ctx.globalCompositeOperation = 'lighter'

        if (lines.length < this.opts.count && Math.random() < this.opts.spawnChance) lines.push(new Line)

        lines.map(function (line) {
          line.step()
        })
      }

      function Line () {
        this.opts = _this.opts
        this.reset()
      }

      Line.prototype.reset = function () {
        this.x = 0
        this.y = 0
        this.addedX = 0
        this.addedY = 0
        this.rad = 0
        this.lightInputMultiplier = this.opts.LightInputMultiplier * Math.random()
        this.color = this.opts.color.replace('hue', tick * this.opts.hueChange)
        this.cumulativeTime = 0
        this.beginPhase()
      }
      Line.prototype.beginPhase = function () {
        this.x += this.addedX
        this.y += this.addedY
        this.time = 0
        this.targetTime = ( this.opts.rate * Math.random() ) | 0
        this.rad += baseRad * ( Math.random() < .5 ? 1 : -1 )
        this.addedX = Math.cos(this.rad)
        this.addedY = Math.sin(this.rad)
        if (Math.random() < this.opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) this.reset()
      }
      Line.prototype.step = function () {
        ++this.time
        ++this.cumulativeTime
        if (this.time >= this.targetTime) this.beginPhase()
        let prop = this.time / this.targetTime,
          wave = Math.sin(prop * Math.PI / 2),
          x = this.addedX * wave,
          y = this.addedY * wave;

        ctx.shadowBlur = prop * this.opts.shadowToTimePropMult
        ctx.fillStyle = ctx.shadowColor = this.color.replace('light', this.opts.contentLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier))
        ctx.fillRect(this.opts.cx + ( this.x + x ) * this.opts.len, this.opts.cy + ( this.y + y ) * this.opts.len, 2, 2)

        if (Math.random() < this.opts.sparkChance) ctx.fillRect(this.opts.cx + ( this.x + x ) * this.opts.len + Math.random() * this.opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - this.opts.sparkSize / 2, this.opts.cy + ( this.y + y ) * this.opts.len + Math.random() * this.opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - this.opts.sparkSize / 2, this.opts.sparkSize, this.opts.sparkSize)
      }

      loop()

      resize(() => {
        w = c.width = window.innerWidth
        h = c.height = window.innerHeight
        ctx.fillRect(0, 0, w, h)
        this.opts.cx = w / 2
        this.opts.cy = h / 2
        dieX = w / 2 / this.opts.len
        dieY = h / 2 / this.opts.len
      })

    },
    beforeDestroy () {
      window.cancelAnimationFrame(this.requestAniId)
    }
  }
</script>