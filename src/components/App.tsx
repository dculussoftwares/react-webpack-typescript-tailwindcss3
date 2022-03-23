import * as React from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.css";
import Button from "./Button";
import Card from "./Card";
import LessExample from "./LessExample";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Button />
        <Card />
        <LessExample />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
