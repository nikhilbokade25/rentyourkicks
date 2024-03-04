import "./SneakerDisplay.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SneakerDisplay = ({ sneakerData }) => {
  const navigate = useNavigate();

  const handleClick = (id, name, brand, event) => {
    event.preventDefault();
    console.log(`Clicked on sneaker with id: ${id} and name: ${name} and brand: ${brand}`);
    navigate(`/sneaker/${brand}/${id}`);
  };

  return (
    <div className="sneaker_display_container">
      {sneakerData.map((sneaker) => (
        <div key={sneaker.id} className="sneaker_display_main">
          <Link to={`/sneaker/${sneaker.brand}/${sneaker.id}`}>
            <img src={sneaker.img} alt={sneaker.name} onClick={(e) => handleClick(sneaker.id, sneaker.name, sneaker.brand, e)}/>
          </Link>
          <p>{sneaker.name}</p>
          <p>{sneaker.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SneakerDisplay;
