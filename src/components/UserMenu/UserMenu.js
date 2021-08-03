import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@material-ui/core"

import authSelectors from "../../redux/auth/auth-selectors"
import authOperations from "../../redux/auth/auth-operations"

import s from "./UserMenu.module.css"

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername)
  const dispatch = useDispatch()

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut())
  }, [dispatch])

  return (
    <div>
      <span className={s.span}>Welcome, {name}!</span>
      <Button variant="contained" color="primary" type="button" onClick={onLogout}>
        Logout
      </Button>
    </div>
  )
}

export default UserMenu
