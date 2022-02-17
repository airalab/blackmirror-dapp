<template>
  <iframe
    width="100%"
    height="450"
    :src="src"
    title="YouTube video player"
    frameborder="0"
    allowfullscreen
  ></iframe>
</template>

<script>
import config from "../config";

export default {
  data() {
    return {
      src: config.stream
    };
  }
};
</script>
