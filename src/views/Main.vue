<template>
  <div>
    <section class="dark" id="video">
      <div class="layout">
        <Video class="block" />
      </div>
    </section>

    <section id="video-sticky" v-show="videoStick">
      <div class="video-sticky-title">
        <span>{{ $t("main.live") }}</span>
        <button
          class="video-sticky-unstick"
          aria-label="Close popup"
          @click="closePopupVideo()"
        >
          x
        </button>
      </div>
      <Video class="block" />
    </section>

    <section class="dark">
      <div class="layout">
        <h2 class="text-typing">{{ $t("main.welcome.title") }}</h2>
        <p class="animate-show-up animate-show-up-1">
          {{ $t("main.welcome.text") }}
        </p>
        <ol>
          <li class="animate-show-up animate-show-up-2">
            <i18n-t keypath="main.welcome.item1.text">
              <template #link>
                <a href="https://wiki.robonomics.network/docs/create-account-in-dapp/" target="_blank">
                  {{ $t("main.welcome.item1.link") }}
                </a>
              </template>
            </i18n-t>
          </li>
          <li class="animate-show-up animate-show-up-3">
            <i18n-t keypath="main.welcome.item2.text">
              <template #link>
                <a :href="discord" target="_blank">
                  {{ $t("main.welcome.item2.link") }}
                </a>
              </template>
            </i18n-t>
          </li>
          <li class="animate-show-up animate-show-up-4">
            <i18n-t keypath="main.welcome.item7.text">
              <template #link>
                <a href="https://discord.com/channels/803947358492557312/944186892038053899/" target="_blank">
                  {{ $t("main.welcome.item7.link") }}
                </a>
              </template>
            </i18n-t>
          </li>
          <li class="animate-show-up animate-show-up-5">
            {{ $t("main.welcome.item3") }}
          </li>
          <li class="animate-show-up animate-show-up-6">
            <i18n-t keypath="main.welcome.item4.text">
              <template #link>
                <router-link :to="{ name: 'users' }" target="_blank">
                  {{ $t("main.welcome.item4.link") }}
                </router-link>
              </template>
            </i18n-t>
          </li>
          <li class="animate-show-up animate-show-up-7">
            {{ $t("main.welcome.item5") }}
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
      var vid = document.querySelector("#video"),
        isScrolling,
        o = this;

      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        o.videoStick = window.pageYOffset - vid.offsetTop > 800;
      }, 66);
    },

    closePopupVideo() {
      this.videoStick = false;
      window.removeEventListener("scroll", this.stickPopupVideo);
      window.removeEventListener("resize", this.stickPopupVideo);
    }
  },
  created() {
    robonomics.onReady(() => {
      this.isReady = true;
    });
  },
  mounted() {
    window.addEventListener("scroll", this.stickPopupVideo);
    window.removeEventListener("resize", this.stickPopupVideo);
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
