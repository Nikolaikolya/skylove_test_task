<template>
  <p class="tickers-list__priority">
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 20 20"
      fill="#bac698"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
      /></svg
    ><span class="tickers-list__priority-text">{{ getPriorityTitle }} </span>
  </p>
</template>

<script>
export default {
  name: "Priority",
  props: {
    priorityNumber: {
      type: Number,
      required: true,
    },
    priority: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getPriorityTitle() {
      return this.priority.data[this.priorityNumber].title;
    },
  },
};
</script>

<style scoped>
.tickers-list__priority-text {
  margin-left: -10px;
}
</style>
