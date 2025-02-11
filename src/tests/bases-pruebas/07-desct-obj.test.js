import { UseContext } from "../../bases-pruebas/07-desestructuracion-obj";

// describe("07-desestructuracion de objetos", () => {
//   test("pasaremos los objetos sobre la funcion UseContext ", () => {
//     const year = 12;
//     const password = "Elite124474";
//     const objTest = {
//       anios: year,
//       namePassword: password,
//       lating: {
//         lat: 14.54555,
//         lag: -47.555,
//       },
//     };
//     const method = UseContext({ name: "Dilan", rank: 1, password, year });
//     expect(objTest).toEqual(method);
//   });
// });

describe("Pruebas en 06-deses-obj", () => {
  test("getUser debe retornar un objeto", () => {
    const year = 12;
    const password = "12345Dil";
    const obj = {
      nombreClave: password,
      años: year,
      lating: {
        lat: 14.54555,
        lag: -47.555,
      },
    };
    const method = UseContext({
      name: "Dilan",
      rank: "Capitán",
      password,
      year,
    });
    expect(obj).toEqual(method);
  });
});
