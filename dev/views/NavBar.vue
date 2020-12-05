<template>
  <div>
    <lx-navbar>
      <template #title>Yore Logo</template>
      <template v-for="route in $router.options.routes">
        <lx-navbar-item :to="route.path">{{ route.name }}</lx-navbar-item>
      </template>
      <template #right>
        <lx-navbar-item>Call</lx-navbar-item>
        <lx-navbar-item>User name</lx-navbar-item>
      </template>
    </lx-navbar>
  </div>
</template>

<script>

import {lxNavbar, lxNavbarItem} from '@/entry'

export default {
  name: "NavBar",
  components: {lxNavbarItem, lxNavbar},
  data() {
    return ({

    })
  }
}
</script>

<style scoped lang="scss">

</style>