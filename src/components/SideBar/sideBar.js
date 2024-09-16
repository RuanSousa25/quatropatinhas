import { NavLink } from "react-router-dom";
import "./sideBar.css";
import { FaList, FaPaw, FaUsers } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";


export default function SideBar({active, onLinkClick}){
    return(
        <div className={`sideBar ${active ? 'notClosed' : ''}`}>
                        <NavLink className="sideLink" to="/" onClick={onLinkClick}>
                        <FaHouse className="sideIcon"></FaHouse>
                        <p>Início</p>
                        </NavLink>
                       
                        <NavLink className="sideLink" to="/miaumenu" onClick={onLinkClick}>
                         <FaList className="SideIcon"></FaList>
                         <p>Miaumenu</p>
                         
                         </NavLink>
                        
                        <NavLink className="sideLink" to="/gatalogo" onClick={onLinkClick}>
                        <FaPaw className="SideIcon"></FaPaw>
                        <p>Gatálogo</p>
                        
                        </NavLink>
                        
                        <NavLink className="sideLink" to="/sobre" onClick={onLinkClick}>
                        <FaUsers className="SideIcon"></FaUsers>
                        <p>Sobre</p>
                        </NavLink>
        </div>
    )
}