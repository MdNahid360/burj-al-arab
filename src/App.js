import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase/app";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  PrivateRout

} from "react-router-dom";

import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Book from "./component/Book/Book";
import Login from "./component/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSigningIn:false,
    name:'',
    img: '',
    email: '',
    password: '',
    error: '',
    success: false,
    newUser: false
  });



  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res => {
       const logOutUser = {
        isSigningIn:false,
        name:'',
        img: '',
        email: '',
        password: '',
        error:''
       }
       setLoggedInUser(logOutUser);
    })

  }
  return (
    <div className="App">
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <div>
          
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
           <div className="container">
           <a class="navbar-brand font-weight-bold" href="#">
              BURJ AL ARIAB
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse bg-white" id="navbarNav">
              <ul class="navbar-nav ml-auto bg-white">
                <li class="nav-item active">
                 <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                 <Link className="nav-link" to="/Book">Book</Link>
                </li>
                <li class="nav-item">
                 <Link className="nav-link" to="/login">Login</Link>
                </li>
               <div className="nav-box d-lg-flex d-md-flex d-block justify-content-center dropdown">
                   <div className=" d-flex justify-content-center" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <div className="login">
                       <img className="img-fluid d-lg-block d-md-block d-none" src={loggedInUser.img} alt=""/>
                       </div>
                      <a href="#"className="font-weight-bold ml-2 nav-link text-dark d-lg-none d-md-block d-block">{loggedInUser.name}</a>
                   </div>
                   <div className="dropdown-menu p-3" aria-labelledby="navbarDropdown">
                     <div className="profile d-flex justify-content-center">
                       <img src={loggedInUser.img} className="img-fluid w-100 rounded-circle" alt=""/>
                     </div>
                    <h6 className="text-center m-auto mt-5">{loggedInUser.name}</h6>
                     <div className="d-flex justify-content-center">
                     <small className="text-center mt-2 m-auto">{loggedInUser.email}</small>
                     </div>
                    <div className="d-flex mt-2 justify-content-center">
                    <button className="btn px-3 prf text-white m-auto" onClick={handleSignOut}><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</button>
                    </div>
                </div>
               </div>
               
              </ul>
            </div>
           </div>
          </nav>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/book/:bedType">
              <Book />
            </PrivateRoute>
            <PrivateRoute path="/book">
              <Book />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </Router>
      
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
