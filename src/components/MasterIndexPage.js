import React from "react"
import HomeMade from "../assets/svg/category/home_homemade_button.svg"
import Express from "../assets/svg/category/home_express_button.svg"
import Coop from "../assets/svg/category/home_coop_button.svg"
import Beauty from "../assets/svg/category/home_beauty_button.svg"
import Fresh from "../assets/svg/category/home_fresh_button.svg"
import Party from "../assets/svg/category/home_party_button.svg"
import SparkWaving from "../assets/gif/mascot_wave_burstless.gif"

import Grid from "@material-ui/core/Grid"
import {Link} from '@reach/router'
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

import "../assets/css/masterindexpage.css"
import "../assets/scss/IndexPage.scss"
import "../assets/css/layout.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const MasterIndexPage = () => {
  const classes = useStyles()
  return <div className="page">
    <Container component="main" maxWidth="xs" className = 'page'>
      <div>
        <div className="heading-content">
          <div>
            <img
              className="heading-logo"
              src={SparkWaving}
              alt="Spark Waving burstless"
            />
          </div>
          <div>
            <div className="heading-text">
              <h1 className="heading-header">Sparkling Day</h1>
              What would you like to do for today?
            </div>
          </div>
        </div>
        <div className = 'menu'>
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={4}>
              <Link to="/food">
                <img src={HomeMade} height="100px" alt="Home" />
              </Link >
            </Grid>
            <Grid item xs={4}>
              <Link to="/food">
                <img src={Express} height="100px" alt="Express" />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/food">
                <img src={Coop} height="100px" alt="Coop" />
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={4}>
              <Link to="/food">
                <img src={Beauty} height="100px" alt="Beauty" />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/food">
                <img src={Fresh} height="100px" alt="Fresh" />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/food">
                <img src={Party} height="100px" alt="Party" />
              </Link>
            </Grid>
          </Grid>
        </div>
        <div></div>
      </div>
    </Container>
  </div>
}

export default MasterIndexPage
