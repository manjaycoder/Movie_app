import App from './App.jsx'
import './index.css'
import store  from "./redux/store.js"
import { Provider } from 'react-redux'
import {Route,RouterProvider,createRoutesFromElements} from 'react-router'
import {createBrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import PrivateRoute from './component/pages/Auth/PrivateRoute.jsx'
///auth
import Profile from './component/pages/User/Profile.jsx'




//RESTRICTED
import Home from './component/pages/Home.jsx'
import Login from './component/pages/Auth/Login.jsx';
import Register from './component/pages/Auth/Register.jsx'



const router =createBrowserRouter(
  createRoutesFromElements(
    <Route auth='/' element={<App/>}  >
     <Route index={true} path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='' element={<PrivateRoute/>}>
     <Route path='/profile' element={<Profile/>}/>
     </Route>
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
)
