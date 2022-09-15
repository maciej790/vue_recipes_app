<template>
  <div class="image">
    <img :src="image" alt="" />
  </div>
</template>
<script>
export default {
  name: 'RecipeImage',
  props: ['image'],
};
</script>
<style lang="scss">
.image {
  width: 90%;
  height: 500px;
  margin: 50px 0 0 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
</style>
