import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
      borderRadius: '20px',
      width: '250px',
      height: '400px'
    },


    /* for phone version */
    [theme.breakpoints.down('sm')] : {
      
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));