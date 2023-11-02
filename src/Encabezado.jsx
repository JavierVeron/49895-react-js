import logoBurgerKing from "./assets/Burger-King-Logo-CMS.png";

const Encabezado = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <ul className="nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                <img src={logoBurgerKing} alt="Burger King" width={48} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color_menu" href="#">Menú</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color_menu" href="#">Cupones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color_menu" href="#">Restaurantes</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Encabezado;