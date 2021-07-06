import React from "react"

import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import MotorcycleIcon from "@material-ui/icons/Motorcycle"
import PaymentIcon from "@material-ui/icons/Payment"
import NoteAddIcon from "@material-ui/icons/NoteAdd"
import LocalActivityOutlinedIcon from "@material-ui/icons/LocalActivityOutlined"
import Button from "@material-ui/core/Button"

import { Link } from "gatsby"

const useStyles = makeStyles({
  backSize: {
    fontSize: "1.5em",
    color: "black",
  },
  listBackground: {
    backgroundColor: "#F2F7FD",
    borderRadius: "15px",
  },
  bold: {
    fontWeight: "bold",
  },
  fontColor: {
    color: "black",
  },
  decoration: {
    textDecoration: "none",
  },
  iconBackGround: {
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "#FFCF10",
    borderRadius: "10px",
    height: "3em",
  },
})

const FavoritePage = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Box pt={0.5}>
            <Link to="#">
              <ArrowBackIcon className={classes.backSize} />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5">
            <strong>Checkout</strong>
          </Typography>
        </Grid>
      </Grid>
      <Box pt={3}></Box>
      <Link to="#" className={classes.decoration}>
        <List className={classes.listBackground}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.iconBackGround}>
                <CalendarTodayIcon className={classes.fontColor} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  className={`${classes.bold} ${classes.fontColor}`}
                >
                  When to Deliver
                </Typography>
              }
              secondary="ASAP (45 Minutes)"
            />
            <ListItemSecondaryAction>
              <p>Change</p>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Link>
      <Box pt={1}></Box>
      <Link to="#" className={classes.decoration}>
        <List className={classes.listBackground}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.iconBackGround}>
                <LocationOnIcon className={classes.fontColor} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  className={`${classes.bold} ${classes.fontColor}`}
                >
                  Deliver to
                </Typography>
              }
              secondary="FERN Building, P. Paredes Street, Sampaloc Manila, Metro Manila"
            />
            <ListItemSecondaryAction>
              <p>Change</p>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Link>
      <Box pt={1}></Box>
      <Link to="#" className={classes.decoration}>
        <List className={classes.listBackground}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.iconBackGround}>
                <MotorcycleIcon className={classes.fontColor} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  className={`${classes.bold} ${classes.fontColor}`}
                >
                  Courier
                </Typography>
              }
              secondary="SPARK EXPRESS"
            />
            <ListItemSecondaryAction>
              <p>Change</p>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Link>
      <Box pt={1}></Box>
      <Link to="#" className={classes.decoration}>
        <List className={classes.listBackground}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.iconBackGround}>
                <PaymentIcon className={classes.fontColor} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  className={`${classes.bold} ${classes.fontColor}`}
                >
                  Payment method
                </Typography>
              }
              secondary="COD"
            />
            <ListItemSecondaryAction>
              <p>Change</p>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Link>
      <Box pt={1}></Box>
      <Link to="#" className={classes.decoration}>
        <List className={classes.listBackground}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.iconBackGround}>
                <NoteAddIcon className={classes.fontColor} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  className={`${classes.bold} ${classes.fontColor}`}
                >
                  Special Instruction
                </Typography>
              }
              secondary="Please select"
            />
            <ListItemSecondaryAction>
              <p>Change</p>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Link>
      <Box pt={1}></Box>
      <Link to="#" className={classes.decoration}>
        <List className={classes.listBackground}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.iconBackGround}>
                <LocalActivityOutlinedIcon className={classes.fontColor} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  className={`${classes.bold} ${classes.fontColor}`}
                >
                  Apply a voucher
                </Typography>
              }
              secondary="Please enter code"
            />
            <ListItemSecondaryAction>
              <p>Change</p>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Link>
      <Grid container>
        <Grid item xs>
          <Typography variant="body1">Delivery fee</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">P 84.00</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Typography variant="body1">Items</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">P 84.00</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Typography variant="h5">Grand Total</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">P 168.00</Typography>
        </Grid>
      </Grid>
      <Box mx="auto" pt={1}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.button}
        >
          Place Order
        </Button>
      </Box>
    </>
  )
}

export default FavoritePage
