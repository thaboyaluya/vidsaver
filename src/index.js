import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ToastContainer, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary3 from "./components/Errorboundary3";
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary3>
        <App />
      </ErrorBoundary3>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        transition={Bounce}
      />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals(console.log)

serviceWorkerRegistration.register();
