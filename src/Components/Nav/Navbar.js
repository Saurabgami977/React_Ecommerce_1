import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: 0,
    zIndex: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    cursor: 'pointer',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  userInfo: {
    marginRight: 15,
    diplay: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const SearchAppBar = (props) => {
  const classes = useStyles();
  const numberOfCartItems = useSelector(state => state.cart.products)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={() => props.history.push('/')}
          >
            BuyNow
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <div className={classes.userInfo}>
              <p>Hello, Saurabgami977@gmail.com</p>
            </div>
            <p
              onClick={() => props.history.push('/cart')}
              style={{ marginRight: '4px' }}
            >
              {numberOfCartItems.length} Item
            </p>
            <ShoppingCartIcon />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
