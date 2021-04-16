import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
      padding: '2rem 4rem',
      marginBottom: '2rem',
      color: 'white'
    },    
    heading: {
      color: 'rgba(0,183,255, 1)',
      marginBottom: '15px'
    },
    /* for phone version */
    [theme.breakpoints.down('sm')] : {
      
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));