import { Switch, Route } from "react-router";
// import "./App.css";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import MealsC from "./Pages/Meals";
import MealC from "./Pages/Meal";
import NavbarC from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarC />
      <Switch>
        <Route exact path="/" component={MealsC} />
        <Route exact path="/meals" component={MealsC} />
        <Route path="/meals/meal/:idMeal" component={MealC} />
        <Route path="/admin" component={Admin} />
        <Route path="/about" component={About} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
