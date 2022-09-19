<template>
  <nav>
    <div class="left">
      <img src="../../assets/imgs/front_page_logo.png" alt="" />
      <button type="button">WINNER HISTORY</button>
      <button type="button">GAME RULE</button>
    </div>
    <div class="right">
      <!-- <div class="userNum">
        <img src="../../assets/imgs/user_num_icon.png" alt="" />
        <span>15,782.7837</span>
      </div> -->
      <button type="button">LOG IN</button>
      <!-- <button type="button">test 888</button> -->
      <button type="button">CN</button>
    </div>
  </nav>
</template>
<script setup></script>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2vw;

  button {
    color: #552d9e;
    background: rgba(255, 255, 255, 0);
    cursor: pointer;
    font-size: 1vw;
    border: 1px solid #552d9e;
    border-radius: 0.3vw;
    padding: 0.2vw 2vw;
    margin: 0vw 0.5vw;
    transition: all 0.3s;
  }
  button:hover {
    background: #552d9e;
    color: #000;
  }
  .left {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 50vw;
    img {
      width: 8vw;
    }
  }
  .right {
    display: flex;
    justify-content: end;
    width: 50vw;
    .userNum {
      border: 1px solid #fff;
      border-radius: 0.3vw;
      color: #fff;
      font-size: 1vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0.2vw 1vw;

      img {
        width: 1.2vw;
        margin-right: 1vw;
      }
    }
  }
}
</style>
