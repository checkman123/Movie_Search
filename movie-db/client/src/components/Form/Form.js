import React, { useState } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';

const handleSubmit = () => {

}

const clear = () =>{

}
 
const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message:'',
        tags:'',
        selectedFile: ''
    })

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography varaint="h6">
                    Creating a Movie
                </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator:e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title:e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message:e.target.value })}/>
                <TextField name="tag" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags:e.target.value })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({based64}) => setPostData({...postData,selectedFile: based64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small" size="large" onClick={clear} fullWidth>
                    Clear
                </Button>
                
            </form>
        </Paper>
    );
}

export default Form;