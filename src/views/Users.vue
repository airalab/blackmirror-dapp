<template>
  <section>
    <div class="layout">
      <template v-if="isReady">
        <Users />
      </template>
      <div v-else>...</div>
    </div>
  </section>
</template>

<script>
import robonomics from "../robonomics";
import Users from "../components/Users.vue";

export default {
  components: {
    Users
  },
  data() {
    return {
      isReady: false
    };
  },
  created() {
    robonomics.onReady(() => {
      this.isReady = true;
    });
  }
};
</script>
