<template>
  <footer>
    <div class="left">
      <img src="../../assets/imgs/responsible_icon.png" alt="" />
    </div>
    <ul class="content">
      <li>BENEFITS</li>
      <li @click="routerChange('aware')">GAMBLE AWARE</li>
      <li>HOW TO PLAY</li>
      <li @click="routerChange('policy')">PRIVACY POLICY</li>
      <li @click="routerChange('terms')">TERMS OF USE</li>
    </ul>
    <div class="right">
      <img src="../../assets/imgs/bitcoin_casino_icon.png" alt="" />
      <img
        src="../../assets/imgs/eighteen_icon.png"
        alt=""
        class="eightteenIcon"
      />
    </div>
  </footer>
</template>
<script setup>
import router from '../../router';

function routerChange(target) {
  router.push(`/${target}`);
  console.log('test');
}
</script>
<style lang="scss" scoped>
li {
  list-style: none;
}
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #fff;
  background: #0f1014;
  padding: 1vw 2vw;
  box-sizing: border-box;
  margin-top: 10rem;
  .left {
    width: 8%;
    img {
      width: 100%;
    }
  }
  .right {
    width: 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 60%;
      object-fit: contain;
    }
    .eightteenIcon {
      width: 20%;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: 40vw;
    font-size: 0.5rem;
    font-weight: bold;
    li {
      transition: all 0.3s;
      cursor: pointer;
    }
    li:hover {
      color: #552d9e;
    }
  }
}
</style>
