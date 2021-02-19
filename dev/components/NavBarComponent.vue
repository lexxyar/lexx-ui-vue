<template>
  <lx-navbar @onToggle="onToggle" :toggle-sidebar-button="true" :sidebar-expanded="sidebarState">
    <template #brand>Yore Logo</template>
    <lx-navbar-item>Link 1</lx-navbar-item>
    <lx-navbar-item>Link 2</lx-navbar-item>
    <lx-navbar-item>Link 3</lx-navbar-item>
    <template #right>
      <lx-navbar-item>
        <button class="btn iconed">
          <svg focusable="false" data-prefix="far" data-icon="bell"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-bell fa-w-14 fa-3x">
            <path fill="currentColor"
                  d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7
        -54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84
        C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16
        -8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27
        -8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58
        0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46
        44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64
        63.97 64z"
                  class=""></path>
          </svg>
        </button>
      </lx-navbar-item>
      <lx-navbar-dd-item title="User">
        <lx-navbar-item>Profile</lx-navbar-item>
        <lx-navbar-item>Messages</lx-navbar-item>
        <lx-navbar-item>Config</lx-navbar-item>
        <lx-navbar-item>Sign Out</lx-navbar-item>
      </lx-navbar-dd-item>
      <lx-navbar-item>Last</lx-navbar-item>
    </template>
  </lx-navbar>
</template>

<script>
import LxNavbar from "@/lib-components/lxNavbar";
import LxNavbarItem from "@/lib-components/lxNavbarItem";
import LxNavbarDdItem from "@/lib-components/lxNavbarDdItem";
export default {
  name: "NavBarComponent",
  components: {LxNavbarDdItem, LxNavbarItem, LxNavbar},
  props:{
    sidebarState:{
      type:Boolean
    }
  },
  methods:{
    onToggle(e){
      this.$emit('onToggle', e)
    }
  }
}
</script>

<style scoped>

</style>