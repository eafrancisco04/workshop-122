import Card from "../components/Card";
import { v4 as uuid } from "uuid";
import { IoShirt } from "react-icons/io5";
import { GiHighHeel } from "react-icons/gi";

function Products() {
    const products = [
        {name: "Shirt", price: 50, icon: <IoShirt/>},
        {name: "Heels", price: 100, icon: <GiHighHeel />},
        {name: "Jacket", price: 120},
        {name: "Hat", price: 20},
        {name: "Scarf", price: 40},
    ]
    return(
        <div className="product-list">
            {products.map((products) => 
            <Card name={products.name} price={products.price} icon={products.icon} key={uuid()}/>
            )}
        </div> 
    )
}

export default  Products;