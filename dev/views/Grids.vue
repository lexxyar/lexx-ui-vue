<template>
  <div class="container">
    <div class="row">
      <div class="col">
        col
      </div>
      <div class="col">
        col
      </div>
    </div>
    <div class="row">
      <div class="col">
        col
      </div>
      <div class="col">
        col
      </div>
      <div class="col">
        col
      </div>
    </div>
    <div class="row">
      <div class="col">
        col
      </div>
      <div class="col-6">
        col-6
      </div>
      <div class="col">
        col
      </div>
    </div>
    <div class="row">
      <div class="col-8">col-8</div>
      <div class="col-4">col-4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grids"
}
</script>

<style scoped>
*[class^=col] {
  background-color: gray;
  border: 1px solid #333333;
  padding: 2rem;
}
</style>