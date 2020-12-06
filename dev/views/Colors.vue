<template>
  <div class="colors">
    <div v-for="color in colors" :class="color.cssClass" class="item">
      <div class="css-name" @click="onCopyToClipboard(color.cssClass)">.{{ color.cssClass }}</div>
      <div class="css-hex" @click="onCopyToClipboard(color.hex)">{{ color.hex }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Colors",
  data() {
    return ({
      colors: [
        {
          cssClass: 'success',
          hex: '#8bc34a'
        },
        {
          cssClass: 'error',
          hex: '#ff5722'
        },
        {
          cssClass: 'info',
          hex: '#03a9f4'
        },
        {
          cssClass: 'active',
          hex: '#9e9e9e'
        },
        {
          cssClass: 'inactive',
          hex: '#d1d1d1'
        },
        {
          cssClass: 'inactive-light',
          hex: '#f5f8ff'
        },
        {
          cssClass: 'warning',
          hex: '#ffc107'
        },
        {
          cssClass: 'dark',
          hex: '#333333'
        },
        {
          cssClass: 'dark-lite',
          hex: '#555555'
        },
      ]
    })
  },
  methods: {
    onCopyToClipboard: function (text) {
      this.$clipboard(text);
      this.$toasted.info('Copied to clipboard');
    }
  }
}
</script>

<style scoped lang="scss">
.colors {
  display: flex;
  flex-wrap: wrap;

  .item {
    width: 100px;
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    min-height: 100px;
    max-height: 100px;
    display: block;
    text-shadow: 1px 1px #d1d1d1;
    margin: 8px;
    border: 1px solid #000000;
    border-radius: 5px;

    .css-name, .css-hex {
      height: 50%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, .2);
      }
    }

    .css-name {
      border-bottom: 1px dashed #000000;
    }

    .css-hex {
      border-top: 1px dashed #ffffff;
    }
  }
}
</style>