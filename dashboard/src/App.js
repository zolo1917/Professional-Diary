import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ResponsiveDrawer from './Components/Drawer/RespDrawer';
import { useState } from "react";
import Homepage from './Components/Homepage/Homepage';
import {BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useNavigate} from 'react-router-dom'
import Projects from './Components/Projects/Projects';
import Accounts from './Components/Accounts/Accounts';
import Tasks from './Components/Tasks/Tasks';
function App() {
  const [drawerState, setDrawerState] = useState(true)
  const navigate = useNavigate();
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Homepage/>
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/accounts",
      element: <Accounts/>
    },
    {
      path: "/tasks",
      element: <Tasks/>
    }
  ])
  const handleDrawerToggle = () =>{
    setDrawerState((drawerState) =>{
      return !drawerState 
    })
  }
  const handleRoute = (route) => {
    navigate(route)
    console.log(route)
  }
  return (
    <div>
        <Navbar onCallBack={handleDrawerToggle}></Navbar>
      <div className="mainPage">
        <ResponsiveDrawer drawerState={drawerState} routeCallback={handleRoute}></ResponsiveDrawer>
        <div className='leftMargin'>
          {/* <RouterProvider router={router}></RouterProvider> */}
          <Routes>
            <Route path='/dashboard' element={<Homepage/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/accounts' element={<Accounts/>}></Route>
            <Route path='/tasks' element={<Tasks/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
