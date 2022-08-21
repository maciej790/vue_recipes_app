<template>
  <section class="popular">
    <h2 class="popular-title">Popular Recipes:</h2>
    <Splide :options="options" v-if="recipes">
      <SplideSlide v-for="recipe in recipes" :key="recipe.id">
        <RecipeCard :recipe="recipe" />
      </SplideSlide>
    </Splide>
  </section>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/splide/dist/css/splide.min.css';
import usePopularRecipes from '../composables/usePopularRecipes';
import RecipeCard from './RecipeCard.vue';

export default {
  name: 'PopularRecipes',
  components: {
    Splide,
    SplideSlide,
    RecipeCard,
  },

  setup() {
    const { recipes } = usePopularRecipes();

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
      recipes,
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
