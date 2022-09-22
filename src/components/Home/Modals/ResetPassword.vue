<template>
  <div
    :class="[
      'modal',
      store.state.activatedModal === 'resetpassword' ? 'active' : null,
    ]"
  >
    <span @click="store.commit('CHANGE_MODAL', '')">
      <i class="fa-solid fa-xmark"></i>
    </span>
    <div class="title">
      <h2>Password Reset</h2>
    </div>
    <div class="container">
      <div class="subTitle">
        <p>Remember your password ? <span> Log in</span></p>
        <p>
          Enter the email address you used to register and we'll send you the
          password reset instructions.
        </p>
      </div>
      <div class="inputArea">
        <div class="account input">
          <p>E-MAIL ADDRESS</p>
          <input type="text" placeholder="please enter email" />
        </div>
      </div>
      <button type="button">SEND RESET MAIL</button>
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
    top: 17%;
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
      p:last-child {
        text-align: left;
        margin: 1rem 0;
      }
    }
    .inputArea {
      background: #25100f;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0.5rem;
      text-align: center;
      padding: 0rem 0.5rem;
      padding-bottom: 2rem;
      overflow: scroll;
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
      background: #670d0d;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.5rem 1rem;
      transform: scale(1);
      transition: all 0.3s;
      font-size: 1vw;
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
