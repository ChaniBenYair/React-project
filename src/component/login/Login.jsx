import * as React from 'react';
import { useState } from "react"
import { observer } from "mobx-react"
import LoginStore from "../../stor/LoginStore"
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Admin from "../admin/Admin"
import './Login.css'
import Bussiness from '../../stor/bussinessDetails'
import { useEffect } from 'react';
const Login = (observer(() => {
    useEffect(() => {
        async function fetchData() {
          await Bussiness.initialBusinessDetails();
          console.log("LEN", Object.keys(Bussiness.data).length)
          if (Object.keys(Bussiness.data).length === 0) {
            Bussiness.createBussiness({
               
                    name: "חני בן יאיר",
                    address: "בן זכאי 56 בני ברק",
                    phone: "055-676-9826",
                    description: "מסרקת מקצועית"})
          }
        }
        fetchData();
      }, []);
    const [form, setForm] = useState({ name: '', pasword: '' })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }

    const submit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8787/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
            .then((response) => {
                if (response.ok) {
                    // Login successful, set the login status to true
                    LoginStore.setIsLogin(true);
                    Swal.fire({
                        icon: "success",
                        title: "Login successful!",
                        text: "",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                } else {
                    // Login failed, set the login status to false
                    LoginStore.setIsLogin(false);
                    Swal.fire({
                        icon: "error",
                        title: "Login failed!",
                        text: "Please check your credentials and try again.",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            })
            .catch((error) => {
                // console.error("Error:", error);
                // Login failed, set the login status to false
                LoginStore.setIsLogin(false);
                Swal.fire({
                    icon: "error",
                    title: "Login failed!",
                    text: "An error occurred while trying to login. Please try again later.",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    }
    return (
        <>      
            {
                !LoginStore.isLogin &&
                    <div>
                        <div id='form'>
                            <form onSubmit={submit} >
                                <TextField onChange={handleChange}
                                    helperText="Enter your name"
                                    id="demo-helper-text-misaligned"
                                    label="name"
                                    variant="filled"
                                    name='name'
                                    required
                                />
                                <br />
                                <TextField onChange={handleChange}
                                    label="password"
                                    variant="filled"
                                    name='password'
                                    required
                                    type='password'
                                />
                                <br />
                                <br />
                                <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                                    Send
                                </Button>
                            </form>
                        </div>
                    </div>
            }
        </>
    )
}))
export default Login