
import Home from "./pages/Home";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuthTokenStore } from "./utils/auth"
import GuestRoute from "./components/GuestRoute";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import BrowseForm from "./components/BrowseForm";
import CreatePost from "./components/CreatePost";



function App() {
 const isAuthDone = useAuthTokenStore()
  return (
  <div>

    {isAuthDone && 
    <div>
      <NavTabs/>
      <GuestRoute exact path="/" component={Home} redirectTo = "/userPage"/>
      <PrivateRoute exact path="/browse" component={BrowseForm} redirectTo = "/login"/>
      <PrivateRoute exact path="/createpost" component={CreatePost} redirectTo = "/login"/>
      <GuestRoute exact path ="/signup" component={Signup} redirectTo = "/userPage"/>
      <GuestRoute exact path ="/login" component={Login} redirectTo = "/userPage"/>
      <PrivateRoute exact path ="/userPage" component={LandingPage} redirectTo="/login"/>
      <Footer />
    </div>

    }
  </div>
  )
}

export default App;
