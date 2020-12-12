<template>
  <div class="search-help" :class="readonly?'readonly':''">
    <input type="text" :value="val" readonly :disabled="readonly">
    <!--           @input="$emit('input', $event.target.value)">-->
    <button class="btn" @click="readonly?'':show = true">
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" role="img"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clone fa-w-16 fa-3x">
        <path fill="currentColor"
              d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"
              class=""></path>
      </svg>
    </button>
    <div class="label">{{ textValue }}</div>

    <lx-modal :show="show" @onClose="show = false">
      <lx-table :fields="fields" :items="items"
                @onRowClick="onRowClick"></lx-table>
    </lx-modal>
  </div>
</template>

<script>
import lxInput from "./lxInput.vue";
import lxModal from "./lxModal.vue";
import lxTable from "./lxTable.vue";

export default {
  name: "lxSearchHelp",
  components: {lxTable, lxModal, lxInput},
  props: {
    value: {},
    items: {type: Array},
    fields: {type: Array},
    keyField: {type: String},
    textField: {type: String},
    readonly: {type: Boolean, default: false},
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>