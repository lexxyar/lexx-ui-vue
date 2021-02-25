<template>
  <div class="input-group" :class="getCss()">
    <template v-if="emptyLabel || label">
      <label :for="uid" :class="labelClass">{{ label }}</label>
    </template>
    <div class="input-container">
      <div class="input-extention prepend" v-if="hasPrepend">
        <slot name="prepend"></slot>
      </div>
      <select :id="uid" :class="hasAppend?'appended':''"
              class="form-control"
              :multiple="multiple"
              :disabled="readonly"
              :placeholder="placeholder"

      >
<!--        v-model="value"-->
        <template v-for="opt in options">
          <option value="opt.value">{{ opt.title }}</option>
        </template>
      </select>
      <div class="input-extention append" v-if="hasAppend">
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {uuid} from "vue-uuid";
import inputMixin from "@/lib-components/mixins/inputMixin";

export default {
  name: "lxSelectInput",
  props: {
    options: {type: Array, default: []},
    // value: {},
    // label: {type: String, default: ''},
    // emptyLabel: {type: Boolean, default: false},
    // readonly: {type: Boolean, default: false},
    multiple: {type: Boolean, default: false},
    // placeholder: {type: String, default: ''},
    // labelSize: {
    //   type: String,
    //   validator: function (value) {
    //     return ['', 'sm', 'lg', 'xl'].indexOf(value) !== -1
    //   },
    //   default: ''
    // },
  },
  data() {
    return ({
      uid: uuid.v4()
    })
  },
  computed: {
    // hasAppend() {
    //   return this.$slots['append']
    // },
    // hasPrepend() {
    //   return this.$slots['prepend']
    // },
    // labelClass() {
    //   let val = [];
    //   val.push(this.labelSize)
    //
    //   if (this.label) {
    //     val.push('has-text')
    //   }
    //   return val.join(' ')
    // }
  },
  mixins:[inputMixin]
}
</script>

<style scoped>

</style>