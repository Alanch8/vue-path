import getRandomInt from "../../helpers/getRandomInt";

const counterStore = {
  // TODO: Falta algo
  namespaced: true,

  state: () => ({
    //similar a data()
    count: 1,
    lastMutation: "none",
    isLoading: false,
    lastRandomInt: 0,
  }),

  mutations: {
    //similar a methods(). Tienen que ser sincronas y son las que se encargan de cambiar el State. Prohibido hacer async await.
    increment(state) {
      state.count++;
      state.lastMutation = "increment";
    },
    incrementBy(state, val) {
      state.count += val;
      state.lastMutation = "incrementBy: " + val;
      state.lastRandomInt = val;
    },
    setLoading(state, val) {
      state.isLoading = val;
      state.lastMutation = "setLoading: " + val;
    },
  },

  actions: {
    // son metodos que pueden ser asincronos (por asi decirlo)
    async incrementRandomInt({ commit }) {
      commit("setLoading", true);
      const randomInt = await getRandomInt();

      // context.commit('incrementBy', randomInt) // desestructuramos context para sacar commit y que nos quede más limpio
      commit("incrementBy", randomInt);
      commit("setLoading", false);
    },
  },

  getters: {
    // analogamente serían como las computed properties
    squareCount(state) {
      return state.count * state.count;
    },
  },
};

export default counterStore