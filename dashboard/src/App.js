import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ResponsiveDrawer from './Components/Drawer/RespDrawer';
import { useState } from "react";
import Homepage from './Components/Homepage/Homepage';

function App() {
  const [drawerState, setDrawerState] = useState(true)
  const handleDrawerToggle = () =>{
    setDrawerState((drawerState) =>{
      return !drawerState 
    })
  }
  const handleRoute = (route) => {
    console.log(route)
  }
  return (
    <div>
        <Navbar onCallBack={handleDrawerToggle}></Navbar>
      <div className="mainPage">
        <ResponsiveDrawer drawerState={drawerState} routeCallback={handleRoute}></ResponsiveDrawer>
        <div className='leftMargin'>
        <Homepage></Homepage>
        </div>
      </div>
    </div>
  );
}

export default App;
