import journalApi from "@/api/journalApi";

// export const myAction = async ({ commit }) => {

// }

export const loadEntries = async ({ commit }) => {

  const { data } = await journalApi.get("/entries.json");

  if ( !data ) {
    commit('setEntries', [] )
    return
  }

  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  // entry debe de ser un parámetro

  // Extraer solo lo que necesitan // -id

  const { date, picture, text } = entry; // así lo único que no traemos es el id porque no nos interesa
  const dataToSave = { date, picture, text };

  const resp = await journalApi.put(`/entries/${entry.id}.json`, dataToSave);
  console.log(resp);

  // await journalApi.put ( PATH .json, dataToSave )

  // Commit de una mutation -> updateEntry
  commit("updateEntry", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry;
  const dataToSave = { date, picture, text };

  const { data } = await journalApi.post(`/entries.json`, dataToSave);
  // data = {"name": "-NIMpzr_RQK1Pjz9qGb5"}

  dataToSave.id = data.name;

  commit("addEntry", dataToSave);

  return data.name
};

export const deleteEntry = async ({ commit }, id) => {
    // await journalApi.delete(path)
    await journalApi.delete(`/entries/${id}.json`)
    // commit => deleteEntry
    commit("deleteEntry", id)

    return id
}
