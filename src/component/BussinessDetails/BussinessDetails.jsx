// import LoginStore from "../../stor/LoginStore"
// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
// import TextField from '@mui/material/TextField';
// import bussinessDetails from "../../stor/bussinessDetails";
import Bussiness from '../../stor/bussinessDetails'
// import { Button } from '@mui/material';
// import { useState,useEffect } from "react";
// import { useForm } from 'react-hook-form';

// function BussinessDetails() {
//   // const [editForm, setEditForm] = useState(false)
//   // const { register, handleSubmit } = useForm({ defaultValues: bussinessDetails });
//   const [bussinessDetails, setBussinessDetails] = useState(bussinessDetailsStore)
//   useEffect(()=>{
//     Bussiness.initialBusinessDetails();
//   },[])
//   return (
//     <>
//       <Container maxWidth="sm" >
//           <Stack spacing={2}>
//             <h5>Name: {bussinessDetails?.data?.name}</h5>
//             <h5>Address: {bussinessDetails?.data?.address}</h5>
//             <h5>Phone: {bussinessDetails?.data?.phone}</h5>
//             {/* <h5>Owner: {bussinessDetails.data.owner}</h5> */}
//             <h5>Description: {bussinessDetails?.data?.description}</h5>
//             {/* {LoginStore.isLogin && <Button onClick={() => setEditForm(true)}>Edit</Button>} */}
//           </Stack>

//       </Container>
//     </>
//   )
// }

// export default BussinessDetails
import LoginStore from "../../stor/LoginStore"
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import bussinessDetailsStore from "../../stor/bussinessDetails";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { observer } from "mobx-react";
import './b.css'
import EditIcon from '@mui/icons-material/Edit';


const BussinessDetails = (observer(() => {
  const [bussinessDetails, setBussinessDetails] = useState(bussinessDetailsStore)
  const [editForm, setEditForm] = useState(false)
  const { register, handleSubmit } = useForm({ defaultValues: bussinessDetails });

  const saveData = (data1) => {
    bussinessDetails.updateBussiness(data1)
    setBussinessDetails(data1)
    setEditForm(false);
  }

  useEffect(() => {
    bussinessDetailsStore.initialBusinessDetails();
  }, [])

  return (
    <>
      <Container maxWidth="sm" >
        {LoginStore.isLogin && editForm ?
          <Stack spacing={2}>
            <form onSubmit={handleSubmit(saveData)} >
              <p><TextField {...register('name')} label="Bussiness Name" variant="outlined" required /></p>
              <p><TextField {...register('address')} label="Bussiness Address" variant="outlined" required /></p>
              <p><TextField {...register('phone')} label="Bussiness Phone" variant="outlined" required /></p>
              <p><TextField {...register('description')} label="Bussiness Description" variant="outlined" required /></p>
              <Button type='submit'>Save</Button>
            </form>
          </Stack>
          :
          <div id="bussinessDetails">
            <Stack className='st' spacing={2}>
            <div className='bd'>
              <h5> {bussinessDetails?.data?.name}</h5>
              <h5> {bussinessDetails?.data?.address}</h5>
              <h5> {bussinessDetails?.data?.phone}</h5>
              <h5> {bussinessDetails?.data?.description}</h5></div>
              <div className='ed'>{LoginStore.isLogin && <Button onClick={() => setEditForm(true)}><EditIcon/></Button>}</div>
              {/* <div className='logo'><img src='../../../imges/2.jpg'></img></div> */}
            </Stack></div>}

      </Container>
    </>
  )
}))

export default BussinessDetails