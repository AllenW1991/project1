<template>
  <div class="home">
    <!-- <div class="shadow"></div> -->
    <Nav />
    <div class="content">
      <KeyVision />
      <div class="gameArea">
        <button type="button">
          <!-- <img src="../assets/imgs/btn_BigWin.png" alt="" /> -->
          <!-- <img src="../assets/imgs/btn_View my rewards.png" alt="" /> -->
          <img src="../assets/imgs/btn_GoSlot.png" alt="" />
        </button>
        <!-- max rewards -->
        <div class="rewards">
          <img src="../assets/imgs/rewardbox_bg.png" alt="" />
          <div class="title">
            <img src="../assets/imgs/rewardbox_title.png" alt="" />
          </div>
          <ul class="items">
            <li>
              <div class="time">TIME ZONE</div>
              <div class="reward">TIME ZONE REWARDS</div>
              <div class="acerageAPY">AVERAGE APY</div>
              <div class="winner">TIME TO LAST WINNER</div>
            </li>
            <li>
              <div class="time">
                <img src="../assets/imgs/chip_remove_btn.png" alt="" />
                <!-- <img src="../assets/imgs/chip_add_btn.png" alt="" /> -->
              </div>
              <div class="reward">
                <p>1,000</p>
              </div>
              <div class="acerageAPY">
                <p>1,000%</p>
              </div>
              <div class="winner">
                <p class="top">
                  <span>16</span> : <span>59</span> : <span>48</span>
                </p>
                <p class="bottom">
                  <span>Hrs</span> <span>Min</span> <span>Sec</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- games slider -->
      </div>
      <HistoryTable />
    </div>
    <Footer />

    <InitialModal />
    <LoginModal />
    <SignUpModal />
    <ResetPasswordModal />
    <LogoutModal />
    <AccountModal />
    <SettingsModal />
    <WithdrawModal />
    <WalletModal />
    <DepositStep1Modal />
    <DepositStep2Modal />
    <CheckDepositModal />
  </div>
</template>
<script setup>
import Nav from '../components/Nav/index.vue';
import Footer from '../components/Footer/index.vue';

import KeyVision from '../components/Home/KeyVision/index.vue';
import HistoryTable from '../components/Home/HistoryTable/index.vue';

import InitialModal from '../components/Home/Modals/Initial.vue';
import LoginModal from '../components/Home/Modals/Login.vue';
import SignUpModal from '../components/Home/Modals/SignUp.vue';
import ResetPasswordModal from '../components/Home/Modals/ResetPassword.vue';
import LogoutModal from '../components/Home/Modals/Logout.vue';
import AccountModal from '../components/Home/Modals/Account.vue';
import SettingsModal from '../components/Home/Modals/Settings.vue';
import WithdrawModal from '../components/Home/Modals/Withdraw.vue';
import WalletModal from '../components/Home/Modals/Wallet.vue';
import CheckDepositModal from '../components/Home/Modals/CheckDeposit.vue';
import DepositStep1Modal from '../components/Home/Modals/DepositStep1.vue';
import DepositStep2Modal from '../components/Home/Modals/DepositStep2.vue';
</script>
<style lang="scss" scoped>
.home {
  background: #000;
  height: 100vh;
  width: 100vw;
  left: 0;
  position: fixed;
  overflow: scroll;
  .shadow {
    width: 100vw;
    height: 100vw;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 12;
  }
  .content {
    width: 80%;
    margin: 0 auto;
    position: relative;

    .gameArea {
      margin: 5rem 0;
      button {
        background: rgba(255, 255, 255, 0);
        width: 20vw;
        margin: 0 auto;
        border: none;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0%);
        img {
          transform: scale(1);
          transition: all 0.3s;
          width: 100%;
          cursor: pointer;
        }
      }
      button:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    .rewards {
      width: 100%;
      position: relative;
      font-weight: bolder;
      z-index: -1;
      opacity: 0;
      height: 0;
      img {
        width: 100%;
      }
      .title {
        position: absolute;
        top: 22%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 100%;
        }
      }
      .items {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        width: 100%;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 90%;
          box-sizing: border-box;
          text-align: center;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          p {
            font-size: 1.5rem;
          }
          .time {
            flex: 0.2;
            box-sizing: border-box;
            img {
              width: 20%;
            }
          }
          .reward {
            flex: 0.2;
          }
          .acerageAPY {
            flex: 0.2;
          }
          .winner {
            flex: 0.3;
            display: flex;
            flex-direction: column;
            .top,
            .bottom {
              display: flex;
              align-items: center;
              justify-content: center;
              span {
                flex: 0.3;
              }
            }
            .bottom {
              font-size: 0.8rem;
            }
          }
        }
      }
    }

    .active {
      opacity: 1;
      z-index: 1;
      height: auto;
    }
  }
}
</style>
