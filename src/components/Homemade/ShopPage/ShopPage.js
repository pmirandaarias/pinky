import React, { useState } from "react"
import "./ShopPage.css"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import Typography from "@material-ui/core/Typography"
import { Grid } from "@material-ui/core"

import Paper from "@material-ui/core/Paper"
import { Box } from "@material-ui/core"
import Menu from "./components/Menu"
import Inspiration from "./components/Inspiration"
import Reviews from "./components/Reviews"
import Schedule from "./components/Schedule"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const ShopPage = ({ location }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className = "page">
    <Grid container class="shop-page">
      <div>
        <Paper elevation={3}>
          <div className="HeroHeader">
            <img
              className="BannerImage"
              src={location.state.shop.banner}
              alt={location.state.shop.name}
            />
            <div className="HeadingDetails">
              <div
                className="LogoAndTitle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <img
                  className="ShopLogo"
                  src={location.state.shop.logo}
                  alt={location.state.shop.name}
                />
                <div>
                  <div className="ShopName">{location.state.shop.name}</div>
                  <div className="ShopLocation">
                    <LocationOnIcon fontSize="small" className = 'ShopLocation__logo' />
                    <span className = "ShopLocation__text">Location</span>
                  </div>
                </div>
              </div>
              <div className="StatusAndLikes">
                <div
                  className="ShopStatus"
                  style={{
                    color: location.state.shop.status ? "green" : "red",
                  }}
                >
                  {location.state.shop.status ? "Open" : "Closed"}
                </div>
                <div className="LikeDislike">
                  <div className="Like">
                    <div className="margin">
                      <ThumbUpIcon fontSize="small" />
                    </div>
                    <div>0</div>
                  </div>
                  <div className="Dislike">
                    <div className="margin">
                      <ThumbDownIcon fontSize="small" />
                    </div>
                    <div>0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
          top: "200px",
          width: "100%",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
          centered
        >
          <Tab className="shop-tabs" label="Menu" {...a11yProps(0)} />
          <Tab label="Inspiration" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
          <Tab label="Schedule" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Menu shopId={location.state.shop._id} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Inspiration inspiration={location.state.shop.inspiration} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Reviews />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Schedule schedules={location.state.shop.schedule} />
        </TabPanel>
      </div>
    </Grid>
    </div>
  )
}

export default ShopPage
