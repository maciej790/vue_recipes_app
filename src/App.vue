<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat Alternates", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(244, 248, 248);
}
</style>
