<template>
  <div>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>
            <h3>Solid</h3>
          </template>

          <template v-for="type in types">
            <button class="btn mb-1 mr-1" :class="getTypeClass(type)">
              {{ type }}
            </button>
          </template>

        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>
            <h3>Active state</h3>
          </template>

          <template v-for="type in types">
            <button class="btn mb-1 mr-1 active" :class="getTypeClass(type)">
              {{ type }}
            </button>
          </template>

        </lx-card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>
            <h3>Disabled state</h3>
          </template>

          <template v-for="type in types">
            <button class="btn mb-1 mr-1 disabled" :class="getTypeClass(type)">
              {{ type }}
            </button>
          </template>

        </lx-card>
      </div>

      <div class="col-6">
        <lx-card>
          <template #header>
            <h3>Block level</h3>
          </template>

          <button class="btn mb-1 mr-1 btn-lg btn-block" :class="getTypeClass('primary')">
            Block Large
          </button>
          <button class="btn mb-1 mr-1 btn-block" :class="getTypeClass('primary')">
            Block Normal
          </button>
          <button class="btn mb-1 mr-1 btn-sm btn-block" :class="getTypeClass('primary')">
            Block Small
          </button>

        </lx-card>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>
            <h3>Sizing</h3>
          </template>

          <button class="btn mb-1 mr-1 btn-lg" :class="getTypeClass('primary')">
            Large
          </button>
          <button class="btn mb-1 mr-1" :class="getTypeClass('primary')">
            Normal
          </button>
          <button class="btn mb-1 mr-1 btn-sm" :class="getTypeClass('primary')">
            Small
          </button>

        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>
            <h3>Button group</h3>
          </template>

          <template v-for="grp in btnGroups">
            <div class="button-group mb-1">
              <button class="btn" :class="getGrpClass(grp)">One</button>
              <button class="btn" :class="getGrpClass(grp)">Two</button>
              <button class="btn" :class="getGrpClass(grp)">Three</button>
            </div>
          </template>

        </lx-card>
      </div>
    </div>
  </div>
</template>

<script>
import LxCard from "@/lib-components/lxCard";

export default {
  name: "ButtonsLayout",
  components: {LxCard},
  props: {
    mode: {
      type: String,
      validator: function (value) {
        return ['solid', 'outline'].indexOf(value) !== -1
      },
      default: 'solid'
    },
    styled: {
      type: String,
      validator: function (value) {
        return ['standard', 'pill'].indexOf(value) !== -1
      },
      default: 'standard'
    }
  },
  data() {
    return ({
      types: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "alt",
        'light',
        "dark",
        'link',
      ],
      btnGroups: [
        {
          type: "primary",
          size: "sm",
        },
        {
          type: "danger",
        },
        {
          type: "alt",
          size: "lg",
        },
      ]
    })
  },
  methods: {
    getTypeClass(type) {
      return `btn-${type} ${this.getModeClass()} ${this.getStyleClass()}`
    },
    getGrpClass(type) {
      return `btn-${type.type} btn-${type.size} ${this.getModeClass()} ${this.getStyleClass()}`
    },
    getModeClass() {
      return this.mode === 'solid' ? '' : `btn-${this.mode}`
    },
    getStyleClass() {
      return this.styled === 'standard' ? '' : `btn-${this.styled}`
    },
  }
}
</script>

<style scoped>
.btn {
  text-transform: capitalize;
}
</style>