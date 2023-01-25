import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
    const store = useStore();

    const currentTab = ref("all");

    return {
      currentTab,

      all: computed(() => store.getters["allTodos"]),
      completed: computed(() => store.getters["completedTodos"]),
      pending: computed(() => store.getters["pendingTodos"]),

      getTodosByTab: computed(() =>
        store.getters["getTodosByTab"](currentTab.value)
      ), //No hace falta que el nombre de la variable sea el mismo que el del getter.

      // Methods
      toggleTodo: (id) => store.commit("toggleTodo", id),
      createTodo: (text) => store.commit("createTodo", text),
    };
};

export default useTodos;
