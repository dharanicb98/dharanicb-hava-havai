import React from 'react'
import Layout from '../layout'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Airports from '../pages/airports'
import AirportDetail from '../pages/airportDetail'

function ProtectedRoutes() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/airports" element={<Airports/>} />
          <Route path="/airports/:airportName" element={<AirportDetail/>} />
        </Routes>
    </Layout>
  )
}

export default ProtectedRoutes