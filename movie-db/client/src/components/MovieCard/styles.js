import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
      width: '20vw',
      borderRadius: '10px',
      boxShadow: '1px 1px 5px rgba(0,0,0,0.25)',
      marginBottom: '2rem',
      backgroundColor: 'white',
    },
    title: {
      padding: '0.5rem',
      textAlign: 'center',
      marginBlock: '0',
      backgroundColor: 'gray',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
    /* for phone version */
    [theme.breakpoints.down('sm')] : {
      
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));