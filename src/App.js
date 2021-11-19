import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Home from './components/Home/Home/Home';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import AddNew from './components/AddNew/AddNew';
import ManegOrders from './components/ManegOrders/ManegOrders';
import Myorder from './components/MyOrder/Myorder';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Loading from './components/Loading/Loading';
import React, { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })
  return (
    <div>
      {isLoading == true ?
        <Loading /> :
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/Home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/myorder">
                <Myorder></Myorder>
              </PrivateRoute>
              <PrivateRoute path="/placeorder/product:id">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
              <PrivateRoute path="/manageOrders">
                <ManegOrders></ManegOrders>
              </PrivateRoute>
              <PrivateRoute path="/addnew">
                <AddNew></AddNew>
              </PrivateRoute>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>

      }
    </div>
  );
}

export default App;
