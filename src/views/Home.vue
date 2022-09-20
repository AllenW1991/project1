<template>
  <div class="home">
    <!-- <div class="shadow"></div> -->
    <Nav />
    <div class="content">
      <KeyVision />
      <div class="gameArea">
        <button type="button">
          <img src="../assets/imgs/btn_BigWin.png" alt="" />
        </button>
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
      background: rgba(128, 128, 128, 0.135);
      height: 50vh;
      margin: 5rem 0;
      button {
        background: rgba(255, 255, 255, 0);
        cursor: pointer;
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
        }
      }
      button:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
