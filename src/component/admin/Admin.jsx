import { observer } from "mobx-react"
import LoginStore from "../../stor/LoginStore"
import Login from "../login/Login"
// import { useEffect, useState } from "react"
import './Admin.css'
import BussinessDetails from "../BussinessDetails/BussinessDetails"
import React from 'react';
// import { useForm } from "react-hook-form"
import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';
// import Bussiness from '../../stor/bussinessDetails'


const Admin = (observer(() => {


  return (
    <>

      <BussinessDetails/>

      {!LoginStore.isLogin ? <Login /> :
        <>
          <div className='button-container'>
            <Button variant="outlined" ><Link to="./services">services</Link></Button>
            <Button variant="outlined" ><Link to="./meeting">meeting</Link></Button>
          </div>
          <Outlet />
        </>}

    </>
  )
}))
export default Admin
