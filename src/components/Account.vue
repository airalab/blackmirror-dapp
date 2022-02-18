<template>
  <div>
    <!-- <select v-model="account">
      <option
        v-for="(account, key) in accounts"
        :key="key"
        :value="account.address"
      >
        {{ account.meta.isTesting ? "dev" : "" }} {{ account.meta.name }}
      </option>
    </select>
    <br /> -->
    <h3>Your account</h3>
    <p><i>[Robonomics parachain format]</i></p>
    <p class="account">{{ account }}</p>
  </div>
</template>

<script>
import AccountManager from "robonomics-interface/dist/accountManagerUi";
import robonomics from "../robonomics";
import config from "../config";

export default {
  data() {
    return {
      account: null,
      accounts: [],
      devices: []
    };
  },
  async created() {
    await AccountManager.initPlugin(robonomics.accountManager.keyring, {
      isDevelopment: config.isDevelopmentAccounts
    });
    const devices = await robonomics.rws.getDevices(config.subscription);
    if (!devices.isEmpty) {
      this.devices = devices.toArray().map(item => item.toString());
    }
    this.accounts = robonomics.accountManager.getAccounts();
    if (this.accounts.length) {
      this.account = this.accounts[0].address;
    }
  },
  computed: {
    isRws() {
      if (this.devices.includes(this.account)) {
        return true;
      }
      return false;
    }
  },
  watch: {
    async account(address) {
      await robonomics.accountManager.selectAccountByAddress(address);
    },
    isRws() {
      if (this.isRws) {
        robonomics.accountManager.useSubscription(config.subscription);
      } else {
        robonomics.accountManager.useSubscription(false);
      }
    }
  }
};
</script>

<style scoped>
.account {
  max-width: 100%;
  overflow: scroll;
}
</style>
