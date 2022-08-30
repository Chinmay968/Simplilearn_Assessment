import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { fetchUsers } from "./features/users/EventSlice";
import store from "./store";

store.dispatch(fetchUsers());

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
);
