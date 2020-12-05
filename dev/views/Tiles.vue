<template>
  <div>
    <div class="tile-container">
      <template v-for="tile in tiles">
        <lxTile v-bind="tile"></lxTile>
      </template>
    </div>
  </div>
</template>

<script>

import {lxTile} from '@/entry'

export default {
  name: "Tiles",
  components: {lxTile},
  data() {
    return ({
      tiles: [
        {scale: "9", quantity: 'mm', title: 'Handgun', subtitle: 'NATO', progress: -1, qStyle: 'error'},
        {scale: "7.62", quantity: 'mm', title: 'AK-47', subtitle: 'x 39mm', bottomText: 'Assault rifles'},
        {scale: "7.62", quantity: 'mm', title: 'Rifle', subtitle: 'x 54R', bottomText: 'Typical rifles'},
        {
          scale: "20",
          quantity: 'mm',
          title: 'Military',
          subtitle: 'x 102mm',
          bottomText: 'Vehicle mounted',
          progress: 1,
          qStyle: 'warning'
        },
        {scale: "12", quantity: 'mm', title: 'Shotgun'},
        {type: 'create', title: 'Create gun'},
      ],
    })
  }
}
</script>

<style scoped>
.tile-container {
  display: flex;
  flex-wrap: wrap;
}
</style>