import './login.css'
function Login (){

    return(
    <div className="inicio_sesion">
          <form>
            <div className="inputs">
                 <label className='inputs_label'>Usuario</label>
                 <input className='inputs_text' placeholder='Usuario'></input>
                 <label className='inputs_label'>Contraseña</label>
                 <input className='inputs_text' placeholder='Contraseña'></input>
            </div>
            <button>
                Iniciar sesion
            </button>
            </form>
    </div>
    )
}

export default Login