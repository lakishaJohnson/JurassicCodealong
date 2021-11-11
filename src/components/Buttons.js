const Buttons = (props) => {
    return (
        <>
            <button onClick={props.randomSpeciesHandler}>Research new species</button>
            <button onClick={props.addDinoHandler}>Add new dinosaur</button>
            <button onClick={props.destroyParkHandler}>Destroy Park</button>
        </>
    )
}
/* BUTTONS DON'T CHANGE SO THEY DON'T NEED STATE. BUTTON METHODS LIVE IN APP.JS AND IS PASSED DOWN TO BUTTON BECAUSE CHANGES HAPPEN IN APP.JS */
export default Buttons
