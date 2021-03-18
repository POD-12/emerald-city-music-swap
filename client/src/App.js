import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path ="/signup" component={Signup}/>
      <Route exact path ="/login" component={Login}/>

      <Footer />
    </Router>
  );
}

export default App;
