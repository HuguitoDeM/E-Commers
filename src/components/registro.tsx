import './registro.css'
import { CLASES } from '../const/registro'
 function Registro (){

return (
    <div className='registro'>
        <h1>Registro de cuenta</h1>
        <form>
                <div className='inputs'>
                        <label className={CLASES.inputs_label}>Nombre</label>
                        <input className={CLASES.inputs_text} placeholder='Nombre completo'></input>
                        <label className={CLASES.inputs_label}>Usuario</label>
                        <input className={CLASES.inputs_text} placeholder='Usuario'></input>
                        <label className={CLASES.inputs_label}>Contraseña</label>
                        <input className={CLASES.inputs_text} placeholder='Apellido'></input>
                        <label className={CLASES.inputs_label}>Correo</label>
                        <input className={CLASES.inputs_text} placeholder='Correo Electronico'></input>
                        
                        <button>
                        Registrarse
                        </button>
                </div>
                
        </form>
    </div>
    )
 } 

 export default Registro