<template>
  <div class="container">
    <h1 class="main-title">Tickers List</h1>

    <tickers-list />

    <button
      type="button"
      class="btn btn-primary btn-add-tickers"
      @click="showModal"
    >
      Добавить заявку
    </button>

    <modal v-show="modalShow" @close="modalShow = false" />
  </div>
</template>

<script>
import Modal from "./components/Modal";
import TickersList from "./components/TickersList";

export default {
  name: "App",
  data() {
    return {
      modalShow: false,
    };
  },

  components: {
    Modal,
    TickersList,
  },

  methods: {
    showModal() {
      this.modalShow = !this.modalShow;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn-add-tickers {
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.main-title {
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>
