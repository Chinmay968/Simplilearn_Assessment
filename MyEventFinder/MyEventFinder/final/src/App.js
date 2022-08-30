import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AddEvent } from "./features/users/AddEvent";
import Navbar from "./Navbar";
import React from "react";
import { EventList } from "./features/users/EventList";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Switch>
        <Route exact path="/">
            <EventList />
          </Route>
          <Route path="/add-events">
            <AddEvent />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}
