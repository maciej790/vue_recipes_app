<template>
  <section class="popular">
    <h2 class="popular-title">Popular Recipes:</h2>
    <Splide :options="options" v-if="recipes.recipes">
      <SplideSlide v-for="recipe in recipes.recipes" :key="recipe.id">
        <RecipeCard :recipe="recipe" />
      </SplideSlide>
    </Splide>
  </section>
</template>
<script>
import { toRefs } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/splide/dist/css/splide.min.css';
import useRecipes from '../composables/useRecipes';
import RecipeCard from './RecipeCard.vue';

export default {
  name: 'PopularRecipes',
  components: {
    Splide,
    SplideSlide,
    RecipeCard,
  },

  setup() {
    const { results, getRecipeData } = useRecipes();

    const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.VUE_APP_KEY}&number=9`;

    getRecipeData(url);

    const options = {
      perPage: 4,
      arrows: false,
      pagination: false,
      drag: 'free',
      gap: '35px',
      breakpoints: {
        1350: {
          perPage: 2,
        },
        865: {
          perPage: 1,
          gap: '15px',
        },
      },
    };

    return {
      ...toRefs(results),
      getRecipeData,
      options,
    };
  },
};
</script>
<style lang="scss">
.popular {
  margin: 50px 0 0 0;
  width: 100%;
  text-align: center;
  padding: 0 20px 0 20px;

  .popular-title {
    margin: 0 0 20px 0;
  }
}
</style>
