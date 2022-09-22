<template>
  <nav>
    <div class="left">
      <img src="../../assets/imgs/front_page_logo.png" alt="" />
      <button type="button">WINNER HISTORY</button>
      <button type="button">GAME RULE</button>
    </div>
    <div class="right">
      <div class="userNum">
        <img src="../../assets/imgs/user_num_icon.png" alt="" />
        <span>15,782.7837</span>
      </div>
      <div class="loggin">
        <button type="button" @click="store.commit('CHANGE_MODAL', 'login')">
          LOG IN
        </button>
      </div>
      <div class="user">
        <button type="button" @click="toggleShowInner">test888</button>
        <div :class="['userInner', showInner ? 'activeInner' : null]">
          <button type="button" @click="store.commit('CHANGE_MODAL', 'wallet')">
            Wallet
          </button>
          <button
            type="button"
            @click="store.commit('CHANGE_MODAL', 'withdraw')"
          >
            Withdraw
          </button>
          <button
            type="button"
            @click="store.commit('CHANGE_MODAL', 'depositstep1')"
          >
            Deposit
          </button>
          <button
            type="button"
            @click="store.commit('CHANGE_MODAL', 'settings')"
          >
            Settings
          </button>
          <button
            type="button"
            @click="store.commit('CHANGE_MODAL', 'account')"
          >
            Your Account
          </button>
          <button type="button" @click="store.commit('CHANGE_MODAL', 'logout')">
            Log Out
          </button>
        </div>
      </div>
      <button type="button">CN</button>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
import store from '../../store'

let showInner = ref(false)
function toggleShowInner() {
  showInner.value = !showInner.value
}
</script>
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
    div {
      margin: 0 0.5vw;
    }
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
    .user {
      position: relative;

      button {
        box-sizing: border-box;
        width: 8vw;
      }

      .userInner {
        position: absolute;
        left: 0.45vw;
        width: 8vw;
        border-top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
        border-radius: 0 0 0.3vw 0.3vw;
        z-index: 10;
        transition: all 0.5s;
        opacity: 0;
        transform: translateY(-20%);
        pointer-events: none;

        button {
          border: none;
          margin: 0;
          padding: 0.5vw 0;
          border-radius: 0;
        }
      }
      .activeInner {
        opacity: 1;
        transform: translateY(0%);
        pointer-events: all;
        border: 1px solid #552d9e;
        border-top: 0;
      }

      /* .userInner {
        position: absolute;
        border: 1.3px solid #552d9e;
        border-radius: 0 0 0.3vw 0.3vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 10;
        box-sizing: border-box;
        left: 0;
        top: bottom;
        transform: translate(-50%, 0);
        button {
          border: 0;
          margin: 0;
          padding: 0.5vw;
          border-radius: 0;
        }
        button:hover {
          background: #552d9e;
          color: #000;
        }
      } */
    }
  }
}
</style>
