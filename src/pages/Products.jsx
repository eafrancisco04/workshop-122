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
import { GiSodaCan } from "react-icons/gi";
import { GiLemon } from "react-icons/gi";


function Products() {
    const food = [
        {name: "Sushi", price: 15.99, icon: <GiSushis/>},
        {name: "Ramen", price: 21.99, icon: <GiNoodles/>},
        {name: "Gyoza", price: 9.99, icon: <GiDumpling/>},
        {name: "Pork BBQ Bao", price: 4.99, icon: <GiDumplingBao/>},
        {name: "Bibimbap", price: 15.99, icon: <GiBowlOfRice/>},
        {name: "Thai Salad", price: 10.99, icon: <GiBokChoy/>},
        {name: "Milk Tea Boba", price: 9.99, icon: <GiBoba/>},
        {name: "Hot Tea", price: 2.99, icon: <SiGitea/>},
    ]

    const drinks = [
        {name: "Milk Tea Boba", price: 9.99, icon: <GiBoba/>},
        {name: "Hot Tea", price: 1.99, icon: <SiGitea/>},
        {name: "Soda", price: 2.49, icon: <GiSodaCan/>},
        {name: "Pink Lemonade", price: 2.49, icon: <GiLemon/>}
    ]
    return(
        <div className="product-list">
            <div class="cover">
                <div class="overlay">
                <h1>Menu</h1>
                </div>
            </div>
            

            <div className="food-list">
                <h2>Food Menu</h2>
                {food.map((food) => 
                <Card name={food.name} price={food.price} icon={food.icon} key={uuid()}/>
            )}
            </div>

            <div className="drink-list">
                <h2>Beverages</h2>
                {drinks.map((drink) => 
                <Card name={drink.name} price={drink.price} icon={drink.icon} key={uuid()}/>
            )}
            </div>
            
        </div> 
    )
}

export default  Products;