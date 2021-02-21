<template>
  <div class="button-group">

    <button class="btn btn-outline btn-primary" :class="canPrev()?'':'disabled'"
            @click="onChangePage(-1)">Prev
    </button>
    <template v-for="i in pageCount">
      <button class="btn btn-outline btn-primary" :class="i === currentPageSync?'active':''"
              @click="onPageClick(i)">{{ i }}
      </button>
    </template>
    <button class="btn btn-outline btn-primary" :class="canNext()?'':'disabled'"
            @click="onChangePage(1)">Next
    </button>
  </div>
</template>

<script>
export default {
  name: "lxPagination",
  props: {
    total: {type: Number, default: 1},
    itemsPerPage: {type: Number, default: 10},
    currentPage: {type: Number, default: 1}
  },
  data() {
    return ({
      currentPageSync: this.currentPage,
    })
  },
  methods: {
    onPageClick(num) {
      this.currentPageSync = num
      this.$emit('pagechange', this.currentPageSync)
    },
    onChangePage(dif) {
      this.currentPageSync += dif
      this.currentPageSync = this.currentPageSync < 1 ? 1 : this.currentPageSync
      this.currentPageSync = this.currentPageSync > this.pageCount ? this.pageCount : this.currentPageSync
      this.$emit('pagechange', this.currentPageSync)
    },
    canPrev() {
      return this.currentPageSync > 1
    },
    canNext() {
      return this.currentPageSync < this.pageCount
    }
  },
  computed: {
    pageCount() {
      const res = Math.ceil(this.total / this.itemsPerPage)
      return res === 0 ? 1 : res
    }
  },
  watch: {
    currentPage(newVal) {
      this.currentPageSync = newVal
    }
  }
}
</script>

<style scoped>

</style>