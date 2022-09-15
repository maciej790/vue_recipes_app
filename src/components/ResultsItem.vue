<template>
  <main class="item">
    <GoBackArrow />
    <h2 class="item-title">{{ recipes.title }}</h2>
    <RecipeImage :image="recipes.image" />
    <RecipeButtons />
  </main>
</template>
<script>
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
import RecipeButtons from './RecipeButtons.vue';
import GoBackArrow from './GoBackArrow.vue';
import RecipeImage from './RecipeImage.vue';
import useRecipes from '../composables/useRecipes';

export default {
  name: 'ResultsItem',
  components: { RecipeButtons, GoBackArrow, RecipeImage },
  props: ['results'],

  async setup() {
    const route = useRoute();

    const url = `https://api.spoonacular.com/recipes/${route.params.id}/information?apiKey=${process.env.VUE_APP_KEY}`;

    const { results, getRecipeData } = useRecipes();

    await getRecipeData(url);

    return {
      ...toRefs(results),
      getRecipeData,
    };
  },
};
</script>
<style lang="scss">
.item {
  display: flex;
  flex-direction: column;
  align-items: center;

  .item-title {
    text-align: center;
    margin: 50px 0 0 0;
    width: 90%;
  }
}
</style>
