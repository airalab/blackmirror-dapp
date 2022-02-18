<template>
  <ul>
    <li v-for="(device, k) in devices" :key="k">
      {{ device }}
    </li>
  </ul>
</template>

<script>
import robonomics from "../robonomics";
import config from "../config";

export default {
  data() {
    return {
      devices: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const users = [];
      const devices = await robonomics.rws.getDevices(config.subscription);
      if (!devices.isEmpty) {
        const addrs = devices.toArray().map((item) => item.toString());
        for (const addr of addrs) {
          const datalog = await robonomics.datalog.read(addr);
          for (const item of datalog) {
            try {
              const data = JSON.parse(item[1].toHuman());
              if (data.blackmirror) {
                users.push(addr);
              }
              // eslint-disable-next-line no-empty
            } catch (_) {}
          }
        }
      }
      this.devices = users;
    }
  }
};
</script>
