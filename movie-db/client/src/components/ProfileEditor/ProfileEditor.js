import React, {useState, useEffect, useCallback} from 'react';
import { Grid, Typography, Button, Paper, Container, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { updateUser } from '../../actions/userInfo'

import useStyles from './styles';

const ProfileEditor = (props) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const userInfo = useSelector((state) => state.userInfo);
    const classes = useStyles();
    var userId;

    //Check if user is login by us or Google
    if(user){
      if(user.result._id){
        userId = user.result._id;
      } else { 
        userId = user.result.googleId;
      }
    }

    const initialState = { firstName: userInfo.name.split(' ')[0],
                       lastName: userInfo.name.split(' ')[1],
                       email: userInfo.email,
                       status: userInfo.status,
                       profile_img: userInfo.profile_img}

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault(); //Dont reload

        console.log("Submit");
        console.log(formData);
        
        //UPDATE
        dispatch(updateUser(userId, {...formData}));
        history.push('/user-info');
    }

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value}); //change initial input into something else (spread formData and input value in)
        console.log(formData);
    }

    const handleImage = useCallback((formData, base64) => {
      setFormData({ ...formData, profile_img: base64 })
    }, [setFormData]);

    return (
          <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5" color="textPrimary">Edit Your Profile</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} variant="outlined" required fullWidth autoFocus={true} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} variant="outlined" required fullWidth/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField name="email" label="Email" value={formData.email} onChange={handleChange} variant="outlined" required fullWidth/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField name="status" label="Status" value={formData.status} onChange={handleChange} variant="outlined" fullWidth/>
                      </Grid>
                      <Grid item xs={12}>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => handleImage(formData, base64)}/>
                        <p className={classes.fileWarning}>(Please wait a few minutes for updated profile picture)</p>
                      </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Edit
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default ProfileEditor;