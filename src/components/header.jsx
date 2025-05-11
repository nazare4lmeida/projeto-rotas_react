import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: "10px", backgroundColor: "#008080" }}>
      <nav>
        <Link to="/">Início</Link> |{" "}
        <Link to="/about">Sobre</Link> |{" "}
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
}
