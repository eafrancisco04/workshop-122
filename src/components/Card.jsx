import { useContext } from "react";
import CartContext from "../CartContext";
import { AiFillShopping } from "react-icons/ai";




function Card ({name, price, icon}) {
    const { addToCart } = useContext(CartContext);

    return(
        <div className="card">
            <div className="product-box">
                <h4>{icon} {name}</h4>
                <h5 className="price">${price}</h5>
                <button onClick={() => addToCart(name, price)}>
                    Add to Cart<AiFillShopping />
                </button>
            </div>

            {/* <div class="purchase">
                <button onClick={() => addToCart(name, price)}>
                    <p>Add to Cart</p><AiFillShopping />
                </button>
            </div> */}
            

        </div>

    )
}


export default Card;