<template>
  <div>
    <input v-model="text" />
    <button @click="submit" :disabled="!isSubscription">Sign and send</button>
  </div>
</template>

<script>
import robonomics from "../robonomics";

export default {
  data() {
    return {
      text: "any text",
      isSubscription: false
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
