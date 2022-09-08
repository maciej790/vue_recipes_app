<template>
  <div class="wrapper">
    <GoBackArrow />
    {{$route.params.id}}
    <RecipeImage />
  </div>
</template>
<script>
// import { useRoute } from 'vue-router';
import RecipeImage from '../components/RecipeImage.vue';
import GoBackArrow from '../components/GoBackArrow.vue';
// import useSearchRecipes from '../composables/useSearchRecipes';

export default {
  name: 'RecipeItem',
  components: { RecipeImage, GoBackArrow },

  // setup() {
  //   const route = useRoute();

  //   const { results, getRecipes } = useSearchRecipes();

  //   const url = `https://api.spoonacular.com/recipes/${route.params.id}/information?apiKey=${process.env.VUE_APP_KEY}`;

  //   getRecipes(url);

  //   return {
  //     results,
  //     getRecipes,
  //   };
  // },
};
</script>
<style lang="scss" scoped>
  .wrapper{

  }
</style>
