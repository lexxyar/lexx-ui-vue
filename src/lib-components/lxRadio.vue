<template>
  <div class="radio" :class="readonly?'readonly':''">
    <input type="radio"
           :id="uuid"
           :disabled="readonly"
           :name="group"
           v-model="model"
           :value="val"
    />
    <label :for="uuid">
      {{ label }}
    </label>
  </div>
</template>

<script>
import {uuid} from 'vue-uuid'

export default {
  name: "lxRadio",
  props: {
    group:{},
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
          console.log('input')
          this.$emit('input', val)
        }
      }
    },
  },
  methods: {},
}
</script>

<style scoped>

</style>