<template>
  <main class="wrapper">
    <h1 class="home-title">Find Your Recipe!</h1>
    <SearchInput v-model:search="inputValue" />
    <Categories @searchByCategory="searchByCategory" />
    <PopularRecipes />
    <p v-if="recipes && !isError && !isLoading">
      <ul v-for="item in recipes" :key="item">
        <li>{{item.title}}</li>
      </ul>
    </p>
    <p v-if="isLoading">LOADING...</p>
    <p v-else-if="isError">ERROR!</p>
  </main>
</template>
<script>
import { ref, watch, toRefs } from 'vue';
import SearchInput from '../components/SearchInput.vue';
import Categories from '../components/Categories.vue';
import PopularRecipes from '../components/PopularRecipes.vue';
import useSearchRecipes from '../composables/useSearchRecipes';

export default {
  name: 'Home',
  components: {
    SearchInput,
    Categories,
    PopularRecipes,
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
