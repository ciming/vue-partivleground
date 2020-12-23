# Vue粒子背景组件

预览地址：[https://ciming.github.io/vue-partivleground/](https://ciming.github.io/vue-partivleground/)

## 安装
npm
```
npm install --save vue-particleground
```
yarn

```
yarn add vue-particleground
```

## 使用

```javascript
<template>
  <Partivleground line-color="#fff" dot-color="#fff" class="partivleground">
   <div id="intro" >
    <h1>Particleground</h1>
    <p>A Vue components for snazzy background particle systems</p>
   
  </div>
  </Partivleground>
</template>

<script>
import Partivleground from 'vue-particleground'

export default {
  name: 'App',
  components: {
    Partivleground
  }
}
</script>

```