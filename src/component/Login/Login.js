import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import "./Login.css";
import { useHistory, useLocation } from "react-router-dom";
import gl from "../../image/google.png";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [newUser, setNewUser] = useState(false);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        const { displayName, email, photoURL, password, error } = result.user;
        const signedInUser = {
          isSigningIn: true,
          name: displayName,
          email: email,
          img: photoURL,
          password: password,
          error: error
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential);
      });
  };

  const handleBlur = (event) => {
    let isFromValid;

    if (event.target.name === "email") {
      isFromValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordValidator = /\d{1}/.test(event.target.value);
      isFromValid = passwordValidator && isPasswordValid;
    }
    if (isFromValid) {
      const newUser = { ...loggedInUser };
      newUser[event.target.name] = event.target.value;
      setLoggedInUser(newUser);
    }
  };
  const handleSubmit = (event) => {
    // console.log(loggedInUser.email, loggedInUser.password);
    if (newUser && loggedInUser.email && loggedInUser.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          loggedInUser.email,
          loggedInUser.password
        )
        .then((res) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          updateUserName(loggedInUser.name);
        })
        .catch((error) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = error.message;
          newUserInfo.success = false;

          setLoggedInUser(newUserInfo);
        });
    }

    if (!newUser && loggedInUser.email && loggedInUser.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((res) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          console.log('sign in user info', res.loggedInUser);
        })
        .catch((error) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }
    event.preventDefault();
  };

  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      })
      .then(function () {
        console.log('user name updated'); 

      })
      .catch(function (error) {
          console.log(error);
      });
  };

  return (
    <div className="account d-flex py-5 justify-content-center align-items-center"> <br/><br/>
      <div className="bls d-block mt-5 py-5 container">
        <form action="" onSubmit={handleSubmit}>
          <h3 className="text-center font-weight-bold text-center mt-2">
            {newUser ? "Sign Up" : "Sign In"}{" "}
          </h3>

          {newUser && (
            <input
              name="name"
              type="text"
              onBlur={handleBlur}
              placeholder="Enter Your Name"
              className="form-control mt-4"
              id=""
            />
          )}

      
          {newUser && (
            <select name="gender" className="form-control mt-4">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          )}

          <input
            onBlur={handleBlur}
            type="text"
            required
            placeholder="Username or email"
            name="email"
            className="form-control mt-4"
            id=""
          />

          <input
            onBlur={handleBlur}
            type="password"
            required
            placeholder="Password"
            name="password"
            className="form-control mt-3"
            id=""
          />

          <p className="text-center text-danger mt-2">{loggedInUser.error}</p>

          {loggedInUser.success && (
            <p className="text-center text-success mt-2">
              {newUser ? "Sign Up" : "Sign In"} successfully
            </p>
          )}

          <input
            type="submit"
            name=""
            className="form-control submit btn mt-1"
            value={newUser ? 'Sign Up' : 'Sign In'}
            id=""
          />
          <h6 className="mt-2">or</h6>
          <div className="mt-3">
            <input
              type="checkbox"
              onChange={() => setNewUser(!newUser)}
              name="newUser"
              value="hello"
            />

            <label className=" ml-2">
              {newUser
                ? "Already have an account"
                : "are you new user ? Sign In"}{" "}
            </label>
            {
              <button
                className="btn google d-flex m-auto"
                onClick={handleGoogleSignIn}
              >
                <img src={gl} className="img-fluid gLogo" alt="" />{" "}
                <span className="mx-auto">Sign in with google</span>
              </button>
            }
          </div>
        </form>

        <br />
      </div>
    </div>
  );
};

export default Login;
