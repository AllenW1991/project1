<template>
  <div class="keyVision">
    <div class="top">
      <ul class="percentage">
        <img
          src="../../../assets/imgs/time_arrow.png"
          alt=""
          class="arrowIcon"
        />
        <li class="two">
          <span>200%</span>
          <span>200%</span>
        </li>
        <li class="four">
          <span>400%</span>
          <span>400%</span>
        </li>
        <li class="eight">
          <span>800%</span>
          <span>800%</span>
        </li>
        <li class="ten">
          <span>1000%</span>
          <span>1000%</span>
        </li>
        <li class="twenty">
          <span>2000%</span>
          <span>2000%</span>
        </li>
        <li class="forty">
          <span class="activeRate">4000%</span>
          <span>4000%</span>
        </li>
        <li class="eighty">
          <span>8000%</span>
        </li>
      </ul>
    </div>
    <div class="middle">
      <img src="../../../assets/imgs/time_halfcircle.png" alt="" />
      <img
        src="../../../assets/imgs/time_halfcircle_goldline.png"
        class="goldLine"
        alt=""
      />
      <div class="showTime">
        <div class="midday time">
          AM<span>&ensp; </span>
          <!-- <span>PM</span> -->
        </div>
        <div class="hour time">12<span>Hrs</span></div>
        <div class="min time">00<span>Min</span></div>
        <div class="sed time">00 <span>Sec</span></div>
      </div>
      <div class="currentReward">$29,085,000</div>
      <div class="APY">0%</div>
      <div class="centreCircle">
        <img src="../../../assets/imgs/center_black_disc.png" alt="" />
      </div>
      <div class="timeZone">
        <div class="am">
          <img src="../../../assets/imgs/chip_remove_btn.png" alt="" />
          <span>AM</span>
        </div>
        <div class="pm">
          <img src="../../../assets/imgs/chip_add_btn.png" alt="" />
          <span>PM</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="gold">
        <span>2,000%</span>
        <img src="../../../assets/imgs/0000_cup_gold.png" alt="" />
      </div>
      <div class="timebarArrow">
        <img src="../../../assets/imgs/time_arrow.png" alt="" class="arrowUp" />
        <img
          src="../../../assets/imgs/time_arrow.png"
          class="arrowDown"
          alt=""
        />
      </div>
      <img src="../../../assets/imgs/time_bar.png" class="timebar" alt="" />
      <div class="silver">
        <span>2,000%</span>
        <img src="../../../assets/imgs/0000_cup_silver.png" alt="" />
      </div>

      <ul class="time">
        <li>02:00</li>
        <li>04:00</li>
        <li>06:00</li>
        <li>08:00</li>
        <li>10:00</li>

        <img src="../../../assets/imgs/time_star.png" alt="" />

        <li>14:00</li>
        <li>16:00</li>
        <li>18:00</li>
        <li>20:00</li>
        <li>22:00</li>
      </ul>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.keyVision {
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 10vw 0;
  margin-bottom: 0vw;
  .top {
    position: absolute;
    bottom: 6vw;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 6;
    pointer-events: none;

    li {
      list-style: none;
    }

    .percentage {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      font-size: 1.2vw;
      position: relative;
      .arrowIcon {
        position: absolute;
        width: 2vw;
        top: 4.2vw;
        left: 35.5%;
        transform: rotate(150deg);
      }
      span {
        color: #747376;
        transition: all 0.3s;
      }
      .activeRate {
        color: #fff;
      }
      .two {
        width: 56vw;
        display: flex;
        justify-content: space-between;
      }
      .four {
        margin-bottom: 3%;
        width: 55vw;
        display: flex;
        justify-content: space-between;
      }
      .eight {
        margin-bottom: 3%;
        width: 52vw;
        display: flex;
        justify-content: space-between;
      }
      .ten {
        margin-bottom: 3.5%;
        width: 48vw;
        display: flex;
        justify-content: space-between;
      }
      .twenty {
        margin-bottom: 3%;
        width: 40vw;
        display: flex;
        justify-content: space-between;
      }
      .forty {
        margin-bottom: 2%;
        width: 28vw;
        display: flex;
        justify-content: space-between;
      }
      .eighty {
        margin-bottom: 0.5%;
        width: 25vw;
        display: flex;
        justify-content: center;
      }
    }
  }
  .middle {
    width: 45vw;
    margin: 0 auto;
    position: relative;
    z-index: 5;
    img {
      width: 100%;
    }
    .goldLine {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -1%);
      width: 48vw;
    }
    .showTime {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      width: 18vw;
      color: #fff;
      -webkit-text-stroke: 1px #000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 10;
      font-size: 2.5vw;
      font-weight: bolder;
      .time {
        width: 22%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        span {
          border-top: 2px solid #fff;
          display: inline-block;
          width: 100%;
          font-size: 1.5vw;
        }
      }
    }
    .currentReward {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 70%);
      z-index: 10;
      color: #fff;
      -webkit-text-stroke: 1px #000;
      font-size: 1.8vw;
      font-weight: bolder;
    }
    .APY {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -80%);
      z-index: 10;
      color: #fff;
      -webkit-text-stroke: 1px #000;
      font-size: 1.8vw;
      font-weight: bolder;
    }
    .centreCircle {
      position: absolute;
      bottom: 0.5vw;
      left: 50%;
      transform: translate(-50%, 0);
      width: 20vw;
      display: flex;
      justify-content: center;
      img {
        width: 99%;
      }
    }
    .timeZone {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -10%);
      display: flex;
      justify-content: space-between;
      width: 58vw;
      box-sizing: border-box;
      .am,
      .pm {
        width: 50%;
        font-size: 2rem;
        font-weight: bolder;
        -webkit-text-stroke: 1px #552d9e;

        img {
          width: 25%;
          transition: all 0.3s;
          transform: scale(1);
          cursor: pointer;
        }
        img:hover {
          transform: scale(1.1);
        }
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        font-weight: bold;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    .gold,
    .silver {
      width: 15vw;
      span {
        color: #fff;
      }
      img {
        width: 100%;
      }
    }
    .gold {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      span {
        position: absolute;
        bottom: 1vw;
        left: 10.2vw;
        font-size: 1vw;
      }
    }
    .silver {
      position: absolute;
      right: 0;
      bottom: -0.5rem;
      span {
        position: absolute;
        bottom: 1vw;
        right: 10.2vw;
        font-size: 1vw;
      }
    }
    .timebar {
      height: 4vw;
      width: 60vw;
    }
    .timebarArrow {
      position: absolute;
      bottom: -0.5vw;
      left: 31.5%;
      transform: translate(-50%, 10%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 6vw;
      z-index: 2;
      img {
        width: 2.5vw;
      }
      .arrowUp {
        transform: scaleY(-1);
      }
    }
    .time {
      position: absolute;
      bottom: 0;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      height: 4vw;
      width: 50vw;
      img {
        width: 10%;
        z-index: 5;
      }
      li {
        font-size: 1vw;
        font-weight: bold;
      }
    }
  }
}
</style>
