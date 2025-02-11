import { returnObject } from "../../bases-pruebas/06-desestructuracion-arr";

describe("se llaman la funciones del  05-desct-arr", () => {
  test("se llama la funcion returnObject", () => {
    const [letras, numeros] = returnObject();

    // expect(letras).toBe('ABC');
    // expect(numeros).toBe(123);

    // expect(typeof letras).toBe("string");
    // expect(typeof numeros).toBe("number");

    expect(letras).toEqual(expect.any(String));
  });
});
