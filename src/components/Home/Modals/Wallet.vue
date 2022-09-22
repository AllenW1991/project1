<template>
  <div
    :class="[
      'modal',
      store.state.activatedModal === 'wallet' ? 'active' : null,
    ]"
  >
    <div class="title">
      <h2>Wallet</h2>
    </div>
    <div class="container">
      <span class="closeIcon" @click="store.commit('CHANGE_MODAL', '')">
        <i class="fa-solid fa-xmark"></i>
      </span>
      <div class="inputArea">
        <div class="input">
          <p>Wallet Balance</p>
          <div class="wrap">
            <div class="left">
              <img src="../../../assets/imgs/usdt_icon.png" alt="" />
              <span>18,273.7837</span>
            </div>
            <div class="right">
              <button type="button">DEPOSIT</button>
              <button type="button">WITHDRAW</button>
            </div>
          </div>
        </div>
        <div class="input">
          <p>Transcation History</p>
          <div class="switchBtns">
            <button
              type="button"
              @click="getList('deposit')"
              :class="[activedList === 'deposit' ? 'activatedBtn' : null]"
            >
              DEPOSIT
            </button>
            <button
              type="button"
              @click="getList('withdraw')"
              :class="[activedList === 'withdraw' ? 'activatedBtn' : null]"
            >
              WITHDRAW
            </button>
          </div>
          <ul class="depositList" v-if="activedList === 'deposit'">
            <li>
              <div class="date">DATE</div>
              <div class="time">TIME</div>
              <div class="amount">AMOUNT</div>
              <div class="status">STATUS</div>
            </li>
            <li>
              <div class="date">2022/09/01</div>
              <div class="time">23:33:54</div>
              <div class="amount">800 USDT</div>
              <div class="status">SUCCESS</div>
            </li>
            <li>
              <div class="date">2022/09/01</div>
              <div class="time">23:33:54</div>
              <div class="amount">800 USDT</div>
              <div class="status">SUCCESS</div>
            </li>
            <li>
              <div class="date">2022/09/01</div>
              <div class="time">23:33:54</div>
              <div class="amount">800 USDT</div>
              <div class="status">SUCCESS</div>
            </li>
            <li>
              <div class="date">2022/09/01</div>
              <div class="time">23:33:54</div>
              <div class="amount">800 USDT</div>
              <div class="status">SUCCESS</div>
            </li>
            <li>
              <div class="date">2022/09/01</div>
              <div class="time">23:33:54</div>
              <div class="amount">800 USDT</div>
              <div class="status">SUCCESS</div>
            </li>
          </ul>

          <ul class="withdrawList" v-if="activedList === 'withdraw'">
            <li>
              <div class="date">DATE</div>
              <div class="time">TIME</div>
              <div class="amount">AMOUNT</div>
            </li>
            <li>
              <div class="date">2022/09/02</div>
              <div class="time">02:28:11</div>
              <div class="amount">30 USDT</div>
            </li>
            <li>
              <div class="date">2022/09/02</div>
              <div class="time">02:28:11</div>
              <div class="amount">30 USDT</div>
            </li>
            <li>
              <div class="date">2022/09/02</div>
              <div class="time">02:28:11</div>
              <div class="amount">30 USDT</div>
            </li>
            <li>
              <div class="date">2022/09/02</div>
              <div class="time">02:28:11</div>
              <div class="amount">30 USDT</div>
            </li>
            <li>
              <div class="date">2022/09/02</div>
              <div class="time">02:28:11</div>
              <div class="amount">30 USDT</div>
            </li>
            <li>
              <div class="date">2022/09/02</div>
              <div class="time">02:28:11</div>
              <div class="amount">2,116.4333 USDT</div>
            </li>
          </ul>
        </div>
      </div>
      <button type="button" @click="store.commit('CHANGE_MODAL', '')">
        BACK
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import store from '../../../store'

let activedList = ref('deposit')
function getList(value) {
  activedList.value = value
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
    right: 0.5vw;
    top: 0;
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
    padding: 2rem 0.5rem;
    width: 100%;
    text-align: center;
    position: relative;

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
      input {
        width: 100%;
        background: #371919;
        border: none;
        transition: all 0.3s;
        padding: 0.5rem;
        box-sizing: border-box;
        color: #fff;
      }
      input:focus {
        outline: #2258ca;
      }
      .input {
        width: 100%;
        p {
          margin: 0.5rem 0;
        }
        .wrap {
          background: #371919;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5vw 1vw;
          .left {
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            img {
              width: 15%;
              margin-right: 1vw;
            }
          }
          .right {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            button {
              margin: 0;
              padding: 0;
              background: #452d2d;
              box-sizing: border-box;
              width: auto;
              padding: 0.5vw 1vw;
              margin: 0 0.5vw;
            }
            button:hover {
              transform: scale(1);
              background: #3e2323;
              color: #776363;
            }
          }
        }
        .switchBtns {
          button {
            margin: 0;
            padding: 0;
            background: none;
            border-radius: 0;
            padding: 0.5rem 0;
            width: 25%;
            box-sizing: border-box;
            height: 5vh;
            border-bottom: 2px solid rgba(0, 0, 0, 0);
          }
          button:hover {
            transform: scale(1);
            border-bottom: 2px solid #fff;
          }
          .activatedBtn {
            border-bottom: 2px solid #fff;
          }
        }
        .depositList {
          height: 30vh;
          overflow: scroll;

          li {
            margin: 0.5rem 0;
            display: flex;
            font-size: 1vw;
            align-items: center;
            justify-content: center;
            .date {
              flex: 0.2;
            }
            .time {
              flex: 0.2;
            }
            .amount {
              flex: 0.2;
            }
            .status {
              flex: 0.2;
            }
          }
        }
        .withdrawList {
          height: 30vh;
          overflow: scroll;
          li {
            margin: 0.5rem 0;
            display: flex;
            font-size: 1vw;
            align-items: center;
            justify-content: center;
            .date {
              flex: 0.2;
            }
            .time {
              flex: 0.2;
            }
            .amount {
              flex: 0.3;
            }
          }
        }
      }
      .other {
        margin: 1rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .rememberUser {
          display: flex;
          align-items: center;
          p {
            width: 100%;
            white-space: nowrap;
          }
          input {
            margin: 0 0.5vw;
          }
        }
        .forget {
          transition: all 0.3s;
          cursor: pointer;
          color: #5487f5;
        }
        .forget:hover {
          color: #2258ca;
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
