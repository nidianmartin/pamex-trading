import "./App.css";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import TableCurrencies from "./components/Home/TableCurrencies/TableCurrencies";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/market" exact component={TableCurrencies} />
        <Route path="/how-it-work" />
        <Route path="/sign-up" />
        <Route path="/login" />
      </Switch>
    </Router>
  );
}

export default App;
