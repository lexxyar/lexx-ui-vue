<template>
  <div class="navbar" :class="toggled?'toggled':''">
    <div class="navigation-container">
      <div class="logo">
        <slot name="title"/>
      </div>
      <nav>
        <ul class="nav">
          <slot></slot>
        </ul>

        <div class="nav-right">
          <slot name="right"></slot>
        </div>
      </nav>
    </div>
    <div class="toggle" :class="toggled?'toggled':''" @click="onToggle"></div>
  </div>
</template>

<script>
export default {
  name: "lxNavbar",
  data() {
    return ({
      toggled: false,
    })
  },
  methods: {
    onToggle: function () {
      this.toggled = !this.toggled
    }
  }
}
</script>

<style scoped lang="scss">
@import "./common.scss";
</style>