import React, {useState, useEffect, useCallback } from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {signin, signup} from '../../actions/auth'
import FileBase from 'react-file-base64';

import Input from './Input'
import Icon from './icon'

import useStyles from './style'

const initialState = { firstName: '',
                       lastName: '',
                       email: '',
                       password: '',
                       confirmPassword: '',
                       profile_img: ''}

export const Auth = () => {
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault(); //Dont reload

        console.log("Submit");
        console.log(formData);
        
        if(isSignUp){
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData,history))
        }
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value}); //change initial input into something else (spread formData and input value in)
        console.log(formData);
    }

    const handleImage = useCallback((formData, base64) => {
        setFormData({ ...formData, profile_img: base64 })
      }, [setFormData]);

    const googleSuccess = async (res) =>{
        const result = res?.profileObj;     // ?.  no error if there is no profileObj, just nondefined
        const token = res?.tokenId;

        try {
            dispatch({type: 'AUTH', data: {result, token}});

            //redirect to page start page
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = () =>{
        console.log("Google Sign In was unsuccessful. Try Again Later")
    }
     

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />

                        { //show on Sign Up page only
                            isSignUp ? 
                            <div className={classes.hidden}>
                                <Input name="confirmPassword"  label="Repeat Password" handleChange={handleChange} type="password"/> 
                                <br/>
                                <FileBase  name="profile_img" type="file" multiple={false} onDone={({ base64 }) => handleImage(formData, base64)} /> 
                               
                            </div>

                            : ""
                        }

                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="537373487352-65gr1i11dn9kgj5sjto06i1033smqttt.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignUp ? "Already have an Account? Sign In" : "Dont have an account? Sign Up" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;