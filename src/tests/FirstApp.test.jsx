import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("pruebas en FirstApp", () => {
  // test("se llama la img para hacer un snapshot ", () => {
  //   const title = "Hola soy Goku";
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test("Debe pasar el h1", () => {
    const title = "Hola soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    expect(getByTestId("test-title").innerHTML).toContain(title);

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);
  });

  test("Debe consumir el subtitle de los props ", () => {
    const title = "Hola soy Goku";
    const subtitle = "Hola soy un subTitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subtitle} />
    );
    expect(getAllByText(subtitle).length).toBe(2);
  });
});
