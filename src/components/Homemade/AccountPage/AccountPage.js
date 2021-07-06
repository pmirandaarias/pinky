import React from "react"

import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import HistoryIcon from "@material-ui/icons/History"
import IconButton from "@material-ui/core/IconButton"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import SecureLS from "secure-ls"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Link } from "gatsby"

const useStyles = makeStyles({
  root: {
    paddingTop: "15%",
  },
  listBackground: {
    backgroundColor: "#F2F7FD",
    marginLeft: '0.5em', 
    marginRight: '0.5em', 
    borderRadius: '0.5em',
    paddingTop: '0.1em',
    paddingBottom: '0.1em',
  },
  button: {
    backgroundColor: "rgba(253,180,20,255)",
    borderRadius: "10px",
    width: '90%',
    marginLeft: '1em',
    marginRight: '1em',
    fontFamily: 'visby',
    fontWeight: 'bold', 
    color: 'white'
  },
  fontsize: {
    fontFamily: 'visby',
    fontSize: 12,
  },
  decoration: {
    textDecoration: "none",
  },
  bold: {
    fontWeight: "bold",
    fontFamily: 'visby', 
    color: 'black'
  },
  header: {
    fontFamily: 'visby', 
    fontWeight: 'bold' 
  },
  heading: {
    paddingTop: '0.2em'
  },
  listAvatar: {
    backgroundColor: '#F2F7FD'
  },
  listIcon: {
    color: 'black'
  },
  listSecondaryText :{
    color: 'black', 
    fontFamily: 'visby',
    fontSize: '0.8em'
  }
  
})

const AccountPage = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={3} className = {classes.heading} >
        <Grid item xs={2}>
          <Box pt={1.5} ml= {2}>
            <Link to="#">
              <ArrowBackIcon className={classes.backSize} />
            </Link>
          </Box>
        </Grid>
        <Grid item sx = {10}>
          <Typography variant="h6" className = {classes.header}>Account</Typography>
           <Typography variant="body2" className={classes.fontsize}>
            Manage your orders and your profile
          </Typography>
        </Grid>
        <Box pt={2} ml = {4} >
          <Grid item>
            <Link to="/user">
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </Link>
          </Grid>
        </Box>
      </Grid>
      <List></List>
      <Box p={2}></Box>
      <div>
        <Link to="/user/history" className={classes.decoration}>
          <List className={classes.listBackground}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className = {classes.listAvatar}>
                  <FontAwesomeIcon icon={faCoffee} className = {classes.listIcon}/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" className={classes.bold}>
                    Purchase history
                  </Typography>
                }
                secondary={<div className = {classes.listSecondaryText}>Track your orders here</div>}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="right">
                  <ChevronRightIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Link>
        <Box p={2}></Box>
        <Link to="#" className={classes.decoration}>
          <List className={classes.listBackground}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className = {classes.listAvatar}>
                  <HelpOutlineIcon  className=  {classes.listIcon}/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" className={classes.bold}>
                    Help center
                  </Typography>
                }
                secondary={<div className = {classes.listSecondaryText}>Get support, report app bugs and more</div>  }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="right">
                  <ChevronRightIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Link>
      </div>
      <Box pt={3}></Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes.button}
        onClick={(e) => {
          const ls = new SecureLS({ encodingType: "aes" })
          ls.removeAll()
          window.location.reload()
        }}
      >
        Log out
      </Button>
    </>
  )
}

export default AccountPage
