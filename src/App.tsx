import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import AboutMe from "./pages/AboutMe";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Register from './pages/Register'
import './App.css';
import Header from './components/Header'

function App() {
  return (
  <main>

    <Router>
      
    <Header />

      <Switch>
          
          <Route exact path="/">
            <MainPage />
          </Route>

          <Route path="/about">
            <AboutMe />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

        </Switch>
    </Router>

  </main>
  );
}

export default App;
