<template>
  <div id="app">

    <nav-bar-component @onToggle="onToggleClick" :sidebar-state="sidebarState"/>
    <side-nav-component :expanded="sidebarState"/>


    <div class="main-content px-3 pt-3">
      <router-view/>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import {lxSideNav, lxSideNavItem} from "@/lib-components";
import LxSideNavMenu from "@/lib-components/lxSideNavMenu";
import LxSideNavItemDropDown from "@/lib-components/lxSideNavItemDropDown";
import LxNavbar from "@/lib-components/lxNavbar";
import LxNavbarItem from "@/lib-components/lxNavbarItem";
import LxNavbarDdItem from "@/lib-components/lxNavbarDdItem";
import SideNavComponent from "./components/SideNavComponent";
import NavBarComponent from "./components/NavBarComponent";

export default Vue.extend({
  name: 'ServeDev',
  components: {
    NavBarComponent,
    SideNavComponent,
    LxNavbarDdItem, LxNavbarItem, LxNavbar, LxSideNavItemDropDown, LxSideNavMenu, lxSideNavItem, lxSideNav
  },
  data() {
    return ({
      sidebarState: true,
    })
  },
  methods: {
    onToggleClick(e) {
      this.sidebarState = e
    },
  },
});
</script>

<style scoped lang="scss">
.main-content {
  margin-top: var(--navbar-size);
}

.sidebar {
  top: var(--navbar-size);
}

.sidebar.sidebar__opened + .main-content {
  margin-left: var(--sidenav-size);
}

</style>