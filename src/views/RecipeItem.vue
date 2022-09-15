<template>
  <div class="wrapper">
    <Suspense>
      <ResultsItem />
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>
<script>
import Loading from '../components/Loading.vue';
import ResultsItem from '../components/ResultsItem.vue';

export default {
  name: 'RecipeItem',
  components: {
    Loading,
    ResultsItem,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  .title {
    text-align: center;
    margin: 20px 0 0 0;
  }
}
</style>
