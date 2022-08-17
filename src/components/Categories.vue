<template>
  <section class="categories">
    <h2>Popular categories:</h2>
    <ul class="categories-box">
      <li class="categories-item" v-for="(category, index) in categories" :key="index">
        <button
          class="categories-btn"
          :class="{ active: index === activeIndex }"
          @click="handleButtonClick(index)"
        >
          <p>{{ category }}</p>
        </button>
      </li>
    </ul>
  </section>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'Categories',

  setup() {
    const activeIndex = ref(null);

    const categories = ['breakfast', 'soup', 'dessert', 'fingerfood', 'drink'];

    const handleButtonClick = (index) => {
      activeIndex.value = index;
    };

    return {
      categories,
      activeIndex,
      handleButtonClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.categories {
  width: 100%;
  margin: 30px 0 0 0;
  text-align: center;
  .categories-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0 0 0;

    .categories-item {
      list-style-type: none;
      .categories-btn {
        border: none;
        outline: none;
        font-size: 19px;
        text-align: center;
        background: white;
        color: rgb(180, 173, 173);
        width: 100px;
        height: 60px;
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 2px 2px 8px -4px rgba(66, 68, 90, 1);

        &.active {
          background: rgb(85, 215, 121);
          color: white;
        }
      }
    }
  }
}
</style>
