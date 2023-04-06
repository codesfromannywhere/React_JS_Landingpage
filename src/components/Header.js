// Object for big number + text
const bigNumTxt = [
    {
        num: "127",
        text: "Award Received",
    },
    {
        num: "1505",
        text: "Cups of Coffee",
    },
    {
        num: "109",
        text: "Projects Completed",
    },
    {
        num: "102",
        text: "Happy Clients",
    },
];

const Header = () => {
    return (
        <header>
            <h3>Hello There</h3>
            <h1>WE ARE GLINT</h1>
            <hr />
            <p>Cheese strings gouda red leicester. Cottage cheese goat cow cheesecake port-salut jarlsberg cut the cheese who moved my cheese. Camembert de normandie ricotta cauliflower cheese cauliflower cheese emmental who moved my cheese parmesan pecorino. Cheesy feet gouda airedale port-salut red leicester pepper jack cheeseburger melted cheese. Cow danish fontina cauliflower cheese chalk and cheese rubber cheese fondue taleggio stinking bishop. Cottage cheese fondue say cheese.</p>
            <section>
                {bigNumTxt.map((elt) => {
                    return (
                        <div>
                            <h1>{elt.num}</h1>
                            <p>{elt.text}</p>
                        </div>
                    )
                }
                )}
            </section>
        </header>

    );
}

export default Header;