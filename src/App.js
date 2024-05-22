import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Landing from "./components/Landing.js";
import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./components/contexts/authContext/index.jsx";
import Home from "./components/Home.js";

const theme = createTheme({
  typography: {
    fontFamily: '"Oxygen", "Manrope", Arial, sans-serif',
  },
});

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Landing />,
    },
    {
      path: "/landing",
      element: <Landing />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <div 
          className="App"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {routesElement}
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App;
