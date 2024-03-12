import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Registro from './components/registro'
function App() {

 const [loginOption, setLoginOption] = useState("login")
 const [textLogReg, setTextLogReg] = useState("login")
const handleChooseOption  = () =>{
  loginOption === "login" ? setLoginOption("registro"): setLoginOption("login");
  textLogReg === "login" ? setTextLogReg("registro"): setTextLogReg("login");
}

return(

<>
<div>{loginOption == "login" ? <Registro/>: <Login/>}</div>

<button onClick={handleChooseOption}>{textLogReg}</button>
</>






)
}

export default App
