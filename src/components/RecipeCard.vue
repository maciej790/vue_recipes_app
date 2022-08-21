<template>
  <div class="card">
    <img class="card-img" :src="recipe.image" alt="slide" />
    <div class="card-description">
      <p class="card-title">{{ recipe.title }}</p>
      <p class="card-info" v-if="recipe.readyInMinutes">
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
<style lang="scss">
.card {
  width: 100%;
  height: 300px;
  background: black;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

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
    color: white;
    text-align: left;
    width: 100%;
    padding: 30px;

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
