import { getImage } from "../../bases-pruebas/11-async-await";

describe("se realizan las pruebas de 11-async-await", () => {
  test("se llama la funcion 11-async-await que retorna el url ", async () => {
    const url = await getImage();
    expect(typeof url).toBe("string");
  });
});
