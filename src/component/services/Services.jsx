import { observer } from "mobx-react";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import Button from '@mui/material/Button';
import bussinessDetails from "../../stor/bussinessDetails";
import Bussiness from '../../stor/bussinessDetails'
import './services.css'


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';




const Services = (observer(() => {
    useEffect(() => {
        // Bussiness.initialBusinessDetails()
        Bussiness.initialbusinessServices();
    }, []);

    const [isOpen, setIsOpen] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const [formData, setFormData] = useState({
        name: "",
        describtion: "",
        price: "",
    })

    const handleSubmit = (event) => {

        if (formData.name !== '' && formData.describtion !== '' && formData.price !== '') {
            Bussiness.addService(formData);
            console.log(formData)
        }
        else {
            Swal.fire({
                title: "Error!",
                text: "required filds",
            });
        }
        setFormData({
            name: "",
            describtion: "",
            price: "",
        });
        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={() => setIsOpen(true)} ><AddIcon /></Button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>הוספת שירות לעסק</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="Form">
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="service name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder=" service name"
                            />
                        </div>
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label=" service describtion"
                                name="describtion"
                                value={formData.describtion}
                                onChange={handleInputChange}
                                placeholder="service describtion"
                            />
                        </div>

                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label="  service Price"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                placeholder="service Price"
                            />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
            <div className="listServ">
                {Bussiness.businessServices.map((c, i) =>

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
                        {/* <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions> */}
                    </Card>
                )}
            </div>
        </>
    )
}))

export default Services