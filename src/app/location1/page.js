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
            <h2 className="title">Locations</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*LOcation Map*/}
  <section className="padding">
    <h3 className="hidden">hidden</h3>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="map" />
          <div className="search_location">
            <form>
              <input
                id="geocomplete"
                type="text"
                placeholder="Type in an address"
                className="search"
              />
              <button id="find" type="button" className="find-btn">
                <i className="icon-map" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Contact Form & Address*/}
  <section className="padding bg_grey" id="location">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8">
          <h2 className="heading">Get in Touch</h2>
          <hr className="heading_space" />
          <form className="callus" onsubmit="return false" id="contact_form">
            <div className="row">
              <div className="col-md-12">
                <div id="result" className="text-center form-group" />
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="f_name"
                    id="f_name"
                    placeholder="First Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="l_name"
                    id="l_name"
                    placeholder="Last Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    id="phone"
                    required=""
                    placeholder="Phone No"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    placeholder="Message"
                    name="message"
                    id="message"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <div className="btn-submit button3">
                    <input
                      type="submit"
                      defaultValue="Submit Request"
                      id="btn_contact_submit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4 col-sm-4 bistro">
          <h2 className="heading">bistro</h2>
          <hr className="heading_space" />
          <p>
            <strong>Phone:</strong> 1.800.555.6789
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@bistro.com">support@bistro.com</a>
          </p>
          <p>
            <a href="#.">Web: www.bistro.com</a>
          </p>
          <p>
            <strong>Address:</strong> 12345 North Main Street, New York
          </p>
          <ul className="social_icon">
            <li className="black">
              <a href="#." className="facebook">
                <i className="icon-facebook5" />
              </a>
            </li>
            <li className="black">
              <a href="#." className="twitter">
                <i className="icon-twitter4" />
              </a>
            </li>
            <li className="black">
              <a href="#." className="google">
                <i className="icon-google" />
              </a>
            </li>
          </ul>
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