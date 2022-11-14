import getPokemonOptions, {
  getPokemons,
  getPokemonNames,
} from "@/helpers/getPokemonOptions";

describe("getPokemonOptions helpers", () => {
  test("debe de regresar un arreglo de numeros", () => {
    const pokemons = getPokemons();

    // console.log(pokemons);

    expect(pokemons.lenght).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[500]).toBe(501);
    expect(pokemons[649]).toBe(650);
  });

  test("debe de retornar un arreglo de 4 elementos con nombres de pokemons", async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);

    // console.log(pokemons);

    expect(pokemons).toEqual([
      {
        name: "bulbasur",
        id: 1,
      },
      {
        name: "ivysaur",
        id: 2,
      },
      {
        name: "venusaur",
        id: 3,
      },
      {
        name: "charmander",
        id: 4,
      },
    ]);
  });

  test("getPokemonOptions debe de retornar un arreglo mezclado", async () => {
    const pokemons = await getPokemonOptions();

    // console.log(pokemons);

    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]);
  });
});
