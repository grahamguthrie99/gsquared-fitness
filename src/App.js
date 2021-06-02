import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { primaryTheme } from "./utils";
import Landing from "./pages/Landing";
import { Header } from "./components/Header";
import AuthenticatedRoute from "./session/AuthenticatedRoute";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "../node_modules/react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </ThemeProvider>
  );
}

export default App;
