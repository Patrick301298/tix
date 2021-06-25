import "./App.scss";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { BrowserRouter, Switch } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <DefaultLayout>
          {/* <Switch exact path="/" components={} /> */}
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
