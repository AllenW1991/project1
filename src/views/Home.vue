<template>
  <div class="home">
    <div
      :class="[store.state.activatedModal !== '' ? 'shadow' : null]"
      class="closeIcon"
      @click="store.commit('CHANGE_MODAL', '')"
    ></div>
    <Nav />
    <div class="content">
      <KeyVision />
      <div class="gameArea">
        <button type="button">
          <img
            src="../assets/imgs/btn_BigWin.png"
            alt=""
            v-if="currentShow === 'start'"
            @click="changeCurrentShow('slider')"
          />
          <img
            src="../assets/imgs/btn_View my rewards.png"
            alt=""
            v-if="currentShow === 'slider'"
            @click="changeCurrentShow('rewardsHistory')"
          />
          <img
            src="../assets/imgs/btn_GoSlot.png"
            alt=""
            v-if="currentShow === 'rewardsHistory'"
            @click="changeCurrentShow('slider')"
          />
        </button>
        <!-- max rewards -->
        <div
          :class="[
            'rewards',
            currentShow === 'rewardsHistory' ? 'active' : null,
          ]"
        >
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
        <div :class="['sliders', currentShow === 'slider' ? 'active' : null]">
          <swiper
            :slidesPerView="4"
            :spaceBetween="10"
            :centeredSlides="true"
            :navigation="true"
            :loop="true"
            :modules="modules"
            class="mySwiper"
          >
            <img src="../assets/imgs/card_frame.png" alt="" class="cardFrame" />
            <swiper-slide>
              <img src="../assets/imgs/gameSlideImgs/1.png" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/imgs/gameSlideImgs/2.png" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/imgs/gameSlideImgs/3.png" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/imgs/gameSlideImgs/4.png" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/imgs/gameSlideImgs/5.png" alt="" />
            </swiper-slide>
          </swiper>
        </div>
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
// swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//home components
import Nav from '../components/Nav/index.vue'
import Footer from '../components/Footer/index.vue'
import KeyVision from '../components/Home/KeyVision/index.vue'
import HistoryTable from '../components/Home/HistoryTable/index.vue'

//modals
import InitialModal from '../components/Home/Modals/Initial.vue'
import LoginModal from '../components/Home/Modals/Login.vue'
import SignUpModal from '../components/Home/Modals/SignUp.vue'
import ResetPasswordModal from '../components/Home/Modals/ResetPassword.vue'
import LogoutModal from '../components/Home/Modals/Logout.vue'
import AccountModal from '../components/Home/Modals/Account.vue'
import SettingsModal from '../components/Home/Modals/Settings.vue'
import WithdrawModal from '../components/Home/Modals/Withdraw.vue'
import WalletModal from '../components/Home/Modals/Wallet.vue'
import CheckDepositModal from '../components/Home/Modals/CheckDeposit.vue'
import DepositStep1Modal from '../components/Home/Modals/DepositStep1.vue'
import DepositStep2Modal from '../components/Home/Modals/DepositStep2.vue'

// tools
import store from '../store'
import { onMounted, ref } from 'vue'

//swiper config
let modules = [Navigation, Mousewheel, Keyboard]

//home current view
let currentShow = ref('start')
function changeCurrentShow(name) {
  currentShow.value = name
}

onMounted(() => {
  store.commit('CHANGE_MODAL', 'initial')
})
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
        top: 60%;
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
          font-size: 1.5vw;
          margin-bottom: 0.5rem;
          p {
            font-size: 2vw;
          }
          .time {
            flex: 0.2;
            box-sizing: border-box;
            img {
              width: 20%;
            }
          }
          .reward {
            flex: 0.25;
          }
          .acerageAPY {
            flex: 0.25;
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
    .sliders {
      margin: 3rem 0;
      position: relative;
      height: 0;
      opacity: 0;
      z-index: -1;

      .mySwiper {
        width: 80%;
        padding: 3rem 0;
        background-image: url('../assets/imgs/page_bg.png');
        background-repeat: no-repeat;
        background-position: 50% 15%;
        background-size: cover;

        .cardFrame {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 1%);
          z-index: 5;
          width: 13vw;
        }
        .swiper-slide {
          width: 10vw;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          img {
            width: 15vw;
            object-fit: cover;
            padding: 2rem;
            box-sizing: border-box;
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
