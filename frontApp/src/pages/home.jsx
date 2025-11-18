

export default function Home() {
    return (
        <main className="container py-3 flex-fill">

            <section className="text-center mb-5" id="Nosotros">
                <h1 className="display-4 fw-bold">Bienvenido a Fin-Track</h1>
                <p className="lead">Tu plataforma para organizar finanzas, controlar gastos y alcanzar tus metas financieras de
                    manera facil.
                </p>
                <a href="" className="btn btn-info text-white btn-lg">Crea tu cuenta</a>
            </section>
            <section className="container mb-5 mt-5">
                <h2 className="text-center mb-4">¿Que quieres hacer?</h2>
                <div className="row g-4">
                    <div className="col-lg-6 col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Ingresa tu orden de compra</h5>
                                <p className="card-text">
                                    Conocer tus opciones es el primer paso para manejar mejor tu dinero.
                                    Infórmate sobre productos financieros, compara alternativas y toma decisiones más
                                    seguras.
                                </p>
                                <a href="#" className="btn btn-info text-white btn-lg">Click aqui</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Gestiona tu pedido</h5>
                                <p className="card-text">
                                    Conocer tus opciones es el primer paso para manejar mejor tu dinero.
                                    Infórmate sobre productos financieros, compara alternativas y toma decisiones más
                                    seguras.
                                </p>
                                <a href="#" className="btn btn-info text-white btn-lg">Click aqui</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Estado de pedidos</h5>
                                <p className="card-text">
                                    Define metas claras y traza el camino para alcanzarlas. La planificación convierte tus
                                    finanzas
                                    en una herramienta para lograr tranquilidad y crecimiento.
                                </p>
                                <a href="#" className="btn btn-info text-white btn-lg">Click aqui</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mx-md-auto">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Pedidos enviados</h5>
                                <p className="card-text">
                                    Organiza tus ingresos y gastos en un plan realista. Un buen presupuesto te permite
                                    anticipar,
                                    controlar y aprovechar mejor cada peso.
                                </p>
                                <a href="#" className="btn btn-info text-white btn-lg">Click aqui</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}