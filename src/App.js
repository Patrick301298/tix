import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout";

import Home from "./pages/Home";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <DefaultLayout>
          <Switch exact path="/">
            <Route>
              <Home />
            </Route>
          </Switch>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
