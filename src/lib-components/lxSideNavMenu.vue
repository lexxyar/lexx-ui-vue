<template>
<ul>
  <li class="title" v-if="title">{{ title }}</li>
  <slot></slot>
</ul>
</template>

<script>
export default {
  name: "lxSideNavMenu",
  props: {
    title:{
      type:String,
      default:'',
  },
}
}
</script>

<style scoped>

</style>