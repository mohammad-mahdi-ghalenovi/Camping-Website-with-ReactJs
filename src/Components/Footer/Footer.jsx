import "./footer.css"

function Footer() {
  return (
    <div>
            <footer className="footer">
                  <div className="container footer-container">
                        <div className="footer__left-content">
                                  <h2 className="footer-titles">Hipcamp is everywhere you want to camp.</h2>
                                  <p className="left-content__caption">Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more.</p>
                                  <div className="left-content__apps">
                                        <h2 className="apps__title">Download our App</h2>
                                        <div className="apps__img-container">
                                          <img src="./public/imgs/images/app-store-apple.jpg" alt="apple store" />
                                          <img src="./public/imgs/images/google-play.jpg" alt="google play"/>                                            
                                        </div>
                                  </div>
                        </div>
                        <div className="footer__right-content">
                              <ul className="right-content__list">
                                  <h2 className="footer-titles">Get to Know Us</h2>
                                  <a href=""><li>About Us</li></a>
                                  <a href=""><li>Rules & Reservation Policies</li></a>
                                  <a href=""><li>Accessibility</li></a>
                                  <a href=""><li>Media Center</li></a>
                                  <a href=""><li>Site Map</li></a>
                              </ul>
                              <ul className="right-content__list">
                                  <h2 className="footer-titles">Plan with Us</h2>
                                  <a href=""><li>Find Trip Inspiration</li></a>
                                  <a href=""><li>Build a Trip</li></a>
                                  <a href=""><li>Buy a Pass</li></a>
                                  <a href=""><li>Enter a Lottery</li></a>
                              </ul>
                              <ul className="right-content__list">
                                  <h2 className="footer-titles">Let Us Help You</h2>
                                  <a href=""><li>Your Account</li></a>
                                  <a href=""><li>Your Reservations</li></a>
                                  <a href=""><li>Contact Us</li></a>
                                  <a href=""><li>Help Center</li></a>
                                  <a href=""><li>Submit Feedback</li></a>
                              </ul>
                        </div>
                              <p className="copy ">&copy; all rights reserved by Metti</p>
                              <a href="#" className="go-top">
                                    <img src="./public/imgs/svg-icons/arrow-top.svg" alt="" />
                              </a>
                  </div>
            </footer>
    </div>
  )
}


export default Footer;