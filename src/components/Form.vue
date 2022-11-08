<template>
  <section>
    <input
      type="text"
      v-model="text"
      :placeholder="$t('form.placeholder')"
      required
      maxlength="50"
    />
    <button v-if="loader" disabled>...</button>
    <button v-else @click="submit" :disabled="!isSubscription || error">
      {{ $t("form.sign") }}
    </button>
    <div v-if="error" class="error">{{ error }}</div>
    <div class="tip" v-if="!isSubscription">
      <i18n-t keypath="form.subscription.text">
        <template #link>
          <a :href="discord" target="_blank">
            {{ $t("form.subscription.link") }}
          </a>
        </template>
      </i18n-t>
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
      discord: config.discord,
      error: false
    };
  },
  created() {
    setInterval(() => {
      this.isSubscription = robonomics.accountManager.subscription;
    }, 1000);
  },
  watch: {
    text() {
      if (this.text.length > 50) {
        this.error = this.$t("form.error");
      } else {
        this.error = false;
      }
    }
  },
  methods: {
    submit() {
      if (!this.error) {
        this.$emit("submit", this.text);
      }
    }
  }
};
</script>

<style scoped>
textarea,
input[type="text"] {
  width: 100%;
  border: 1px solid var(--color-black);
  padding: calc(var(--space) * 0.5);
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

textarea,
button,
input[type="text"] {
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

.error {
  text-align: center;
  margin-bottom: var(--space);
  color: var(--color-orange);
  font-weight: bold;
}
</style>
