import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import SchemeSearch from './components/Schemes/Schemes'
import News from './components/News.jsx'
import Register from './pages/Register.jsx'
import  CropRecommendation  from './components/CropRecommendation.jsx'
import Chatbot from './components/Github/Chatbot.jsx'
import { Provider } from 'react-redux'
import store from './contextApi/store.js'
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='crop-recommendation' element={<CropRecommendation/>}/>
      <Route path='chatbot' element={<Chatbot/>}/>
      <Route path='about' element={<About/>}/>
      <Route  path='schemes' element={<SchemeSearch/>}/>
      <Route  path='news' element={<News/>}/>
      <Route path='register' element={<Register/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
  </StrictMode>,
)
