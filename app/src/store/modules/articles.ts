import axios from "axios";

const state = {
  articles: [],

};

const mutations = {
  setData(state, payload) {
    state.articles = payload;
  }
};

const getters = {
  getById: (state, getters) => (id) => {
    return state.articles.find((item:any) => item.id === parseInt(id));
  }
};

const actions = {
  async fetchApi({commit}) {
    const res = await axios.get("http://localhost:5000/articles");
    commit("setData", res.data)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};