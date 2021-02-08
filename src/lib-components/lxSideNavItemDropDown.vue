<template>

  <li class="item item-dropdown" :class="getCss()"
      @click="onExpandToggleClick"><span>{{ title }}</span>

    <ul class="submenu">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import {uuid} from "vue-uuid";

export default {
  name: "lxSideNavItemDropDown",
  props: {
    // expanded: {
    //   type: Boolean,
    //   default: false,
    // },
    title: {
      type: String
    }
  },
  data() {
    return ({
      uid: uuid.v4(),
      expanded: false,
    })
  },
  methods: {
    getCss() {
      const css = [];
      css.push(`item-${this.uid}`)
      css.push(this.expanded ? 'expanded' : '')
      return css.join(' ')
    },
    onExpandToggleClick() {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style scoped>

</style>