<template>
  <div>
    <title-component>Badges & Labels</title-component>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>
            With buttons
          </template>

          <template v-for="type in types">
            <button class="btn mb-1 mr-1" :class="getTypeClass(type)">
              {{ type }}
              <span class="badge">6</span>
            </button>
          </template>

          <button class="btn mb-1 mr-1 btn-link">
            Link 1
            <span class="badge bg-primary">6</span>
          </button>
          <button class="btn mb-1 mr-1 btn-link">
            Link 2
            <span class="badge bg-success">6</span>
          </button>
          <button class="btn mb-1 mr-1 btn-link">
            Link 3
            <span class="badge bg-danger">6</span>
          </button>
          <button class="btn mb-1 mr-1 btn-link">
            Link 4
            <span class="badge bg-warning">6</span>
          </button>

        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>
            Dots with buttons
          </template>

          <template v-for="type in types">
            <button class="btn mb-1 mr-1" :class="getTypeClass(type)">
              {{ type }}
              <span class="badge badge-dot" :class="`bg-${type}`"></span>
            </button>
          </template>

          <button class="btn mb-1 mr-1 btn-link">
            Link 1
            <span class="badge badge-dot bg-primary"></span>
          </button>
          <button class="btn mb-1 mr-1 btn-link">
            Link 2
            <span class="badge badge-dot bg-success"></span>
          </button>
          <button class="btn mb-1 mr-1 btn-link">
            Link 3
            <span class="badge badge-dot bg-danger"></span>
          </button>
          <button class="btn mb-1 mr-1 btn-link">
            Link 4
            <span class="badge badge-dot bg-warning"></span>
          </button>

        </lx-card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Dotted badge size & labeled</template>
          <div class="row">
            <div class="col-6">
              <button class="btn btn-link">Link 1<span class="badge badge-dot bg-primary badge-sm"></span></button>
              <button class="btn btn-link">Link 2<span class="badge badge-dot bg-danger"></span></button>
              <button class="btn btn-link">Link 3<span class="badge badge-dot bg-warning badge-lg"></span></button>
            </div>
            <div class="col-6">
              <button class="btn btn-link">Link 1<span class="badge badge-dot-labeled bg-primary">6</span></button>
              <button class="btn btn-link">Link 2<span class="badge badge-dot-labeled bg-danger">6</span></button>
              <button class="btn btn-link">Link 3<span class="badge badge-dot-labeled bg-warning">6</span></button>
            </div>
          </div>

        </lx-card>
      </div>
    </div>
    <pre class="my-5">
