<template>
  <div class="search-help">
    <input type="text" :value="val">
    <!--           @input="$emit('input', $event.target.value)">-->
    <button class="btn" @click="show = true">
      <fa-icon :icon="['far','clone']"/>
    </button>
    <div class="label">{{ textValue }}</div>

    <lx-modal :show="show" @onClose="show = false">
      <lx-table :fields="fields" :items="items"
                @onRowClick="onRowClick"></lx-table>
    </lx-modal>
  </div>
</template>

<script>
import LxInput from "./lxInput.vue";
import LxModal from "./lxModal.vue";
import LxTable from "./lxTable.vue";

export default {
  name: "lxSearchHelp",
  components: {LxTable, LxModal, LxInput},
  props: {
    value: {},
    items: {type: Array},
    fields: {type: Array},
    keyField: {type: String},
    textField: {type: String},
  },
  data() {
    return ({
      show: false,
      textValue: ''
    })
  },
  computed: {
    val: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    onRowClick(e) {
      this.val = e[this.keyField]
      this.textValue = e[this.textField]
      this.show = false
      // console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">
//@import "./common.scss";
</style>