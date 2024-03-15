import { useState } from 'react'
import Login from './login'
import Registro from './registro'
import {SESION} from '../const/registro.ts'
import '../App.css'
function SesionMenu(){


    const [loginOption, setLoginOption] = useState(SESION.login)
    const [textLogReg, setTextLogReg] = useState(SESION.login)
   const handleChooseOption  = () =>{
     loginOption === SESION.login ? setLoginOption(SESION.registro): setLoginOption(SESION.login);
     textLogReg === SESION.login ? setTextLogReg(SESION.registro): setTextLogReg(SESION.login);
   }



    return(
        <div className='session_change'>
<div>{loginOption == SESION.login ? <Registro/>: <Login/>}</div>

<button onClick={handleChooseOption}>{textLogReg}</button>
</div>
    )
}

export default SesionMenu;