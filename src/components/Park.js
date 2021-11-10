import DinoCard from "./DinoCard";
import species from "../species";

const Park = (props) => {
//   const dinosToDisplay = [];
//   props.dinos.forEach((dino) => {
//     dinosToDisplay.push(<DinoCard dino={dino} />);
//   });
const dinosToDisplay = props.dinos.map((dino) => {
    return <DinoCard dino={dino} />
})
  return (
    <div className="dino-grid">
      {/* MAKE AN ARRAY OF DINO CARDS */}
      {dinosToDisplay}
    </div>
  );
};

export default Park;
// Park is rendering Dino card, and park is being rendered in App
