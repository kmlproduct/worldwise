import Map from "../componnents/Map";
import Sidebar from "../componnents/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      App
    </div>
  );
}

export default AppLayout;
