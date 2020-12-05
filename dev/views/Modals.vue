<template>
  <div>
    <lx-modal :show="show" @onClose="show = false">
      This is modal content
    </lx-modal>
    <button class="btn info" @click="show = !show">
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

</style>