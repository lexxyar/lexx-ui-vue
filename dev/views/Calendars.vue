<template>
  <div>
    <h2>Calendar</h2>
    <template v-for="date in dates">
      <lx-calendar v-model="date.value" :display-mode="date.mode" class="m-1"/>
      <span>{{ date.value }}</span>
    </template>
  </div>
</template>

<script>
import LxCalendar from "@/lib-components/lxCalendar";

export default {
  name: "Calendars",
  components: {LxCalendar},
  data() {
    return ({
      dates: [
        {value: new Date(2020, 11, 12), mode: 'months'},
        {value: new Date(2020, 10, 11), mode: 'days'},
        {value: new Date(2020, 5, 6), mode:'years'},
        // {value: new Date(2020, 6, 7)},
      ]
    })
  }
}
</script>

<style scoped>

</style>