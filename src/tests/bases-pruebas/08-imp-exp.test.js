import { getHeroById, getHeroByOwner } from "../../bases-pruebas/08-imp-exp";

describe("Se realizan la pruebas de 08-imp-exp", () => {
  test("se llama la funcion getHeroById que retorna por ID  ", () => {
    const id = 1;
    const method = getHeroById(id);
    expect(method).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("se llama la funcion getHeroById que retorna un undefined", () => {
    const id = 100;
    const method = getHeroById(id);
    expect(method).toBeFalsy();
  });
  test("se llama la funcion getHeroByOwner que retorna el owner por Dc", () => {
    const owner = "DC";
    const method = getHeroByOwner(owner);
    expect(method).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });
  test("se llama la funcion getHeroByOwner que retorna el owner por Marvel", () => {
    const owner = "Marvel";
    const method = getHeroByOwner(owner);
    expect(method).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });
});
