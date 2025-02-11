import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("se llama el component CounterApp", () => {
  const valueInitial = 1;
  test("testing for consumir el maatch en el snapshot> ", () => {
    const { container } = render(<CounterApp value={valueInitial} />);
    expect(container).toMatchSnapshot();
  });

  test("testing for view value initial from 100 ", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test("Debe imcrementar el valor del button mas 1 ", () => {
    render(<CounterApp value={valueInitial} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("2")).toBeTruthy();
  });
  test("Debe disminuir el valor del button menos  1 ", () => {
    render(<CounterApp value={valueInitial} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("0")).toBeTruthy();
  });
  test("Debe setear el valor del button  y quedar en 1 ", () => {
    render(<CounterApp value={valueInitial} />);
    fireEvent.click(screen.getByText(valueInitial));
    fireEvent.click(screen.getByRole("button", { name: "button-reset" }));
    expect(screen.getByText("1")).toBeTruthy();
  });
});
