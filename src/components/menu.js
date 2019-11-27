import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import Home from '@material-ui/icons/Home'
import AddBox from '@material-ui/icons/AddBox';
import ExitToApp from '@material-ui/icons/ExitToApp'

const useStyles = makeStyles({
  root: {
    width: 170,
    marginLeft: '-10px',
    marginTop: '-10px',
    paddingTop: '10px',
    height: "100vh",
    background: "#b2abab",
    color: "#FFF"
  },
});

export default function TypographyMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Home fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Inicio</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AddBox fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Teste</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Testes
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Sair
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}