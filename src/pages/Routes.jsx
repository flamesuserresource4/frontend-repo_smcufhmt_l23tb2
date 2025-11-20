import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from './Home'
import NotFound from './NotFound'
import { PlaceholderList, PlaceholderDetail, PlaceholderForm, PlaceholderTable } from './Placeholders'

export default function AppRoutes(){
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="destinations" element={<PlaceholderList title="Popular Destinations" />} />
        <Route path="packages" element={<PlaceholderList title="Tour Packages" />} />
        <Route path="packages/:id" element={<PlaceholderDetail title="Package Detail" />} />
        <Route path="guides" element={<PlaceholderList title="Tour Guides" />} />
        <Route path="guides/:id" element={<PlaceholderDetail title="Guide Profile" />} />
        <Route path="login" element={<PlaceholderForm title="Login" />} />
        <Route path="register" element={<PlaceholderForm title="Register" />} />
        <Route path="forgot" element={<PlaceholderForm title="Forgot Password" />} />
        <Route path="verify" element={<PlaceholderForm title="Verify Email" />} />
        <Route path="dashboard" element={<PlaceholderTable title="User Dashboard" />} />
        <Route path="admin" element={<PlaceholderTable title="Admin Dashboard" />} />
        <Route path="cart" element={<PlaceholderTable title="Cart" />} />
        <Route path="checkout" element={<PlaceholderForm title="Checkout" />} />
        <Route path="about" element={<PlaceholderForm title="About" />} />
        <Route path="contact" element={<PlaceholderForm title="Contact" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
