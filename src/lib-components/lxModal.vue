<template>
  <div class="modal-container" v-show="useShow">
    <div class="modal" @click="changeShow">

    </div>
    <div class="modal-window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "lxModal",
  props: {
    show: {type: Boolean, default: false}
  },
  computed: {
    useShow: {
      get() {
        return this.show
      },
      // set(val) {
      //   this.$emit('show', val)
      // }
    }
  },
  methods: {
    changeShow(e) {
      e.stopPropagation()
      e.preventDefault()
      console.log('changeShow')
      this.$emit('onClose')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./common.scss";
</style>