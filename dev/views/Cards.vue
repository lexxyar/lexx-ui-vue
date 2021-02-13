<template>
  <div>
    <h1>Cards</h1>
    <lx-card style="width: 300px;">
      <template #header>
        <h3>Card header</h3>
      </template>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quisquam.
      <template #footer>
        <small>
          Card footer
        </small>
      </template>
    </lx-card>

    <code>
      <pre>
&lt;lx-card style=&quot;width: 300px;&quot;&gt;
  &lt;template #header&gt;
    &lt;h3&gt;Card header&lt;/h3&gt;
  &lt;/template&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quisquam.
  &lt;template #footer&gt;
    &lt;small&gt;
      Card footer
    &lt;/small&gt;
  &lt;/template&gt;
&lt;/lx-card&gt;
      </pre>
    </code>

  </div>
</template>

<script>
import {lxCard} from "@/entry";

export default {
  name: "Cards",
  components: {lxCard},
}
</script>

<style scoped>

</style>