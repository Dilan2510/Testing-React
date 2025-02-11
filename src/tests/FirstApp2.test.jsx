import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("testing en <FirstApp2>", () => {
  const title = "Hola soy Goku";
  const subtitle = "Soy un subtitulo";

  test("testing for consumir el maatch en el snapshot ", () => {
    const { container } = <FirstApp title={title} />;
    expect(container).toMatchSnapshot();
  });

  test("pasar la etiqueta de h1 ", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(title);
  });

  test("Debe consumir y pasar el titulo ", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Debe consumir y pasar el titulo ", () => {
    render(<FirstApp subTitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
