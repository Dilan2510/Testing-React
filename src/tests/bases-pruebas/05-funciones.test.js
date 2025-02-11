import { dataSourceActive, getUser } from "../../bases-pruebas/05-funciones";

describe("se parasaran las funciones de 05-funciones", () => {
  test("la funcion getUser parasara un objeto ", () => {
    const object = {
      uid: "ABC123",
      username: "El_Papito502",
    };
    const metod = getUser();
    expect(metod).toEqual(object);
  });

  test("la funcion dataSourceActive pasara parametros ", () => {
    const name = "Goku";
    const object = {
      uid: "ABC",
      username: `${name}`,
    };
    const method = dataSourceActive(name);
    expect(method).toEqual(object);
  });
});
