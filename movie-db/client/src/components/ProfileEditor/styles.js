import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent:"space-evenly",
    margin:"18px 0px",
    borderBottom:"2px solid",
  },
  userInfo: {
    display: "flex",
    justifyContent:"space-between",
    width:"auto",
    margin: "0px 16px",
  },
  actionDiv: {
    textAlign: 'center',
  },
  
}));