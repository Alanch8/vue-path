import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, text: "Recolectar las piedras del infinito", completed: false },
      { id: 2, text: "Piedra del alma", completed: false },
      { id: 3, text: "Piedra de poder", completed: false },
      { id: 4, text: "Piedra de realidad", completed: false },
      {
        id: 5,
        text: "Conseguir nuevos secuaces competentes",
        completed: false,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  getters: {
    pendingTools(state, getters, rootState) {
      return state.todos.filter((todo) => !todo.completed);
    },
    allTodos: (state, getters, rootState) => {
      return state.todos;
    },
    completedTodos: (state, getters, rootState) => {
      return state.todos.filter((todo) => todo.completed);
    },
  },
  modules: {},
});
