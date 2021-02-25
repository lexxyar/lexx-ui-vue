<template>
  <div class="input-group" :class="getCss()">
    <template v-if="emptyLabel || label">
      <label :for="uid" :class="labelClass">{{ label }}</label>
    </template>
    <div class="input-container">
      <textarea class="form-control"
                @input="$emit('input', $event.target.value)"
                :readonly="readonly"
      >{{ value }}</textarea>
    </div>
  </div>
</template>

<script>
import {uuid} from "vue-uuid";
import inputMixin from "@/lib-components/mixins/inputMixin";

export default {
  name: "lxTextareaInput",
  props: {
    // value: {},
    // label: {type: String, default: ''},
    // emptyLabel: {type: Boolean, default: false},
    // readonly: {type: Boolean, default: false},
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
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>