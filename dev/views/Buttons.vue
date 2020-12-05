<template>
  <div>
    <template v-for="type in types">
      <h3>{{type}}</h3>
      <div class="btn-container">
        <button class="btn" v-for="btn in buttons" :class="getCss(btn, type)">
          Button .{{ btn }}.{{type}}
        </button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  data() {
    return ({
      buttons: [
        '',
        "success",
        "error",
        "warning",
        "info",
        "active",
        "dark",
        "inactive",
        "inactive-light"
      ],
      types: ['', 'bordered', 'rounded', 'bordered rounded']
    })
  },
  methods: {
    getCss(btn, type) {
      return [btn, type].join(' ')
    }
  }
}
</script>

<style scoped lang="scss">
.btn-container {
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin: .5rem;
  }
}
</style>