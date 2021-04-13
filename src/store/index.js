import { createStore } from "vuex";
import tickers from "./modules/tickers";
import selection from "./selection";

export default createStore({
  modules: {
    tickers,
    selection,
  },
});
