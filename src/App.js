import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import AddPackages from './pages/AddPackages/AddPackages';
import Home from './pages/Home/Home/Home';
import Packages from './pages/Home/Packages/Packages';
import LogIn from './pages/LogIn/LogIn';
import OrderPlaced from './pages/OrderPlaced/OrderPlaced';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';
import MyOrders from './pages/MyOrders/MyOrders';
import AllOrders from './pages/AllOrders/AllOrders';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/packages">
              <Packages></Packages>
            </Route>
            <Route path="/addpackages">
              <AddPackages></AddPackages>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/allorders">
              <AllOrders></AllOrders>
            </Route>
            <PrivateRoute path="/orderplaced/:orderId">
              <OrderPlaced></OrderPlaced>
            </PrivateRoute>
            <Route path="*">

            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
