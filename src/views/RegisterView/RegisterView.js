import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, TextField } from "@material-ui/core"

import authOperations from "../../redux/auth/auth-operations"

import s from "./RegisterView.module.css"
import { useCallback } from "react"

export default function RegisterView() {
  const [name, setName] = useState("")
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
      case "name":
        setName(value)
        break

      default:
        console.warn(`Тип поля - ${name} не обрабатывается`)
    }
  }

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()

      dispatch(authOperations.register({ email, password, name }))
      setEmail("")
      setPassword("")
      setName("")
    },
    [dispatch, email, password, name]
  )

  return (
    <div>
      <h2>SIGN UP</h2>

      <form className={s.form} onSubmit={onSubmit} autoComplete="on">
        <div className={s.container}>
          <TextField name="name" type="name" label="Name" value={name} onChange={onChange} />
          <TextField name="email" type="email" label="Email" value={email} onChange={onChange} />
          <TextField name="password" type="password" label="Password" value={password} onChange={onChange} />
        </div>
        {/* <button type="submit">Sing Up</button> */}
        <Button type="submit" variant="contained" color="primary">
          Sing In
        </Button>
      </form>
    </div>
  )
}
