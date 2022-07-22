import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import reducer from "../reducers";
import middleware from "../middleware";
import Dashboard from "../components/Dashboard";

const store = legacy_createStore(reducer, middleware);

describe("Dashboard", () => {
  it("will match snapshot", () => {
    var { component } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
    )

    expect(component).toMatchSnapshot();
  });
});
