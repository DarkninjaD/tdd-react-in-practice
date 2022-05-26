// test-utils.js
import { render } from "@testing-library/react";
import { AppProvider } from "../context/AppContext";

const AllTheProviders = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
