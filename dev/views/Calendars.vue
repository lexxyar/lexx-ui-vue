<template>
  <div>
    <title-component>Calendar</title-component>
    <lx-calendar v-model="myDate" display-mode="days" class="m-1"/>
    <span>{{ dateFormat() }}</span>

    <pre>
<code>&lt;lx-calendar v-model=&quot;myDate&quot; display-mode=&quot;days&quot; class=&quot;m-1&quot;/&gt;</code>
    </pre>

  </div>
</template>

<script>
import LxCalendar from "@/lib-components/lxCalendar";
import TitleComponent from "../components/TitleComponent";

export default {
  name: "Calendars",
  components: {TitleComponent, LxCalendar},
  data() {
    return ({
      myDate: new Date(),
    })
  },
  methods: {
    dateFormat() {
      return new Intl.DateTimeFormat().format(this.myDate)
    }
  }
}
</script>

<style scoped>

</style>