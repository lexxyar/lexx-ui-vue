<template>
  <div class="input-group" :class="readonly?'readonly':''">
    <template v-if="emptyLabel || label">
      <label :for="uid" :class="labelClass">{{ label }}</label>
    </template>
    <div class="input-container">
      <div class="input-extention prepend" v-if="hasPrepend">
        <slot name="prepend"></slot>
      </div>
      <input :type="type" :value="value" :id="uid" :class="hasAppend?'appended':''"
             @input="$emit('input', $event.target.value)"
             :readonly="readonly"
             :placeholder="placeholder"
      />
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
    label: {type: String, default: ''},
    emptyLabel: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    placeholder: {type: String, default: ''},
    labelSize: {
      type: String,
      validator: function (value) {
        return ['', 'sm', 'lg', 'xl'].indexOf(value) !== -1
      },
      default: ''
    },
  },
  data() {
    return ({
      uid: uuid.v4()
    })
  },
  computed: {
    hasAppend() {
      return this.$slots['append']
    },
    hasPrepend() {
      return this.$slots['prepend']
    },
    labelClass() {
      let val = [];
      val.push(this.labelSize)

      if (this.label) {
        val.push('has-text')
      }
      return val.join(' ')
    }
  }
}
</script>

<style scoped lang="scss">

</style>