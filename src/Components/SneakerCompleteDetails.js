import { useParams } from "react-router-dom";
import "./SneakerCompleteDetails.css";
import NavbarShop from "./NavbarShop";
import ShoeSize from "./ShoeSize";
import RentButton from "./RentButton";
import FavouriteButton from "./FavouriteButton";

const SneakerCompleteDetails = ({ sneakersData }) => {
    const { id, brand } = useParams();
    const sneakers = sneakersData[brand.toLowerCase()];
    const sneaker = sneakers.find((s) => s.id === parseInt(id, 10));
  
    return (
        <div className="sneaker_description_container">
          <NavbarShop />
          <div className="sneaker_description_main">
          
            {sneaker ? (
              <>
                <div className="left_section">
                  {sneaker.productImages.map((image, index) => (
                    <img key={index} src={image} alt={`${sneaker.name} - Image ${index + 1}`} />
                  ))}
                </div>
                <div className="right_section">
                  <h2>{sneaker.name}</h2>
                  <p>{sneaker.description}</p>
                  <h3>Select Size</h3>
                  <ShoeSize />
                  <FavouriteButton />
                  <RentButton sneaker={sneaker}/>
                </div>
              </>
            ) : (
              <p>Sneaker not found</p>
            )}
          </div>
        </div>
      );
  };

  export default SneakerCompleteDetails;
  