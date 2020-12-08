<template>
  <div>
    <lx-side-nav v-model="active">
      <template v-for="route in $router.options.routes">
        <lx-side-nav-item :to="route.path">
          <template #icon>{{ route.name.substr(0, 1) }}</template>
          {{ route.name }}
        </lx-side-nav-item>
      </template>
    </lx-side-nav>

    <button class="btn bordered rounded error toggle-btn" @click="toggleMenu">Toggle</button>
  </div>
</template>

<script>
import {lxSideNav, lxSideNavItem} from "@/entry";

export default {
  name: "SideNav",
  components: {lxSideNavItem, lxSideNav},
  data() {
    return ({
      active: false
    });
  },
  methods: {
    toggleMenu: function () {
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">
.toggle-btn{
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>