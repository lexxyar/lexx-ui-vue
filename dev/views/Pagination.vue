<template>
  <div>
    <title-component>Pagination</title-component>
    <lx-pagination :total="totalItemsCount" :items-per-page="10" :current-page="currentPage"
                   @pagechange="onPageChange"/>
    <span>Curent page is {{ currentPage }}</span>

    <pre class="my-5">
<code>&lt;template&gt;</code>
<code>  &lt;div&gt;</code>
<code>    &lt;title-component&gt;Pagination&lt;/title-component&gt;</code>
<code>    &lt;lx-pagination :total=&quot;totalItemsCount&quot; :items-per-page=&quot;10&quot; :current-page=&quot;currentPage&quot;</code>
<code>                   @pagechange=&quot;onPageChange&quot;/&gt;</code>
<code>    &lt;span&gt;Curent page is {{ currentPage }}&lt;/span&gt;</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code>import TitleComponent from &quot;../components/TitleComponent&quot;;</code>
<code>import LxPagination from &quot;@/lib-components/lxPagination&quot;;</code>
<code></code>
<code>export default {</code>
<code>  name: &quot;Pagination&quot;,</code>
<code>  components: {LxPagination, TitleComponent},</code>
<code>  data() {</code>
<code>    return ({</code>
<code>      totalItemsCount: 26,</code>
<code>      currentPage: 3,</code>
<code>    })</code>
<code>  },</code>
<code>  methods: {</code>
<code>    onPageChange(e) {</code>
<code>      this.currentPage = e</code>
<code>    }</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code>
    </pre>
  </div>
</template>

<script>
import TitleComponent from "../components/TitleComponent";
import LxPagination from "@/lib-components/lxPagination";

export default {
  name: "Pagination",
  components: {LxPagination, TitleComponent},
  data() {
    return ({
      totalItemsCount: 26,
      currentPage: 3,
    })
  },
  methods: {
    onPageChange(e) {
      this.currentPage = e
    }
  }
}
</script>

<style scoped>

</style>