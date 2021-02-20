<template>
  <div>
    <lx-table :fields="fields" :items="items" :class="getModeCss()">

    </lx-table>
  </div>
</template>

<script>
import LxTable from "@/lib-components/lxTable";

export default {
  name: "RegularTableLayout",
  components: {LxTable},
  props:{
    mode:{
      type: String
    }
  },
  data() {
    return ({
      fields: [
        {
          key: 'id',
          label: '#',
        },
        {
          key: 'name1',
          label: 'First name',
        },
        {
          key: 'name2',
          label: 'Last name',
        },
        {
          key: 'login',
          label: 'Username',
        },
      ],
      items: [
        {id: 1, name1: 'Mark', name2: 'Otto', login: '@mdo'},
        {id: 2, name1: 'Jacob', name2: 'Thornton', login: '@fat'},
        {id: 3, name1: 'Larry', name2: 'the Bird', login: '@twitter'},
      ]
    })
  },
  methods:{
    getModeCss(){
      return this.mode?`table-${this.mode}`:''
    }
  }
}
</script>

<style scoped>

</style>