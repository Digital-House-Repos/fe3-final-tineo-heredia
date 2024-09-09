import { Link } from "react-router-dom";
import { routesList } from "../Routes/routesList";

const Card = (propiedades) => {
  const { item, entorno } = propiedades;
  const { name, username, id } = item;

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  if (entorno == "detail") {
    return <div>Detalle</div>;
  }

  return (
    <div className="card">
      <Link to={routesList.detail + id}>
        <p>ID: {id}</p>
        <p>Nombre: {name}</p>
        <p>Usuario: {username}</p>
      </Link>

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
