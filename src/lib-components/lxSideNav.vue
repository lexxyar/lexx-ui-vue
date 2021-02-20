<template>
  <div class="sidebar light" :class="getCss()">
    <template v-if="toggleButton">
      <button class="sidebar-toggle"
              @click="onSidebarToggleClick">

        <template v-if="!expandedSync">
          &#9776;
        </template>
        <template v-else>
          &times;
        </template>
      </button>
    </template>

    <div class="sidebar-content">
      <nav class="sidenav">
        <slot></slot>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "lxSideNav",
  props: {
    expanded: {
      type: Boolean,
      default: true,
    },
    toggleButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return ({
      expandedSync: this.expanded,
    });
  },
  computed: {
    hasBrandSlot() {
      return !!this.$slots.brand
    }
  },
  methods: {
    onSidebarToggleClick() {
      this.expandedSync = !this.expandedSync
      this.$emit('onToggle', this.expandedSync)
    },
    getCss() {
      const css = []
      css.push(this.expandedSync ? 'sidebar__opened' : '')
      return css.join(' ')
    },
  },
  watch: {
    expanded(newVal) {
      this.expandedSync = newVal
    }
  }
}
</script>

<style scoped>

</style>