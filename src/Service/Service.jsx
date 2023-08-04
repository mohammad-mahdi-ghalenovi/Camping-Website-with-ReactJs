import "./Service.css"

function Service (props) {
    return (

        <div className="services__item">
            <img src={props.img} alt="Fire camp" className="item__img" />
            <h2 className="item__title">{props.name}</h2>
            <p className="item__caption">{props.caption}</p>
    </div>

    )
}

 

export default Service;