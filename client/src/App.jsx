import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Register from "./components/register/Register"
function App() {
 
  const[user,setLoginUser] = useState(null);

  

  return (
    <>
      <Nav user = {user} setLoginUser = {setLoginUser}/>
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <div className="App"><Canvas width={700} height={500}/></div> : <Login setLoginUser={setLoginUser}/>
            }
              
          </Route>
          <Route path="/login">
              <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
              <Register/>
          </Route>
        </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;