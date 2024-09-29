import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './page/Home';
import Gift from './page/Gift';
import Order from './page/Order';
import Pay from './page/Pay';
import Search from './page/Search';
import Welcome from './page/Welcome';
import GiftFeature from './component/GiftFeature';
import GiftAnytime from './component/GiftAnytime';
import GiftCong from './component/GiftCong';
import GiftThank from './component/GiftThank';
import Login from './page/Login';
import Bestseller from './page/Bestseller';
import Registration from './page/Registration';
import Adminlogin from './page/Adminlogin';
import Adminpannel from './page/Adminpannel';
import Dcart from './page/Dcart';
import Payment from './page/Payment';
import Psuccessfull from './page/Psuccessfull';
import Introdution from './page/Introdution';
const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/giftcards' element={<Gift />} >
        <Route path='' element={<GiftFeature/>}/>
        <Route path='anytime' element={<GiftAnytime/>}/>
        <Route path='Congratulations' element={<GiftCong/>}/>
        <Route path='thank' element={<GiftThank/>}/>
      </Route>
      <Route path='/ordering' element={<Order />} />
      <Route path='/pay' element={<Pay />} /> 
      <Route path='/login' element={<Login />} />
      <Route path='/search' element={<Search />} />
      <Route path='/bestseller' element={<Bestseller />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/adminlogin' element={<Adminlogin />} />
      <Route path='/adminpannel' element={<Adminpannel />} />
      <Route path='/dcart' element={<Dcart />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/psuccessfull' element={<Psuccessfull />} />
      <Route path='/introdution' element={<Introdution />} />
    </Route>
    <Route path='/welcome' element={<Welcome />} />
  </>

))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


reportWebVitals();
