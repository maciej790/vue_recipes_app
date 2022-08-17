<template>
  <section class="popular">
    <h2 class="popular-title">Popular Recipes:</h2>
    <Splide :options="options" v-if="recipes">
      <SplideSlide v-for="recipe in recipes" :key="recipe.id">
        <div class="popular-card">
          <img class="card-img" :src="recipe.image" alt="slide" />
          <div class="card-description">
            <p class="card-title">{{ recipe.title }}</p>
            <p class="card-info">
              {{ `Done in ${recipe.readyInMinutes} minutes` }}
            </p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </section>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/splide/dist/css/splide.min.css';
import usePopularRecipes from '../composables/usePopularRecipes';

export default {
  name: 'PopularRecipes',
  components: {
    Splide,
    SplideSlide,
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
<style lang="scss" scoped>
.popular {
  margin: 50px 0 0 0;
  width: 100%;
  text-align: center;
  padding: 0 20px 0 20px;

  .popular-title {
    margin: 0 0 20px 0;
  }

  .popular-card {
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
}
</style>
