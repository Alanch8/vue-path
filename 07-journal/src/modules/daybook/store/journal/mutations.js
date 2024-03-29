
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

export const addEntry = ( state, entry ) => {

   state.entries = [ entry, ...state.entries ];

    // state -> entries -> la nueva entrada debe de ser la primera
};

export const deleteEntry = ( state, id ) => {

    // remover del state.entries borrar la entrada por ese ID
    state.entries = state.entries.filter( entry => entry.id != id )
}

export const clearEntry = ( state ) => {
  state.entries = [];
};