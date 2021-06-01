import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    heading: {
      color: 'rgba(0,183,255, 1)',
    },
    image: {
      marginLeft: '15px',
    },
    background: {
      backgroundColor: 'rgba(96,65,194, 0.2)',
    },
  
    [theme.breakpoints.down('sm')] : {
      /* for phone version */
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));