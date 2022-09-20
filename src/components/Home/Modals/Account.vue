<template>
  <div class="modal active">
    <span class="closeIcon"> <i class="fa-solid fa-xmark"></i> </span>

    <div class="container">
      <div class="subTitle">
        <p>My Account</p>
        <p></p>
      </div>
      <div class="inputArea">
        <div class="input">
          <p>PROFILE</p>
          <div class="btnsTop">
            <button type="button">24H</button>
            <button type="button">ALL</button>
          </div>
        </div>
        <div class="btnsBottom">
          <div class="input">
            <button type="button">Bet</button>
            <button type="button">0</button>
          </div>
          <div class="input">
            <button type="button">Win</button>
            <button type="button">0</button>
          </div>
          <div class="input">
            <button type="button">Chips</button>
            <button type="button">0</button>
          </div>
          <div class="input">
            <button type="button">Profit</button>
            <button type="button">0</button>
          </div>
        </div>
      </div>
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
      border: none;
      background: #5c3535;
      color: #fff;
      transition: all 0.3s;
      cursor: pointer;
      padding: 0.5rem 2rem;
      border-radius: 0.2rem;
    }
    button:hover {
      color: gray;
      background: #4d2a2a;
    }
    .btnsTop {
      background: #371919;
      margin: 0 auto;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 50%;
    }
    .btnsBottom {
      display: flex;
      align-content: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin-top: 1rem;
      .input {
        width: 45%;
        background: #371919;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2%;
        padding: 2% 5%;
        box-sizing: border-box;
        button {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          width: 50%;
          // margin: 0 0.2rem;
        }
        button:last-child {
          background: none;
        }
      }
    }
  }
}
.active {
  opacity: 1;
  z-index: 15;
}
</style>
