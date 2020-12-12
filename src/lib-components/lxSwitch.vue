<template>
  <label class="switch" :class="readonly?'readonly':''">
    <input type="checkbox" :disabled="readonly"
           v-model="model"
           :value="val"
    />
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: "lxSwitch",
  props: {
    readonly: {type: Boolean, default: false},
    value: {},
    val: {},
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        if (!this.readonly) {
          this.$emit('input', val)
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">

</style>