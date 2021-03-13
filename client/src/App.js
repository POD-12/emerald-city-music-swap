import {BrowserRouter as Router ,Route} from "react-router-dom";
import Signup from "./pages/Signup"

function App() {
  return (
   <Router>
     <Route exact path="/" component ={Signup} />
   </Router>
  );
}

export default App;
