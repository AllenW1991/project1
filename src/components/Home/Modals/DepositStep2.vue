<template>
  <div class="modal">
    <span class="closeIcon"> <i class="fa-solid fa-xmark"></i> </span>

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
          <div class="title">
            STEP2 : <br />
            DEPOSIT TRANSFER USDT TO THE FOLLOWING ADDRESS
          </div>
        </div>
        <div class="input">
          <div class="wrap">
            <div class="left">
              <img src="../../../assets/imgs/usdt_icon.png" alt="" />
              <span>TS6hjfFMkwts1c7U1hwBqgkwQV4Kw5JLkj</span>
            </div>
          </div>
          <div class="qrcode">
            <img src="../../../assets/imgs/qrcode.png" alt="" />
          </div>
        </div>
      </div>
      <div class="btns">
        <button type="button">CLAIM MY DEPOSIT</button
        ><button type="button">COPY ADDRESS</button>
      </div>
      <p class="note">
        *Warning : Please confirm that this address can only receive TRC USDT
        and protect your funds, we will not refund once the deposit successful.
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
      font-size: 0.8rem;
      .input {
        width: 100%;

        .wrap {
          background: #371919;
          padding: 0.5vw 1vw;
          margin: 1rem 0;
          .left {
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            img {
              width: 5%;
              margin-right: 1vw;
            }
          }
        }
        .qrcode {
          width: 30%;
          margin: 1rem auto;
          img {
            width: 100%;
          }
        }
      }

      .balanceInfo {
        background: #161010;
        width: 50%;
        padding: 1rem 0;
      }
    }
    .btns {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
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
      width: 40%;
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
