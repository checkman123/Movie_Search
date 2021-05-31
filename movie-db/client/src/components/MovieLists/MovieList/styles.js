import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card:{
    padding: '10px',
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  delete:{
    position: 'relative',
  },
  title: {
    color: 'black'
  },
}));