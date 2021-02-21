<template>
  <div>
    <title-component>Regular table</title-component>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Simple table</template>
          <regular-table-layout></regular-table-layout>
        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>Bordered table</template>
          <regular-table-layout mode="bordered"></regular-table-layout>
        </lx-card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Table without borders</template>
          <regular-table-layout mode="borderless"></regular-table-layout>
        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>Table with hover</template>
          <regular-table-layout mode="hover"></regular-table-layout>
        </lx-card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Table size</template>
          <regular-table-layout mode="sm"></regular-table-layout>
        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>Striped table</template>
          <regular-table-layout mode="striped"></regular-table-layout>
        </lx-card>
      </div>
    </div>

    <pre class="my-5">
<code>&lt;template&gt;</code>
<code>  &lt;div&gt;</code>
<code>    &lt;lx-table :fields=&quot;fields&quot; :items=&quot;items&quot; :class=&quot;getModeCss()&quot;&gt;</code>
<code>    &lt;/lx-table&gt;</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code>import LxTable from &quot;@/lib-components/lxTable&quot;;</code>
<code></code>
<code>export default {</code>
<code>  name: &quot;RegularTableLayout&quot;,</code>
<code>  components: {LxTable},</code>
<code>  props: {</code>
<code>    mode: {</code>
<code>      type: String</code>
<code>    }</code>
<code>  },</code>
<code>  data() {</code>
<code>    return ({</code>
<code>      fields: [</code>
<code>        {key: 'id', label: '#',},</code>
<code>        {key: 'name1', label: 'First name',},</code>
<code>        {key: 'name2', label: 'Last name',},</code>
<code>        {key: 'login', label: 'Username',},</code>
<code>      ],</code>
<code>      items: [</code>
<code>        {id: 1, name1: 'Mark', name2: 'Otto', login: '@mdo'},</code>
<code>        {id: 2, name1: 'Jacob', name2: 'Thornton', login: '@fat'},</code>
<code>        {id: 3, name1: 'Larry', name2: 'the Bird', login: '@twitter'},</code>
<code>      ]</code>
<code>    })</code>
<code>  },</code>
<code>  methods: {</code>
<code>    getModeCss() {</code>
<code>      return this.mode ? `table-${this.mode}` : ''</code>
<code>    }</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code>
    </pre>

  </div>
</template>

<script>
import TitleComponent from "../../components/TitleComponent";
import RegularTableLayout from "./RegularTableLayout";
import LxCard from "@/lib-components/lxCard";

export default {
  name: "RegularTable",
  components: {LxCard, RegularTableLayout, TitleComponent},

}
</script>

<style scoped>

</style>