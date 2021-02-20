<template>
  <div>
    <title-component>Regular table</title-component>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Simple table</template>
          <regular-table-layout></regular-table-layout>
        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>Bordered table</template>
          <regular-table-layout mode="bordered"></regular-table-layout>
        </lx-card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Table without borders</template>
          <regular-table-layout mode="borderless"></regular-table-layout>
        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>Table with hover</template>
          <regular-table-layout mode="hover"></regular-table-layout>
        </lx-card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Table size</template>
          <regular-table-layout mode="sm"></regular-table-layout>
        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>Striped table</template>
          <regular-table-layout mode="striped"></regular-table-layout>
        </lx-card>
      </div>
    </div>

  </div>
</template>

<script>
import TitleComponent from "../../components/TitleComponent";
import RegularTableLayout from "./RegularTableLayout";
import LxCard from "@/lib-components/lxCard";

export default {
  name: "RegularTable",
  components: {LxCard, RegularTableLayout, TitleComponent},

}
</script>

<style scoped>

</style>