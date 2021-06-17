import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Post from "./pages/Post";

function App() {
  return (
    <Router className="app">
      <Header />

      <Switch>
        <Redirect exact from="/" to={"sign-in"} />
        <Route path="/home" component={HomePage} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" children={<Post />}></Route>
        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
