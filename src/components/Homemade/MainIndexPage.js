import React from "react"
import { Link } from "@reach/router"

import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FavoriteIcon from "@material-ui/icons/Favorite"
import SearchIcon from "@material-ui/icons/Search"
import PersonIcon from "@material-ui/icons/Person"
import HomeIcon from "@material-ui/icons/Home"

import HomePage from "./HomePage/HomePage"
import SearchPage from "./SearchPage/SearchPage"
import FavoritePage from "./FavoritePage/FavoritePage"
import Login from "../LoginPage"
import AccountPage from "./AccountPage/AccountPage"
import { isLoggedIn } from "../../services/auth"
import { theme } from "../../assets/mui"
import { MuiThemeProvider } from "@material-ui/core/styles"

import "../../assets/css/layout.css"

const useStyles2 = makeStyles({
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    left: 0,
    right: 0,
    bottom: 12,
    position: "fixed",
    selected: "blue",
  },
  selected: {},
})

const Pages = ({ index }) => {
  switch (index) {
    case 0:
      return <HomePage />
    case 1:
      return <SearchPage />
    case 2:
      return <FavoritePage />
    case 3:
      let userLoggedIn = isLoggedIn()
      let page = userLoggedIn ? <AccountPage /> : <Login />
      return page
    default:
      break
  }
}

const MainIndexPage = () => {
  const classes2 = useStyles2()

  const [value, setValue] = React.useState(0)

  return (
    <div className="page">
      {" "}
      <MuiThemeProvider theme={theme}>
        <div>
          <Pages index={value} />
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
            showLabels
            className={classes2.root}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Account" icon={<PersonIcon />} />
          </BottomNavigation>
        </div>
      </MuiThemeProvider>
      <Link to="/"></Link>
    </div>
  )
}

export default MainIndexPage
