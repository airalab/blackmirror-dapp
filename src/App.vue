<template>
  <div class="app">
    <div class="app-title">
      <div class="layout">
        <h1>Try it out dapp > <a href="https://robonomics.academy/" target="_blank">Online Robonomics school 2022</a></h1>
      </div>
    </div>

    <section class="dark">
      <div class="layout">
        
        <Video class="block" />

        <h2 class="text-typing">Welcome to black mirror</h2>
        <p class="animate-show-up animate-show-up-1">This decentrilized application made for students of Robonomics winter school 2022. It shows you that decentrilized cloud over blockchain already works.</p>
        <ol>
          <li class="animate-show-up animate-show-up-2">Create or activate your Polkadot account in <a href="https://polkadot.js.org/extension/" target="_blank">Polkadot.js extension</a></li>
          <li class="animate-show-up animate-show-up-3">Ask <a :href="discord" target="_blank">in Discord</a> to add your account to the Learning Winter School 2022 subscription.</li>
          <li class="animate-show-up animate-show-up-4">Type here your text message, sign and send it to our retro TV</li>
          <li class="animate-show-up animate-show-up-5">Make sure your transaction with datalog succesfully <a href="" target="_blank">sent</a></li>
          <li class="animate-show-up animate-show-up-6">Watch QR, it should change</li>
        </ol>
      </div>
    </section>

    <section>
      <div class="layout">
         <template v-if="isReady">
            <Account class="block" />
            <Sender />
          </template>
          <div v-else>...</div>
      </div>
    </section>

   
  </div>
</template>

<script>
import robonomics from "./robonomics";
import Video from "./components/Video.vue";
import Account from "./components/Account.vue";
import Sender from "./components/Sender.vue";
import config from "./config";

export default {
  name: "App",
  components: {
    Video,
    Account,
    Sender
  },
  data() {
    return {
      isReady: false,
      discord: config.discord
    };
  },
  async created() {
    await robonomics.run();
    this.isReady = true;
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&family=Yeseva+One&display=swap");

/* + RESET */
* {margin:0; padding:0; outline: 0;background:transparent;vertical-align:baseline;box-sizing: border-box;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}
img {border: 0;}
html {font-size: 100%;-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
article,aside,details,figcaption,figure, footer,header,hgroup,menu,nav,section, main {display:block;}
nav ul {list-style:none;}
table {border-collapse:collapse; border-spacing:0;}
input, select {vertical-align:middle;}
sup { vertical-align: super; }
sub { vertical-align: sub; }
/* - RESET */

body {
  --color-yellow: #F4E282;
  --color-brown: #534E4B;
  --color-green: rgb(130, 201, 0);
  --color-blue: #2949D3;
  --color-black: #111;
  --space: 20px;

  --duration: 0.2s;
  --delay: 2s;

  font-family: "Roboto Mono", monospace;
  color: var(--color-black);
  background-color: #fff;
  font-size: 18px;
  line-height: 1.5;
}

.app-title {
  font-family: "Yeseva One", cursive;
  background: var(--color-yellow);
  padding-top: var(--space);
  padding-bottom: var(--space);
}

.app-title a {
  color: #fff;
  text-decoration: none;
}

.layout {
  max-width: 960px;
  margin: 0 auto;
  padding-left: var(--space);
  padding-right: var(--space);
}

section {
  padding-top: calc(var(--space) * 2);
  padding-bottom: calc(var(--space) * 2);
}

section.dark {
  background-color: var(--color-black);
  color: var(--color-green)
}

section.dark a {
  color: #fff
}

.text-typing {
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  width: 23ch;
  border-right: 3px solid var(--color-green);
  line-height: 1;
  animation: FadeIn 0.4s forwards, typing 2s steps(23), blinkLine .5s step-end infinite alternate;
  animation-delay: 0.5s;
}

@keyframes FadeIn {
  to {
    visibility: visible;
    opacity: 1;
  }
}
@keyframes blinkLine {
  50% {
    border-color: transparent
  }
}
@keyframes typing {
  from {
    width: 0
  }
}

h2 {
  margin-bottom: calc(var(--space) * 2);
}

p, ol {
  margin-bottom: var(--space);
}

li {
  margin-bottom: calc(var(--space) * 0.5);
}

ol {
  padding-left: 30px;
}

.animate-show-up {
  visibility: hidden;
	opacity: 0;
	transform: translateY(5%);

  animation-name: FadeIn, FloatYUp;
  animation-timing-function: linear;
  animation-delay: var(--delay);
  animation-fill-mode: forwards;
  animation-duration: var(--duration);
}

@keyframes FloatYUp {
	to{
		transform: translateY(0);
	}
}

.animate-show-up.animate-show-up-1 { animation-delay: calc( (var(--delay) + var(--duration)) * 1); }
.animate-show-up-2 { animation-delay: calc( (var(--delay) + var(--duration)) * 2); }
.animate-show-up-3 { animation-delay: calc( (var(--delay) + var(--duration)) * 3); }
.animate-show-up-4 { animation-delay: calc( (var(--delay) + var(--duration)) * 4); }
.animate-show-up-5 { animation-delay: calc( (var(--delay) + var(--duration)) * 5); }
.animate-show-up-6 { animation-delay: calc( (var(--delay) + var(--duration)) * 6); }

@media screen and (max-width: 420px) {
  h2 {
    font-size: 90%;
  }
}

input,
button,
select {
  padding: 10px;
  font-size: 1.5rem;
}
select option {
  font-size: 1rem;
}
.block {
  margin-bottom: 40px;
}
</style>
