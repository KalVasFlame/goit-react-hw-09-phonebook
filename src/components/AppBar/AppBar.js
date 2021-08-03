import React from "react"
import { useSelector } from "react-redux"

import Navigation from "../Navigation"
import UserMenu from "../UserMenu"
import AuthNav from "../AuthNav"
import authSelectors from "../../redux/auth/auth-selectors"

const AppBar = () => {
  const isLogin = useSelector(authSelectors.getIsAuthenticated)

  return (
    <header>
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthNav />}
    </header>
  )
}

export default AppBar
