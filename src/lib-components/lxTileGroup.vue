<template>
<div class="tile-group">
  <template v-if="title">
    <h3 class="tile-group-title">{{title}}</h3>
  </template>

  <div class="tile-group-content">
  <slot></slot>
  </div>
</div>
</template>

<script>
export default {
name: "lxTileGroup",
  props:{
  title:{type:String,default:''}
  }
}
</script>

<style scoped>

</style>