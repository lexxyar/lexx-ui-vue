<template>
  <li v-click-outside="hideMenu" class="dropdown-item" @click="expanded = !expanded" :class="expanded?'expanded':''">
    <div class="item-title">
      <div>
        {{ title }}
      </div>
      <template v-if="!expanded">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
             class="svg-inline--fa fa-caret-down fa-w-10 fa-3x">
          <path fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                class=""></path>
        </svg>
      </template>
      <template v-else>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-caret-up fa-w-10 fa-3x">
          <path fill="currentColor"
                d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                class=""></path>
        </svg>
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