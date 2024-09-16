import "./card.css";

export default function Card({title, description, img}){

    return(
        <div className="card">
            <img alt={title} src={img}></img>
            <div className="cardContent">
                <p>{title}</p>
                {/* <p>
                    {description}
                </p> */}
            </div>
        </div>
    )
}