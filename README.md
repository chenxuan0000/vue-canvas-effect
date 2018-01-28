# vue-canvas-effect
> A simple, canvas effect collection for Vue.js

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/vue-canvas-effect) ![](https://img.shields.io/npm/v/vue-canvas-effect.svg)
                                                                      
<p align="center">
    <img src="http://p2.qqyou.com/biaoqing/UploadPic/2013-2/1/2013020120565544702.gif" width="480"/>
</p> 
                                            
<p align="center">
    🌾 <a href="https://chenxuan0000.github.io/vue-canvas-effect/index.html">online demo</a> |
   📘 <a href="./document/README.md">中文文档</a> 
</p>
                                   

## Browser support
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+ | &check;| &check; | &check; | &check; | &check; | &check;

## Installation

### NPM

```bash
npm install vue-canvas-effect --save
```

## Usage
### ES6

#### On demand(Recommend ways)

> First, install babel-plugin-import

```javascript
npm install babel-plugin-import --save-dev
```

> Then edit .babelrc

```javascript
// .babelrc
{
  "plugins": [["import", {
    "libraryName": "vue-canvas-effect",
    "libraryDirectory": "src/components"
  }]]
}
```
> Next, if you need neon, edit main.js

```javascript
import Vue from 'vue'
import { neon} from 'vue-canvas-effect';
Vue.component(neon.name, neon);
`or`
Vue.component('customName', neon);
new Vue({
  el: '#app',
  render: h => h(App)
})
```

#### Fully import(no recommend ways)

```javascript
import Vue from 'vue'
import vueCanvas from 'vue-canvas-effect';
Vue.use(vueCanvas)
new Vue({
  el: '#app',
  render: h => h(App)
})
```

### normal use (script tag)

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

## Component List
- [neon]()
- [bubbles]()


## Changelog
See the GitHub [release history](https://github.com/chenxuan0000/vue-canvas-effect/releases).

## Contribution
Welcome to give some Suggestions and optimizations, and look forward to your `Pull Request`.

## TKS
[circleMagic](https://github.com/FreAK19/circleMagic.js)

## License
vue-seamless-scroll is open source and released under the [MIT License](LICENSE).