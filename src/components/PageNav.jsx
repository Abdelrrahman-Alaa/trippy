import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function Nav() {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
