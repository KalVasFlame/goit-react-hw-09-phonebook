import React, { useEffect, Suspense, lazy } from "react"
import { Switch } from "react-router-dom"
import { useDispatch } from "react-redux"
import Container from "./components/Container"
import authOperations from "./redux/auth/auth-operations"
import AppBar from "./components/AppBar"
import PrivateRoute from "./components/PrivateRouter"
import PublicRoute from "./components/PublicRouter"

const HomeView = lazy(() => import("./views/HomeView"))
const LoginView = lazy(() => import("./views/LoginView"))
const RegisterView = lazy(() => import("./views/RegisterView"))
const ContactsView = lazy(() => import("./views/ContactsView"))

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])

  return (
    <Container>
      <AppBar />
      <Suspense fallback="Loading">
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  )
}

//   componentDidMount() {
//     this.props.onGetCurrentUser()
//   }

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// }

// export default connect(null, mapDispatchToProps)(App)
