import React, { useState, useEffect } from "react"

import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import Divider from "@material-ui/core/Divider"
import ClearIcon from "@material-ui/icons/Clear"
import Container from "@material-ui/core/Container"

import moment from "moment"
import { navigate, Link } from "gatsby"
import { getPurchaseHistory } from "../../../api/public/user"
import { getUser } from "../../../services/auth"

const useStyles = makeStyles({
  listBackground: {
    backgroundColor: "#F2F7FD",
    borderRadius: "15px",
  },
  fontsize: {
    fontSize: 12,
  },
  decoration: {
    textDecoration: "none",
    color: "black",
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "visby",
  },
  iconDelivered: {
    color: "green",
    marginLeft: "1em",
  },
  iconCancelled: {
    color: "red",
  },
  listStatus: {
    fontFamily: "visby",
  },
  productOnList: {
    color: "gray",
  },
  noOrdersYet: {
    fontFamily: 'visby',
    textAlign: 'center',
    fontSize: '2em', 
    fontWeight: 'bold',
    marginTop: '50%'
  }
})
const PurchaseHistoryPage = (props) => {
  const classes = useStyles()

  const [data, setData] = useState([])

  useEffect(() => {
    const user = getUser()
    getPurchaseHistory(
      "/user/list/purchase-history/" + user.userId,
      user.token
    ).then((data) => {
      console.log(data)
      setData(data)
    }).catch(() => {

    })

    alert(data?.length)
  }, [])
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
        <Grid item xs={10}>
          <Typography component={"div"} variant="h6">
            Purchase History
          </Typography>
        </Grid>
      </Grid>
      <Box pt={5}></Box>
      <div>
        {data?.length === undefined && <NoPurchasesYet />} 
        {data?.map((history) => {
          return <PurchaseHistory key={history._id} history={history} />
        })}
      </div>
    </>
  )
}

const NoPurchasesYet = () => {
  const classes = useStyles();
  return <Box className = {classes.noOrdersYet}>Wala pa pong history, bili na po kayo sa sparkle!</Box>
}

const PurchaseHistory = ({ history }) => {
  const classes = useStyles()

  const [data, setData] = useState(history)

  useEffect(() => {
    setData(history)
  }, [])

  const submithandler = () => {
    console.log(data._id)

    navigate(`/user/history/${data._id}`, {
      state: {
        data: data,
      },
    })
  }
  return (
    <>
      <div>
        <Container maxWidth="sm">
          <Box pt={2}></Box>
          <List className={classes.listBackground}>
            <ListItem onClick={() => submithandler()}>
              <ListItemAvatar>
                <Avatar>
                  <img
                    src={history.shop.logo}
                    alt="no image"
                    className={`${classes.large} ${classes.center} ${classes.img}`}
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    component={"div"}
                    variant="subtitle1"
                    className={classes.bold}
                  >
                    {history.shop.name}
                  </Typography>
                }
                secondary={moment(history.createdAt).format("MMMM DD YYYY")}
              />
              <ListItemSecondaryAction className={classes.listStatus}>
                <Box>{history.status}</Box>
                {history.status === "Delivered" ? (
                  <CheckCircleOutlineIcon className={classes.iconDelivered} />
                ) : (
                  <ClearIcon className={classes.iconCancelled} />
                )}
              </ListItemSecondaryAction>
            </ListItem>
            <Box pt={0.5} pb={0.5}>
              <Divider variant="middle" />
            </Box>
            <Box pl={2}>
              <Typography component={"div"}>
                {history.products.map((product) => {
                  return (
                    <div key={product._id}>
                      <Typography
                        component={"div"}
                        className={classes.productOnList}
                      >
                        {product.count} {product.name} &nbsp; &nbsp; &#8369;{" "}
                        {product.price}
                      </Typography>
                    </div>
                  )
                })}
              </Typography>
            </Box>
            <Box pr={2}>
              <Typography
                component={"div"}
                className={classes.bold}
                align="right"
              >
                Total: &#8369; {history.amount}
              </Typography>
            </Box>
          </List>
        </Container>
      </div>
    </>
  )
}

export default PurchaseHistoryPage
