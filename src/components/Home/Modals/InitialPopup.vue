<template>
  <div class="initialPopup">
    <div class="bg">
      <div class="closeButton">
        <img src="../../../assets/imgs/popup_esc_btn.png" alt="" />
      </div>
      <img src="../../../assets/imgs/popup_bg.png" alt="" />
      <div class="title">
        <img src="../../../assets/imgs/popup_deposit_title.png" alt="" />
      </div>
      <div class="innerContent">
        <img src="../../../assets/imgs/popup_deposit_txt_1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.initialPopup {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35vw;
  box-sizing: border-box;
  z-index: 15;
  color: #fff;
  .bg {
    width: 100%;
    img {
      width: 100%;
    }
    .closeButton {
      position: absolute;
      top: 0;
      right: 0;
      width: 3vw;
      cursor: pointer;
    }
    .title {
      width: 70%;
      position: absolute;
      top: 7%;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .innerContent {
      width: 70%;
      position: absolute;
      top: 22%;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}
</style>
