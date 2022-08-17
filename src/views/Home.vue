<template>
  <main class="home">
    <h1 class="home-title">Find Your Recipe!</h1>
    <SearchInput />
    <Categories />
    <PopularRecipes />
  </main>
</template>
<script>
import SearchInput from '../components/SearchInput.vue';
import Categories from '../components/Categories.vue';
import PopularRecipes from '../components/PopularRecipes.vue';

export default {
  name: 'Home',
  components: {
    SearchInput,
    Categories,
    PopularRecipes,
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0 0;
  background: rgb(244, 248, 248);
}
</style>
