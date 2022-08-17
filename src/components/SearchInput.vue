<template>
  <form class="search">
    <label class="search-icon" for="search"><i class="fa-solid fa-magnifying-glass"></i></label>
    <input class="search-input" type="text" placeholder="Search Your Dish" name="search" />
  </form>
</template>
<script>
export default {
  name: 'SearchInput',
};
</script>
<style lang="scss" scoped>
.search {
  width: 80%;
  margin: 50px 0 0 0;
  position: sticky;
  top: 30px;
  left: 0;
  z-index: 999;

  .search-icon {
    position: absolute;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 20px;
    color: rgb(180, 173, 173);
    font-size: 22px;
  }
  .search-input {
    width: 100%;
    height: 60px;
    border: none;
    outline: none;
    border-radius: 20px;
    padding: 0 0 0 60px;
    font-size: 22px;
    box-shadow: 2px 2px 8px -4px rgba(66, 68, 90, 1);

    &::placeholder {
      color: rgb(180, 173, 173);
      font-size: 20px;
    }
  }
}
</style>
