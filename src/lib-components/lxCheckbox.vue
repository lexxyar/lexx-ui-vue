<template>
  <div class="checkbox" :class="readonly?'readonly':''">
    <input type="checkbox"
           v-model="model"
           :value="val"
           :id="uuid"
           :disabled="readonly"
    />
    <label :for="uuid">
      {{ label }}
    </label>
  </div>
</template>

<script>
import {uuid} from 'vue-uuid'

export default {
  name: "lxCheckbox",
  props: {
    value: {},
    val: {},
    label: {type: String},
    readonly: {type: Boolean, default: false},
  },
  data() {
    return ({
      uuid: uuid.v4(),
    })
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
  methods: {}
}
</script>

<style scoped lang="scss">
//@import "./common.scss";
</style>