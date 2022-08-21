import { ref } from "vue";

const usePopularRecipes = () => {
  const recipes = ref();
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.VUE_APP_KEY}&number=9`;

  const getPopularRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    recipes.value = data.recipes;
  };

  getPopularRecipes();

  return {
    recipes,
  };
};

export default usePopularRecipes;
