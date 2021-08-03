import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import authSelectors from "../../redux/auth/auth-selectors"

import s from "./Navigation.module.css"

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
  return (
    <nav className={s.nav}>
      <NavLink to="/" exact activeClassName={s.isActive}>
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink to="/contacts" activeClassName={s.isActive}>
          Contacts
        </NavLink>
      )}
    </nav>
  )
}
