import './cards.css'

function Boards (){



    return(
        <div className='boards_Main'>
            <form>
                <div>
                    <img className='image_boards' src="https://fancolor.es/wp-content/uploads/2016/09/4197-003-P-scaled.jpg" alt="" />
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