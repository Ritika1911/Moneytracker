import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';
import Header from './components/Header'
import About from './components/About'
import sam from './components/sam'
import List from './pages/List'
import Create from './components/Create'
import Transactionpage from "./components/Transactionpage";
import Filterform from './components/Filterform'
import Home from './components/Home'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Sendreq from './components/Sendreq'
import Payees from './components/Payees'
function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={List} />
          <Route path="/li/:id" component={Transactionpage} />
          <Route path="/tran/create" component={Create} />
          <Route path="/tran/filter" component={Filterform} />
          <Route path="/home" component={Home} />
          <Route path="/user/signup" component={Signup} />
          <Route path="/user/login" component={Login} />
          <Route path="/user/sendreq" component={Sendreq}/>
          <Route path="/user/payee" component={About}/>
          
        </div>
      </div>
    </Router>
  );
}

export default App;