import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Breakfast from "./Pages/Home/Breakfast/Breakfast";
import FirstMeal from "./Pages/Home/FirestMeal/FirstMeal";
import Dinner from "./Pages/Home/Dinner/Dinner";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* <Route exact path="#breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route exact path="#dinner">
            <Dinner></Dinner>
          </Route> */}
          {/* <Route exact path="/">
            <FirstMeal></FirstMeal>
          </Route> */}
          {/* <Route exact path="/lunch">
            <Lunch></Lunch>
          </Route> */}
          {/* <Route exact path="/breakfast">
            <Breakfast></Breakfast>
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
