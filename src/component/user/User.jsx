import BussinessDetails from "../BussinessDetails/BussinessDetails"
import Login from "../login/Login"
import Bussiness from '../../stor/bussinessDetails';
import { useEffect } from "react";
import { observer } from "mobx-react";
import { Outlet, useParams } from 'react-router-dom';
import SinServ from "../sinServ/SinServ";
import AddNewMeeting from "../addNewMeeting/AddNewMeeting";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';

const User = (observer(() => {

  // const { id } = useParams();

  useEffect(() => {
    Bussiness.initialbusinessServices()
  }, []);

  return (
    <>
      <BussinessDetails/>
      <div className="listServ">
            {Bussiness.businessServices.map((c, i) => 
                
                // <div key={i} className='singlemeetingtoadmin'>
                //     <h3 className='nameserv' >{c.name}</h3>
                //     <div className='des'>{c.describtion}</div>
                //     <div className='button1'></div>
                //     
                // </div>
                <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="150"
                                image="'../../../imges/21.jpg"
                                alt="imggggg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {c.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {c.describtion}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <AddNewMeeting service={c}/>
                        </CardActions>
                    </Card>
           )}
            </div>
        
        
    </>
  )
}))

export default User