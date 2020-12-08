<template>
  <div class="toolbar">
    <div class="content">
      <slot></slot>
    </div>
    <div class="content-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "lxToolBar"
}
</script>

<style scoped>

</style>