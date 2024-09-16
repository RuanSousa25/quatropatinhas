import { useNavigate } from "react-router-dom";
import "./sobre.css"

export default function Sobre(){


    const navigate = useNavigate();

    const gotTo = (path)=>{
        navigate(path);
    }


    return (
        <div className="sobreContent">
            <h1>
            A Cafeteria Quatro Patinhas nasceu da paixão de 8 amigos por café e gatos. Inspirados pelo desejo de ajudar animais em situação de rua, criamos um espaço onde as pessoas podem relaxar, tomar um bom café e interagir com gatinhos que precisam de um lar. O projeto cresceu com o apoio da comunidade, e hoje, além de servir bebidas deliciosas, contribuímos para abrigos e adoção responsável.
            </h1>
            <button onClick={()=>{
                gotTo("/quatropatinhas/")
            }}>Voltar a explorar</button>
        </div>
    )
}