<template>
  <div class="vue-pg" style="position: relative;">
    <div class="vue-pg__content">
      <slot/>
    </div>
    
  </div>
</template>

<script>
import Partivleground from './Partivleground'

export default {
  props: {
    dotColor:{
      type: String,
      default: '#000'
    },
    lineColor: {
      type: String,
      default: '#666666'
    },
    lineWidth: {
      type: Number,
      default: 1
    },
    density: {
      type: Number,
      default: 10000
    }
  },
  mounted() {
    this.$nextTick(() => {
      const options = {}
      for(let key in this.$props) {
        options[key] = this.$props[key]
      }
      new Partivleground(this.$el, options)
    })
    
  }
}
</script>