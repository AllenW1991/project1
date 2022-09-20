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
        <img
          src="../../../assets/imgs/popup_deposit_txt_1.png"
          alt=""
          class="titleImg"
        />
        <img
          src="../../../assets/imgs/main_page_deposit_chip.png"
          alt=""
          class="chipImg"
        />
        <p>Play Slot <span>Double UP</span></p>
        <img
          src="../../../assets/imgs/main_page_deposit_btn.png"
          alt=""
          class="depositImg"
        />
        <a href="">Game Rule</a>
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
  z-index: -1;
  opacity: 0;
  color: #fff;
  transition: all 0.3s;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 60%;
      }
      .titleImg {
        width: 100%;
      }
      .chipImg {
        width: 50%;
        margin: 1.5vh 0;
        cursor: pointer;
        transition: all 0.3s;
        transform: scale(1);
      }
      .chipImg:hover {
        transform: scale(1.1);
      }
      .depositImg {
        margin: 2vh 0;
        cursor: pointer;
        transition: all 0.3s;
        transform: scale(1);
      }
      .depositImg:hover {
        transform: scale(1.1);
      }

      p {
        font-size: 1.8vw;
        font-weight: bolder;
        span {
          color: yellow;
        }
      }
      a {
        font-size: 1.8vw;
        font-weight: bolder;
        text-decoration: none;
        color: #fff;
        border-bottom: 1px solid #fff;
      }
    }
  }
}
.active {
  opacity: 1;
  z-index: 15;
}
</style>
