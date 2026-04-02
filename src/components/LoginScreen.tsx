import logo from '../assets/logo.png';
import { useAppContext } from '../context/AppContext';

export function LoginScreen() {
  const { loginAs } = useAppContext();

  return (
    <div className="login-screen">
      <div className="login-card card">
        <img src={logo} alt="ASERFINTEC" className="login-logo" />
        <h1>ASERFINTEC Pharma Suite</h1>
        <p className="muted">
          Acceso de demostración para una solución farmacéutica diseñada con enfoque modular y mantenible.
        </p>
        <div className="login-actions">
          <button className="btn primary" onClick={() => loginAs('Administrador')}>
            Ingresar como Administrador
          </button>
          <button className="btn secondary" onClick={() => loginAs('Usuario')}>
            Ingresar como Usuario
          </button>
        </div>
      </div>
    </div>
  );
}
