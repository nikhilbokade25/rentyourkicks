import nikeShoeImg from "../assets/nike.jpg";
import adidasShoeImg from "../assets/adidas.jpg";
import reebokShoeImg from "../assets/reebok.jpg";
import pumaShoeImg from "../assets/puma.jpg";
import newBalanceShoeImg from "../assets/newBalance.jpg";
import "./FeaturedCollections.css";
import { Link } from "react-router-dom";

export const FEATURED_COLLECTIONS = [
    {
        image: nikeShoeImg,
        title: "Nike",
    },
    {
        image: adidasShoeImg,
        title: "Adidas",
    },
    {
        image: reebokShoeImg,
        title: "Reebok",
    },
    {
        image: pumaShoeImg,
        title: "Puma",
    },
    {
        image: newBalanceShoeImg,
        title: "New Balance",
    },
]

export default function FeaturedCollections(){
    return(
        <div className="featuredCollection_container">
            <div className="featuredCollection_main">
                    <div className="collection_item">
                        <Link to="/shopNike"><img  src={FEATURED_COLLECTIONS[0].image}  className="collection_image"/></Link>
                        <Link to="/shopNike"><p className="collection_title">{FEATURED_COLLECTIONS[0].title}</p></Link>
                    </div>

                    <div className="collection_item">
                        <Link to="/shopAdidas"><img src={FEATURED_COLLECTIONS[1].image}  className="collection_image"/></Link>
                        <Link to="/shopAdidas"><p className="collection_title">{FEATURED_COLLECTIONS[1].title}</p></Link>
                    </div>

                    <div className="collection_item">
                    <Link to="/shopReebok"><img src={FEATURED_COLLECTIONS[2].image}  className="collection_image"/></Link>
                    <Link to="/shopReebok"><p className="collection_title">{FEATURED_COLLECTIONS[2].title}</p></Link>
                    </div>

                    <div className="collection_item">
                    <Link to="/shopPuma"><img src={FEATURED_COLLECTIONS[3].image}  className="collection_image"/></Link>
                    <Link to="/shopPuma"><p className="collection_title">{FEATURED_COLLECTIONS[3].title}</p></Link>
                    </div>

                    <div className="collection_item">
                    <Link to="/shopNewBalance"><img src={FEATURED_COLLECTIONS[4].image}  className="collection_image"/></Link>
                    <Link to="/shopNewBalance"><p className="collection_title">{FEATURED_COLLECTIONS[4].title}</p></Link>
                    </div>
            </div>
        </div>
    );
}