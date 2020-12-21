<template>
  <div>
    <lx-modal :show="show" @onClose="show = false">
      This is modal content
    </lx-modal>
    <button class="btn info mt-5 m-auto" @click="show = !show">
      Show modal
    </button>
  </div>
</template>

<script>
import {lxModal} from '@/entry'

export default {
  name: "Modals",
  components: {lxModal},
  data() {
    return ({
      show: false,
    })
  }
}
</script>

<style scoped>
.m-auto{
  margin-left: auto;
  margin-right: auto;
}
</style>