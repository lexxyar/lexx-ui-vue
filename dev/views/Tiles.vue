<template>
  <div>
    <title-component>Tiles</title-component>
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

    <pre class="my-5">
<code>&lt;template&gt;</code>
<code>  &lt;div&gt;</code>
<code>    &lt;title-component&gt;Tiles&lt;/title-component&gt;</code>
<code>    &lt;lx-tile-group title=&quot;Guns&quot;&gt;</code>
<code>      &lt;template v-for=&quot;tile in tiles&quot;&gt;</code>
<code>        &lt;lxTile v-bind=&quot;tile&quot; @click=&quot;onClick&quot;&gt;&lt;/lxTile&gt;</code>
<code>      &lt;/template&gt;</code>
<code>    &lt;/lx-tile-group&gt;</code>
<code>    &lt;lx-tile-group title=&quot;Empty tile group&quot;&gt;</code>
<code>      &lt;lx-tile title=&quot;Action tile&quot; mode=&quot;editable&quot; @edit=&quot;onEditClick&quot; @delete=&quot;onDeleteClick&quot; @click=&quot;onClick&quot;</code>
<code>               subtitle=&quot;editable&quot;/&gt;</code>
<code>      &lt;lx-tile title=&quot;Action tile&quot; mode=&quot;deletable&quot; @edit=&quot;onEditClick&quot; @delete=&quot;onDeleteClick&quot; @click=&quot;onClick&quot;</code>
<code>               subtitle=&quot;deletable&quot;/&gt;</code>
<code>      &lt;lx-tile title=&quot;Action tile&quot; mode=&quot;both&quot; @edit=&quot;onEditClick&quot; @delete=&quot;onDeleteClick&quot; @click=&quot;onClick&quot;</code>
<code>               subtitle=&quot;both&quot;/&gt;</code>
<code>      &lt;lx-tile title=&quot;bottomText tile&quot; @click=&quot;onClick&quot;</code>
<code>               bottomText=&quot;Footer text&quot;/&gt;</code>
<code>      &lt;lxTile type=&quot;create&quot; title=&quot;Create tile&quot;&gt;&lt;/lxTile&gt;</code>
<code>    &lt;/lx-tile-group&gt;</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code></code>
<code>import {lxTile} from '@/entry'</code>
<code>import LxTileGroup from &quot;@/lib-components/lxTileGroup&quot;;</code>
<code>import TitleComponent from &quot;../components/TitleComponent&quot;;</code>
<code></code>
<code>export default {</code>
<code>  name: &quot;Tiles&quot;,</code>
<code>  components: {TitleComponent, LxTileGroup, lxTile},</code>
<code>  data() {</code>
<code>    return ({</code>
<code>      tiles: [</code>
<code>        {scale: &quot;9&quot;, quantity: 'mm', title: 'Handgun', subtitle: 'NATO', progress: -1, qStyle: 'danger'},</code>
<code>        {scale: &quot;7.62&quot;, quantity: 'mm', title: 'AK-47', subtitle: 'x 39mm', bottomText: 'Assault rifles'},</code>
<code>        {scale: &quot;7.62&quot;, quantity: 'mm', title: 'Rifle', subtitle: 'x 54R', bottomText: 'Typical rifles'},</code>
<code>        {</code>
<code>          scale: &quot;20&quot;,</code>
<code>          quantity: 'mm',</code>
<code>          title: 'Military',</code>
<code>          subtitle: 'x 102mm',</code>
<code>          bottomText: 'Vehicle mounted',</code>
<code>          progress: 1,</code>
<code>          qStyle: 'warning'</code>
<code>        },</code>
<code>        {scale: &quot;12&quot;, quantity: 'mm', title: 'Shotgun'},</code>
<code>        {type: 'create', title: 'Create gun'},</code>
<code>      ],</code>
<code>    })</code>
<code>  },</code>
<code>  methods: {</code>
<code>    onEditClick() {</code>
<code>      console.log('edit')</code>
<code>    },</code>
<code>    onDeleteClick() {</code>
<code>      console.log('delete')</code>
<code>    },</code>
<code>    onClick() {</code>
<code>      console.log('click')</code>
<code>    }</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code>
    </pre>
  </div>
</template>

<script>

import {lxTile} from '@/entry'
import LxTileGroup from "@/lib-components/lxTileGroup";
import TitleComponent from "../components/TitleComponent";

export default {
  name: "Tiles",
  components: {TitleComponent, LxTileGroup, lxTile},
  data() {
    return ({
      tiles: [
        {scale: "9", quantity: 'mm', title: 'Handgun', subtitle: 'NATO', progress: -1, qStyle: 'danger'},
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