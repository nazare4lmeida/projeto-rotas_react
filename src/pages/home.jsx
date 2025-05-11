import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Bem-vindo(a) ao Filosofia Livre</h1>
      <p>Explore os grandes pensadores da humanidade através de suas obras clássicas.</p>
      <p>Visite também: 
        <Link to="/about"> Sobre </Link> | 
        <Link to="/contact"> Contato </Link>
      </p>
    </>
  );
}
