import { reactive } from 'vue';

const useSearchRecipes = () => {
  const results = reactive({
    recipes: {},
    isError: false,
    isLoading: false,
  });

  const getRecipes = async (url) => {
    results.isLoading = true;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error();
      }
      results.isError = false;
      results.recipes = data.results;
    } catch {
      results.isError = true;
    } finally {
      results.isLoading = false;
    }
  };

  return {
    getRecipes,
    results,
  };
};

export default useSearchRecipes;
