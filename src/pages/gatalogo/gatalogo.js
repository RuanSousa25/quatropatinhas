import "./gatalogo.css";

import Card from "../../components/cards/card"
import anakinImg from "../../assets/anakin.jpg";
import mike from "../../assets/mike.jpg";
import taylor from "../../assets/taylor_swift.jpg";
import lisa from "../../assets/lisa.jpg";
import elvira from "../../assets/elvira.jpg";
import cenourinha from "../../assets/cenourinha.jpg";
import tijolinho from "../../assets/tijolinho.jpg";
import maria from "../../assets/maria.jpg";
import jojo from "../../assets/jojo.jpg";

export default function Gatalogo(){
    return (
        <main>
            <h1 className="gatalogoDesc">
                 Conheça os nossos pequenos felinos que encontraram um lar cheio de amor! Este mural celebra cada adoção, mostrando as histórias felizes dos gatinhos que já fizeram parte da nossa família.
            </h1>
           <Card title="Mike" description="02/03/2022" img={mike}/>
           <Card title="Taylor Swift" description="12/09/2021" img={taylor}/>
           <Card title="Anakin" description="28/07/2020" img={anakinImg}/>
           <Card title="Tijolinho" description="02/03/2022" img={tijolinho}/>
           <Card title="Lisa" description="12/09/2021" img={lisa}/>
           <Card title="Elvira" description="28/07/2020" img={elvira}/>
           <Card title="Cenourinha" description="28/07/2020" img={cenourinha}/>
           <Card title="Jojo" description="28/07/2020" img={jojo}/>
           <Card title="Maria" description="28/07/2020" img={maria}/>
           <div className="gatalogoInvite">
               <h1> Inspire-se e ajude a transformar mais vidas!</h1>
           </div>
        </main>
    )
}