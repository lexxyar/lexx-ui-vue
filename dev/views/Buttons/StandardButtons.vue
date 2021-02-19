<template>
  <div>
    <h1>{{ $route.name }}</h1>

    <div class="button-group mb-1">
      <button class="btn" @click="mode = 'solid'">Solid</button>
      <button class="btn" @click="mode = 'outline'">Outline</button>
    </div>
    <buttons-layout :mode="mode" styled="standard"/>

  </div>

</template>

<script>

import ButtonsLayout from "./ButtonsLayout";

export default {
  name: "StandardButtons",
  components: {ButtonsLayout},
  data() {
    return ({
      mode: 'solid',
    })
  },
}
</script>

<style scoped>

</style>