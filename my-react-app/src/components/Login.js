import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // This assumes you're using jwt-decode v3 with ESM support
import { Button } from "@mui/material";

const Login = ({ isLoggedIn, onLogin }) => {
  const [user, setUser] = useState(null); // Initialize user as null

  const handleLogin = () => {
    onLogin();
  }

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject); // Set user to the decoded JWT object
    handleLogin()
    document.getElementById("signInDiv").hidden = true; // Hide the Google sign-in button
  }

  function handleSignOut(event) {
    setUser(null); // Set user to null to indicate no user is signed in
    document.getElementById("signInDiv").hidden = false; // Show the Google sign-in button
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "1000336939480-fgfku4o35kcj9n7tadb47ujdi5q3t5c9.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt(); // This may cause a pop-up to be shown if the user is not signed in
  }, []);

  // Correctly check if `user` is truthy to determine what to render
  return (
    <div>
      <div id="signInDiv"></div>
      {user && ( // This will check if `user` is not null
        <>
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
          <div>
            <img src={user.picture} alt="User profile" />
            <h3>{user.name}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
