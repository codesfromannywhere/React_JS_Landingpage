import { ReactComponent as Brush } from '../images/brush.svg'
import { ReactComponent as Globe } from '../images/globe-line.svg'
import { ReactComponent as Megaphone } from '../images/megaphone.svg'
import { ReactComponent as Object } from '../images/object-select.svg'

const launchItems = [{
    img: Brush,
    headline: "Brand Identity",
    infotext: "I love cheese, especially bocconcini fromage. Emmental smelly cheese chalk and cheese cheese slices smelly cheese emmental red leicester manchego. Taleggio cheddar macaroni cheese the big cheese edam mascarpone cheese slices paneer. Cheesy feet stilton gouda airedale fondue."
},
{
    img: Object,
    headline: "Illustration",
    infotext: "I love cheese, especially bocconcini fromage. Emmental smelly cheese chalk and cheese cheese slices smelly cheese emmental red leicester manchego. Taleggio cheddar macaroni cheese the big cheese edam mascarpone cheese slices paneer. Cheesy feet stilton gouda airedale fondue."
},
{
    img: Megaphone,
    headline: "Marketing",
    infotext: "I love cheese, especially bocconcini fromage. Emmental smelly cheese chalk and cheese cheese slices smelly cheese emmental red leicester manchego. Taleggio cheddar macaroni cheese the big cheese edam mascarpone cheese slices paneer. Cheesy feet stilton gouda airedale fondue."
},
{
    img: Globe,
    headline: "Web Design",
    infotext: "I love cheese, especially bocconcini fromage. Emmental smelly cheese chalk and cheese cheese slices smelly cheese emmental red leicester manchego. Taleggio cheddar macaroni cheese the big cheese edam mascarpone cheese slices paneer. Cheesy feet stilton gouda airedale fondue."
}]


const Secondsection
    = () => {
        return (
            launchItems.map((elt) =>
                <article>
                    < elt.img />
                    <div>
                        <h3>{elt.headline}</h3>
                        <p>{elt.infotext}</p>
                    </div>
                </article>
            )
        );
    }
export default Secondsection
    ;



    // const Secondsection = () => {
//     return (
//         <section>
//             {launchItems.map((elt) => {
//                 return (
//                     <p></p>elt.img}</p>
//                     <div>
//                         <h3>{elt.headline}</h3>
//                         <p>{elt.infotext}</p>
//                     </div>
//                 )
//             }
//             )}
//         </section>
//     );
// }

// export default Secondsection;


// {
//     launchItems.map((elt, i) =>
//         <Secondsection
//             key={i}
//             img={elt.img}
//             headline={elt.headline}
//             infotext={elt.infotext}
//         />
//     )
// }