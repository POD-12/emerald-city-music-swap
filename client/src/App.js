import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuthTokenStore } from "./utils/auth"
import GuestRoute from "./components/GuestRoute";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./components/LandingPage";


function App() {
 const isAuthDone = useAuthTokenStore()
  return (
  <div>

    {isAuthDone && 
    <Router>
      <NavTabs/>
      <Route exact path="/" component={Home} />
      <GuestRoute exact path ="/signup" component={Signup}/>
      <GuestRoute exact path ="/login" component={Login}/>
      <PrivateRoute exact path ="/userPage" component={LandingPage} redirectTo="/login"/>
      
      <Footer />
    </Router>
    }
  </div>
  )
}

export default App;
