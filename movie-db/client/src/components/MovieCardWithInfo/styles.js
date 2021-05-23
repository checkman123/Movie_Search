import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    card: {
      marginBottom: '20px',
    },
    info: {
      borderRadius: '0px 20px 20px 0px',
      backgroundColor:'#1e1b26',
      color: '#bfc4c9',
      padding: '2vw',
    },



    /* for phone version */
    [theme.breakpoints.down('sm')] : {
      
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));