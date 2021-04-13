import { getAllTickers } from "../../api/tickers";

export default {
  namespaced: true,
  state: {
    tickers: [],
  },

  mutations: {
    setTickers(state, items) {
      state.tickers = items;
    },
  },

  actions: {
    async loadTickers({ commit }) {
      const tickersAll = await getAllTickers();
      if (tickersAll) commit("setTickers", tickersAll);
      else console.error("No request data from server!");
    },
  },

  getters: {
    getTickers: ({ tickers }) => tickers,
    getIdFromNewTicker: ({ tickers }) => {
      const index = tickers.length - 1;
      let id = tickers[index].ticket_number;
      return ++id;
    },
  },
};
