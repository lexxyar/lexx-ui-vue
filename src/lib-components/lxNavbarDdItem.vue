<template>
  <li v-click-outside="hideMenu" class="dropdown-item" @click="expanded = !expanded" :class="expanded?'expanded':''">
    <div class="item-title">
      <div>
        {{ title }}
      </div>
      <template v-if="!expanded">
        &blacktriangledown;
      </template>
      <template v-else>
        &blacktriangle;
      </template>
    </div>
    <ul class="dropdown-menu">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: "lxNavbarDdItem",
  props: {
    title: {type: String},
  },
  data() {
    return ({
      expanded: false,
    })
  },
  methods: {
    hideMenu() {
      this.expanded = false
    }
  },
  // do not forget this section
  directives: {
    ClickOutside
  }
}
</script>

<style scoped>

</style>