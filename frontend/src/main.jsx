import App from './App.jsx'
import './index.css'
import store  from "./redux/store.js"
import { Provider } from 'react-redux'
import {Route,RouterProvider,createRoutesFromElements} from 'react-router'
import {createBrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'

///auth





//RESTRICTED
import Home from './component/pages/Home.jsx'




const router =createBrowserRouter(
  createRoutesFromElements(
    <Route auth='/' element={<App/>}  >
     <Route index={true} path='/' element={<Home/>}/>
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
)
