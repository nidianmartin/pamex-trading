import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch } from "react-router-dom";
import AuthenticatedRoute, { NotAuthenticatedRoute } from './components/AuthenticatedRoute';
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import TableCurrencies from "./components/Home/TableCurrencies/TableCurrencies";
import HowItWork from "./components/Home/HowItWork/HowItWork";
import SignUp from "./components/Access/SignUp";
import Login from "./components/Access/Login";
import Profile from "./components/Profile/Profile";
//import ChatBot from "./components/ChatBot/ChatBot";
import Exchange from "./components/Home/Exchange/Exchange";
import Footer from "./components/Home/Footer";

function App() {
  
  return (
    <div className="App">
      <Navbar />
          {/* <ChatBot/> */}
        <Switch>
          <NotAuthenticatedRoute exact path='/' component={Home} />
          <NotAuthenticatedRoute exact path='/login' component={Login} />
          <NotAuthenticatedRoute exact path='/signup' component={SignUp} />
          <NotAuthenticatedRoute exact path='/market' component={TableCurrencies} />
          <NotAuthenticatedRoute exact path='/exchanges' component={Exchange} />
          <NotAuthenticatedRoute exact path='/how-it-work' component={HowItWork} />
          <AuthenticatedRoute path='/profile' component={Profile} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;