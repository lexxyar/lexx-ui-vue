<template>
  <lx-side-nav :expanded="expanded">
    <!--    <template #brand>Brand</template>-->
    <lx-side-nav-menu title="Router">
      <template v-for="route in $router.options.routes">
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
  }
}
</script>

<style scoped>

</style>