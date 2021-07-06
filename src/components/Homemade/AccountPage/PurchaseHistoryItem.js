import React from "react"
import { Link } from "gatsby"

import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"

import moment from "moment"

const useStyles = makeStyles({
  backButton: {
    border: "1px solid transparent",
    borderRadius: "8px",
    width: "30px",
    height: "30px",
    color: "#3486D6",
    backgroundColor: "#F4F7FE",
    boxShadow: "0 0 1px #3486D6",
  },
  status: {
    color: "white",
    border: " 1px solid",
    borderRadius: "12px",
    padding: "2px 10px",
    fontSize: "12px",
    fontFamily: "visby",
  },
  font: {
    fontSize: "11px",
    fontFamily: "visby",
  },
  text: {
    fontFamily: "visby",
  },
  page: {
    marginLeft: '1em'
  },

})


const PurchaseHistoryItem = (props) => {
  const classes = useStyles()
  const data = props.location.state.data

  return (
    <div className = {classes.page}>
      <Box pt={2} pl={1}>
        <Link to="/user/history">
          <ChevronLeftRoundedIcon className={classes.backButton} />
        </Link>
      </Box>

      <Typography variant="h6">
        <Box fontWeight="fontWeightBold" m={1} className = {classes.text}>
          Order Details{" "}
          {data.status === "Delivered" ? (
            <span
              className={classes.status}
              style={{ backgroundColor: "#71CF25" }}
            >
              Delivered
            </span>
          ) : (
            <span className={classes.status} style={{ backgroundColor: "red" }}>
              Cancelled
            </span>
          )}
        </Box>
      </Typography>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={4} sm={3}>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightBold" pl={1} className = {classes.text}>
                Transaction ID:
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2">
              <Box pl={1}>{data.transaction_id}</Box>
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightBold" pl={1} className = {classes.text}>
                Order for:
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2">
              <Box pl={1}>
                {moment(data.when).subtract(10, "days").calendar()}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightBold" pl={1} className = {classes.text}>
                Name:
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2">
              <Box pl={1}>{data.user.name}</Box>
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightBold" pl={1} className = {classes.text}>
                Contact:
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2">
              <Box pl={1}>{data.user.phone}</Box>
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightBold" pl={1} className = {classes.text}>
                Address:
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2">
              <Box pl={1}>{data.address}</Box>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightBold" pl={1} className = {classes.text}>
                Products:
              </Box>
            </Typography>
          </Grid>
          {data.products.map((product) => {
            return (
              <>
                <Grid item xs>
                  <Typography className={classes.font}>
                    <Box plm={1}>
                      {product.count} {product.name}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle2">
                    <Box pl={1}>P {data.amount}</Box>
                  </Typography>
                </Grid>
              </>
            )
          })}
        </Grid>
        <Box pt={0.5} pb={0.5}>
          <Divider variant="middle" />
        </Box>
        <Grid container spacing={1}>
          <Grid item xs>
            <Typography className={classes.font}>
              <Box pl={1}></Box>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">
              <Box pl={1}>Delivery fee</Box>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">
              <Box pl={1}>P {data.deliveryFee}</Box>
            </Typography>
          </Grid>
        </Grid>
        <Box pt={0.5} pb={0.5}>
          <Divider variant="middle" />
        </Box>
        <Grid container spacing={1}>
          <Grid item xs>
            <Typography className={classes.font}>
              <Box pl={1}></Box>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">
              <Box pl={1}>Total</Box>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2">
              <Box pl={1}>P {data.amount + data.deliveryFee}</Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={4} sm={3}>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightBold" pl={1} className = {classes.text}>
                Payment:
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2">
              <Box pl={1}>{data.paymentType}</Box>
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightBold" pl={1} className = {classes.text}>
                Notes:
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2">
              <Box pl={1}>{data.deliveryNotes}</Box>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default PurchaseHistoryItem
