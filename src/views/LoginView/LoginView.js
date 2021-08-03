import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { Button, TextField } from "@material-ui/core"
import authOperations from "../../redux/auth/auth-operations"

import s from "./LoginView.module.css"

export default function LoginView() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value)
        break
      case "password":
        setPassword(value)
        break

      default:
        console.warn(`Тип поля - ${name} не обрабатывается`)
    }
  }

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()

      dispatch(authOperations.logIn({ email, password }))

      setEmail("")
      setPassword("")
    },
    [dispatch, email, password]
  )

  return (
    <div>
      <h2>LOG IN</h2>

      <form className={s.form} onSubmit={onSubmit} autoComplete="on">
        <TextField id="outlined-basic" name="email" type="email" label="Email" value={email} onChange={onChange} />
        <TextField
          id="outlined-basic"
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={onChange}
        />

        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
    </div>
  )
}
