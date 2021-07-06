import React, { useState, useEffect } from "react"

import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import Divider from "@material-ui/core/Divider"
import PersonIcon from "@material-ui/icons/Person"
import PhoneIcon from "@material-ui/icons/Phone"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import CameraAltIcon from "@material-ui/icons/CameraAlt"
import EditIcon from "@material-ui/icons/Edit"
import EmailIcon from "@material-ui/icons/Email"
import LinkIcon from "@material-ui/icons/Link"
import { Typography } from "@material-ui/core"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"

import moment from 'moment'
import { Link } from "gatsby"
import { getUserById } from "../../../api/public/user"
import { getUser } from "../../../services/auth/"

const useStyles = makeStyles({
  backSize: {
    fontSize: "1.5em",
    color: "black",
  },
  avatar: {
    height: "100px",
    width: "100px",
    background: "gray",
    borderRadius: "50%",
  },
  large: {
    height: "100px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  decoration: {
    textDecoration: "none",
  },
  camera: {
    border: "2px solid white",
    backgroundColor: "white",
    borderRadius: "15px",
  },
  listBackground: {
    backgroundColor: "#F2F7FD",
    marginLeft: '0.5em', 
    marginRight: '0.5em',
    borderRadius: '0.2em',
    paddingLeft: '0.2em'
  },
  flex: {
    display: "flex",
  },
  title: {
    fontWeight: "bold",
    fontFamily: 'visby',
  },
  body: {
    fontFamily: 'visby',
    marginLeft: '1em',  
  },
  img: {
    lineHeight: "90px",
  },
  float: {
    position: "absolute",
    zIndex: 1,
  },
  centerFit: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "0 auto",
    display: "block",
  },
  icon: {
    color: 'blue',
    marginLeft: '0.1em', 
    marginRight: '0.1em'
  }
})

const UserDetailsPage = () => {
  const classes = useStyles()

  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    phone: "",
    address: "",
    birthdate: "",
    gender: "",
    messenger: "",
    photo: "",
    email: "",
  })
  const [open, setOpen] = useState(false)

  const {
    _id,
    name,
    phone,
    address,
    photo,
    gender,
    messenger,
    birthdate,
    email,
  } = userData

  useEffect(() => {
    const user = getUser()
    
    getUserById("/user/" + user.userId, user.token).then((data) => {
      setUserData(data)
    })
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Box pt={0.5}>
            <Link to="/account">
              <ArrowBackIcon className={classes.backSize} />
            </Link>
          </Box>
        </Grid>
      </Grid>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div>
              <img src={photo} className={`${classes.centerFit}`} />
            </div>
          </Fade>
        </Modal>
      </div>
      <div className={classes.center}>
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
          />
          <CameraAltIcon className={` ${classes.camera} ${classes.float} `} />
        </label>
        <Avatar className={classes.avatar}>
          <button onClick={handleOpen}>
            <img
              src={!photo ? null : photo}
              alt="no image"
              className={`${classes.large} ${classes.center} ${classes.img}`}
            />
          </button>
        </Avatar>
      </div>
      <Box pt={2}>
        <Typography variant="h5" className={classes.center}>
          {name}
        </Typography>
      </Box>
      <Box pt={1}>
        <Link to="/user/update" className={classes.decoration}>
          <div className={classes.center}>
            <EditIcon />
            <Box pl={1}>
              <Typography>Update Account</Typography>
            </Box>
          </div>
        </Link>
      </Box>
      <Box pt={5}>
        <List className={classes.listBackground}>
          <div className={classes.flex}>
            <PersonIcon className = {classes.icon} />
            <Box pl={1}>
              <Typography variant="subtitle2" className={classes.title}>
                User ID
              </Typography>
            </Box>
          </div>
          <Box pt={0.5} pb={0.5}>
            <Divider variant="middle" />
          </Box>
          <Typography variant="body2" className = {classes.body}>{_id}</Typography>
        </List>
      </Box>
      <Box pt={1}>
        <List className={classes.listBackground}>
          <div className={classes.flex}>
            <PhoneIcon />
            <Box pl={1}>
              <Typography variant="subtitle2" className={classes.title}>
                Phone
              </Typography>
            </Box>
          </div>
          <Box pt={0.5} pb={0.5}>
            <Divider variant="middle" />
          </Box>
          <Typography variant="body2" className = {classes.body}>{phone}</Typography>
        </List>
      </Box>
      <Box pt={1}>
        <List className={classes.listBackground}>
          <div className={classes.flex}>
            <LocationOnIcon />
            <Box pl={1}>
              <Typography variant="subtitle2" className={classes.title}>
                Address
              </Typography>
            </Box>
          </div>
          <Box pt={0.5} pb={0.5}>
            <Divider variant="middle" />
          </Box>
          <Typography variant="body2" className = {classes.body}>{address}</Typography>
        </List>
      </Box>
      <Box pt={1}>
        <List className={classes.listBackground}>
          <div className={classes.flex}>
            <CalendarTodayIcon />
            <Box pl={1}>
              <Typography variant="subtitle2" className={classes.title}>
                Birthday
              </Typography>
            </Box>
          </div>
          <Box pt={0.5} pb={0.5}>
            <Divider variant="middle" />
          </Box>
          <Typography variant="body2" className = {classes.body}>{moment(birthdate).format('L')}</Typography>
        </List>
      </Box>
      <Box pt={1}>
        <List className={classes.listBackground}>
          <div className={classes.flex}>
            <EmailIcon />
            <Box pl={1}>
              <Typography variant="subtitle2" className={classes.title}>
                Email
              </Typography>
            </Box>
          </div>
          <Box pt={0.5} pb={0.5}>
            <Divider variant="middle" />
          </Box>
          <Typography variant="body2" className = {classes.body}>{email}</Typography>
        </List>
      </Box>
      <Box pt={1}>
        <List className={classes.listBackground}>
          <div className={classes.flex}>
            <PersonIcon />
            <Box pl={1}>
              <Typography variant="subtitle2" className={classes.title}>
                Gender
              </Typography>
            </Box>
          </div>
          <Box pt={0.5} pb={0.5}>
            <Divider variant="middle" />
          </Box>
          <Typography variant="body2" className = {classes.body}>{gender}</Typography>
        </List>
      </Box>
      <Box pt={1}>
        <List className={classes.listBackground}>
          <div className={classes.flex}>
            <LinkIcon />
            <Box pl={1}>
              <Typography variant="subtitle2" className={classes.title}>
                Facebook Username
              </Typography>
            </Box>
          </div>
          <Box pt={0.5} pb={0.5}>
            <Divider variant="middle" />
          </Box>
          <Typography variant="body2" className = {classes.body}>
            {!messenger ? "No messenger url" : messenger}
          </Typography>
        </List>
      </Box>
    </>
  )
}

export default UserDetailsPage
