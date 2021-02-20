<template>
  <div>
    <div class="hidden">
      <slot></slot>
    </div>
    <pre class="mt-5">
{{code}}
  </pre>
  </div>
</template>

<script>
export default {
  name: "CodeComponent",
  data(){
    return ({
      code:'',
    })
  },
  mounted() {
    this.code = this.$slots.default[0].text
    let xstring = '';
    for(let i = 0; i < this.code.length;i++){
      xstring += this.code.charCodeAt(i) + ' '
    }
    console.log(xstring)
  }
}
</script>

<style scoped>

</style>