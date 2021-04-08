import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
      width: '20vw',
      padding: '2rem 4rem',
      borderRadius: '10px',
      boxShadow: '1px 1px 5px rgba(0,0,0,0.25)',
      marginBottom: '2rem',
      backgroundColor: 'white',
    }
    ,
    /* for phone version */
    [theme.breakpoints.down('sm')] : {
      
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));