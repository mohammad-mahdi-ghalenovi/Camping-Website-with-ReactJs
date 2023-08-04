import "../styles/reset.css"
import "../styles/fonts.css" 
import "../styles/container.css"
import "./Destination.css"
import "../styles/responsive.css"

function Destination (props) {
    return (
        <div className="destination-card">

            <div className="destination-cards__cover">
                <img src={props.img} alt="" className="destination-cards__img" />
                <span className="destination-cards__icon"><img src="public/imgs/svg-icons/heart.svg" alt="" /></span>
            </div>

            <div className="destination-cards__price"><p>$36/night</p></div>
            <h2 className="destination-cards__title">Trickle Creek Ranch</h2>
            <p className="destination-cards__caption">Book unique camping experiences on over 300,000 campsites.</p>
            <button className="destination-cards__btn  btn">Read more</button>

        </div>
    )
}

export default Destination;