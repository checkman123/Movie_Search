import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
      padding: '0',
      marginBottom: '2rem',
      color: 'white'
    },    
    heading: {
      color: 'rgba(0,183,255, 1)',
      marginBottom: '15px'
    },
    addBtn: {
      position: 'inherit'
    },
    /* for phone version */
    [theme.breakpoints.down('sm')] : {
      
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));