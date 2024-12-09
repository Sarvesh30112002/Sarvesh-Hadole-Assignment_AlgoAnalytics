import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import AllNotifications from "./components/dashboard/AllNotifications"
import PostDetails from "./components/post/PostDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp"
import CreatePost from "./components/post/CreatePost"
import UserProfile from "./components/user/UserProfile";
import UserDetails from "./components/user/UserDetails"




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/post/:id" component={PostDetails}></Route>
            <React path="/user/:id" component={UserDetails}></React>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/create" component={CreatePost}></Route>
            <Route path="/allNotifications" component={AllNotifications}></Route>
            <Route path="/userProfile" component={UserProfile}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
