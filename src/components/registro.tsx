import './registro.css'
 function Registro (){

return (
    <div className='registro'>
        <form>
                <div className='inputs'>
                        <label className='inputs_label'>Nombre</label>
                        <input className='inputs_text' placeholder='Nombre completo'></input>
                        <label className='inputs_label'>Usuario</label>
                        <input className='inputs_text' placeholder='Usuario'></input>
                        <label className='inputs_label'>Contraseña</label>
                        <input className='inputs_text' placeholder='Apellido'></input>
                        <label className='inputs_label terminos'>Terminos y condiciones</label>
                        <input className='inputs_text' type='checkbox'></input>
                        
                </div>
                <button>
                        Registrarse
                </button>
        </form>
    </div>
    )
 } 

 export default Registro