import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    card: {
      marginBottom: '20px',
    },
    info: {
      borderRadius: '0px 20px 20px 0px',
      backgroundColor:'#404040',
      color: '#bfc4c9',
      padding: '2vw',
    },
    deleteButton: {
      position: 'relative',
    },



    /* for phone version */
    [theme.breakpoints.down('sm')] : {
      
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));