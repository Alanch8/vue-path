import getRandomInt from "../../helpers/getRandomInt";


// son metodos que pueden ser asincronos (por asi decirlo)
export const incrementRandomInt = async({ commit }) => {
    commit("setLoading", true);
    const randomInt = await getRandomInt();

    // context.commit('incrementBy', randomInt) // desestructuramos context para sacar commit y que nos quede más limpio
    commit("incrementBy", randomInt);
    commit("setLoading", false);
}