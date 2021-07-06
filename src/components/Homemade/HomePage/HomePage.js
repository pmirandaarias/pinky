import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import LocalMallIcon from "@material-ui/icons/LocalMall"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import StaggeredCard from "./component/StaggeredCard"
import ShopsList from './ShopsList'
import "./HomePage.css"


import { getAllShops } from "../../../api/public/shops/"

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
}))

const HomePage = () => {
  const classes = useStyles()

  const [shops, setShops] = useState([])

  useEffect(() => {
    getAllShops().then((shops) => {
      console.log(shops)
      setShops(shops)
    })
  }, []) // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      <AppBar color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography className={classes.title}>
            <div className="deliverTo">DELIVER TO</div>
            <div className="addressText">
              Fern bldg, P. Paredes Street, Sampaloc, Manila{" "}
            </div>
          </Typography>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <LocalMallIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ShopsList shops = {shops}/>
    </>
  )
}

export default HomePage
