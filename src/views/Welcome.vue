<template>
  <main class="welcome">
    <section class="content">
      <h1 class="content-title">Cooking Experience Like a Chef!</h1>
      <p class="content-description">
        Lets make a delicious dish with the best recipe for the family
      </p>
      <router-link class="content-btn" to="/Home" tag="button">Lets Go!</router-link>
    </section>
  </main>
</template>
<script>
export default {
  name: 'Welcome',
};
</script>
<style lang="scss" scoped>
.welcome {
  width: 100%;
  min-height: 100vh;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/hamburger_welcome.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px 0 20px;
    text-align: center;
    font-size: 22px;

    .content-title {
      margin: 0 0 30px 0;
      line-height: 180%;
    }

    .content-description {
      margin: 0 0 60px 0;
    }

    .content-btn {
      border: none;
      outline: none;
      width: 60%;
      height: 70px;
      border-radius: 100px;
      border: 4px solid white;
      background: rgb(85, 215, 121);
      font-weight: bold;
      font-size: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      transition: transform 0.3s ease-in-out;
      text-decoration: none;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
