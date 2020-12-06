<template>
  <li>
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
export default {
  name: "lxNavbarItem",
  props: {
    to: {type: String, default: ''},
    link: {type: String, default: '#'}
  }
}
</script>

<style scoped lang="scss">
//@import "./common.scss";
</style>