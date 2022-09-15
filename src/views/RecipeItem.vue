<template>
  <div class="wrapper">
    <GoBackArrow />
    <h2 class="title">{{recipes.title}}</h2>
    <RecipeImage :image="recipes.image"/>
    <RecipeButtons />
  </div>
</template>
<script>
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
import RecipeImage from '../components/RecipeImage.vue';
import GoBackArrow from '../components/GoBackArrow.vue';
import useRecipes from '../composables/useRecipes';
import RecipeButtons from '../components/RecipeButtons.vue';

export default {
  name: 'RecipeItem',
  components: { RecipeImage, GoBackArrow, RecipeButtons },

  setup() {
    const route = useRoute();

    const { results, getRecipeData } = useRecipes();

    const url = `https://api.spoonacular.com/recipes/${route.params.id}/information?apiKey=${process.env.VUE_APP_KEY}`;

    getRecipeData(url);

    return {
      ...toRefs(results),
      getRecipeData,
    };
  },
};
</script>
<style lang="scss" scoped>
  .wrapper{
    .title{
      text-align: center;
      margin: 20px 0 0 0;
    }
  }
</style>
