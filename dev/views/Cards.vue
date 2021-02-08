<template>
  <div>
    <lx-card style="width: 300px;">
      <template #header>
        <h3>Card header</h3>
      </template>
      Card content
      <template #footer>
        Card footer
      </template>
    </lx-card>

    <pre>
            <code class="language-js">

            </code>
        </pre>

  </div>
</template>

<script>
import {lxCard} from "@/entry";

export default {
  name: "Cards",
  components: {lxCard},
}
</script>

<style scoped>

</style>