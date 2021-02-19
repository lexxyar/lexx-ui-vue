<template>
  <div class="sidebar light" :class="getCss()">
    <!--    <template v-if="hasBrandSlot">-->
    <!--      <div class="brand">-->
    <!--        <slot name="brand"/>-->
    <!--      </div>-->
    <!--    </template>-->
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

    <nav class="sidenav">
      <!--      <ul>-->
      <slot></slot>
      <!--      </ul>-->
    </nav>
  </div>
  <!--  <div>-->
  <!--    <div class="sidenav" :class="active?'expanded':''">-->
  <!--      <ul>-->
  <!--        <slot></slot>-->
  <!--      </ul>-->
  <!--      <div class="toggle" :class="active?'expanded':''" @click="toggleMenu">-->

  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: "lxSideNav",
  props: {
    // brand: {
    //   type: String,
    //   // default: '',
    // }
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
      expandedSync: this.expandedSync ? this.expandedSync : true,
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
      // console.log(this.expandedSync, css)
      return css.join(' ')
    },
  },
  watch: {
    expanded(oldVal, newVal) {
      this.expandedSync = newVal
    }
  }
}
</script>

<style scoped>

</style>