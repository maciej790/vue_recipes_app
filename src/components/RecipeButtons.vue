<template>
  <div class="buttons">
    <button
      v-for="(item, index) in buttons"
      :key="index"
      class="button"
      @click="handleButtonClick"
      :class="{ active: activeOption === item }"
    >
      {{ item }}
    </button>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'RecipeButtons',

  setup(props, { emit }) {
    const activeOption = ref('description');

    const buttons = ['description', 'ingredients'];

    const handleButtonClick = () => {
      activeOption.value = activeOption.value === 'description' ? 'ingredients' : 'description';
      emit('handleButtonClick', activeOption);
    };

    return {
      activeOption,
      handleButtonClick,
      buttons,
    };
  },
};
</script>
<style lang="scss" scoped>
.buttons {
  margin: 50px 0 0 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button {
    border: none;
    outline: none;
    height: 60px;
    font-size: 19px;
    width: 40%;
    color: rgb(180, 173, 173);
    background: white;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 2px 2px 8px -4px rgba(66, 68, 90, 1);

    &.active {
      background: rgb(85, 215, 121);
      color: white;
    }
  }
}
</style>
