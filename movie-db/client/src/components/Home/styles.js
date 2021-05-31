import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    heading: {
      color: '#ef981c',
      marginBottom: '15px'
    },
    image: {
      marginLeft: '15px',
    },
    searchBar: {
      textAlign: 'center'
    },
    search: {
      width: '100%',
      position: 'relative',
      display: 'flex',
    },
    cardList:{
      paddingLeft: '20px',
      paddingRight: '20px',
    },

    
    /* for phone version */
    [theme.breakpoints.down('sm')] : {
      
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));