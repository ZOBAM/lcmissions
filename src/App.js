import "./App.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Contact } from "./views/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./views/Home";
import About from "./views/About";
import Support from "./views/Support";

function App() {
  return (
    <Router>
      <main className="App" style={{ backgroundColor: "#ffffff" }}>
        <Nav />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
