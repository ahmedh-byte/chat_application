import { Link, Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import styles from "../components/SideMenu/SideMenu.module.css"

export default function MainLayout() {
  return (
    <div className="col-12 h-100 bg-danger d-flex flex-column  flex-lg-row">
        <SideMenu/>
        <div className={styles.outlet}> 
          <Outlet/>
        </div>
        <div className="bg-dark flex-grow-1 h-100 d-none d-lg-flex">
            message content
        </div>
      
      
    </div>
  )
}
