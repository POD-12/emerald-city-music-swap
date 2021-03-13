import {BrowserRouter as Router ,Route} from "react-router-dom";
import Signup from "./pages/Signup"
import NavTabs from "./components/NavTabs";

function App() {
  return (
   <Router><NavTabs />
     <Route exact path="/" component ={Signup} />
   </Router>
  );
}

export default App;
