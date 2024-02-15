import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334

import React, { Component, ErrorInfo /* , StrictMode */ } from "react";
import ReactDOM from "react-dom/client";
import apiEndpoints from "./api.endpoints";
import App from "./components/app";

interface Props {}
interface State {}

async function testFetch(): Promise<void> {
  const data = await (await fetch(apiEndpoints.testMock)).json();
  console.warn("fetched data", data);
}

class AppContainer extends Component<Props, State> {
  // ["constructor"]: typeof AppContainer;

  constructor(props: Props) {
    super(props);
    this.state = {};
    // test class-dead-code
    const goExclude = true;
    if (!goExclude) {
      console.warn("class-dead-code doesn't work", props);
    }
  }

  componentDidMount(): void {
    setTimeout(testFetch, 300);
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("got err", { error, errorInfo });
  }

  render() {
    return <App />;
  }
}

const rootElement = document.getElementById("app");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>,
  );
}

// React + TS: https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
