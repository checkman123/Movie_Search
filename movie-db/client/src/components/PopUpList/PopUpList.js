import React from 'react';
import { Container } from "@material-ui/core";

import useStyles from './styles';
import './PopUpList.css'

const PopUpList = (props) => {
  const classes = useStyles();

//return popup if trigger is true if not just empty ""
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>
                close
            </button>
            { props.children }

        </div>
    </div>
  ) : "";
};

export default PopUpList;
