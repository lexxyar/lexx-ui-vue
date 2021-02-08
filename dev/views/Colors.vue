<template>
  <div class="colors">
    <div v-for="color in colors" :class="color.cssClass" class="item" :ref="color.cssClass">
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
          cssClass: 'primary',
          hex: '#000000'
        },
        {
          cssClass: 'secondary',
          hex: '#000000'
        },
        {
          cssClass: 'success',
          hex: '#000000'
        },
        {
          cssClass: 'error',
          hex: '#000000'
        },
        {
          cssClass: 'info',
          hex: '#000000'
        },
        // {
        //   cssClass: 'active',
        //   hex: '#9e9e9e'
        // },
        // {
        //   cssClass: 'inactive',
        //   hex: '#d1d1d1'
        // },
        // {
        //   cssClass: 'inactive-light',
        //   hex: '#f5f8ff'
        // },
        {
          cssClass: 'warning',
          hex: '#000000'
        },
        {
          cssClass: 'dark',
          hex: '#000000'
        },
        {
          cssClass: 'light',
          hex: '#000000'
        },
        // {
        //   cssClass: 'dark-lite',
        //   hex: '#555555'
        // },
      ]
    })
  },
  mounted() {
    this.colors.map((color,idx)=>{
      let rgb = getComputedStyle(this.$refs[color.cssClass][0]).getPropertyValue('background-color')
      this.colors[idx].hex = this.rgbToHex(rgb)
      console.log()
    })
  },
  methods: {
    onCopyToClipboard: function (text) {
      this.$clipboard(text);
      this.$toasted.info('Copied to clipboard');
    },
    rgbToHex(rgb) {
      var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
      var result, r, g, b, hex = "";
      if ( (result = rgbRegex.exec(rgb)) ) {
        r = this.componentFromStr(result[1], result[2]);
        g = this.componentFromStr(result[3], result[4]);
        b = this.componentFromStr(result[5], result[6]);

        hex = "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
      }
      return hex;
    },
    componentFromStr(numStr, percent) {
      var num = Math.max(0, parseInt(numStr, 10));
      return percent ?
          Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
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