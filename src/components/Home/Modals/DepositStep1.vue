<template>
  <div
    :class="[
      'modal',
      store.state.activatedModal === 'depositstep1' ? 'active' : null,
    ]"
  >
    <span class="closeIcon" @click="store.commit('CHANGE_MODAL', '')">
      <i class="fa-solid fa-xmark"></i>
    </span>

    <div class="container">
      <div class="subTitle">
        <p>DEPOSIT USDT</p>
      </div>
      <div class="inputArea">
        <div class="balanceInfo">
          <div class="title">Total Balance</div>
          <div class="num">18,273.7837 USDT</div>
        </div>
        <div class="step">
          <div class="title">STEP1 : CHOOSE YOUR TIME ZONE</div>
        </div>
        <div class="btns">
          <div
            :class="['btn', activedBtn === 'minus' ? 'activeBtn' : null]"
            @click="changeBtn('minus')"
          >
            <img src="../../../assets/imgs/user_num_icon_minus.png" alt="" />
            <button type="button">AM – MINUS</button>
          </div>
          <div
            :class="['btn', activedBtn === 'plus' ? 'activeBtn' : null]"
            @click="changeBtn('plus')"
          >
            <img src="../../../assets/imgs/user_num_icon_plus.png" alt="" />
            <button type="button">PM – PLUS</button>
          </div>
        </div>
      </div>
      <button
        type="button"
        @click="store.commit('CHANGE_MODAL', 'depositstep2')"
      >
        NEXT STEP
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import store from '../../../store'

let activedBtn = ref('')
function changeBtn(target) {
  activedBtn.value = target
}
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transition: all 0.3s;
  transform: translate(-50%, -50%);
  width: 35vw;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;
  opacity: 0;

  h2 {
    font-size: 1.5vw;
    margin: 1rem 0;
  }
  p {
    font-size: 1vw;
  }
  .closeIcon {
    position: absolute;
    right: 0;
    top: 0%;
    color: gray;
    transition: all 0.3s;
    cursor: pointer;
    font-size: 1.5vw;
  }
  .closeIcon:hover {
    color: #fff;
  }

  .container {
    background: #361717;
    padding: 0 0.5rem;
    width: 100%;
    text-align: center;

    .subTitle {
      text-align: center;
      margin: 1rem 0;
      span {
        transition: all 0.3s;
        color: #5487f5;
        border-bottom: 1px solid #5487f5;
        cursor: pointer;
        margin: 0 0.2vw;
      }
      span:hover {
        color: #2258ca;
        border-bottom: 1px solid #2258ca;
      }
    }
    .inputArea {
      background: #25100f;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0.5rem;
      text-align: center;
      padding: 0.5vw;
      font-size: 0.8rem;

      .balanceInfo {
        background: #161010;
        width: 50%;
        padding: 1rem 0;
      }
      .btns {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 1rem 0;
        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 0 1vw;
          img {
            width: 30%;
            margin: 0 0.5vw;
          }
          button {
            width: 70%;
            background: #3f3f3f;
          }
          button:hover {
            transform: scale(1);
            background: #373030;
            color: #bdb6b6;
          }
        }
        .activeBtn {
          button {
            background: #670d0d;
          }
          button:hover {
            background: #530e0e;
          }
        }
      }
    }
    button {
      margin: 1rem 0;
      width: 15vw;
      font-size: 1vw;
      width: 30%;
      background: #670d0d;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.5rem 1rem;
      transform: scale(1);
      transition: all 0.3s;
    }
    button:hover {
      transform: scale(1.1);
    }
  }
}
.active {
  opacity: 1;
  z-index: 15;
}
</style>
