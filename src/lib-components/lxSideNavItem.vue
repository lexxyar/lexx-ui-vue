<template>
  <li>
    <template v-if="to">
      <router-link :to="to">
        <span class="icon"><slot name="icon"></slot></span>
        <slot></slot>
      </router-link>
    </template>
    <template v-else>
      <a :href="link" @click="$emit('click')">
        <span class="icon"><slot name="icon"></slot></span>
        <slot></slot>
      </a>
    </template>
  </li>
</template>

<script>
export default {
  name: "lxSideNavItem",
  props: {
    link: {type: String, default: '#'},
    to: {type: String, default: ''},
  },
}
</script>

<style scoped>

</style>