<template>
  <div>
    <title-component>Gauges</title-component>
    <div class="flex">
      <lx-gauge v-for="gauge in aGauge" :value="gauge"></lx-gauge>
    </div>

    <pre>
<code>&lt;template&gt;</code>
<code>  &lt;div class=&quot;flex&quot;&gt;</code>
<code>    &lt;lx-gauge v-for=&quot;gauge in aGauge&quot; :value=&quot;gauge&quot;&gt;&lt;/lx-gauge&gt;</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code>export default {</code>
<code>  name: &quot;Gauges&quot;,</code>
<code>  components:{lxGauge},</code>
<code>  data() {</code>
<code>    return ({</code>
<code>      aGauge: [7, 81, 106, 136, 155]</code>
<code>    })</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code></pre>
  </div>
</template>

<script>
import {lxGauge} from '@/entry'
import TitleComponent from "../components/TitleComponent";

export default {
  name: "Gauges",
  components: {TitleComponent, lxGauge},
  data() {
    return ({
      aGauge: [7, 81, 106, 136, 155]
    })
  }
}
</script>

<style scoped>

</style>