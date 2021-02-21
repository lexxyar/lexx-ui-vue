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
<code>&lt;template&gt;</code>
<code>  &lt;lx-card&gt;</code>
<code>    &lt;template #header&gt;</code>
<code>      {{ title }}</code>
<code>    &lt;/template&gt;</code>
<code>    &lt;p&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;</code>
<code>    &lt;br/&gt;</code>
<code>    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum deserunt dolore eius ipsam</code>
<code>      necessitatibus rem repellendus voluptas. Adipisci, temporibus.&lt;/p&gt;</code>
<code>    &lt;template #footer&gt;</code>
<code>      &lt;template v-if=&quot;footerShowButtons&quot;&gt;</code>
<code>        &lt;div class=&quot;flex flex-end&quot; style=&quot;width: 100%;&quot;&gt;</code>
<code>          &lt;button class=&quot;btn btn-link mr-2&quot;&gt;Cancel&lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn btn-success&quot;&gt;Save&lt;/button&gt;</code>
<code>        &lt;/div&gt;</code>
<code>      &lt;/template&gt;</code>
<code>      &lt;template v-else&gt;</code>
<code>        &lt;div style=&quot;line-height: 2rem;&quot;&gt;Footer&lt;/div&gt;</code>
<code>      &lt;/template&gt;</code>
<code>    &lt;/template&gt;</code>
<code>  &lt;/lx-card&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code>import LxCard from &quot;@/lib-components/lxCard&quot;;</code>
<code>export default {</code>
<code>  name: &quot;CardLayout&quot;,</code>
<code>  components: {LxCard},</code>
<code>  props: {</code>
<code>    title: {</code>
<code>      type: String</code>
<code>    },</code>
<code>    footerShowButtons: {</code>
<code>      type: Boolean,</code>
<code>      default: true,</code>
<code>    }</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code>
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