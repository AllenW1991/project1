<template>
  <div class="modal">
    <span class="closeIcon"> <i class="fa-solid fa-xmark"></i> </span>
    <div class="container">
      <div class="subTitle">
        <p>WITHDRAW USDT</p>
      </div>
      <div class="inputArea">
        <ul class="rules">
          <li>
            MIN AMOUNT
            <br />
            3USDT
          </li>
          <li>
            MAX AMOUNT
            <br />
            18,061.7837USDT
          </li>
          <li>
            WITHDRAW FEE
            <br />
            2USDT
          </li>
        </ul>
        <div class="account input">
          <p>WITHDRAW TO THE FOLLOWING ADDRESS</p>
          <input type="text" placeholder="please enter address" />
        </div>
        <div class="withdraw input">
          <p>AMOUNT TO WITHDRAW</p>
          <input type="number" />
          <div class="icon">
            <img src="../../../assets/imgs/usdt_icon.png" alt="" />
            <span>MAX</span>
          </div>
        </div>
        <div class="password input">
          <p>ACCOUNT PASSWORD</p>
          <input type="password" placeholder="please enter password" />
        </div>
        <span>*Address is required </span>
      </div>
      <button type="button">REQUEST WITHDRAW</button>
      <p class="note">
        *Warning Please confirm your withdrawal address. Address can only be TRC
        address Once the withdrawal request is sent, the request cannot be
        cancelled. The bet amount of the slot must be more than the deposit
        value that the withdrawal can be proceed.
      </p>
    </div>
  </div>
</template>
<script setup></script>
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

      ul,
      li {
        list-style: none;
      }
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        li {
          background: #101010;
          font-size: 1vw;
          padding: 1vw;
        }
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
      .withdraw {
        position: relative;
        input {
          padding-left: 5%;
        }
        .icon {
          position: absolute;
          left: 0;
          bottom: 0%;
          transform: translate(0%, 15%);
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          pointer-events: none;
          img {
            width: 5%;
          }
          span {
            cursor: pointer;
            font-size: 0.8rem;
            pointer-events: all;
            color: #fff;
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
    span {
      color: firebrick;
      margin: 1rem 0;
      font-size: 1vw;
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
    .note {
      text-align: left;
      padding: 1vw;
    }
  }
}
.active {
  opacity: 1;
  z-index: 15;
}
</style>
