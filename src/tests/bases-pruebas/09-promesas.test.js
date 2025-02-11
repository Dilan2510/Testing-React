import { getElemtByIdPromise } from "../../bases-pruebas/09-promesas";

describe("Se llama 09-promesas ", () => {
  test("se llama la funcion getElemtByIdPromise para retornar el valor por ID ", (done) => {
    const id = 1;
    getElemtByIdPromise(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });
  test("se llama la funcion getElemtByIdPromise para retornar el valor de no existe ", (done) => {
    const id = 100;
    getElemtByIdPromise(id).catch((error) => {
      expect(error).toBe(`No existe el heroe ${id}`);
      done();
    });
  });
});
