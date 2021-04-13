<template>
  <p class="tickers-list__status">
    <span :style="getColor" class="circle"></span>
    {{ getStatus }}
  </p>
</template>

<script>
export default {
  name: "Status",
  props: {
    colors: {
      required: true,
      type: Object,
    },
    index: {
      required: true,
      type: Number,
    },
    tickers: { required: true },
  },

  computed: {
    getObjectFromColors() {
      return this.tickers[this.index].status;
    },
    getColor() {
      return { backgroundColor: this.colors[this.getObjectFromColors].color };
    },

    getStatus() {
      return this.colors[this.getObjectFromColors].status;
    },
  },
};
</script>

<style scoped></style>
