export default function Login() {
    return (
        <main className="container py-3 flex-fill">
            <h1 className="text-center mb-4">Iniciar Sesión</h1>
            <form id="loginForm" className="p-4 shadow rounded bg-light mx-auto" style={{ maxWidth: "400px" }}
            >
                <div className="mb-3">
                    <label for="username" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="username" required autocomplete="email" />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-info text-white">Iniciar Sesión</button>
                </div>
                <div id="msgLogin" className="mt-3 fw-bold"></div>
            </form>
        </main>
    )
}