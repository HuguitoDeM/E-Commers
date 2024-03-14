import './boards.css'

function Boards (){



    return(
        <div className='Boards_Main'>
            <form>
                <div>
                    <img className='Image_boards' src="https://fancolor.es/wp-content/uploads/2016/09/4197-003-P-scaled.jpg" alt="" />
                    <p>Precio: </p>
                    <div className='botones'>
                        <button>
                            cora
                        </button>
                        <button>
                            Agregar Carrito
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Boards;