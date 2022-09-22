<template>
  <div
    :class="[
      'modal',
      store.state.activatedModal === 'account' ? 'active' : null,
    ]"
  >
    <span class="closeIcon" @click="store.commit('CHANGE_MODAL', '')">
      <i class="fa-solid fa-xmark"></i>
    </span>

    <div class="container">
      <div class="subTitle">
        <p>My Account</p>
      </div>
      <div class="inputArea">
        <div class="account input">
          <p>Profile</p>
          <div class="btnsTop">
            <button type="button">24H</button>
            <button type="button">ALL</button>
          </div>
          <ul class="btnsBottom">
            <li>
              <button type="button">Bet</button>
              <button type="button">0</button>
            </li>
            <li>
              <button type="button">Win</button>
              <button type="button">0</button>
            </li>
            <li>
              <button type="button">Chips</button>
              <button type="button">0</button>
            </li>
            <li>
              <button type="button">Profit</button>
              <button type="button">0%</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import store from '../../../store'
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
      padding: 0.5vw 1vw;
      margin: 1vw 0;
      li,
      ul {
        list-style: none;
      }
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
      }
      button {
        background: #5c3535;
        color: #fff;
        border: none;
        width: 50%;
        border-radius: 0.25rem;
        transition: all 0.3s;
        cursor: pointer;
      }
      button:hover {
        background: #4d2a2a;
        color: #afa3a3;
      }
      .btnsTop {
        background: #371919;
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        button {
          font-size: 1vw;
          margin: 0 0.5vw;
          padding: 0.5vw 0;
        }
      }
      .btnsBottom {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        margin: 2rem 0;
        li {
          width: 45%;
          display: flex;
          padding: 0.5vw;
          margin: 0.2vw;
          background: #371919;

          button {
            font-size: 1vw;
            margin: 0 0.5vw;
            padding: 1vw;
          }
          button:last-child {
            background: none;
          }
        }
      }
    }
    // button {
    //   margin: 1rem 0;
    //   width: 15vw;
    //   font-size: 1vw;
    //   width: 30%;
    //   background: #670d0d;
    //   color: #fff;
    //   border: none;
    //   cursor: pointer;
    //   border-radius: 0.2rem;
    //   padding: 0.5rem 1rem;
    //   transform: scale(1);
    //   transition: all 0.3s;
    // }
    // button:hover {
    //   transform: scale(1.1);
    // }
  }
}
.active {
  opacity: 1;
  z-index: 15;
}
</style>
