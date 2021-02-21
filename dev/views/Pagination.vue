<template>
  <div>
    <title-component>Pagination</title-component>
    <lx-pagination :total="totalItemsCount" :items-per-page="10" :current-page="currentPage"
                   @pagechange="onPageChange"/>
    <span>Curent page is {{ currentPage }}</span>
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