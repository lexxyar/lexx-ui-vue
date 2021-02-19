<template>
  <div>
    <h1>Tiles</h1>
    <lx-tile-group title="Guns">
      <template v-for="tile in tiles">
        <lxTile v-bind="tile" @click="onClick"></lxTile>
      </template>
    </lx-tile-group>
    <lx-tile-group title="Empty tile group">
      <lx-tile title="Action tile" mode="editable" @edit="onEditClick" @delete="onDeleteClick" @click="onClick"
               subtitle="editable"/>
      <lx-tile title="Action tile" mode="deletable" @edit="onEditClick" @delete="onDeleteClick" @click="onClick"
               subtitle="deletable"/>
      <lx-tile title="Action tile" mode="both" @edit="onEditClick" @delete="onDeleteClick" @click="onClick"
               subtitle="both"/>
      <lx-tile title="bottomText tile" @click="onClick"
               bottomText="Footer text"/>
      <lxTile type="create" title="Create tile"></lxTile>
    </lx-tile-group>

    <code>
      <pre>
&lt;lx-tile-group title=&quot;Empty tile group&quot;&gt;
      &lt;lx-tile title=&quot;Action tile&quot; mode=&quot;editable&quot; @edit=&quot;onEditClick&quot; @delete=&quot;onDeleteClick&quot; @click=&quot;onClick&quot;
               subtitle=&quot;editable&quot;/&gt;
      &lt;lx-tile title=&quot;Action tile&quot; mode=&quot;deletable&quot; @edit=&quot;onEditClick&quot; @delete=&quot;onDeleteClick&quot; @click=&quot;onClick&quot;
               subtitle=&quot;deletable&quot;/&gt;
      &lt;lx-tile title=&quot;Action tile&quot; mode=&quot;both&quot; @edit=&quot;onEditClick&quot; @delete=&quot;onDeleteClick&quot; @click=&quot;onClick&quot;
               subtitle=&quot;both&quot;/&gt;
      &lt;lx-tile title=&quot;bottomText tile&quot; @click=&quot;onClick&quot;
               bottomText=&quot;Footer text&quot;/&gt;
      &lt;lxTile type=&quot;create&quot; title=&quot;Create tile&quot;&gt;&lt;/lxTile&gt;
&lt;/lx-tile-group&gt;
      </pre>
    </code>
  </div>
</template>

<script>

import {lxTile} from '@/entry'
import LxTileGroup from "@/lib-components/lxTileGroup";

export default {
  name: "Tiles",
  components: {LxTileGroup, lxTile},
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
  },
  methods: {
    onEditClick() {
      console.log('edit')
    },
    onDeleteClick() {
      console.log('delete')
    },
    onClick() {
      console.log('click')
    }
  }
}
</script>

<style scoped>
</style>