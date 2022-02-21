<template>
  <section>
    <textarea v-model="text" placeholder="Type your message here" required />
    <button v-if="loader" disabled>...</button>
    <button v-else @click="submit" :disabled="!isSubscription">
      Sign and send
    </button>
    <div class="tip" v-if="!isSubscription">
      You need IoT subscription for transaction fee. Ask in
      <a :href="discord" target="_blank">Discord</a> to add your account to the
      Learning Winter School 2022 subscription.
    </div>
  </section>
</template>

<script>
import robonomics from "../robonomics";
import config from "../config";

export default {
  props: ["loader"],
  data() {
    return {
      text: "",
      isSubscription: false,
      discord: config.discord
    };
  },
  created() {
    setInterval(() => {
      this.isSubscription = robonomics.accountManager.subscription;
    }, 1000);
  },
  methods: {
    submit() {
      this.$emit("submit", this.text);
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  border: 1px solid var(--color-black);
  padding: calc(var(--space) * 0.5);
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

textarea,
button {
  margin-bottom: var(--space);
}

button {
  background-color: var(--color-green);
  border: 0;
  color: #fff;
  font-weight: bold;
  font-family: "Yeseva One", cursive;
  cursor: pointer;
  width: 100%;
}

button[disabled] {
  pointer-events: none;
  filter: grayscale(1);
  opacity: 0.7;
}

.tip {
  background-color: var(--color-black);
  color: var(--color-green);
  padding: var(--space);
  position: relative;
}

.tip a {
  color: #fff;
}

.tip:after {
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--color-black);
  position: absolute;
  top: -10px;
  left: calc(50% - 10px);
}
</style>
