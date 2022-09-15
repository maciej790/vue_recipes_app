<template>
  <div class="back" @click="$router.back()">
    <i class="fa-sharp fa-solid fa-circle-arrow-left fa-2x"></i>
  </div>
</template>
<script>
export default {
  name: 'GoBackArrow',
};
</script>
<style lang="scss">
.back {
  width: 100%;
  i {
    background: rgb(85, 215, 121);
    color: white;
    width: 70px;
    padding: 5px;
    border-radius: 100px;
    margin: 0 0 0 20px;
  }
}
</style>
