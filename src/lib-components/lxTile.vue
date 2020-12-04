<template>
  <div class="tile" @click="$emit('click')">
    <div class="header">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
    <div class="content" :class="qStyle?`color-${qStyle}`:''">
      <slot name="icon"/>
      <span class="value">
        {{ printScale() }}
      </span>
      <div class="eval">
        <div class="indicator">
          <template v-if="getProgressDirection()>0">
            <fa-icon icon="caret-up"/>
            <!--            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up"-->
            <!--                 class="svg-inline&#45;&#45;fa fa-caret-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"-->
            <!--                 viewBox="0 0 320 512">-->
            <!--              <path fill="currentColor"-->
            <!--                    d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path>-->
            <!--            </svg>-->
          </template>

          <template v-else-if="getProgressDirection()<0">
            <fa-icon icon="caret-down"/>
            <!--            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down"-->
            <!--                 class="svg-inline&#45;&#45;fa fa-caret-down fa-w-10" role="img"-->
            <!--                 xmlns="http://www.w3.org/2000/svg"-->
            <!--                 viewBox="0 0 320 512">-->
            <!--              <path fill="currentColor"-->
            <!--                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>-->
            <!--            </svg>-->
          </template>
        </div>
        <div class="quantity">
          {{ quantity }}
        </div>
      </div>
    </div>
    <div class="footer">
      {{ bottomText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "lxTile",
  props: {
    scale: {type: String, default: ''},
    progress: {type: Number, default: 0},
    title: {type: String, default: ''},
    subtitle: {type: String, default: ''},
    quantity: {type: String, default: ''},
    bottomText: {type: String, default: ''},
    qStyle: {
      type: String,
      validator: function (value) {
        return ['', 'success', 'error', 'info', 'warning'].indexOf(value) !== -1
      }, default: ''
    }
  },
  methods: {
    getProgressDirection: function () {
      if (this.progress > 0) {
        return 1;
      } else if (this.progress < 0) {
        return -1;
      } else {
        return 0;
      }
    },

    printScale: function () {
      return this.scale !== '0' && this.scale !== '' ? this.scale : '';
    }
  }
}
</script>

<style scoped lang="scss">
//@import "./common.scss";
</style>