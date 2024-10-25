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
            <h2 className="title">Blog</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blogs */}
  <section id="blog" className="padding-top">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-7">
          <div className="blog_item padding-bottom">
            <h2>Celebration with Music</h2>
            <ul className="comments">
              <li>
                <a href="#.">Nov 10, 2016</a>
              </li>
              <li>
                <a href="#.">
                  <i className="icon-chat-2" />5
                </a>
              </li>
            </ul>
            <div className="image_container">
              <img
                src="/image/blog1.jpg"
                className="img-responsive"
                alt="blog post"
              />
            </div>
            <p>
              That also the leap into electronic typesetting, remaining
              essentially unchanged. Etharums ser quidem rerum facilis dolores
              nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
            </p>
            <a className="btn-common button3" href="blog-detail.html">
              Read more
            </a>
          </div>
          <div className="blog_item padding-bottom">
            <h2>Corporate Dining </h2>
            <ul className="comments">
              <li>
                <a href="#.">Nov 10, 2016</a>
              </li>
              <li>
                <a href="#.">
                  <i className="icon-chat-2" />5
                </a>
              </li>
            </ul>
            <div className="image_container">
              <div id="blog-slider" className="owl-carousel">
                <div className="item">
                  <img
                    src="/image/blog2.jpg"
                    className="img-responsive"
                    alt="blog post"
                  />
                </div>
                <div className="item">
                  <img
                    src="/image/blog3.jpg"
                    className="img-responsive"
                    alt="blog post"
                  />
                </div>
                <div className="item">
                  <img
                    src="/image/blog4.jpg"
                    className="img-responsive"
                    alt="blog post"
                  />
                </div>
              </div>
            </div>
            <p>
              That also the leap into electronic typesetting, remaining
              essentially unchanged. Etharums ser quidem rerum facilis dolores
              nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
            </p>
            <a className="btn-common button3" href="blog-detail.html">
              Read more
            </a>
          </div>
          <div className="blog_item padding-bottom">
            <h2>Daily Exercide is Essential</h2>
            <ul className="comments">
              <li>
                <a href="#.">Nov 10, 2016</a>
              </li>
              <li>
                <a href="#.">
                  <i className="icon-chat-2" />5
                </a>
              </li>
            </ul>
            <div className="image_container">
              <img
                src="/image/blog3.jpg"
                className="img-responsive"
                alt="blog post"
              />
            </div>
            <p>
              That also the leap into electronic typesetting, remaining
              essentially unchanged. Etharums ser quidem rerum facilis dolores
              nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
            </p>
            <a className="btn-common button3" href="blog-detail.html">
              Read more
            </a>
          </div>
          <div className="blog_item padding-bottom">
            <h2>Presentation is as important as taste</h2>
            <ul className="comments">
              <li>
                <a href="#.">Nov 10, 2016</a>
              </li>
              <li>
                <a href="#.">
                  <i className="icon-chat-2" />5
                </a>
              </li>
            </ul>
            <div className="image_container">
              <img
                src="/image/blog4.jpg"
                className="img-responsive"
                alt="blog post"
              />
            </div>
            <p>
              That also the leap into electronic typesetting, remaining
              essentially unchanged. Etharums ser quidem rerum facilis dolores
              nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
            </p>
            <a className="btn-common button3" href="blog-detail.html">
              Read more
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-5">
          <aside className="sidebar">
            <div className="widget">
              <ul className="tabs">
                <li className="active" rel="tab1">
                  Popular{" "}
                </li>
                <li rel="tab2">Latest</li>
                <li rel="tab3">Comments</li>
              </ul>
              <div className="tab_container bg_grey">
                <h3 className="d_active tab_drawer_heading" rel="tab1">
                  Popular
                </h3>
                <div id="tab1" className="tab_content">
                  <div className="single_comments">
                    <img alt="" src="/image/avator1.jpg" />
                    <p>
                      <a href="#.">Celebration with Music </a>
                      <span>Nov 05, 2016</span>
                    </p>
                  </div>
                  <div className="clearfix" />
                  <div className="single_comments">
                    <img alt="" src="/image/avator1.jpg" />
                    <p>
                      <a href="#.">Duis autem vel eum iriure dolor</a>
                      <span>Nov 25, 2016</span>
                    </p>
                  </div>
                  <div className="clearfix" />
                  <div className="single_comments no-margin">
                    <img alt="" src="/image/avator1.jpg" />
                    <p>
                      <a href="#.">Lorem ipsum dolor sit amet</a>{" "}
                      <span>Nov 05, 2016</span>
                    </p>
                  </div>
                  <div className="clearfix" />
                </div>
                <h3 className="tab_drawer_heading" rel="tab2">
                  Latest
                </h3>
                <div id="tab2" className="tab_content">
                  <div className="single_comments">
                    <img alt="" src="/image/avator1.jpg" />
                    <p>
                      <a href="#.">Lorem ipsum dolor sit amet</a>{" "}
                      <span>Nov 05, 2016</span>
                    </p>
                  </div>
                </div>
                <h3 className="tab_drawer_heading" rel="tab3">
                  Comments
                </h3>
                <div id="tab3" className="tab_content">
                  <div className="single_comments">
                    <img alt="" src="/image/avator1.jpg" />
                    <p>
                      <a href="#.">Ut wisi enim ad minim</a>{" "}
                      <span>Nov 05, 2016</span>
                    </p>
                  </div>
                  <div className="single_comments">
                    <img alt="" src="/image/avator1.jpg" />
                    <p>
                      <a href="#.">Lorem ipsum dolor</a>{" "}
                      <span>Nov 05, 2016</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget">
              <h3>Categories</h3>
              <ul className="widget_links">
                <li>
                  <a href="#.">Food</a>
                </li>
                <li>
                  <a href="#.">Special Occasion</a>
                </li>
                <li>
                  <a href="#.">Presentation</a>
                </li>
                <li>
                  <a href="#.">Corporate Dining</a>
                </li>
                <li>
                  <a href="#.">Reservation</a>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h3>Tags</h3>
              <ul className="tags">
                <li>
                  <a href="#.">Our Events</a>
                </li>
                <li>
                  <a href="#.">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#.">sit amet</a>
                </li>
                <li>
                  <a href="#.">Lorem ipsum </a>
                </li>
                <li>
                  <a href="#.">Presentation</a>
                </li>
                <li>
                  <a href="#.">Reservation</a>
                </li>
                <li>
                  <a href="#.">Special Occasion</a>
                </li>
                <li>
                  <a href="#."> Lunch</a>
                </li>
              </ul>
            </div>
          </aside>
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
              <a href="faq.html">Faq`&apos;`,s</a>
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