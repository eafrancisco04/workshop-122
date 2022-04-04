import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>

        <li>
          <Link to="/checkout">
            <div className="cart">
              <AiFillShopping />
              <span>0</span>
            </div>
            
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
