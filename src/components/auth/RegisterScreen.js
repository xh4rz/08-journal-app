import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h1 className="auth__title">Registrarse</h1>
            <form>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Confirmar Contraseña"
                    name="password2"
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Enviar
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    ¿Ya estás registrado?
                </Link>
            </form>
        </>
    )
}
