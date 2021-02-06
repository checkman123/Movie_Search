import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import useStyles from './styles';
import {createPost, updatePost} from '../../actions/posts';

//Get Current ID

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message:'',
        tags:'',
        selectedFile: ''
    })

    const post = useSelector((state) => currentId? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault(); //not to get refresh in browser

        //if no currentId create instead of update
        if(currentId) {
            dispatch(updatePost(currentId, postData));
        }else{
            dispatch(createPost(postData));
        }

        
    }
    
    const clear = () =>{
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6"> {currentId ? `Editing a Movie` : 'Adding a Movie'}</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator:e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title:e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message:e.target.value })}/>
                <TextField name="tag" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags:e.target.value.split(',') })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({based64}) => setPostData({...postData,selectedFile: based64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" size="large" type="submit" fullWidth>
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