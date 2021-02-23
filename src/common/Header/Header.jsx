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
      <AppBar position="static" className="font-bold header-top">
        <Toolbar>
          <div className={`${classes.title} left-menu`} >
            <span className="header-logo">
              <a href="#aboutSection" style={{color: 'inherit', textDecoration: 'none'}}>LOGO</a>
            </span>
            <span className="menu-item" data-menuanchor="aboutSection">
              <a href="#aboutSection" title="About Section">ABOUT</a>
              {/* ABOUT */}
            </span>
            <span className="menu-item" data-menuanchor="communitySection">
              <a href="#communitySection" title="COMMUNITY Section">COMMUNITY</a>
              {/* COMMUNITY */}
            </span>
            <span className="menu-item" data-menuanchor="locationSection">
              <a href="#locationSection" title="LOCATION Section">LOCATION</a>
              {/* LOCATION */}
            </span>
            <span className="menu-item" data-menuanchor="menuSection">
              <a href="#menuSection" title="OUR MENU Section">OUR MENU</a>
              {/* OUR MENU */}
            </span>
            <span className="menu-item" data-menuanchor="recipesSection">
              <a href="#recipesSection" title="COLLABORATE Section">COLLABORATE WITH US</a>
              {/* RECIPES */}
            </span>
          </div>
          <span className="menu-item">CONTACT</span>
          <span className="menu-item">LOGIN</span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;