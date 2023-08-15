import "./banner.css"
function Banner () {
    return (
        <div className="container">
            <section className="banner">
            <div className="banner__blub"><img src="public/imgs/svgs/shape3.svg" alt="" /></div>
            <div className="banner-left-content">
                <h2 className="banner-left-content__title">Let's Stay in Touch</h2>
                <p className="banner-left-content__caption">Get travel planning ideas, helpful tips, and stories from our visitors <br /> delivered right to your inbox.</p>
                <div className="banner-left-content__input-container">
                    <span className="banner-left-content__icon email-icon">
                        <img src="public/imgs/svg-icons/email.svg" alt="" />
                    </span>
                    <input type="text" className="" placeholder="Email Address" />
                    <span className="banner-left-content__icon send-icon">
                        <img src="public/imgs/svg-icons/send.svg" alt="" />
                    </span>
                </div>
                </div>
            <div className="banner-right-content">
                <img src="public/imgs/images/tent.png" alt="A tent" className="banner-right-content__img" />
            </div>
        </section>
        </div>

    )
}

export default Banner;