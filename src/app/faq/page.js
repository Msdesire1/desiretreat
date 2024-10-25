import Navbar from '@/comp/nav/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
<>
<Navbar/>
  {/*Page header & Title*/}
  <section id="page_header">
    <div className="page_title">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title">FAQs</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="faq" className="padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="heading">Frequently ask Questions</h2>
          <hr className="heading_space" />
          <div className="faq_wrapper">
            <ul className="items">
              <li>
                <a href="#">
                  {" "}
                  Lorem ipsum dolor sit amet, an eripuit laboramus sententiae
                  duo lorem sio?
                </a>
                <ul className="sub-items">
                  <li>
                    <p className="half_space">
                      Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters, as opposed to using `&apos;`Content
                      here, content here`&apos;`, making it look like readable English.
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for `&apos;`lorem ipsum`&apos;` will uncover many web sites still in
                      their infancy.
                    </p>
                    <p>
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text (injected humour and the like).
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  There are many variations of passages of Lorem Ipsum
                  available?
                </a>
                <ul className="sub-items">
                  <li>
                    <p>
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text (injected humour and the like).
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  It is a long established fact that a reader will be distracted
                  by the readable content looking at its layout.
                </a>
                <ul className="sub-items">
                  <li>
                    <p className="half_space">
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text (injected humour and the like).
                    </p>
                    <p>
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text (injected humour and the like).
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">We offer lot of service in a best price</a>
                <ul className="sub-items">
                  <li>
                    <p>
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text (injected humour and the like).
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  will be distracted by the readable standard Lorem Ipsum
                  content looking at its layout.
                </a>
                <ul className="sub-items">
                  <li>
                    <p>
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text (injected humour and the like).
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  The standard Lorem Ipsum passage, used since the 1500s
                </a>
                <ul className="sub-items">
                  <li>
                    <p>
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text (injected humour and the like).
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
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