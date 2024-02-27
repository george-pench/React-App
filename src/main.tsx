import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334

import React, { Component /* , StrictMode */ } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import ErrorBoundary from "./components/Error/errorBoundary";
import ErrorPage from "./components/Error/errorPage";

interface Props {}
interface State {}

class AppContainer extends Component<Props, State> {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById("app");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ErrorBoundary fallback={<ErrorPage />}>
        <AppContainer />
      </ErrorBoundary>
    </React.StrictMode>,
  );
}

// React + TS: https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
