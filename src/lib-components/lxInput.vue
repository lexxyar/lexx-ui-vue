<template>
  <div class="input-group">
    <label :for="uid" :class="label?'has-text':''">{{ label }}</label>
    <div class="input-container">
      <div class="input-extention prepend" v-if="hasPrepend">
        <slot name="prepend"></slot>
      </div>
      <input :type="type" :value="value" :id="uid" :class="hasAppend?'appended':''"
             @input="$emit('input', $event.target.value)">
      <div class="input-extention append" v-if="hasAppend">
        <slot name="append"></slot>
      </div>
    </div>

  </div>
</template>

<script>
import {uuid} from 'vue-uuid'

export default {
  name: "lxInput",
  props: {
    value: {},
    type: {type: String, default: 'text'},
    label: {type: String, default: ''}
  },
  data() {
    return ({
      uid: uuid.v1()
    })
  },
  computed: {
    hasAppend() {
      return this.$slots['append']
    },
    hasPrepend() {
      return this.$slots['prepend']
    }
  }
}
</script>

<style scoped lang="scss">
@import "./common.scss";
</style>