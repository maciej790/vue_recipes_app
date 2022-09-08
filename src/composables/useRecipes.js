import { reactive } from 'vue';

const useRecipes = () => {
  const results = reactive({
    recipes: {},
    isError: false,
    isLoading: false,
  });

  const getRecipeData = async (url) => {
    results.isLoading = true;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error();
      }
      results.isError = false;
      results.recipes = data;
    } catch {
      results.isError = true;
    } finally {
      results.isLoading = false;
    }
  };

  return {
    results,
    getRecipeData,
  };
};

export default useRecipes;
