<template>
  <div class="app">
    <h1>Online winter school of Robonomics</h1>
    <Video class="block" />
    <template v-if="isReady">
      <Account class="block" />
      <Sender />
    </template>
    <div v-else>...</div>
  </div>
</template>

<script>
import robonomics from "./robonomics";
import Video from "./components/Video.vue";
import Account from "./components/Account.vue";
import Sender from "./components/Sender.vue";

export default {
  name: "App",
  components: {
    Video,
    Account,
    Sender
  },
  data() {
    return {
      isReady: false
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

body {
  font-family: "Roboto Mono", monospace;
  color: #534e4b;
  margin-top: 60px;
  background-color: #f4e282;
  font-size: 1rem;
  line-height: 1.5;
}
h1 {
  font-family: "Yeseva One", cursive;
}
.app {
  width: 900px;
  margin: 0 auto;
  text-align: center;
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
