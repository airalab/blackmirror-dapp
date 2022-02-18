<template>
  <section class="dark">
    <div class="layout">
      <Video class="block" />

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
</template>

<script>
import robonomics from "../robonomics";
import Video from "../components/Video.vue";
import Account from "../components/Account.vue";
import Sender from "../components/Sender.vue";
import config from "../config";

export default {
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
  created() {
    robonomics.onReady(() => {
      this.isReady = true;
    });
  }
};
</script>
