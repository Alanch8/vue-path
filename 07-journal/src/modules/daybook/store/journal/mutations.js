
// export const myMutation = ( state ) => {

// }


export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false
}

export const updateEntry = ( state, entry ) => { // entry actualizada

    // state.entries -> un arreglo ... 

    const idx = state.entries.map( e => e.id ).indexOf( entry.id ) // idx significa indice
    state.entries[idx] = entry
    // state.entries = ... entry

};

export const addEntry = (/* state */) => {};