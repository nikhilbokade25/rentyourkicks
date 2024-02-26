import nikeShoeImg from "../assets/nike.jpg";
import adidasShoeImg from "../assets/adidas.jpg";
import reebokShoeImg from "../assets/reebok.jpg";
import pumaShoeImg from "../assets/puma.jpg";
import newBalanceShoeImg from "../assets/newBalance.jpg";
import "./FeaturedCollections.css";

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
                {FEATURED_COLLECTIONS.map((item, index) => (
                    <div key={index} className="collection_item">
                        <img src={item.image} alt={item.title} className="collection_image" />
                        <p className="collection_title">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}