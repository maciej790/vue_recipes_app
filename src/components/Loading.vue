<template>
  <div class="loading">
    <i class="fa-solid fa-circle-notch fa-7x"></i>
  </div>
</template>
<script>
export default {
  name: 'Loading',
};
</script>
<style lang="scss" scoped>
.loading {
  width: 250px;
  height: 250px;
  color: rgb(180, 173, 173);
  margin: 50px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotate-center 0.6s ease-in-out infinite both;

  @keyframes rotate-center {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
