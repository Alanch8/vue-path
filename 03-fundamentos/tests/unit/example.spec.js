describe(" Example Component ", () => {
  test(" Debe ser mayor a 10 ", () => {
    //Arreglar
    let value = 10;

    //Estímulo
    value = value + 2;

    //Observar el resultado
    // Como lo haríamos sin Jest
    // if (value > 10) {
    //   //TODO: todo bien!
    // } else {
    //   throw `${value} no es mayor a 10.`;
    // }

    // Como lo hacemos con Jest
    expect( value ).toBeGreaterThan( 10 )

  });
});
