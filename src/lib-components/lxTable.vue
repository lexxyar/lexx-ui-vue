<template>
  <table class="table">
    <thead>
    <tr>
      <th v-for="field in fields" :key="field.key" :class="field.css">
        <div class="title-container">
          <div class="caption">
            <template v-if="field.sortable">
              <template v-if="sortBy === field.key">
                <svg v-if="!sortDesc" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-alpha-up"
                     role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                     class="sort-icon svg-inline--fa fa-sort-alpha-up fa-w-14 fa-3x">
                  <path fill="currentColor"
                        d="M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160zm400 128H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z"
                        class=""></path>
                </svg>
                <svg v-else aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-alpha-down"
                     role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                     class="sort-icon svg-inline--fa fa-sort-alpha-down fa-w-14 fa-3x">
                  <path fill="currentColor"
                        d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z"
                        class=""></path>
                </svg>
              </template>
              <svg v-else aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                   class="sort-icon svg-inline--fa fa-sort fa-w-10 fa-3x">
                <path fill="currentColor"
                      d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                      class=""></path>
              </svg>
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
        <td v-if="typeof $scopedSlots[field.key] !== 'undefined'" :class="field.css">
          <slot :name="field.key" :field="field" :item="item"></slot>
        </td>
        <td v-else :class="field.css">
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

</style>