<template>
  <div>
  <div class="flex">
    <lx-gauge v-for="gauge in aGauge" :value="gauge"></lx-gauge>
  </div>

  <code>
    <pre>
&lt;template&gt;
  &lt;div class=&quot;flex&quot;&gt;
    &lt;lx-gauge v-for=&quot;gauge in aGauge&quot; :value=&quot;gauge&quot;&gt;&lt;/lx-gauge&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &quot;Gauges&quot;,
  components:{lxGauge},
  data() {
    return ({
      aGauge: [7, 81, 106, 136, 155]
    })
  }
}
&lt;/script&gt;
    </pre>
  </code>
  </div>
</template>

<script>
import {lxGauge} from '@/entry'
export default {
  name: "Gauges",
  components:{lxGauge},
  data() {
    return ({
      aGauge: [7, 81, 106, 136, 155]
    })
  }
}
</script>

<style scoped>

</style>