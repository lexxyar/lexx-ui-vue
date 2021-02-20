<template>
  <div>
    <title-component>Data table</title-component>
    <lx-card>
      <lx-table :fields="fields" :items="tableData" class="table-bordered">

      </lx-table>
    </lx-card>
  </div>
</template>

<script>
import TitleComponent from "../../components/TitleComponent";
import LxCard from "@/lib-components/lxCard";
import LxTable from "@/lib-components/lxTable";
import jsonData from '../../mockdata.json'

export default {
  name: "DataTable",
  components: {LxTable, LxCard, TitleComponent},
  data() {
    return ({
      fields: [
        {
          key: "name",
          label: "Name",
          sortable: true,
        },
        {
          key: "position",
          label: "Position",
          sortable: true,
        },
        {
          key: "office",
          label: "Office",
          sortable: true,
        },
        {
          key: "age",
          label: "Age",
          sortable: true,
        },
        {
          key: "startdate",
          label: "Start date",
          sortable: true,
        },
        {
          key: "salary",
          label: "Salary",
          sortable: true,
        },
      ],
      items: jsonData,
    })
  },
  computed: {
    tableData() {
      return this.items.slice(0, 10)
    }
  }
}
</script>

<style scoped>

</style>