<template>
  <div>
    <div class="sidenav" :class="active?'expanded':''">
      <ul>
        <slot></slot>
      </ul>
      <div class="toggle" :class="active?'expanded':''" @click="toggleMenu">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lxSideNav",
  data() {
    return ({});
  },
  computed: {
    active: {
      get() {
        return this.$attrs.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
  },
  methods: {
    toggleMenu() {
      this.active = !this.active
    },
  },

}
</script>

<style scoped>

</style>