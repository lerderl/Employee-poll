import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import reducer from "../reducers";
import middleware from "../middleware";
import NavBar from "../components/NavBar";

const store = legacy_createStore(reducer, middleware);

describe("NavBar", () => {
  it("should match snapshot", () => {
    var { component } = render(
      <MemoryRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
