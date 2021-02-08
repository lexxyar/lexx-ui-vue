<template>
  <div class="sidebar light" :class="sidebasClass">
    <button class="sidebar-toggle"
            @click="onSidebarToggleClick">
      <template v-if="!sidebar">
        &#9776;
      </template>
      <template v-else>
        &times;
      </template>
    </button>
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
  data() {
    return ({
      sidebar: true,
    });
  },
  computed: {
    sidebasClass() {
      const css = []
      css.push(this.sidebar ? 'sidebar__opened' : '')
      return css.join(' ')
    }
  },
  methods: {
    onSidebarToggleClick() {
      this.sidebar = !this.sidebar
    },
  },

}
</script>

<style scoped>

</style>