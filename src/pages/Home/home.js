import "./home.css";
import divulga from "../../assets/divulgacao.jpg";
import { useNavigate } from "react-router-dom";
export default function Home(){

    const navigate = useNavigate();

    const gotTo = (path)=>{
        navigate(path);
    }

    return (
        <main>
           <div className="homeContent">
            <div className="homeImg">
                <img src={divulga}></img>
            </div>
            <div className="homeText">
                <h1>Bem-vindo à Cafeteria Quatro Patinhas, onde o amor por gatos e café se encontra! Além de saborear bebidas deliciosas em um ambiente acolhedor, você pode interagir com nossos gatinhos resgatados, que estão à espera de um lar. Toda compra ajuda a apoiar abrigos de gatos locais. Venha tomar um café e quem sabe, sair com um novo amiguinho!</h1>
                <div className="buttonsHome"><button onClick={()=>{gotTo("/miaumenu")}}>Menu</button> <button onClick={()=>{gotTo("/sobre")}}>Sobre Nós</button></div>
            </div>
           </div>
        </main>
    )
}