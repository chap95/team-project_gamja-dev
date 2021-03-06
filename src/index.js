import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// react-redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

// redux devTools(chrome Extension)
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
