import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import todoReducer from "./reducers/TodoReducer"
import todoContext from "./contexts/todoContext"
import authReducer from "./reducers/authReducer"
import userContext from "./contexts/userContext"





const App = () => {

  const [todos,todoDispatch] = useReducer(todoReducer,[])
  const  [username, userDispatch] = useReducer(authReducer, '')

  return (
  <>


  {/* <Counter/> */}
{/* <Todo/> */}
{/* <Login/> */}

<todoContext.Provider value={{todos, dispatch: todoDispatch}}>
  <userContext.Provider value={{username, dispatch: userDispatch}}>
    <MyNavbar/>
    <HomePage/>

  </userContext.Provider>



</todoContext.Provider>

  </>
  )
}

export default App