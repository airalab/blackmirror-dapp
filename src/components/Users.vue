<template>
  <ul v-if="!isLoader">
    <li v-for="(device, k) in devices" :key="k">
      {{ device }}
    </li>
  </ul>
  <div v-else>...</div>
</template>

<script>
import robonomics from "../robonomics";
import config from "../config";
import { hexToString } from "@polkadot/util";

export default {
  data() {
    return {
      devices: [],
      isLoader: true
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.isLoader = true;
      const users = [];
      const devices = await robonomics.rws.getDevices(config.subscription);
      if (!devices.isEmpty) {
        const addrs = devices.toArray().map((item) => item.toString());
        for (const addr of addrs) {
          const datalog = await robonomics.datalog.read(addr);
          for (const item of datalog) {
            try {
              const data = JSON.parse(hexToString(item[1].toHex()));
              if (data.blackmirror && !users.includes(addr)) {
                users.push(addr);
                break;
              }
              // eslint-disable-next-line no-empty
            } catch (_) {}
          }
        }
      }
      this.devices = users;
      this.isLoader = false;
    }
  }
};
</script>
