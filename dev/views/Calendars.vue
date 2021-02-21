<template>
  <div>
    <title-component>Calendar</title-component>
    <lx-calendar v-model="myDate" display-mode="days" class="m-1"/>
    <span>{{ dateFormat() }}</span>

    <pre class="my-5">
<code>&lt;template&gt;</code>
<code>  &lt;div&gt;</code>
<code>    &lt;title-component&gt;Calendar&lt;/title-component&gt;</code>
<code>    &lt;lx-calendar v-model=&quot;myDate&quot; display-mode=&quot;days&quot; class=&quot;m-1&quot;/&gt;</code>
<code>    &lt;span&gt;{{ dateFormat() }}&lt;/span&gt;</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code>import LxCalendar from &quot;@/lib-components/lxCalendar&quot;;</code>
<code>import TitleComponent from &quot;../components/TitleComponent&quot;;</code>
<code></code>
<code>export default {</code>
<code>  name: &quot;Calendars&quot;,</code>
<code>  components: {TitleComponent, LxCalendar},</code>
<code>  data() {</code>
<code>    return ({</code>
<code>      myDate: new Date(),</code>
<code>    })</code>
<code>  },</code>
<code>  methods: {</code>
<code>    dateFormat() {</code>
<code>      return new Intl.DateTimeFormat().format(this.myDate)</code>
<code>    }</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code>
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