import './login.css'
import { CLASES } from '../const/registro'
function Login (){

    return(
    <div className="inicio_sesion">
        <h1>Inicio de sesión</h1>
          <form>
            <div className="inputs">
                 <label className={CLASES.inputs_label}>Usuario</label>
                 <input className={CLASES.inputs_text} placeholder='Usuario'></input>
                 <label className={CLASES.inputs_label}>Contraseña</label>
                 <input className={CLASES.inputs_text} placeholder='Contraseña'></input>
                 <button>
                Iniciar sesion
                </button> <br />
                <span>¿Aun no tienes una cuenta?</span>
            </div>
            
            </form>
           
    </div>
    )
}

export default Login