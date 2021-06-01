import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
      padding: '0',
      marginBottom: '2rem',
      color: 'white'
    },    
    heading: {
      color: '#ef981c',
      marginBottom: '15px',
      display: 'block'
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