import Salad from "../images/salat.jpeg";
import Frikadellen from "../images/frikadellen.jpeg";
import Glass from "../images/glass.jpeg";
import Pizza from "../images/pizza.jpeg";
import Scampi from "../images/scampi.jpeg";
import Spaghetti from "../images/spagetthi.jpeg";
import Teller from "../images/teller.jpeg";


const recepies = [{
    img: Salad,
    headline: "Super Detox Bowl",
    infotext: "Cheese on toast say cheese fondue macaroni cheese when the cheese comes out everybody's happy fromage hard cheese cheese slices.",
    price: "$45 / $55",
},
{
    img: Pizza,
    headline: "Pizza Verdure",
    infotext: "Cheese on toast say cheese fondue macaroni cheese when the cheese comes out everybody's happy fromage hard cheese cheese slices.",
    price: "$65 / $70",
},
{
    img: Frikadellen,
    headline: "Frikadellen mit Salat",
    infotext: "Cheese on toast say cheese fondue macaroni cheese when the cheese comes out everybody's happy fromage hard cheese cheese slices.",
    price: "$45 / $55",
},
{
    img: Salad,
    headline: "Super Detox Bowl",
    infotext: "Cheese on toast say cheese fondue macaroni cheese when the cheese comes out everybody's happy fromage hard cheese cheese slices.",
    price: "$ 30.50",
},
{
    img: Glass,
    headline: "Gin Tonic",
    infotext: "Cheese on toast say cheese fondue macaroni cheese when the cheese comes out everybody's happy fromage hard cheese cheese slices.",
    price: "$ 26.50",
},
{
    img: Pizza,
    headline: "Pizza Piccante",
    infotext: "Cheese on toast say cheese fondue macaroni cheese when the cheese comes out everybody's happy fromage hard cheese cheese slices.",
    price: "$ 25.50",
},
{
    img: Scampi,
    headline: "Scampi Soup",
    infotext: "Cheese on toast say cheese fondue macaroni cheese when the cheese comes out everybody's happy fromage hard cheese cheese slices.",
    price: "$ 25.50",
},
{
    img: Spaghetti,
    headline: "Spaghetti",
    infotext: "Cheese on toast say cheese fondue macaroni cheese when the cheese comes out everybody's happy fromage hard cheese cheese slices.",
    price: "$ 25.50",
},
{
    img: Teller,
    headline: "Mixed Plate",
    infotext: "Cheese on toast say cheese fondue macaroni cheese when the cheese comes out everybody's happy fromage hard cheese cheese slices.",
    price: "$ 25.50",
},
]



const Footer = () => {
    return (
        recepies.map((elt) =>
            <div>
                <img src={elt.img} alt="meal" />
                <h4>{elt.headline}</h4>
                <p>{elt.infotext}</p>
                <p>{elt.price}</p>
            </div>)
    );
}

export default Footer;