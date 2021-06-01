import{ makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    heading: {
      marginBottom: '15px'
    },
    page:{
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '15px'
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
    label: {
      color: 'rgba(0,183,255, 1)',
    },
    navButtons: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    nextPage: {
      marginLeft: '20px'
    },
    /* for phone version */
    [theme.breakpoints.down('sm')] : {
      
      mainContainer: {
        flexDirection: "column-reverse"
      }
    }
    
  }));