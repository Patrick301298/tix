import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout";
import InfoMovieContainer from "./containers/ListMovieContainer/InfoMovieContainer";

import Home from "./pages/Home";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <DefaultLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={InfoMovieContainer} />
          </Switch>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
