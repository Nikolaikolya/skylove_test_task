<template>
  <div class="tickers-list-info">
    <p class="tickers-list-info__type">
      Тип обращения:
      <span class="tickers-list-info__type-content">{{ subject }}</span>
    </p>
    <p class="tickers-list-info__text">{{ body_subject }}</p>
  </div>
</template>

<script>
export default {
  name: "TickersListInfo",
  props: {
    subject: { type: String, required: true },
    body_subject: { type: String, required: true },
  },
};
</script>

<style scoped></style>
