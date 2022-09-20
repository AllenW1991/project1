<template>
  <div class="awarePage">
    <article>
      <h2>Responsible Gambling</h2>
      <p>
        For the majority of people, gambling is an enjoyable leisure and
        entertainment activity. However, for some, it can have negative impacts
        leading to what it’s called a gambling problem.
      </p>
      <p>
        Responsible gambling means that the individual has evaluated the risk of
        losing their money and is gambling for pleasure and/or entertainment. In
        this case, gambling activities are under control of individual.
      </p>
      <p>
        At MoneyMax we offer a platform and services that enable our clients to
        enjoy gaming. Our aim is to provide our customers with the best gaming
        experience, while providing a safe & secure environment. Our team is
        committed to excluding cases of gaming while underage or let gaming
        control lives.
      </p>
    </article>
    <article>
      <h2>Gambling Problem</h2>
      <p>
        Gambling Problem occurs when there is an urge to continuously gamble
        despite harmful negative consequences to personal/family/work life or a
        desire to stop.
      </p>
      <p>
        Gambling Problem can lead to mental health problems, family conflict,
        employment issues and possible negative legal ramifications.
      </p>
      <p>
        If you have any concerns about your gambling habits we strongly suggest
        you to seek advice from accredited organisations that can offer support
        and advice:
      </p>
      <ol>
        <li>BeGambleAware</li>
        <li>Gamblers Anonymous</li>
        <li>Gambling Therapy</li>
        <li>GamCare</li>
        <li>Keep It Fun</li>
      </ol>
      <button type="button" @click="routerChange('home')">GO BACK</button>
    </article>
  </div>
</template>
<script setup>
import router from '../router';

function routerChange(target) {
  router.push(`/${target}`);
}
</script>
<style lang="scss" scoped>
.awarePage {
  background: #000;
  height: 100vh;
  color: #7d40cc;
  padding: 6vw;
  position: fixed;
  top: 0;
  overflow: scroll;

  article {
    margin-bottom: 2rem;
    h2 {
      font-size: 3rem;
    }
    p {
      margin: 1rem 0;
      font-size: 1.2rem;
    }
    ol {
      padding: 0 2rem;
      li {
        font-size: 1.2rem;
        margin: 1.5rem 0;
      }
    }
  }
  article:last-child {
    margin-bottom: 20vh;
  }
  button {
    color: #552d9e;
    background: rgba(255, 255, 255, 0);
    cursor: pointer;
    font-size: 1.2rem;
    border: 1px solid #552d9e;
    border-radius: 0.5vw;
    padding: 0.5vw 3vw;
    margin: 2vw auto;
    transition: all 0.3s;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  }
  button:hover {
    background: #552d9e;
    color: #fff;
  }
}
</style>
