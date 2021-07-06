import React, { useState } from "react"
import Carousel from "nuka-carousel"

import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import Typography from "@material-ui/core/Typography"
import { Box } from "@material-ui/core"

import "./ProductPage.css"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"
import { theme } from "../../../assets/mui/"
import { MuiThemeProvider } from "@material-ui/core/styles"

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

const ProductPage = ({ location }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="page">
      <MuiThemeProvider theme={theme}>
        <div className="container">
          <div className="ProductHeader">
            <Carousel autoplay={true} withoutControls={true} wrapAround={true}>
              {location.state.product.images.map((image) => {
                if (image.isApproved) {
                  return (
                    <img src={image.url} alt={location.state.product.name} />
                  )
                } else {
                  return null
                }
              })}
            </Carousel>
          </div>
          <div className="curve"> </div>
          <div className="ProductBody m-2">
            <div className="row space-between">
              <span className="ProductDetailName">
                {location.state.product.name}
              </span>
              <span className="ProductDetailPrice">
                P {location.state.product.price}
              </span>
            </div>
            <div className="row space-between">
              <div className="row space-between">
                <div
                  className="m-1"
                  style={{
                    color: location.state.product.status ? "green" : "red",
                  }}
                >
                  {location.state.product.status ? "Available" : "Unavailable"}
                </div>
                <div className="row space-between">
                  <div className="IconText">
                    <ThumbUpIcon fontSize="small" />
                    <div className="m-1">0</div>
                  </div>
                  <div className="IconText">
                    <ThumbDownIcon fontSize="small" />
                    <div className="m-1 ">0</div>
                  </div>
                </div>
              </div>
              <div>
                {location.state.product.quantity > 0
                  ? `${location.state.product.quantity} in stock`
                  : "Out of Stock"}
              </div>
            </div>
          </div>
          <div className="m-2">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              variant="fullWidth"
              centered
            >
              <Tab label="Description" {...a11yProps(0)} />
              <Tab label="Ingredients" {...a11yProps(1)} />
              <Tab label="Reviews" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <div className="ProductDescription">
                {location.state.product.description}
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="ProductDescription">
                {location.state.product.ingredients}
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="ProductDescription">Reviews</div>
            </TabPanel>
          </div>
          <div className="BottomButton">
            <Button variant="contained" color="secondary" fullWidth={true}>
              Add to bag
            </Button>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  )
}

export default ProductPage
