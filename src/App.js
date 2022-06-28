import "./App.css";
import Header from "./components/header/header";
import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/home";
import Contact from "./pages/contact/contact";
import Articles from "./pages/articles/articles";
import Private from './components/private/private';
import {useState} from 'react'
import Profile from './pages/profile/profile';
function App() {

 const [isLogin,setLogin]= useState(true)
  return (
    <>
      <Router>
        <Header />
        <div className="container my-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/articles" exact component={Articles} />
            <Private path="/profile" component={Profile} isLogged={isLogin} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
