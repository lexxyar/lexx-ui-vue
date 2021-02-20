<template>
  <div class="card">
    <div class="card-header" v-if="hasHeaderSlot()">
      <slot name="header"></slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div class="card-footer" v-if="hasFooterSlot()">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "lxCard",
  methods: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    },
  }
}
</script>

<style scoped>

</style>