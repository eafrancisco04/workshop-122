import Card from "../components/Card";
import { v4 as uuid } from "uuid";

function Products() {
    const products = [
        {name: "Shirt", price: 50},
        {name: "Pants", price: 80},
        {name: "Jacket", price: 120},
        {name: "Hat", price: 20},
        {name: "Scarf", price: 40},
    ]
    return(
        <div className="product-list">
            {products.map((products) => 
            <Card name={products.name} price={products.price} key={uuid()}/>
            )}
        </div> 
    )
}

export default  Products;