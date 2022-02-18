<template>
  <div>
    <h3>Your message to the device</h3>
    <p>
      <i
        >Test Robonomics IoT subscription: type here your text, send and view it
        on device</i
      >
    </p>
    <Form @submit="send" />

    <div class="msg" v-if="result">
      <h4>Your message has been sent</h4>
      <ol>
        <li>
          <a
            :href="`https://robonomics.subscan.io/extrinsic/${result}`"
            target="_blank"
            >View tx explorer</a
          >
        </li>
        <li><router-link :to="{ name: 'users' }" target="_blank">View list of succesfully written accounts</router-link></li>
      </ol>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import robonomics from "../robonomics";
import Form from "./Form";

export default {
  components: {
    Form
  },
  data() {
    return {
      result: null,
      error: null,
      unsubscribe: null
    };
  },
  unmounted() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
  methods: {
    async send(text) {
      this.error = "";
      this.result = "";
      try {
        const tx = robonomics.datalog.write(
          JSON.stringify({ blackmirror: text })
        );
        const resultTx = await robonomics.accountManager.signAndSend(tx);
        this.result = `${resultTx.blockNumber}-${resultTx.txIndex}`;
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>

<style scoped>
.msg {
  background-color: var(--color-yellow);
  padding: var(--space)
}

.msg a {
  font-weight: bold;
  color: var(--color-blue)
}
</style>
