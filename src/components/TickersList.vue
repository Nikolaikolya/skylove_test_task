<template>
  <ul class="tickers-list">
    <tickers-item />
  </ul>
</template>

<script>
import TickersItem from "./TickersItem";
export default {
  name: "TickersList",
  components: {
    TickersItem,
  },
};
</script>

<style scoped>
.tickers-list {
  background-color: #f2f1f7;

  padding: 0;
  margin: 0;
}
</style>
