<template>
  <p class="tickers-list__show-date" @click="showDate = !showDate">...</p>
  <p
    class="tickers-list__date"
    :style="getDisplayFromDate"
    v-if="showDate"
    @click="showDate = !showDate"
  >
    {{ getDate }}
  </p>
</template>

<script>
export default {
  name: "DateTime",
  data() {
    return {
      showDate: true,
    };
  },

  computed: {
    getDate() {
      return new Date(Date.now()).toLocaleString();
    },

    getDisplayFromDate() {
      return { display: this.showDate ? "inline-block" : "none" };
    },
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
      if (this.width < 1120 && this.width > 759) this.showDate = false;
      else this.showDate = true;
    },
  },

  created() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
};
</script>

<style scoped></style>
