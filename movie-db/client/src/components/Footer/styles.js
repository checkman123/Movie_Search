import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    heading: {
      color: '#ef981c',
    },
    image: {
      marginLeft: '15px',
    },
    footer: {
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },

  
    [theme.breakpoints.down('sm')] : {
      /* for phone version */
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));