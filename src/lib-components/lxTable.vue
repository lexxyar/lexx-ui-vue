<template>
  <table class="table">
    <thead>
    <tr>
      <th v-for="field in fields" :key="field.key" :class="getHeaderCss(field)" @click="changeSort($event, field)">
        <!--        <div class="title-container">-->
        <!--          <div class="caption">-->
        <!--            <template v-if="field.sortable">-->
        <!--              <template v-if="sortBy === field.key">-->
        <!--                &uarr;-->
        <!--              </template>-->
        <!--              <template v-else>-->
        <!--                &darr;-->
        <!--              </template>-->
        <!--              <template v-else>-->
        <!--                &varr;-->
        <!--              </template>-->
        <!--              <div @click="changeSort($event, field)" class="title sortable">{{ field.label }}</div>-->
        <!--            </template>-->
        <!--            <div v-else class="title">{{ field.label }}</div>-->
        <!--        <div class="title">{{ field.label }}</div>-->
        {{ field.label }}
        <!--          </div>-->
        <!--          <div v-if="field.filterable" class="filter" :class="field.filter?'':'mute'">-->
        <!--            &lt;!&ndash;            <fa-icon icon="filter"/>&ndash;&gt;-->
        <!--          </div>-->
        <!--        </div>-->
      </th>
    </tr>
    </thead>
    <tbody>
    <template v-if="items.length === 0">
      <tr>
        <td :colspan="fields.length">
          <div class="no-data-message">
            There is no data
          </div>
        </td>
      </tr>
    </template>
    <template v-else>
      <tr v-for="(item,index) in items" :key="index" @click="onRowClick(item)">
        <template v-for="field in fields">
          <td v-if="typeof $scopedSlots[field.key] !== 'undefined'" :class="field.css">
            <slot :name="field.key" :field="field" :item="item"></slot>
          </td>
          <td v-else :class="field.css">
            {{ getItemValue(field, item) }}
          </td>
        </template>
      </tr>
    </template>
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
    },
    // scopedCss: {
    //   type: String,
    //   default: ''
    // }
  },
  methods: {
    getItemValue: (field, item) => {
      if ('formatter' in field) {
        return field.formatter.call(null, item)
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
    },
    getHeaderCss(field) {
      const css = []
      css.push(field.css)
      css.push(field.sortable ? 'th-sortable' : '')
      // console.log(this.sortBy === field.name, this.sortBy, field.name, field)
      if (this.sortBy === field.key) {
        css.push(field.sortDesc ? 'th-sort-desc' : 'th-sort-asc')
      }
      return css.join(' ')
    }
  }
}
</script>

<style scoped lang="scss">

</style>