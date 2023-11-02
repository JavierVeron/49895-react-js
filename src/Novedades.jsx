const Novedades = () => {
    let titulo1 = "¡Aventura King Jr. con Paw Patrol!";

    function darTitulo() {
        return "Philly Cheese: donde la simplicidad es pura delicia.";
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src="images/Banner-King-jr-Arg_930x620_novedades.jpeg" alt="Imagen #1" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <img src="images/Banner-Philly-Chesse-Arg_930x620_novedades.jpeg" alt="Imagen #2" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <img src="images/Banner-pechuga-king-Arg_930x620_novedades-web.jpeg" alt="Imagen #3" className="img-fluid" />
                </div>
            </div>
            <div className="row my-3">
                <div className="col-md-4 text-center">
                    <h3 className="color_menu">{titulo1.toUpperCase()}</h3>
                </div>
                <div className="col-md-4 text-center">
                    <h3 className="color_menu">{darTitulo()}</h3>
                </div>
                <div className="col-md-4 text-center">
                    <h3 className="color_menu">Sabor Real, 100% Pollo</h3>
                </div>
            </div>
        </div>
    )
}

export default Novedades;