<code>&lt;template&gt;</code>
<code>  &lt;div&gt;</code>
<code>    &lt;title-component&gt;Badges &amp; Labels&lt;/title-component&gt;</code>
<code>    &lt;div class=&quot;row&quot;&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;</code>
<code>            With buttons</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>          &lt;template v-for=&quot;type in types&quot;&gt;</code>
<code>            &lt;button class=&quot;btn mb-1 mr-1&quot; :class=&quot;getTypeClass(type)&quot;&gt;</code>
<code>              { { type }}</code>
<code>              &lt;span class=&quot;badge&quot;&gt;6&lt;/span&gt;</code>
<code>            &lt;/button&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-link&quot;&gt;</code>
<code>            Link 1</code>
<code>            &lt;span class=&quot;badge bg-primary&quot;&gt;6&lt;/span&gt;</code>
<code>          &lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-link&quot;&gt;</code>
<code>            Link 2</code>
<code>            &lt;span class=&quot;badge bg-success&quot;&gt;6&lt;/span&gt;</code>
<code>          &lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-link&quot;&gt;</code>
<code>            Link 3</code>
<code>            &lt;span class=&quot;badge bg-danger&quot;&gt;6&lt;/span&gt;</code>
<code>          &lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-link&quot;&gt;</code>
<code>            Link 4</code>
<code>            &lt;span class=&quot;badge bg-warning&quot;&gt;6&lt;/span&gt;</code>
<code>          &lt;/button&gt;</code>
<code></code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;</code>
<code>            Dots with buttons</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>          &lt;template v-for=&quot;type in types&quot;&gt;</code>
<code>            &lt;button class=&quot;btn mb-1 mr-1&quot; :class=&quot;getTypeClass(type)&quot;&gt;</code>
<code>              { { type }}</code>
<code>              &lt;span class=&quot;badge badge-dot&quot; :class=&quot;`bg-${type}`&quot;&gt;&lt;/span&gt;</code>
<code>            &lt;/button&gt;</code>
<code>          &lt;/template&gt;</code>
<code></code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-link&quot;&gt;</code>
<code>            Link 1</code>
<code>            &lt;span class=&quot;badge badge-dot bg-primary&quot;&gt;&lt;/span&gt;</code>
<code>          &lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-link&quot;&gt;</code>
<code>            Link 2</code>
<code>            &lt;span class=&quot;badge badge-dot bg-success&quot;&gt;&lt;/span&gt;</code>
<code>          &lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-link&quot;&gt;</code>
<code>            Link 3</code>
<code>            &lt;span class=&quot;badge badge-dot bg-danger&quot;&gt;&lt;/span&gt;</code>
<code>          &lt;/button&gt;</code>
<code>          &lt;button class=&quot;btn mb-1 mr-1 btn-link&quot;&gt;</code>
<code>            Link 4</code>
<code>            &lt;span class=&quot;badge badge-dot bg-warning&quot;&gt;&lt;/span&gt;</code>
<code>          &lt;/button&gt;</code>
<code></code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>    &lt;/div&gt;</code>
<code>    &lt;div class=&quot;row&quot;&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;Dotted badge size &amp; labeled&lt;/template&gt;</code>
<code>          &lt;div class=&quot;row&quot;&gt;</code>
<code>            &lt;div class=&quot;col-6&quot;&gt;</code>
<code>              &lt;button class=&quot;btn btn-link&quot;&gt;Link 1&lt;span class=&quot;badge badge-dot bg-primary badge-sm&quot;&gt;&lt;/span&gt;&lt;/button&gt;</code>
<code>              &lt;button class=&quot;btn btn-link&quot;&gt;Link 2&lt;span class=&quot;badge badge-dot bg-danger&quot;&gt;&lt;/span&gt;&lt;/button&gt;</code>
<code>              &lt;button class=&quot;btn btn-link&quot;&gt;Link 3&lt;span class=&quot;badge badge-dot bg-warning badge-lg&quot;&gt;&lt;/span&gt;&lt;/button&gt;</code>
<code>            &lt;/div&gt;</code>
<code>            &lt;div class=&quot;col-6&quot;&gt;</code>
<code>              &lt;button class=&quot;btn btn-link&quot;&gt;Link 1&lt;span class=&quot;badge badge-dot-labeled bg-primary&quot;&gt;6&lt;/span&gt;&lt;/button&gt;</code>
<code>              &lt;button class=&quot;btn btn-link&quot;&gt;Link 2&lt;span class=&quot;badge badge-dot-labeled bg-danger&quot;&gt;6&lt;/span&gt;&lt;/button&gt;</code>
<code>              &lt;button class=&quot;btn btn-link&quot;&gt;Link 3&lt;span class=&quot;badge badge-dot-labeled bg-warning&quot;&gt;6&lt;/span&gt;&lt;/button&gt;</code>
<code>            &lt;/div&gt;</code>
<code>          &lt;/div&gt;</code>
<code></code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>    &lt;/div&gt;</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code>import TitleComponent from &quot;../../components/TitleComponent&quot;;</code>
<code>import LxCard from &quot;@/lib-components/lxCard&quot;;</code>
<code></code>
<code>export default {</code>
<code>  name: &quot;Badges&quot;,</code>
<code>  components: {LxCard, TitleComponent},</code>
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
<code>      ],</code>
<code>    })</code>
<code>  },</code>
<code>  methods: {</code>
<code>    getTypeClass(type) {</code>
<code>      return `btn-${type}`</code>
<code>    },</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code>
    </pre>
  </div>
</template>

<script>
import TitleComponent from "../../components/TitleComponent";
import LxCard from "@/lib-components/lxCard";

export default {
  name: "Badges",
  components: {LxCard, TitleComponent},
  data() {
    return ({
      types: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "alt",
        'light',
        "dark",
      ],
    })
  },
  methods: {
    getTypeClass(type) {
      return `btn-${type}`
    },
  }
}
</script>

<style scoped>

</style>