import styles from "./SideMenu.module.css"
import logo from "../../assets/logo.svg"
import avatar from "../../assets/avatr.jpg"
import { RiMoonLine } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { usePaths } from "../../store";
export default function SideMenu() {
  const {paths}=usePaths();
  const location =useLocation();
  const [activepath,setActivePath]=useState();
  useEffect((()=>{
  setActivePath(location.pathname)

  }),[location])
  return (
    <div className="d-flex flex-column shadow  bg-white border  align-items-center justify-content-between py-3 px-3 gap-3" id={styles.SideMenu}>
        <img src={logo} className="d-none d-lg-flex" />
        {
          paths.map((el,index)=> {
            return <Link key={index} to={ el.path} className={el.path ==activepath  ?styles.activelink :null}  >{el.icon} </Link>

        })
        }
        
        <Link className="d-none d-lg-flex" > <RiMoonLine /> </Link>
        <div className="dropdown" id={styles.userActions}>
         
          <img src={avatar} data-bs-toggle="dropdown" aria-expanded="false" height={40} />
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Log Out</a></li>
          </ul>
       </div>
        
         
        
       
          



      
    </div>
  )
}
