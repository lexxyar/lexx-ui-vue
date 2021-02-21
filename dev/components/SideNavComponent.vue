<template>
  <lx-side-nav :expanded="expanded">
    <lx-side-nav-menu title="Router">
      <template v-for="route in $router.options.routes">
        <template v-if="hasChildren(route)">
          <lx-side-nav-item-drop-down :title="route.name">
            <template v-for="croute in route.children">
              <lx-side-nav-item :to="croute.path">{{ croute.name }}</lx-side-nav-item>
            </template>
          </lx-side-nav-item-drop-down>
        </template>
        <template v-else>
          <lx-side-nav-item :to="route.path">{{ route.name }}</lx-side-nav-item>
        </template>
      </template>
    </lx-side-nav-menu>

    <lx-side-nav-menu title="Demo">
      <lx-side-nav-item to="/colors">Colors</lx-side-nav-item>
      <lx-side-nav-item to="/tiles">Tiles</lx-side-nav-item>
      <lx-side-nav-item to="/gauges">Gauges</lx-side-nav-item>
      <lx-side-nav-item to="/cards">Cards</lx-side-nav-item>
      <lx-side-nav-item to="/paginations">Pagination</lx-side-nav-item>
      <lx-side-nav-item to="/calendars">Calendars</lx-side-nav-item>
      <lx-side-nav-item-drop-down title="Layout">
        <lx-side-nav-item to="/grids">Grids</lx-side-nav-item>
      </lx-side-nav-item-drop-down>
      <lx-side-nav-item-drop-down title="Tables">
        <lx-side-nav-item to="/regular-table">Regular table</lx-side-nav-item>
        <lx-side-nav-item to="/data-table">Data table</lx-side-nav-item>
      </lx-side-nav-item-drop-down>
      <lx-side-nav-item-drop-down title="Buttons">
        <lx-side-nav-item to="/standard-buttons">Standard</lx-side-nav-item>
        <lx-side-nav-item to="/pill-buttons">Pills</lx-side-nav-item>
      </lx-side-nav-item-drop-down>
      <lx-side-nav-item-drop-down title="Badges">
        <lx-side-nav-item to="/badges">Badges</lx-side-nav-item>
      </lx-side-nav-item-drop-down>
      <lx-side-nav-item-drop-down title="Navigations">
        <lx-side-nav-item to="/navbar">Nav Bar</lx-side-nav-item>
        <lx-side-nav-item to="/sidenav">Side Bar</lx-side-nav-item>
      </lx-side-nav-item-drop-down>
    </lx-side-nav-menu>
  </lx-side-nav>
</template>

<script>
import LxSideNavMenu from "@/lib-components/lxSideNavMenu";
import LxSideNavItem from "@/lib-components/lxSideNavItem";
import LxSideNavItemDropDown from "@/lib-components/lxSideNavItemDropDown";
import LxSideNav from "@/lib-components/lxSideNav";

export default {
  name: "SideNavComponent",
  components: {LxSideNav, LxSideNavItemDropDown, LxSideNavItem, LxSideNavMenu},
  props: {
    expanded: {
      type: Boolean
    }
  },
  methods: {
    hasChildren(route) {
      return route.children?.length > 0
    }
  }
}
</script>

<style scoped>

</style>