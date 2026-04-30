import Logo from "../pages/Logo";
import Styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <Outlet />
      <footer className={Styles.footer}>
        <p className={Styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} By Trippy Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
