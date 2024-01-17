import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <Link to="/">
            <li className={styles.li}>Home</li>
          </Link>
          <Link to="/about">
            <li className={styles.li}>About</li>
          </Link>
          <Link to="/contact">
            <li className={styles.li}>Contact</li>
          </Link>
          <Link to="/terms">
            <li className={styles.li}>Terms</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
