import "./Service.css"

function Service ({ name : title , img  = "public/imgs/images/cameraoff.jpg" , caption}) {
    return (

        <div className="services__item">
            <img src={img} alt="Fire camp" className="item__img" />
            <h2 className="item__title">{title}</h2>
            <p className="item__caption">{caption}</p>
    </div>

    )
}

 

export default Service;