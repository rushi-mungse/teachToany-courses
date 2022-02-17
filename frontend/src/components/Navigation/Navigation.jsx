import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Button from "../Button/Button";

const Navigation = () => {
  const inner_left_nav = {
    height: "40px",
    textDecoration: "none",
  };
  const inner_right_nav = {
    color: "#898989",
    fontSize: "16px",
    textDecoration: "none",
  };
  return (
    <nav>
      <div className={styles.nav_wrapper}>
        <div className={styles.nav_left}>
          <Link to="/" style={inner_left_nav}>
            <img
              src="/images/main-logo.png"
              alt="logo"
              className={styles.logo_wrap}
            />
          </Link>
        </div>
        <Link to="/all-courses">
          <Button text="COURSES" />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
