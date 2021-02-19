<template>
  <div class="navbar" :class="getCss()">
    <div class="navigation-container">
      <template v-if="hasBrandSlot">
        <div class="brand">
          <slot name="brand"/>
          <template v-if="toggleSidebarButton">
            <div class="toggle-button" @click="onToggleButtonClick">
              <div class="hamburger">
              </div>
            </div>
          </template>
        </div>
      </template>
      <template v-else>
        <template v-if="toggleSidebarButton">
          <div class="toggle-button" @click="onToggleButtonClick">
            <div class="hamburger">
            </div>
          </div>
        </template>
      </template>

      <nav>
        <ul class="nav">
          <slot></slot>
        </ul>

        <ul class="nav-right">
          <slot name="right"></slot>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "lxNavbar",
  props: {
    toggleSidebarButton: {
      type: Boolean,
      default: true,
    },
    sidebarExpanded: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return ({
      sidebarExpandedSync: this.sidebarExpanded,
    })
  },
  methods: {
    onToggleButtonClick: function () {
      this.sidebarExpandedSync = !this.sidebarExpandedSync
      this.$emit('onToggle', this.sidebarExpandedSync)
      // this.getCss()
    },
    getCss() {
      let css = []
      css.push(this.sidebarExpandedSync ? 'toggled' : '')
      return css.join(' ')
    }
  },
  computed: {
    hasBrandSlot() {
      return !!this.$slots.brand
    },
  },
}
</script>

<style scoped lang="scss">
//@import "./common.scss";
</style>