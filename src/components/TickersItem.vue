<template>
  <li
    class="tickers-list__item"
    v-for="(ticker, index) in getTickers"
    :key="index"
  >
    <tickers-id
      :tickers="getTickers"
      :colors="colors"
      :ticket_number="ticker.ticket_number"
      :index="index"
    />

    <div class="tickers-list__info">
      <img
        class="tickers-list__image"
        :src="ticker.user.avatar"
        width="50"
        height="50"
        alt="Избражение пользователя"
      />
      <h2>{{ ticker.user.name }}</h2>
    </div>

    <tickers-list-info
      :body_subject="ticker.body_subject"
      :subject="ticker.subject"
    />

    <status :colors="colors" :index="index" :tickers="getTickers" />

    <priority :priorityNumber="ticker.priority" :priority="priority" />

    <date-time />
  </li>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import DateTime from "./DateTime";
import Priority from "./Priority";
import Status from "./Status";
import TickersListInfo from "./TickersListInfo";
import TickersId from "./TickersId";

export default {
  name: "TickersItem",
  components: { TickersId, TickersListInfo, Status, Priority, DateTime },

  computed: {
    ...mapGetters("tickers", ["getTickers", "getIdFromNewTicker"]),
    ...mapState("selection", ["colors", "priority"]),
  },
};
</script>

<style scoped></style>
