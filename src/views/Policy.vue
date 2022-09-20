<template>
  <div class="awarePage">
    <article>
      <p>
        This Policy applies to collection of your personal data, as well as to
        the use of "cookie" files and similar technologies.
      </p>
      <h2>Your Privacy is important to us.</h2>
      <ul>
        <li>
          In order to enable your use of the Websites and services provided
          through the Websites, we require that you set up an account with us.
          To create a user account, you are asked to provide the following
          personal data: e-mail address, username and password. MoneyMax is the
          controller of your personal data and takes appropriate steps to ensure
          security of your data.
        </li>
        <li>
          We process your personal data for the purpose of providing you
          MoneyMax services through our Websites, processing and settling your
          payments and managing your relationship with MoneyMax. The processing
          is necessary for the performance of contract with you, which
          constitutes the legal basis of the processing.
        </li>
        <li>
          We also process your data for general marketing purposes: (I)
          responding to your queries and complaints; and (II) sending you
          marketing e-mails, provided that you did not object to such processing
          of your personal data or that you consented to such forms of
          communication, should additional consent be required in your
          jurisdiction. In processing your data, we pursue our legitimate
          interest in direct marketing of our own services, which constitutes
          the legal basis for processing of your data.
        </li>
        <li>
          We may also process your data based on our legitimate interest, for
          the purpose of defense against potential claims and enforcement of our
          legal rights, should a dispute arise in the future in connection with
          your relationship with MoneyMax.
        </li>
        <li>
          part from registration data, we also collect information about your
          use of the Websitesand services provided by MoneyMax, in particular
          your usage history (bets placed and/or games played, history of your
          winnings etc.). We also verify your location through IP, in order to
          block the availability of MoneyMax services in some jurisdictions
          where we do not provide our services. Processing of such data is
          necessary for the performance of contract with you. We also gather and
          use your data for prevent fraudulent activities via our Websites.
        </li>
        <li>
          Provision of your personal data is in principle voluntary, but if you
          don’t provide us with your basic contact details (e-mail address and
          password), you will not be able to create a user account with us or
          use our services.
        </li>
        <li>
          You have the right to object to the processing of your data by us when
          we rely on legitimate interest as a legal basis of the processing. You
          can also request that we correct or delete your data, should you
          believe that they are outdated or incorrect for any other reason or if
          you believe that we do not need your data any longer for the purposes
          for which they were collected. If you file such a request we will stop
          processing your data and delete it, unless there exists an important
          overriding legal interest (e.g. defense of claims or existence of a
          legal obligation to retain the data) which will entitle us to keep
          your data for a longer period. You also have the right of access to
          your data, as well as the right to data portability and to restriction
          of processing.
        </li>
        <li>
          We process your personal data only for as long as necessary for the
          purposes, for which it was collected. In establishing the retention
          period for your personal data, we take into account, among others, the
          following criteria: (I) whether you express continuous interest in our
          services and continue to use the MoneyMax services or Websites, (II)
          if we have a legal interest in processing your data, e.g. for the
          purpose of defense against legal claims (III) if there exist any
          specific legal obligations to store your date for a specific period of
          time, e.g. for tax or accounting purposes.
        </li>
        <li>
          We do not share your data with other data controllers, but we entrust
          the processing of your personal data to entities, which act on our
          behalf and solely based on our instructions (data processors).
        </li>
        <li>
          We may have to share your personal data with competent authorities (in
          particular the police or prosecution service), if they approach us
          with such a request, provided that there exists an appropriate legal
          basis for making your personal data available to them (e.g. a court
          order).
        </li>
        <li>
          If you have any questions with regard to the processing of your data
          by us or if you wish to exercise your rights, you can contact us at
          contact@MoneyMax888.com.
        </li>
      </ul>
    </article>
    <article>
      <h2>Our use of cookies and similar technologies</h2>
      <ul>
        <li>
          In order to improve the operation of our site, we use cookies, web
          beacons, device fingerprinting and similar technologies. We also make
          use of Google Analytics tools.
        </li>
        <li>
          Cookies are the small text files / fragments of text that the Websites
          send to the browser and which are sent back by the browser at the next
          entrances to the Websites, for the purpose of keeping the browser
          session or storing user page data.
        </li>
        <li>
          Web beacons (also known as pixel tags) are transparent image files
          used to monitor your journey around a single you interact with the
          Websites and their content.
        </li>
        <li>
          Google Analytics is a tool we use in order to calculate visits to our
          Websites, check which functionalities of our Websites are used most
          and improve the operation of the Websites.
        </li>
        <li>
          Device fingerprinting is a technology which allows us to collect
          information about your device (what browser or operating system you
          use, plug-ins, time zone, other settings). We use this information to
          identify you and to ensure security of our Websites.
        </li>
        <li>
          Exclusion or limitation of the use of cookies and other similar
          technologies may affect the functionality of the Websites.
        </li>
        <li>
          The following types of cookies are used by the Websites – ‘session
          cookies’ which are erased when the user logs out or closes the browser
          and ‘persistent cookies’ which remain on the user's device for a
          pre-defined period of time or until the user deletes them manually.
        </li>
        <li>
          The Websites use cookies for statistical purposes, to adapt the
          website content, performance and structure to users’ individual
          preferences, to provide users with advertising content adapted to
          their preferences. Cookies and web beacons for ads targeting purposes
          can be linked to other online services, such as Facebook. Please note
          that cookies may collect personal information to enhance the site's
          functionality. Such data is stored in encrypted form and the access to
          them is limited.
        </li>
        <li>
          Cookies that are used by the third parties via the Websites, including
          in particular the users of the Websites, are subject to their own
          privacy policy.
        </li>
        <li>
          Handling and use of "cookies" is allowed automatically. However, these
          settings can be changed at any time. For details on how cookies are
          handled and used, see the settings of your web browser. You can learn
          more about cookies and similar technologies and check how to disable
          them for the browser you use by visiting the following website:
          https://www.allaboutcookies.org.
        </li>
      </ul>
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
    p {
      font-size: 1.2rem;
      padding: 1rem 0;
    }
    h2 {
      font-size: 3rem;
    }
    ul {
      padding: 0 2.5rem;
      li {
        font-size: 1.2rem;
        margin: 1.5rem 0;
      }
    }
  }
  article:nth-child(2) {
    margin-bottom: 10rem;
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
