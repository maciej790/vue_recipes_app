<template>
  <div class="image">
    <img src="../assets/pizza.jpg" alt="" />
  </div>
</template>
<script>
export default {
  name: 'RecipeImage',
};
</script>
<style lang="scss">
.image {
  width: 80%;
  height: 500px;
  margin: 50px 0 0 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
</style>
