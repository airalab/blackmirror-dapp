<template>
<div>
 <section class="dark" id="video">
    <div class="layout">
      <Video class="block" />
    </div>
 </section>


 <section id="video-sticky" v-show="videoStick">
    <div class="video-sticky-title">
      <span>Black mirror live</span>
      <button class="video-sticky-unstick" aria-label="Close popup" @click="closePopupVideo()">x</button>
    </div>
    <Video class="block" />
 </section>

  <section class="dark">
    <div class="layout">

      <h2 class="text-typing">Welcome to black mirror</h2>
      <p class="animate-show-up animate-show-up-1">
        This decentralized application made for students of Robonomics winter
        school 2022. It shows you that decentralized cloud over blockchain
        already works.
      </p>
      <ol>
        <li class="animate-show-up animate-show-up-2">
          Create or activate your Polkadot account in
          <a href="https://polkadot.js.org/extension/" target="_blank"
            >Polkadot.js extension</a
          >
        </li>
        <li class="animate-show-up animate-show-up-3">
          Ask <a :href="discord" target="_blank">in Discord</a> to add your
          account to the Learning Winter School 2022 subscription.
        </li>
        <li class="animate-show-up animate-show-up-4">
          Type here your text message, sign and send it to our retro TV
        </li>
        <li class="animate-show-up animate-show-up-5">
          Make sure your transaction with datalog succesfully
          <router-link :to="{ name: 'users' }" target="_blank">sent</router-link>
        </li>
        <li class="animate-show-up animate-show-up-6">
          Watch QR, it should change
        </li>
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
import robonomics from "../robonomics";
import Video from "../components/Video.vue";
import Account from "../components/Account.vue";
import Sender from "../components/Sender.vue";
import config from "../config";
// import StickyEventListener from 'sticky-event-listener';

export default {
  components: {
    Video,
    Account,
    Sender
  },
  data() {
    return {
      isReady: false,
      discord: config.discord,
      videoStick: false
    };
  },
  methods: {
    stickPopupVideo() {
      var
        vid = document.querySelector('#video'),
        isScrolling,
        o = this;

        window.clearTimeout( isScrolling );
        isScrolling = setTimeout(function() {
          o.videoStick = (window.pageYOffset - vid.offsetTop) > 800
        }, 66);
    },

    closePopupVideo(){
      this.videoStick = false
      window.removeEventListener('scroll', this.stickPopupVideo)
      window.removeEventListener('resize', this.stickPopupVideo)
    }
  },
  created() {
    robonomics.onReady(() => {
      this.isReady = true;
    });
  },
  mounted (){
      window.addEventListener('scroll', this.stickPopupVideo)
      window.removeEventListener('resize', this.stickPopupVideo)
    }
};
</script>

<style scoped>

#video-sticky {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  max-width: 500px;
  padding: 0;
}

@media screen and (max-width: 450px) {
  #video-sticky {
    max-width: 100%;
  }
}

#video-sticky .videoWrapper {
  border: 0;
  outline: 0;
  margin: 0;
}

#video-sticky .video-sticky-title {
  font-size: 16px;
  font-weight: bold;
  color: var(--color-green);
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 30px;
  background: var(--color-black);
  align-items: center;
}

#video-sticky .video-sticky-unstick {
  background: var(--color-blue);
  color: #fff;
  border: 0;
  cursor: pointer;
}
</style>