<template>
  <div class="">
    <title-component>Grid layout</title-component>
    <div class="row">
      <div class="col">
        col
      </div>
      <div class="col">
        col
      </div>
    </div>
    <div class="row">
      <div class="col">
        col
      </div>
      <div class="col">
        col
      </div>
      <div class="col">
        col
      </div>
    </div>
    <div class="row">
      <div class="col">
        col
      </div>
      <div class="col-6">
        col-6
      </div>
      <div class="col">
        col
      </div>
    </div>
    <div class="row">
      <div class="col-8">col-8</div>
      <div class="col-4">col-4</div>
    </div>

    <pre>
<code>&lt;div class=&quot;row&quot;&gt;</code>
<code>  &lt;div class=&quot;col&quot;&gt;</code>
<code>    col</code>
<code>  &lt;/div&gt;</code>
<code>  &lt;div class=&quot;col&quot;&gt;</code>
<code>    col</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/div&gt;</code>
<code>&lt;div class=&quot;row&quot;&gt;</code>
<code>  &lt;div class=&quot;col&quot;&gt;</code>
<code>    col</code>
<code>  &lt;/div&gt;</code>
<code>  &lt;div class=&quot;col&quot;&gt;</code>
<code>    col</code>
<code>  &lt;/div&gt;</code>
<code>  &lt;div class=&quot;col&quot;&gt;</code>
<code>    col</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/div&gt;</code>
<code>&lt;div class=&quot;row&quot;&gt;</code>
<code>  &lt;div class=&quot;col&quot;&gt;</code>
<code>    col</code>
<code>  &lt;/div&gt;</code>
<code>  &lt;div class=&quot;col-6&quot;&gt;</code>
<code>    col-6</code>
<code>  &lt;/div&gt;</code>
<code>  &lt;div class=&quot;col&quot;&gt;</code>
<code>    col</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/div&gt;</code>
<code>&lt;div class=&quot;row&quot;&gt;</code>
<code>  &lt;div class=&quot;col-8&quot;&gt;col-8&lt;/div&gt;</code>
<code>  &lt;div class=&quot;col-4&quot;&gt;col-4&lt;/div&gt;</code>
<code>&lt;/div&gt;</code>
      </pre>
  </div>
</template>

<script>
import TitleComponent from "../components/TitleComponent";

export default {
  name: "Grids",
  components: {TitleComponent}
}
</script>

<style scoped>
*[class^=col] {
  /*noinspection CssUnresolvedCustomProperty*/
  background-color: var(--color-light);
  /*noinspection CssUnresolvedCustomProperty*/
  border: 1px solid var(--color-secondary);
  padding: 2rem;
}
</style>