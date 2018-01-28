# vue-canvas-effect
> 一个简单的canvas动画合集Vue组件

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/vue-canvas-effect) ![](https://img.shields.io/npm/v/vue-canvas-effect.svg)

<p align="center">
  <br>
  <br>
  <img width="600" src="./canvas-logo.svg" alt="logo of vue-canvas-effect repository">
  <br>
</p>
                                            
<p align="center">
    🌾 <a href="https://chenxuan0000.github.io/vue-canvas-effect/index.html">online demo</a> |
   📘 <a href="../README.md">English document</a> 
</p>
                       
## 内容

- [**`浏览器兼容`**](#浏览器兼容)
- [**`安装`**](#安装)
- [**`使用`**](#使用)
    - [**`ES6`**](#ES6)
        - [**`按需加载`**](#按需加载)
        - [**`全部引入`**](#全部引入)
    - [**`普通模式`**](#普通模式)
- [**`组件列表`**](#组件列表)
    - [**`neon`**](#neon)
    - [**`bubbles`**](#bubbles)
- [**`修改日志`**](#修改日志)
- [**`贡献`**](#贡献)
- [**`TKS`**](#tks)                        

## 浏览器兼容
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;

## 安装

### NPM

```bash
npm install vue-canvas-effect --save
```

## 使用
### ES6

#### 按需加载
> 推荐
> 首先安装babel-plugin-import依赖

```javascript
npm install babel-plugin-import --save-dev
```

> 然后修改 .babelrc文件

```javascript
// .babelrc
{
  "plugins": [["import", {
    "libraryName": "vue-canvas-effect",
    "libraryDirectory": "src/components"
  }]]
}
```
> 然后，如果你需要neon组件，编辑main.js

```javascript
import Vue from 'vue'
import {neon} from 'vue-canvas-effect';
Vue.component(neon.name, neon);
`or`
Vue.component('customName', neon);
new Vue({
  el: '#app',
  render: h => h(App)
})
```

#### 全部引入
> 不推荐

```javascript
import Vue from 'vue'
import vueCanvas from 'vue-canvas-effect';
Vue.use(vueCanvas)
new Vue({
  el: '#app',
  render: h => h(App)
})
```

### 普通模式
> script 标签
```html
<html>
<head>
  ...
</head>
<body>
   <div id="app">
        <neon-effect></neon-effect>
   </div>
   <script src="https://cdn.bootcss.com/vue/2.5.9/vue.js"></script>
   <script src="../dist/neon.min.js"></script>
   <script>
      new Vue({
           el: '#app'
        })
   </script>
</body>
</html>
```

## 组件列表
### neon
- [neon-demo](https://chenxuan0000.github.io/vue-canvas-effect/index.html#/router_1)
> name: neonEffect
```html
// 默认标签名
<neon-effect :options="options"></neon-effect>
```
```javascript
//default options
        {
          len: 20, //五边形的单边长度
          count: 50, //多少线重叠
          rate: 20, //速度 越小越快
          dieChance: 0.05, //单次绘画失败进行重绘的几率
          sparkChance: 0.1, //[0,1] 越大画出的五边形越多重
          sparkDist: 10, //闪烁点的距离
          sparkSize: 2,//闪烁点的大小
          contentLight: 60, // [0,100] 色块的亮度
          shadowToTimePropMult: 6, //五边形的内环阴影大小
          bgColorArr: [0, 0, 0] //背景色数组
        }
```

### bubbles
- [bubbles-demo](https://chenxuan0000.github.io/vue-canvas-effect/index.html#/router_2)
> name: bubblesEffect
```html
// 默认标签名
<bubbles-effect :options="options"></bubbles-effect>
```
```javascript
//default options
        {
          color: 'rgba(225,225,225,0.5)', //气泡颜色
          radius: 15, //气泡半径
          densety: 0.3, // 气泡密度 越大越密集(建议不要大于1)
          clearOffset: 0.2 // 气泡消失距离[0-1] 越大越晚消失
        }
```


## 修改日志
See the GitHub [查看历史版本](https://github.com/chenxuan0000/vue-canvas-effect/releases).

## 贡献
欢迎给出一些意见和优化，期待你的 `Pull Request`。

## TKS
[circleMagic](https://github.com/FreAK19/circleMagic.js)

## License
vue-seamless-scroll is open source and released under the [MIT License](LICENSE).