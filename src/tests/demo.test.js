describe("Pruebas <DemoComponent/>", () => {
  test("esta es una prueba no puede fallar", () => {
    const message1 = "hola Mundo";
    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});
