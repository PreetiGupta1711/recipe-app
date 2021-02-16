import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="font-bold">
        <Toolbar>
          <div className={`${classes.title} left-menu`} >
            <span className="header-logo">LOGO</span>
            <span className="menu-item">ABOUT</span>
            <span className="menu-item">COMMUNITY</span>
            <span className="menu-item">LOCATION</span>
            <span className="menu-item">OUR MENU</span>
            <span className="menu-item">RECIPES</span>
          </div>
          <span className="menu-item">CONTACT</span>
          <span className="menu-item">LOGIN</span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;