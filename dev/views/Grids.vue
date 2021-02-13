<template>
  <div class="container">
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

    <code>
      <pre>
&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col&quot;&gt;
    col
  &lt;/div&gt;
  &lt;div class=&quot;col&quot;&gt;
    col
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col&quot;&gt;
    col
  &lt;/div&gt;
  &lt;div class=&quot;col&quot;&gt;
    col
  &lt;/div&gt;
  &lt;div class=&quot;col&quot;&gt;
    col
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col&quot;&gt;
    col
  &lt;/div&gt;
  &lt;div class=&quot;col-6&quot;&gt;
    col-6
  &lt;/div&gt;
  &lt;div class=&quot;col&quot;&gt;
    col
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col-8&quot;&gt;col-8&lt;/div&gt;
  &lt;div class=&quot;col-4&quot;&gt;col-4&lt;/div&gt;
&lt;/div&gt;
      </pre>
    </code>
  </div>
</template>

<script>
export default {
  name: "Grids"
}
</script>

<style scoped>
*[class^=col] {
  background-color: #a2a2a2;
  border: 1px solid #4c4c4c;
  padding: 2rem;
}
</style>