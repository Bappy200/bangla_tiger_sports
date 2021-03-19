import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Bus from './components/Bus/Bus';
import Car from './components/Car/Car';
import Train from './components/Train/Train';
import Bike from './components/Bike/Bike';


export const userContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({})
  return (
    <userContext.Provider value={[loginUser,setLoginUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Router path='/login'>
            <Login></Login>
          </Router>
          <PrivateRoute path='/bus'>
            <Bus></Bus>
          </PrivateRoute>
          <PrivateRoute path='/car'>
            <Car></Car>
          </PrivateRoute>
          <PrivateRoute path='/train'>
            <Train></Train>
          </PrivateRoute>
          <PrivateRoute path='/bike'>
            <Bike></Bike>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
