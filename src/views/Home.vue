<template>
  <div class="home">
    <Nav />
    <div class="content">
      <KeyVision />
      <div class="gameArea">
        <button type="button">
          <img src="../assets/imgs/btn_BigWin.png" alt="" />
        </button>
      </div>
      <HistoryTable />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Nav from '../components/Nav/index.vue';
import Footer from '../components/Footer/index.vue';

import KeyVision from '../components/Home/KeyVision/index.vue';
import HistoryTable from '../components/Home/HistoryTable/index.vue';
</script>
<style lang="scss" scoped>
.home {
  background: #000;
  height: 100vh;
  overflow: scroll;
  .content {
    width: 80%;
    margin: 0 auto;
    position: relative;

    .gameArea {
      background: rgba(128, 128, 128, 0.135);
      height: 50vh;
      margin: 5rem 0;
      button {
        background: rgba(255, 255, 255, 0);
        cursor: pointer;
        width: 20vw;
        margin: 0 auto;
        border: none;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0%);
        img {
          transform: scale(1);
          transition: all 0.3s;
          width: 100%;
        }
      }
      button:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
