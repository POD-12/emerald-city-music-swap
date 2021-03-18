import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavTabs />
      <Route exact path="/" component={Home} />

      <Footer />
    </Router>
  );
}

export default App;
