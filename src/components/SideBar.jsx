import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./SideBar.module.css";
// import CityList from "./CityList";
// import CountryList from "./CountryList";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* <Outlet />
      <CityList />
      <CountryList /> */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright{new Date().getFullYear()}by WorldWise
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
