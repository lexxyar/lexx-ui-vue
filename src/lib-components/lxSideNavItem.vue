<template>

  <li class="item" :class="`item-${uid}`">
    <template v-if="to">
      <router-link :to="to">
        <slot></slot>
      </router-link>
    </template>
    <template v-else>
      <a :href="link" @click="$emit('click')">
        <slot></slot>
      </a>
    </template>
  </li>
</template>

<script>
import {uuid} from "vue-uuid";

export default {
  name: "lxSideNavItem",
  props: {
    link: {type: String, default: '#'},
    to: {type: String, default: ''},
  },
  data(){
    return({
      uid: uuid.v4()
    })
  }
}
</script>

<style scoped>

</style>