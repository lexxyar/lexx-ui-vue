<template>
  <table class="table">
    <thead>
    <tr>
      <th v-for="field in fields" :key="field.key">
        <div class="title-container">
          <div class="caption">
            <template v-if="field.sortable">
              <template v-if="sortBy === field.key">
                <fa-icon v-if="!sortDesc" icon="sort-alpha-up" class="sort-icon"/>
                <fa-icon v-else icon="sort-alpha-down" class="sort-icon"/>
              </template>
              <fa-icon v-else icon="sort" class="sort-icon"/>
              <div @click="changeSort($event, field)" class="title sortable">{{ field.label }}</div>
            </template>
            <div v-else class="title">{{ field.label }}</div>
          </div>
          <div v-if="field.filterable" class="filter" :class="field.filter?'':'mute'">
            <!--            <fa-icon icon="filter"/>-->
          </div>
        </div>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item,index) in items" :key="index" @click="onRowClick(item)">
      <template v-for="field in fields">
        <td v-if="typeof $scopedSlots[field.key] !== 'undefined'">
          <slot :name="field.key" :field="field" :item="item"></slot>
        </td>
        <td v-else>
          {{ getItemValue(field, item) }}
        </td>
      </template>
    </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</template>

<script>
export default {
  name: "lxTable",
  props: {
    fields: {
      type: Array,
      require: true,
    },
    items: {
      type: Array,
      require: true,
    },
    sortBy: {
      type: String,
    },
    sortDesc: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    getItemValue: (field, item) => {
      if ('formatter' in field) {
        return field.formatter.call(null, item)
        // return field.formatter.call(this, item)
      } else {
        return item[field.key]
      }
    },
    changeSort: function (e, field) {
      this.$emit('changeSort', field)
    },
    onRowClick(item) {
      // console.log('rowClick', item)
      this.$emit('onRowClick', item)
    }
  }
}
</script>

<style scoped lang="scss">
//@import "./common.scss";
</style>