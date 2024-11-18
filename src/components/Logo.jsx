import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      {/* <img src="/logo.png" alt="WorldWise logo" className={styles.logo} /> */}
      <h1 className={styles.logo}>KAMALBRICONEX</h1>
    </Link>
  );
}

export default Logo;
