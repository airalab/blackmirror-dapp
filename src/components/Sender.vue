<template>
  <div>
    <Form @submit="send" />
    <div v-if="result">
      <a
        :href="`https://robonomics.subscan.io/extrinsic/${result}`"
        target="_blank"
        >View tx explorer</a
      >
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
        const tx = robonomics.datalog.write(text);
        const resultTx = await robonomics.accountManager.signAndSend(tx);
        this.result = `${resultTx.blockNumber}-${resultTx.txIndex}`;
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>
