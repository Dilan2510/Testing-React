import { getHello } from "../../bases-pruebas/02-templates";

describe("Este es el component de 02-templates", () => {
  test("Esta esperando el Hola Dilan ", () => {
    const name = "Dilan";
    const message = getHello(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
