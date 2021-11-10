const DinoCard = (props) => {
    return (
        <div className="dino-card">
            <p>Dinosaur: {props.dino.name}</p>
            <img src={props.dino.image} alt={props.dino.name}/>
        </div>
    )
}

export default DinoCard