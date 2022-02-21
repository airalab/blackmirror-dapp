<template>
  <div class="videoWrapper">
    <iframe
      width="100%"
      height="450"
      :src="src"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
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

<style scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  /* border: 5px solid #000;
  outline: 20px solid #333 */
}

.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
