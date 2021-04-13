<template>
  <p class="tickers-list__id" :style="getColor">#{{ ticket_number }}</p>
</template>

<script>
export default {
  name: "TickersId",
  props: {
    tickers: { required: true, type: Object },
    colors: { required: true, type: Object },
    ticket_number: { required: true, type: Number },
    index: { required: true },
  },
  computed: {
    getObjectFromColors() {
      return this.tickers[this.index].status;
    },
    getColor() {
      return { backgroundColor: this.colors[this.getObjectFromColors].color };
    },
  },
};
</script>

<style scoped></style>
