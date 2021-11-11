import DinoCard from "./DinoCard";

const Park = (props) => {
//   const dinosToDisplay = [];
//   props.dinos.forEach((dino) => {
//     dinosToDisplay.push(<DinoCard dino={dino} />);
//   });
const dinosToDisplay = props.dinos.map((dino, i) => {
    return <DinoCard key={i} dino={dino} />
})

return (
  <div className="dino-grid">
    {dinosToDisplay}
  </div>
)
};


export default Park;
// Park is rendering Dino card, and park is being rendered in App
