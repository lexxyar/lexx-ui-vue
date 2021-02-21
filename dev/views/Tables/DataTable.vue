<template>
  <div>
    <title-component>Data table</title-component>
    <lx-card>
      <lx-table :fields="fields" :items="tableData" class="table-bordered mb-2">

      </lx-table>
      <div class="flex flex-between flex-items-center">
        <div>Showing {{ startItem }} to {{ endItem }} of {{ items.length }} entries</div>
        <lx-pagination :total="items.length" :current-page="currentPage" :items-per-page="itemsPerPage"
                       @pagechange="onPageChange"/>
      </div>
    </lx-card>

    <pre class="my-5">
<code>&lt;template&gt;</code>
<code>  &lt;div&gt;</code>
<code>    &lt;title-component&gt;Data table&lt;/title-component&gt;</code>
<code>    &lt;lx-card&gt;</code>
<code>      &lt;lx-table :fields=&quot;fields&quot; :items=&quot;tableData&quot; class=&quot;table-bordered mb-2&quot;&gt;</code>
<code></code>
<code>      &lt;/lx-table&gt;</code>
<code>      &lt;div class=&quot;flex flex-between flex-items-center&quot;&gt;</code>
<code>        &lt;div&gt;Showing {{ startItem }} to {{ endItem }} of {{ items.length }} entries&lt;/div&gt;</code>
<code>        &lt;lx-pagination :total=&quot;items.length&quot; :current-page=&quot;currentPage&quot; :items-per-page=&quot;itemsPerPage&quot;</code>
<code>                       @pagechange=&quot;onPageChange&quot;/&gt;</code>
<code>      &lt;/div&gt;</code>
<code>    &lt;/lx-card&gt;</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code>import TitleComponent from &quot;../../components/TitleComponent&quot;;</code>
<code>import LxCard from &quot;@/lib-components/lxCard&quot;;</code>
<code>import LxTable from &quot;@/lib-components/lxTable&quot;;</code>
<code>import jsonData from '../../mockdata.json'</code>
<code>import LxPagination from &quot;@/lib-components/lxPagination&quot;;</code>
<code></code>
<code>export default {</code>
<code>  name: &quot;DataTable&quot;,</code>
<code>  components: {LxPagination, LxTable, LxCard, TitleComponent},</code>
<code>  data() {</code>
<code>    return ({</code>
<code>      fields: [</code>
<code>        {key: &quot;id&quot;, label: &quot;#&quot;},</code>
<code>        {key: &quot;name&quot;, label: &quot;Name&quot;, sortable: true,},</code>
<code>        {key: &quot;position&quot;, label: &quot;Position&quot;, sortable: true,},</code>
<code>        {key: &quot;office&quot;, label: &quot;Office&quot;, sortable: true,},</code>
<code>        {key: &quot;age&quot;, label: &quot;Age&quot;, sortable: true,},</code>
<code>        {key: &quot;startdate&quot;, label: &quot;Start date&quot;, sortable: true,},</code>
<code>        {key: &quot;salary&quot;, label: &quot;Salary&quot;, sortable: true,},</code>
<code>      ],</code>
<code>      items: jsonData,</code>
<code>      currentPage: 1,</code>
<code>      itemsPerPage: 10,</code>
<code>    })</code>
<code>  },</code>
<code>  methods: {</code>
<code>    onPageChange(newPage) {</code>
<code>      this.currentPage = newPage</code>
<code>    },</code>
<code>  },</code>
<code>  computed: {</code>
<code>    tableData() {</code>
<code>      return this.items.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)</code>
<code>    },</code>
<code>    startItem() {</code>
<code>      return (this.currentPage - 1) * this.itemsPerPage + 1</code>
<code>    },</code>
<code>    endItem() {</code>
<code>      const res = this.currentPage * this.itemsPerPage</code>
<code>      return res &gt; this.items.length ? this.items.length : res</code>
<code>    }</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code>
    </pre>
  </div>
</template>

<script>
import TitleComponent from "../../components/TitleComponent";
import LxCard from "@/lib-components/lxCard";
import LxTable from "@/lib-components/lxTable";
import jsonData from '../../mockdata.json'
import LxPagination from "@/lib-components/lxPagination";

export default {
  name: "DataTable",
  components: {LxPagination, LxTable, LxCard, TitleComponent},
  data() {
    return ({
      fields: [
        {key: "id", label: "#"},
        {key: "name", label: "Name", sortable: true,},
        {key: "position", label: "Position", sortable: true,},
        {key: "office", label: "Office", sortable: true,},
        {key: "age", label: "Age", sortable: true,},
        {key: "startdate", label: "Start date", sortable: true,},
        {key: "salary", label: "Salary", sortable: true,},
      ],
      items: jsonData,
      currentPage: 1,
      itemsPerPage: 10,
    })
  },
  methods: {
    onPageChange(newPage) {
      this.currentPage = newPage
    },
  },
  computed: {
    tableData() {
      return this.items.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
    },
    startItem() {
      return (this.currentPage - 1) * this.itemsPerPage + 1
    },
    endItem() {
      const res = this.currentPage * this.itemsPerPage
      return res > this.items.length ? this.items.length : res
    }
  }
}
</script>

<style scoped>

</style>