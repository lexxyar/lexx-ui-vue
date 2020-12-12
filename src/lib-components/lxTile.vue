<template>
  <div class="tile" @click="onTileClick" :class="`type-${type}`">
    <div class="header">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
    <div class="content" :class="getCss()">
      <template v-if="type=='content'">
        <slot name="icon"/>
        <span class="value">{{ printScale() }}</span>
        <div class="eval">
          <div class="indicator">
            <template v-if="getProgressDirection()>0">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up"
                   class="svg-inline--fa fa-caret-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path>
              </svg>
            </template>

            <template v-else-if="getProgressDirection()<0">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down"
                   class="svg-inline--fa fa-caret-down fa-w-10" role="img"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
              </svg>
            </template>
          </div>
          <div class="quantity">
            {{ quantity }}
          </div>
        </div>
      </template>
      <template v-else-if="type=='create'">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-plus fa-w-14 fa-3x">
          <path fill="currentColor"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                class=""></path>
        </svg>
      </template>
    </div>
    <div class="footer">
      <template v-if="mode=='text'">
        {{ bottomText }}
      </template>
      <template v-else-if="mode=='action'">

        <div class="tile-toolbar">
          <a href="#" class="tile-edit" @click="onEditClick">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                 class="svg-inline--fa fa-pencil-alt fa-w-16 fa-3x">
              <path fill="currentColor"
                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                    class=""></path>
            </svg>
            Edit
          </a>
          <a href="#" class="tile-delete" @click="onDeleteClick">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                 class="svg-inline--fa fa-trash-alt fa-w-14 fa-3x">
              <path fill="currentColor"
                    d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                    class=""></path>
            </svg>
            Delete
          </a>
        </div>

      </template>

    </div>
  </div>
</template>

<script>
export default {
  name: "lxTile",
  props: {
    type: {
      type: String,
      validator: function (value) {
        return ['content', 'create'].indexOf(value) !== -1
      },
      default: 'content'
    },
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
      },
      default: ''
    },
    mode: {
      type: String,
      validator: function (value) {
        return ['text', 'action'].indexOf(value) !== -1
      },
      default: 'text'
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
    },
    getCss: function () {
      let aCss = []
      if (this.qStyle) {
        aCss.push(`color-${this.qStyle}`)
      }

      aCss.push(`type-${this.type}`)

      return aCss.join(' ')
    },
    onTileClick(e) {
      e.preventDefault()
      e.stopPropagation()
      this.$emit('click')
    },
    onDeleteClick(e) {
      e.preventDefault()
      e.stopPropagation()
      this.$emit('delete')
    },
    onEditClick(e) {
      e.preventDefault()
      e.stopPropagation()
      this.$emit('edit')
    },
  }
}
</script>

<style scoped lang="scss">

</style>