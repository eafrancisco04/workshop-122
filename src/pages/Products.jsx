import Card from "../components/Card";
import { v4 as uuid } from "uuid";
import { GiSushis } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { GiDumpling } from "react-icons/gi";
import { GiDumplingBao } from "react-icons/gi";
import { GiBowlOfRice } from "react-icons/gi";
import { GiBokChoy } from "react-icons/gi";
import { GiBoba } from "react-icons/gi";
import { SiGitea } from "react-icons/si";


function Products() {
    const products = [
        {name: "Sushi", price: 15.99, icon: <GiSushis/>},
        {name: "Ramen", price: 21.99, icon: <GiNoodles/>},
        {name: "Gyoza", price: 9.99, icon: <GiDumpling/>},
        {name: "Pork BBQ Bao", price: 4.99, icon: <GiDumplingBao/>},
        {name: "Bibimbap", price: 15.99, icon: <GiBowlOfRice/>},
        {name: "Thai Salad", price: 10.99, icon: <GiBokChoy/>},
        {name: "Milk Tea Boba", price: 9.99, icon: <GiBoba/>},
        {name: "Hot Tea", price: 2.99, icon: <SiGitea/>},
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