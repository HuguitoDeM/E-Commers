import { useState } from 'react'
import Login from './login'
import Registro from './registro'
function SesionMenu(){


    const [loginOption, setLoginOption] = useState("login")
    const [textLogReg, setTextLogReg] = useState("login")
   const handleChooseOption  = () =>{
     loginOption === "login" ? setLoginOption("registro"): setLoginOption("login");
     textLogReg === "login" ? setTextLogReg("registro"): setTextLogReg("login");
   }



    return(
        <div>
<div>{loginOption == "login" ? <Registro/>: <Login/>}</div>

<button onClick={handleChooseOption}>{textLogReg}</button>
</div>
    )
}

export default SesionMenu;