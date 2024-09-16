import { NavLink } from "react-router-dom";
import "./header.css";
import { FaPaw } from "react-icons/fa";
import SideBar from "../SideBar/sideBar";
import { useState } from "react";

export default function Header(){
    const [isSideBarActive, setIsSideBarActive] = useState(false);

    const toggleSideBar = ()=>{
        setIsSideBarActive(!isSideBarActive);
    }
    const onLinkClick = () => {
        setIsSideBarActive(false); // Fecha a sidebar ao clicar em um link
      };

    return(
        <>
            <header className="header">
                <FaPaw className="icon"></FaPaw>
                <div className="nameSpace">
                <div className="logo"></div>
                <p className="title">    
                    Quatro <span>Patinhas</span></p></div>
                <nav>
                    <div>
                        <NavLink className="link" to="/quatropatinhas/">Início</NavLink>
                    </div>
                    <div>
                        <NavLink className="link" to="/quatropatinhas/miaumenu">Miaumenu</NavLink>
                    </div>
                    <div>
                        <NavLink className="link" to="/quatropatinhas/gatalogo">Gatálogo</NavLink>
                    </div>
                    <div>
                        <NavLink className="link" to="/quatropatinhas/sobre">Sobre</NavLink>
                    </div>
                </nav>
                <div className={`barMenu ${isSideBarActive? 'notOpen':''}`} onClick={toggleSideBar}>
                    <div className="hamburger"></div>
                </div>
                <FaPaw className="icon"></FaPaw>
                
            </header>
            <SideBar active={isSideBarActive} onLinkClick={onLinkClick} />   
        </>
    )
}