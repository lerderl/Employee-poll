import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import reducer from "../reducers";
import middleware from "../middleware";
import LoginPage from "../components/LoginPage";

const store = legacy_createStore(reducer, middleware);

describe("LoginPage", () => {
  it("will log in to the dashboard if a user is selected.", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </MemoryRouter>
    );

    var username = screen.getByTestId("users-select");
    fireEvent.change(username, { target: { value: "sarahedo" } });
    var submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(screen.getByTestId("success-header")).toBeInTheDocument();
    expect(screen.queryByTestId("error-header")).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    var { component } = render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
