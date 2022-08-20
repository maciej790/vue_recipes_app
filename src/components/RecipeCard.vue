<template>
  <div class="card">
    <img class="card-img" :src="recipe.image" alt="slide" />
    <div class="card-description">
      <p class="card-title">{{ recipe.title }}</p>
      <p class="card-info">
        {{ `Done in ${recipe.readyInMinutes} minutes` }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemCard',
  props: ['recipe'],
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  height: 300px;
  background: black;
  overflow: hidden;
  border-radius: 20px;

  .card-img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: relative;
    object-fit: cover;
    opacity: 0.4;
  }

  .card-description {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: white;
    text-align: left;

    .card-title {
      font-weight: bold;
      font-size: 28px;
      text-align: left;
    }

    .card-info {
      margin: 20px 0 0 0;
      font-size: 18px;
    }
  }
}
</style>
