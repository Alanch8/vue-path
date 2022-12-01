
// export const myAction = async ({ commit }) => {

import journalApi from "@/api/journalApi";

// }

export const loadEntries = async ({ commit }) => {


    const { data } = await journalApi.get("/entries.json")
    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }
    
    commit( 'setEntries', entries )

};

export const updateEntry = async ({ commit }, entry ) => { // entry debe de ser un parámetro

    // Extraer solo lo que necesitan // -id

    const { date, picture, text} = entry // así lo único que no traemos es el id porque no nos interesa
    const dataToSave = { date, picture, text }

    const resp = await journalApi.put( `/entries/${ entry.id }.json`, dataToSave)
    console.log(resp);

    // await journalApi.put ( PATH .json, dataToSave )

    // Commit de una mutation -> updateEntry
    commit('updateEntry', { ...entry })

};

export const createEntry = async (/*{ commit }*/) => {};