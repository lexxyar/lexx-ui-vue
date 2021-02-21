<template>
  <div>
    <h1>{{ $route.name }}</h1>

    <div class="button-group mb-1">
      <button class="btn" @click="mode = 'solid'">Solid</button>
      <button class="btn" @click="mode = 'outline'">Outline</button>
    </div>
    <buttons-layout :mode="mode" styled="pill"/>

    <pre class="my-5">
<code>&lt;template&gt;</code>
<code>  &lt;div&gt;</code>
<code>    &lt;div class=&quot;row&quot;&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;</code>
<code>            &lt;h3&gt;Solid&lt;/h3&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>          &lt;template v-for=&quot;type in types&quot;&gt;</code>
<code>            &lt;button class=&quot;btn mb-1 mr-1&quot; :class=&quot;getTypeClass(type)&quot;&gt;</code>
<code>              { { type }}</code>
<code>            &lt;/button&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;</code>
<code>            &lt;h3&gt;Active state&lt;/h3&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>          &lt;template v-for=&quot;type in types&quot;&gt;</code>
<code>            &lt;button class=&quot;btn mb-1 mr-1 active&quot; :class=&quot;getTypeClass(type)&quot;&gt;</code>
<code>              { { type }}</code>
<code>            &lt;/button&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>    &lt;/div&gt;</code>
<code>    &lt;div class=&quot;row&quot;&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;</code>
<code>            &lt;h3&gt;Disabled state&lt;/h3&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>          &lt;template v-for=&quot;type in types&quot;&gt;</code>
<code>            &lt;button class=&quot;btn mb-1 mr-1 disabled&quot; :class=&quot;getTypeClass(type)&quot;&gt;</code>
<code>              { { type }}</code>
<code>            &lt;/button&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code></code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;</code>
<code>            &lt;h3&gt;Block level&lt;/h3&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-lg btn-block&quot; :class=&quot;getTypeClass('primary')&quot;&gt;</code>
<code>            Block Large</code>
<code>          &lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-block&quot; :class=&quot;getTypeClass('primary')&quot;&gt;</code>
<code>            Block Normal</code>
<code>          &lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-sm btn-block&quot; :class=&quot;getTypeClass('primary')&quot;&gt;</code>
<code>            Block Small</code>
<code>          &lt;/button&gt;</code>
<code></code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>    &lt;/div&gt;</code>
<code>    &lt;div class=&quot;row&quot;&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;</code>
<code>            &lt;h3&gt;Sizing&lt;/h3&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-lg&quot; :class=&quot;getTypeClass('primary')&quot;&gt;</code>
<code>            Large</code>
<code>          &lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn mb-1 mr-1&quot; :class=&quot;getTypeClass('primary')&quot;&gt;</code>
<code>            Normal</code>
<code>          &lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-sm&quot; :class=&quot;getTypeClass('primary')&quot;&gt;</code>
<code>            Small</code>
<code>          &lt;/button&gt;</code>
<code></code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;</code>
<code>            &lt;h3&gt;Button group&lt;/h3&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>          &lt;template v-for=&quot;grp in btnGroups&quot;&gt;</code>
<code>            &lt;div class=&quot;button-group mb-1&quot;&gt;</code>
<code>              &lt;button class=&quot;btn&quot; :class=&quot;getGrpClass(grp)&quot;&gt;One&lt;/button&gt;</code>
<code>              &lt;button class=&quot;btn&quot; :class=&quot;getGrpClass(grp)&quot;&gt;Two&lt;/button&gt;</code>
<code>              &lt;button class=&quot;btn&quot; :class=&quot;getGrpClass(grp)&quot;&gt;Three&lt;/button&gt;</code>
<code>            &lt;/div&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>    &lt;/div&gt;</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code>import LxCard from &quot;@/lib-components/lxCard&quot;;</code>
<code></code>
<code>export default {</code>
<code>  name: &quot;ButtonsLayout&quot;,</code>
<code>  components: {LxCard},</code>
<code>  props: {</code>
<code>    mode: {</code>
<code>      type: String,</code>
<code>      validator: function (value) {</code>
<code>        return ['solid', 'outline'].indexOf(value) !== -1</code>
<code>      },</code>
<code>      default: 'solid'</code>
<code>    },</code>
<code>    styled: {</code>
<code>      type: String,</code>
<code>      validator: function (value) {</code>
<code>        return ['standard', 'pill'].indexOf(value) !== -1</code>
<code>      },</code>
<code>      default: 'standard'</code>
<code>    }</code>
<code>  },</code>
<code>  data() {</code>
<code>    return ({</code>
<code>      types: [</code>
<code>        &quot;primary&quot;,</code>
<code>        &quot;secondary&quot;,</code>
<code>        &quot;success&quot;,</code>
<code>        &quot;info&quot;,</code>
<code>        &quot;warning&quot;,</code>
<code>        &quot;danger&quot;,</code>
<code>        &quot;alt&quot;,</code>
<code>        'light',</code>
<code>        &quot;dark&quot;,</code>
<code>        'link',</code>
<code>      ],</code>
<code>      btnGroups: [</code>
<code>        {</code>
<code>          type: &quot;primary&quot;,</code>
<code>          size: &quot;sm&quot;,</code>
<code>        },</code>
<code>        {</code>
<code>          type: &quot;danger&quot;,</code>
<code>        },</code>
<code>        {</code>
<code>          type: &quot;alt&quot;,</code>
<code>          size: &quot;lg&quot;,</code>
<code>        },</code>
<code>      ]</code>
<code>    })</code>
<code>  },</code>
<code>  methods: {</code>
<code>    getTypeClass(type) {</code>
<code>      return `btn-${type} ${this.getModeClass()} ${this.getStyleClass()}`</code>
<code>    },</code>
<code>    getGrpClass(type) {</code>
<code>      return `btn-${type.type} btn-${type.size} ${this.getModeClass()} ${this.getStyleClass()}`</code>
<code>    },</code>
<code>    getModeClass() {</code>
<code>      return this.mode === 'solid' ? '' : `btn-${this.mode}`</code>
<code>    },</code>
<code>    getStyleClass() {</code>
<code>      return this.styled === 'standard' ? '' : `btn-${this.styled}`</code>
<code>    },</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code>
    </pre>
  </div>
</template>

<script>
import ButtonsLayout from "./ButtonsLayout";

export default {
  name: "PillButtons",
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