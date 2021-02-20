<template>
  <lx-card>
    <template #header>
      {{ title }}
    </template>
    <p>With supporting text below as a natural lead-in to additional content.</p>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum deserunt dolore eius ipsam
      necessitatibus rem repellendus voluptas. Adipisci, temporibus.</p>
    <template #footer>
      <template v-if="footerShowButtons">
        <div class="flex flex-end" style="width: 100%;">
          <button class="btn btn-link mr-2">Cancel</button>
          <button class="btn btn-success">Save</button>
        </div>
      </template>
      <template v-else>
        <div style="line-height: 2rem;">Footer</div>
      </template>
    </template>
  </lx-card>
</template>

<script>
import LxCard from "@/lib-components/lxCard";
export default {
  name: "CardLayout",
  components: {LxCard},
  props: {
    title: {
      type: String
    },
    footerShowButtons: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<style scoped>

</style>