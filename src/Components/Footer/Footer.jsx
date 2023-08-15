import "./footer.css"

function Footer() {
  return (
    <div>
            <footer className="footer">
                  <div className="container">
                        <div className="footer__left-content">
                                  <h2 className="left-content__title">Hipcamp is everywhere you want to camp.</h2>
                                  <p className="left-content__title">Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more.</p>
                                  <div className="left-content__apps">
                                        <h2 className="apps__title">Download our App</h2>
                                        <img src="./public/imgs/images/app-store-apple.jpg" alt="apple store" className="apps__item" />
                                        <img src="./public/imgs/images/google-play.jpg" alt="google play" className="apps__item" />
                                  </div>
                        </div>
                        <div className="footer__right-content">
                              <ul className="right-content__list">
                                  <li>About Us</li>
                                  <li>Rules & Reservation Policies</li>
                                  <li>Accessibility</li>
                                  <li>Media Center</li>
                                  <li>Site Map</li>
                              </ul>
                              <ul className="right-content__list">
                                  <li>Find Trip Inspiration</li>
                                  <li>Build a Trip</li>
                                  <li>Buy a Pass</li>
                                  <li>Enter a Lottery</li>
                              </ul>
                              <ul className="right-content__list">
                                  <li>Your Account</li>
                                  <li>Your Reservations</li>
                                  <li>Contact Us</li>
                                  <li>Help Center</li>
                                  <li>Submit Feedback</li>
                              </ul>
                        </div>
                  </div>
            </footer>
    </div>
  )
}


export default Footer;