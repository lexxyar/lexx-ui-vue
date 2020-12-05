<template>
  <div class="flex">
    <lx-gauge v-for="gauge in aGauge" :value="gauge"></lx-gauge>
  </div>
</template>

<script>
import {lxGauge} from '@/entry'
export default {
  name: "Gauges",
  components:{lxGauge},
  data() {
    return ({
      // aGauge: [80, 100, 120, 150]
      aGauge: [7, 81, 106, 136, 155]
      // aGauge: [136]
    })
  }
}
</script>

<style scoped>

</style>