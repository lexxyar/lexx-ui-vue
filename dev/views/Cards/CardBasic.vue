<template>
  <div>
    <title-component>Advanced cards</title-component>

    <div class="row">
      <div class="col-6">
        <card-layout title="Card header"/>
      </div>
      <div class="col-6">
        <card-layout title="Card bg-dark" class="bg-dark" :footer-show-buttons="false"/>
      </div>
    </div>

    <pre class="mt-5">
<code>&lt;lx-card style=&quot;width: 300px;&quot;&gt;</code>
<code>  &lt;template #header&gt;</code>
<code>    &lt;h3&gt;Card header&lt;/h3&gt;</code>
<code>  &lt;/template&gt;</code>
<code>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quisquam.</code>
<code>  &lt;template #footer&gt;</code>
<code>    &lt;small&gt;</code>
<code>      Card footer</code>
<code>    &lt;/small&gt;</code>
<code>  &lt;/template&gt;</code>
<code>&lt;/lx-card&gt;</code>
</pre>

  </div>
</template>

<script>
import {lxCard} from "@/entry";
import CardLayout from "./CardLayout";
import TitleComponent from "../../components/TitleComponent";

export default {
  name: "Cards",
  components: {TitleComponent, CardLayout, lxCard},
}
</script>

<style scoped>

</style>