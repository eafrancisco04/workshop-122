import { useContext } from "react";
import CartContext from "../CartContext";

function Checkout() {

    const { items } = useContext(CartContext);

    return(
        <>
        <h1>Checkout</h1>

        <div className="shopping-bag ">
            {items.map((item) => 
                <div>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                </div>
            )}

        </div>
        </>
    )

}

export default Checkout;