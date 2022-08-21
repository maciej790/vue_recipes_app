<template>
  <main class="wrapper">
    <h1 class="home-title">Find Your Recipe!</h1>
    <SearchInput v-model:search="inputValue" />
    <Categories @searchByCategory="searchByCategory" />
    <PopularRecipes v-if="!recipes.length" />
    <Loading v-if="isLoading" />
    <Error v-else-if="isError" />
    <transition name="fade">
      <Results v-if="recipes.length && !isError && !isLoading" :recipes="recipes" />
    </transition>
  </main>
</template>
<script>
import { ref, watch, toRefs } from 'vue';
import SearchInput from '../components/SearchInput.vue';
import Categories from '../components/Categories.vue';
import PopularRecipes from '../components/PopularRecipes.vue';
import useSearchRecipes from '../composables/useSearchRecipes';
import Results from '../components/Results.vue';
import Loading from '../components/Loading.vue';
import Error from '../components/Error.vue';

export default {
  name: 'Home',
  components: {
    SearchInput,
    Categories,
    PopularRecipes,
    Results,
    Loading,
    Error,
  },

  setup() {
    const inputValue = ref('');
    const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.VUE_APP_KEY}`;
    const { results, getRecipes } = useSearchRecipes();

    watch(inputValue, () => {
      const url = `${baseUrl}&query=${inputValue.value}`;
      getRecipes(url);
    });

    const searchByCategory = (category) => {
      const url = `${baseUrl}&type=${category}`;
      getRecipes(url);
    };

    return {
      inputValue,
      ...toRefs(results),
      getRecipes,
      searchByCategory,
    };
  },
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0 0;
  background: rgb(244, 248, 248);
}
</style>
