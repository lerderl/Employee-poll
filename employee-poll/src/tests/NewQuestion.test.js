import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import reducer from "../reducers";
import middleware from "../middleware";
import NewQuestion from "../components/NewQuestion";

const store = legacy_createStore(reducer, middleware);

describe("NewQuestion", () => {
  it("will save new question.", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewQuestion />
        </Provider>
      </MemoryRouter>
    );

    var optionOne = screen.getByTestId("option-one-input");
    fireEvent.change(optionOne, { target: { value: "Do you know this?" } });
    var optionTwo = screen.getByTestId("option-two-input");
    fireEvent.change(optionTwo, { target: { value: "Or this?" } });
    var submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(screen.getByTestId("success-header")).toBeInTheDocument();
    expect(screen.queryByTestId("error-header")).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    var { component } = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewQuestion />
        </Provider>
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
