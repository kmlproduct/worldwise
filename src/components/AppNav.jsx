import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities" className={styles.cta}>
            cities
          </NavLink>
        </li>
        <li>
          <NavLink to="countries" className={styles.cta}>
            countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default AppNav;
