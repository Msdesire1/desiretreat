import Navbar from '@/comp/nav/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
<>
  {/*Loader*/}

  {/*Top bar*/}
  <div className="topbar">
    <div className="container">

    </div>
  </div>
 <Navbar/>
  {/*Page header & Title*/}
  <section id="page_header">
    <div className="page_title">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title">About Us</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="overview" className="padding-top">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="heading">Restaurant &nbsp; Overview</h2>
          <hr className="heading_space" />
          <p>
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. quam nunc putamus parum claram, Mirum est
            notare quam littera gothica Mirum est notare quam littera gothica
            Mirum est notare quam littera gothicaMirum est notare quam littera
            gothica. Mirum est notare quam littera gothica Mirum est notare quam
            littera gothica Mirum est notare quam littera gothicaMirum est
            notare quam littera gothica.
          </p>
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
                <a href="javascript:;" data-filter=".hod" className="filter">
                  Head Chef
                </a>
              </li>
              <li>
                <a href="javascript:;" data-filter=".food" className="filter">
                  Food Supervisor
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  data-filter=".kitchen"
                  className="filter"
                >
                  Head Of Kitchen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="zerogrid">
            <div className="wrap-container">
              <div className="wrap-content clearfix">
                <div className="col-1-3 mix work-item hod heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs1.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Andrew Bert</h3>
                        <small>Assistant Chef</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3 mix work-item food heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs2.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Mecan smith</h3>
                        <small>food Specialist</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3 mix work-item kitchen heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs3.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Jack Bravo</h3>
                        <small>Food Supervisor</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3 mix work-item food heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs1.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Andrew Berton</h3>
                        <small>food Specialist</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3 mix work-item kitchen heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs2.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Sara Berton</h3>
                        <small>kitchen Specialist</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3 mix work-item hod heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs3.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Bernard Smith</h3>
                        <small>Assistant Chef</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3 mix work-item health heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs1.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Gold Smith</h3>
                        <small>kitchen Specialist</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3 mix work-item kitchen heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs2.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Sara Stefon</h3>
                        <small>kitchen Specialist</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3 mix work-item health heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs3.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Andrew Andreson</h3>
                        <small>kitchen Specialist</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3 mix work-item health heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs1.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Bernard Smith</h3>
                        <small>Assistant Chef</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3 mix work-item hod heading_space">
                  <div className="wrap-col">
                    <div className="item-container">
                      <div className="image">
                        <img src="/image/our-cheffs2.jpg" alt="cook" />
                        <div className="overlay">
                          <div className="overlay-inner">
                            <ul className="social_icon">
                              <li>
                                <a href="#" className="facebook">
                                  <i className="icon-facebook5" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="twitter">
                                  <i className="icon-twitter4" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="google">
                                  <i className="icon-google" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gallery_content text-left">
                        <h3> Bernard Smith</h3>
                        <small>Assistant Chef</small>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore nulla facilisis.
                        </p>
                      </div>
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
                <a href="#" className="facebook">
                  <i className="icon-facebook5" />
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="icon-twitter4" />
                </a>
              </li>
              <li>
                <a href="#" className="google">
                  <i className="icon-google" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a href="#" id="back-top">
    <i className="fa fa-angle-up fa-2x" />
  </a>
</>

    </div>
  )
}
 export default page