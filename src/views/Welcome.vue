<template>
  <div class="welcomePage">
    <div class="container">
      <img src="../assets/imgs/front_page_logo.png" alt="" />
      <img src="../assets/imgs/slogan.png" alt="" />
      <button type="button" @click="router_enter">START</button>
      <div class="note">Entering this website is considered to be over 18+</div>
    </div>
  </div>
</template>
<script setup>
import router from '../router';

function router_enter() {
  router.push('/home');
}
</script>
<style lang="scss" scoped>
.welcomePage {
  width: 100%;
  background: #000;
  background-image: url('../assets/imgs/front_page_bg.png');
  background-repeat: repeat-x;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  .container {
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #552d9e;

    img {
      width: 40%;
    }
    button {
      color: #552d9e;
      background: rgba(255, 255, 255, 0);
      cursor: pointer;
      font-size: 1.2rem;
      border: 1px solid #552d9e;
      border-radius: 0.5vw;
      padding: 0.5vw 3vw;
      margin: 2vw 0;
      transition: all 0.3s;
    }
    button:hover {
      background: #552d9e;
      color: #fff;
    }
  }
}
</style>
