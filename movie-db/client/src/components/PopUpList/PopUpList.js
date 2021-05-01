import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import MovieListForm from "../MovieListForm/MovieListForm"

import useStyles from './styles';
import './PopUpList.css'

const PopUpList = (props) => {
  const classes = useStyles();

  console.log(props);

  //set to value._id to add movie into that list
  const [listToAdd, setListToAdd] = useState('');

  const handleSubmit = (e) => {
      console.log(listToAdd);
  }
//return popup if trigger is true if not just empty ""
  return (props.trigger) ? (

    (props.listExist) ? (
        <div>
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>
                        close
                    </button>
                    <div className="combo-box">
                        <Autocomplete
                            id="combo-box-movie-lists"
                            onChange={(e, value) => setListToAdd(value)}
                            options={props.movieLists}
                            getOptionLabel={(option) => option.title}
                            style={{ paddingTop: '20px'}}
                            renderInput={(params) => <TextField {...params} label="Movie List" variant="outlined" />}
                        />
                    </div>

                    <button onClick={handleSubmit}>add</button>
                    
                </div>
                
            </div>
            
        </div>
    ) : (
        <div>
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>
                        close
                    </button>
                    <MovieListForm/>
                </div>
            </div>
        </div>
       
    )
  ) : "";
};

export default PopUpList;
