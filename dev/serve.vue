<template>
  <div id="app">
    <div class="row">
      <div class="col-4">
        <!--        <lx-side-nav v-model="active">-->
        <lx-side-nav :value="true">
          <template v-for="route in $router.options.routes">
            <lx-side-nav-item :to="route.path">
              <template #icon>{{ route.name.substr(0, 1) }}</template>
              {{ route.name }}
            </lx-side-nav-item>
          </template>
        </lx-side-nav>
      </div>
      <div class="col-8">
<!--        <div class="container">-->
          <router-view/>
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {lxSideNav, lxSideNavItem} from "@/lib-components";

export default Vue.extend({
  name: 'ServeDev',
  components: {lxSideNavItem, lxSideNav},
  data() {
    return ({
      // active: false,
    })
  },
  methods: {},
});
</script>

