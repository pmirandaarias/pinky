import React, { useEffect } from "react"
import { Router, Location } from "@reach/router"
import MasterIndexPage from "../components/MasterIndexPage"
import Homemade from "../components/Homemade/MainIndexPage"
import Shop from "../components/Homemade/ShopPage/ShopPage"
import Product from "../components/Homemade/ProductPage/ProductPage"
import Registration from "../components/RegistrationPage"
import ResetPassword from "../components/ResetPasswordPage"
import UserDetails from "../components/Homemade/AccountPage/UserDetailsPage"
import UserUpdate from "../components/Homemade/AccountPage/UpdateAccountPage"
import PurchaseHistory from "../components/Homemade/AccountPage/PurchaseHistoryPage"
import Account from "../components/Homemade/AccountPage/AccountPage"
import PurchaseHistoryItem from "../components/Homemade/AccountPage/PurchaseHistoryItem"
import Layout from "../components/layout"

import { TransitionGroup, CSSTransition } from "react-transition-group"

import "../assets/scss/typography.scss"
import "../assets/css/layout.css"

const App = () => {
  useEffect(() => {
    console.log("Loaded")
  }, [])

  return (
    <Location>
      {({ location }) => (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Router>
              <MasterIndexPage path="/" />
              <Homemade path="/food" />
              <Shop path="/shop" />
              <Product path="/product" />
              <Registration path="/registration" />
              <ResetPassword path="/reset" />
              <Account path="/account" />
              <UserDetails path="/user" />
              <UserUpdate path="/user/update" />
              <PurchaseHistory path="/user/history" />
              <PurchaseHistoryItem path="user/history/:id" />
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  )
}

export default App
