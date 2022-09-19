<template>
  <div class="table">
    <span class="gameTitle">MONEY BOMB</span>
    <ul class="container">
      <li>
        <div class="date">DATE</div>
        <div class="user">USER</div>
        <div class="amount">AMOUNT</div>
        <div class="address">ADDRESS</div>
        <div class="bomb">BOMB</div>
      </li>
      <li>
        <div class="date">15:32:54</div>
        <div class="user"></div>
        <div class="amount">1,200</div>
        <div class="address">TRwFobSeKphXBWoarsSaC5rnUxWmcKWLTQ</div>
        <div class="bomb">-</div>
      </li>
      <li>
        <div class="date">15:32:54</div>
        <div class="user"></div>
        <div class="amount">1,200</div>
        <div class="address">TRwFobSeKphXBWoarsSaC5rnUxWmcKWLTQ</div>
        <div class="bomb">-</div>
      </li>
      <li>
        <div class="date">15:32:54</div>
        <div class="user"></div>
        <div class="amount">1,200</div>
        <div class="address">TRwFobSeKphXBWoarsSaC5rnUxWmcKWLTQ</div>
        <div class="bomb">-</div>
      </li>
      <li>
        <div class="date">15:32:54</div>
        <div class="user"></div>
        <div class="amount">1,200</div>
        <div class="address">TRwFobSeKphXBWoarsSaC5rnUxWmcKWLTQ</div>
        <div class="bomb">-</div>
      </li>
      <li>
        <div class="date">15:32:54</div>
        <div class="user"></div>
        <div class="amount">1,200</div>
        <div class="address">TRwFobSeKphXBWoarsSaC5rnUxWmcKWLTQ</div>
        <div class="bomb">-</div>
      </li>
      <li>
        <div class="date">15:32:54</div>
        <div class="user"></div>
        <div class="amount">1,200</div>
        <div class="address">TRwFobSeKphXBWoarsSaC5rnUxWmcKWLTQ</div>
        <div class="bomb">-</div>
      </li>
      <li>
        <div class="date">15:32:54</div>
        <div class="user"></div>
        <div class="amount">1,200</div>
        <div class="address">TRwFobSeKphXBWoarsSaC5rnUxWmcKWLTQ</div>
        <div class="bomb">-</div>
      </li>
      <li>
        <div class="date">15:32:54</div>
        <div class="user"></div>
        <div class="amount">1,200</div>
        <div class="address">TRwFobSeKphXBWoarsSaC5rnUxWmcKWLTQ</div>
        <div class="bomb">-</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.table {
  .gameTitle {
    color: #fff;
    padding: 0.5vw 0;
    display: inline-block;
    border-bottom: 4px solid #9b5bcc;
  }
  .container {
    border-top: 2px solid #583373;
    color: #fff;
    li {
      display: flex;
      text-align: center;
      font-size: 1vw;
      padding: 0.5vw 0;
      .date {
        flex: 0.1;
      }
      .user {
        flex: 0.1;
      }
      .amount {
        flex: 0.2;
      }
      .address {
        flex: 0.5;
      }
      .bomb {
        flex: 0.1;
      }
    }
    li:nth-child(even) {
      background: #1c0c27;
    }
  }
}
</style>
