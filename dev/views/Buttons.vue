<template>
  <div>
    <h1>Buttons</h1>
<!--    <h2 class="mt-1"><a href="#default_buttons">Default buttons</a></h2>-->
    <!--    <h2><a href="#default_buttons">Default buttons</a></h2>-->
<!--    <template v-for="type in types">-->
<!--      <template v-if="type === ''">-->
<!--        <h4 class="mt-1"><a href="#">default</a></h4>-->
<!--      </template>-->
<!--      <template v-else>-->
<!--        <h4 class="mt-1"><a href="#">{{ type }}</a></h4>-->
<!--      </template>-->

<!--      <div class="btn-container">-->
<!--        <button class="btn" v-for="btn in buttons" :class="getCss(btn, type)">-->
<!--          Button, {{type}}-->
<!--        </button>-->
<!--      </div>-->
<!--    </template>-->


<!--    <template>-->
<!--      <h4 class="mt-1"><a href="#">iconed</a></h4>-->
<!--      <div class="btn-container">-->
<!--        <button class="btn iconed">-->
<!--          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bell" role="img"-->
<!--               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline&#45;&#45;fa fa-bell fa-w-14 fa-3x">-->
<!--            <path fill="currentColor"-->
<!--                  d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"-->
<!--                  class=""></path>-->
<!--          </svg>-->
<!--        </button>-->
<!--        <button class="btn iconed warning">-->
<!--          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comments" role="img"-->
<!--               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--               class="svg-inline&#45;&#45;fa fa-comments fa-w-18 fa-3x">-->
<!--            <path fill="currentColor"-->
<!--                  d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"-->
<!--                  class=""></path>-->
<!--          </svg>-->
<!--        </button>-->
<!--      </div>-->
<!--    </template>-->

<!--    <template>-->
<!--      <h2 class="mt-1 mb-1"><a href="#button_group">Button group</a></h2>-->
<!--      <div class="button-group mb-1">-->
<!--        <button class="btn">One</button>-->
<!--        <button class="btn">Two</button>-->
<!--        <button class="btn">Three</button>-->
<!--      </div>-->

<!--      <div class="button-group mb-5">-->
<!--        <button class="btn iconed info">-->
<!--          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bell" role="img"-->
<!--               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline&#45;&#45;fa fa-bell fa-w-14 fa-3x">-->
<!--            <path fill="currentColor"-->
<!--                  d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"-->
<!--                  class=""></path>-->
<!--          </svg>-->
<!--        </button>-->
<!--        <button class="btn">Notify</button>-->
<!--      </div>-->

<!--    </template>-->

    <button class="btn">
      Button
    </button>

    <button class="btn primary">
      Button
    </button>

    <button class="btn error bordered">
      Button
    </button>

    <button class="btn rounded warning">
      Button
    </button>

    <button class="btn bordered rounded info">
      Button
    </button>

    <div class="button-group mb-1">
      <button class="btn">One</button>
      <button class="btn">Two</button>
      <button class="btn">Three</button>
    </div>

    <button class="btn iconed info">
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bell" role="img"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-bell fa-w-14 fa-3x">
        <path fill="currentColor"
              d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"
              class=""></path>
      </svg>
    </button>

    <button class="btn">Notify</button>

    <code>
      <pre>
    &lt;button class=&quot;btn&quot;&gt;
      Button
    &lt;/button&gt;

    &lt;button class=&quot;btn primary&quot;&gt;
      Button
    &lt;/button&gt;

    &lt;button class=&quot;btn error bordered&quot;&gt;
      Button
    &lt;/button&gt;

    &lt;button class=&quot;btn rounded warning&quot;&gt;
      Button
    &lt;/button&gt;

    &lt;button class=&quot;btn bordered rounded info&quot;&gt;
      Button
    &lt;/button&gt;

    &lt;div class=&quot;button-group mb-1&quot;&gt;
      &lt;button class=&quot;btn&quot;&gt;One&lt;/button&gt;
      &lt;button class=&quot;btn&quot;&gt;Two&lt;/button&gt;
      &lt;button class=&quot;btn&quot;&gt;Three&lt;/button&gt;
    &lt;/div&gt;

    &lt;button class=&quot;btn iconed info&quot;&gt;
      &lt;svg aria-hidden=&quot;true&quot; focusable=&quot;false&quot; data-prefix=&quot;far&quot; data-icon=&quot;bell&quot; role=&quot;img&quot;
           xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 448 512&quot; class=&quot;svg-inline--fa fa-bell fa-w-14 fa-3x&quot;&gt;
        &lt;path fill=&quot;currentColor&quot;
              d=&quot;M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z&quot;
              class=&quot;&quot;&gt;&lt;/path&gt;
      &lt;/svg&gt;
    &lt;/button&gt;

    &lt;button class=&quot;btn&quot;&gt;Notify&lt;/button&gt;
      </pre>
    </code>

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
        "primary",
        "secindary",
        "dark",

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

.btn.iconed > svg {
  height: .8rem;
}

</style>