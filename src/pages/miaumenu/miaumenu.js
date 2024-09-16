import miaumenu from "../../assets/miaumenu.jpg";
import "./miaumenu.css";
export default function Miaumenu(){
    return (
        <main>
            <div className="miaumenuContent">
                <h1>Se você deseja conferir todos os nossos drinks, comidinhas e mais, considere baixar o nosso menu e escolher o que mais te fizer salivar</h1>
                <a download={miaumenu} href={miaumenu}>Baixar Menu</a>
            </div>
        </main>
    )
}