<template>
  <section class="results">
    <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </section>
</template>
<script>
import RecipeCard from './RecipeCard.vue';

export default {
  name: 'Results',
  components: { RecipeCard },
  props: ['recipes'],
};
</script>
<style lang="scss">
.results {
  width: 100%;
  margin: 100px 0 0 0;
  padding: 0 20px 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(1fr);
  grid-row-gap: 25px;
  text-align: center;
}
</style>
