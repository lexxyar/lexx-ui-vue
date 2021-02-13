<template>
  <div>
    <h1>Calendar</h1>
    <lx-calendar v-model="myDate" display-mode="days" class="m-1"/>
    <span>{{ dateFormat() }}</span>
    <code>
      <pre>
&lt;lx-calendar v-model=&quot;myDate&quot; display-mode=&quot;days&quot; class=&quot;m-1&quot;/&gt;
      </pre>
    </code>
  </div>
</template>

<script>
import LxCalendar from "@/lib-components/lxCalendar";

export default {
  name: "Calendars",
  components: {LxCalendar},
  data() {
    return ({
      myDate: new Date(),
    })
  },
  methods:{
    dateFormat(){
      return new Intl.DateTimeFormat().format(this.myDate)
    }
  }
}
</script>

<style scoped>

</style>