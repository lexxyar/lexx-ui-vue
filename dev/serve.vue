<template>
  <div id="app">
    <lx-side-nav>
      <lx-side-nav-menu title="Router">
        <template v-for="(route, index) in $router.options.routes">
          <lx-side-nav-item :to="route.path">{{ route.name }}</lx-side-nav-item>
        </template>
      </lx-side-nav-menu>

      <lx-side-nav-menu title="Demo">
        <lx-side-nav-item>Link 01</lx-side-nav-item>
        <lx-side-nav-item-drop-down title="Drop Down Link">
          <lx-side-nav-item>Link 001</lx-side-nav-item>
          <lx-side-nav-item>Link 002</lx-side-nav-item>
          <lx-side-nav-item>Link 003</lx-side-nav-item>
        </lx-side-nav-item-drop-down>
        <lx-side-nav-item>Link 03</lx-side-nav-item>
      </lx-side-nav-menu>
    </lx-side-nav>

    <div class="main-content">
        <router-view/>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import {lxSideNav, lxSideNavItem} from "@/lib-components";
import LxSideNavMenu from "@/lib-components/lxSideNavMenu";
import LxSideNavItemDropDown from "@/lib-components/lxSideNavItemDropDown";

export default Vue.extend({
  name: 'ServeDev',
  components: {LxSideNavItemDropDown, LxSideNavMenu, lxSideNavItem, lxSideNav},
  data() {
    return ({
      sidebar: true,
    })
  },
  methods: {
    onSidebarToggleClick() {
      this.sidebar = !this.sidebar
    },
  },
  computed: {
    sidebasClass() {
      const css = []
      css.push(this.sidebar ? 'sidebar__opened' : '')
      return css.join(' ')
    }
  }
});
</script>

<style scoped lang="scss">
.main-content {
  margin-left: 0;
  transition: all linear 0.4s;
  padding: 0 2rem;
}

.sidebar.sidebar__opened + .main-content {
  margin-left: 25%;
}

</style>