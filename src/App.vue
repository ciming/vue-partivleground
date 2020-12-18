<template>
  <Partivleground line-color="#fff" dot-color="#fff" class="partivleground">
   <div id="intro" >
    <h1>Particleground</h1>
    <p>A JavaScript plugin for snazzy background particle systems</p>
    <a href="https://github.com/jnicol/particleground/archive/master.zip" class="btn">Download</a>
  </div>
  </Partivleground>
</template>

<script>
import Partivleground from './components/Partivleground'

export default {
  name: 'App',
  components: {
    Partivleground
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header-banner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.partivleground{
  background-color: #16a085;
}
#intro{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  h1{
    text-transform: uppercase;
    font-size: 85px;
    font-weight: 700;
    letter-spacing: 0.015em;
  }
}
</style>
