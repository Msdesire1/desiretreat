import Navbar from '@/comp/nav/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
<>
  {/*Loader*/}

  {/*Top bar*/}

<Navbar/>
  {/*Page header & Title*/}
  <section id="page_header">
    <div className="page_title">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title">Gallery</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="gallery" className="padding-top">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="work-filter">
            <ul className="text-center">
              <li>
                <a
                  href="javascript:;"
                  data-filter="all"
                  className="active filter"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  data-filter=".starters"
                  className="filter"
                >
                  {" "}
                  Starters
                </a>
              </li>
              <li>
                <a href="javascript:;" data-filter=".drinks" className="filter">
                  Free drinks{" "}
                </a>
              </li>
              <li>
                <a href="javascript:;" data-filter=".dinner" className="filter">
                  {" "}
                  Dinner
                </a>
              </li>
              <li>
                <a href="javascript:;" data-filter=".lunch" className="filter">
                  Breakfast &amp; Lunch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="zerogrid">
          <div className="wrap-container">
            <div className="wrap-content clearfix">
              <div className="col-1-3 mix work-item drinks heading_space">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery1.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="fancybox overlay-inner"
                          href="/image/gallery1.jpg"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery_content">
                      <h3>
                        <a href="recepi_detail.html">
                          {" "}
                          Herbs &amp; Cheese Stake
                        </a>
                      </h3>
                      <p>Duis autem vel eum iriure dolor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-3 mix work-item starters heading_space">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/galler2.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="fancybox overlay-inner"
                          href="/image/galler2.jpg"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery_content">
                      <h3>
                        <a href="recepi_detail.html">Spaghetti</a>
                      </h3>
                      <p>Duis autem vel eum iriure dolor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-3 mix work-item dinner heading_space">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery3.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="video fancybox.iframe  overlay-inner"
                          href="https://player.vimeo.com/video/94224205?autoplay=1"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery_content">
                      <h3>
                        <a href="recepi_detail.html">Crispy Sandwich</a>
                      </h3>
                      <p>Duis autem vel eum iriure dolor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-3 mix work-item drinks heading_space">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery4.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="fancybox overlay-inner"
                          href="/image/gallery4.jpg"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery_content">
                      <h3>
                        <a href="recepi_detail.html">Cream Cake</a>
                      </h3>
                      <p>Duis autem vel eum iriure dolor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-3 mix work-item dinner heading_space">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery5.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="video fancybox.iframe  overlay-inner"
                          href="https://player.vimeo.com/video/94224205?autoplay=1"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery_content">
                      <h3>
                        <a href="recepi_detail.html">Chocolate Cup Cake</a>
                      </h3>
                      <p>Duis autem vel eum iriure dolor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-3 mix work-item lunch heading_space">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery6.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="fancybox overlay-inner"
                          href="/image/gallery6.jpg"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery_content">
                      <h3>
                        <a href="recepi_detail.html"> Grilled Spice Chicken</a>
                      </h3>
                      <p>Duis autem vel eum iriure dolor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-3 mix work-item starters heading_space">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery7.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="fancybox overlay-inner"
                          href="/image/gallery7.jpg"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery_content">
                      <h3>
                        <a href="recepi_detail.html">
                          Cheese and Chorizo Rolls
                        </a>
                      </h3>
                      <p>Duis autem vel eum iriure dolor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-3 mix work-item starters heading_space">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery8.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="fancybox overlay-inner"
                          href="/image/gallery8.jpg"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery_content">
                      <h3>
                        <a href="recepi_detail.html">Roasted Chicken</a>
                      </h3>
                      <p>Duis autem vel eum iriure dolor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-3 mix work-item lunch heading_space">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery9.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="fancybox overlay-inner"
                          href="/image/gallery9.jpg"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery_content">
                      <h3>
                        <a href="recepi_detail.html">Broccoli Side</a>
                      </h3>
                      <p>Duis autem vel eum iriure dolor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Footer*/}
  <footer className="padding-top bg_black">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 footer_column">
          <h4 className="heading">Why Bistro?</h4>
          <hr className="half_space" />
          <p className="half_space">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore dolor in hendrerit in
            vulputate.
          </p>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl.
          </p>
        </div>
        <div className="col-md-3 col-sm-6 footer_column">
          <h4 className="heading">Quick Links</h4>
          <hr className="half_space" />
          <ul className="widget_links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="location.html">Locations</a>
            </li>
            <li>
              <a href="menu.html">Menu</a>
            </li>
            <li>
              <a href="faq.html">Faq`&apos;`s</a>
            </li>
            <li>
              <a href="order.html">Order Now</a>
            </li>
            <li>
              <a href="gallery.html">Gallery</a>
            </li>
            <li>
              <a href="food.html">Food</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 footer_column">
          <h4 className="heading">Newsletter</h4>
          <hr className="half_space" />
          <p className="icon">
            <i className="icon-dollar" />
            Sign up with your name and email to get updates fresh updates.
          </p>
          <div id="result1" className="text-center" />
          <form
            action="http://themesindustry.us13.list-manage.com/subscribe/post-json?u=4d80221ea53f3a4487ddebd93&id=494727d648&c=?"
            method="get"
            onsubmit="return false"
            className="newsletter"
          >
            <div className="form-group">
              <input
                type="email"
                placeholder="E-mail Address"
                required=""
                name="EMAIL"
                id="EMAIL"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn-submit button3"
                defaultValue="Subscribe"
              />
            </div>
          </form>
        </div>
        <div className="col-md-3 col-sm-6 footer_column">
          <h4 className="heading">Get in Touch</h4>
          <hr className="half_space" />
          <p>Restaurant, to consequat ipsum nec sagittis sem.</p>
          <p className="address">
            <i className="icon-location" />
            Restaurant, Manhattan 1258,New York, USA Lahore
          </p>
          <p className="address">
            <i className="fa fa-phone" />
            (+1) 234 567 8901
          </p>
          <p className="address">
            <i className="icon-dollar" />
            <a href="mailto:hello@website.com">hello@website.com</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="copyright clearfix">
            <p>Copyright © 2016 Bistro. All Right Reserved</p>
            <ul className="social_icon">
              <li>
                <a href="#." className="facebook">
                  <i className="icon-facebook5" />
                </a>
              </li>
              <li>
                <a href="#." className="twitter">
                  <i className="icon-twitter4" />
                </a>
              </li>
              <li>
                <a href="#." className="google">
                  <i className="icon-google" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a href="#." id="back-top">
    <i className="fa fa-angle-up fa-2x" />
  </a>
</>

    </div>
  )
}
 export default page