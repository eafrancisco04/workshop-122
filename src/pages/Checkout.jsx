import { useContext } from "react";
import CartContext from "../CartContext";
import { v4 as uuid} from "uuid";

function Checkout() {

    const { items } = useContext(CartContext);

    return(
        <>
        <div>
            <div class="cover">
                <div class="overlay">
                <h1>Checkout</h1>
                </div>
            </div>

            <div class="checkout">
                {items.map((item) => 
                    <div key={uuid()}>
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                    </div>
                )}
            </div>

        </div>

        
        </>
    )

}

export default Checkout;

{/* <div>
            <div class="cover">
                <h1>Checkout</h1>
            </div>

            <div className="shopping-bag ">
                {items.map((item) => 
                    <div key={uuid()}>
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                    </div>
                )}

        </div> */}