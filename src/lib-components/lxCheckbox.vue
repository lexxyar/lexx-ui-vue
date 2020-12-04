<template>
  <div class="checkbox">
    <input type="checkbox"
           v-model="model"
           :value="val"
           :id="uuid"
    />
    <label :for="uuid">
      {{label}}
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
    label:{type:String}
  },
  data() {
    return ({
      uuid: uuid.v1(),
    })
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "./common.scss";
</style>