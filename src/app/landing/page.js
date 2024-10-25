import Caro from '@/comp/caro/Caro'
import Navbar from '@/comp/nav/Navbar'
import React from 'react'

const page = () => {

  return (
    // <div>
<>

  {/*Topbar*/}
  <div className="topbar">
    <div className="container">
      {/* <div className="row">
        <div className="col-md-12">
          <p className="pull-left hidden-xs">
            Bistro Foods and Restaurant, the Best in Town
          </p>
          <p className="pull-right">
            <i className="fa fa-phone" />
            Order Online 111-123-6789
          </p>
        </div>
      </div> */}
    </div>
  </div>
  {/*Header*/}

<Navbar/>
  {/* REVOLUTION SLIDER */}
<Caro/>
  {/* END REVOLUTION SLIDER */}
  {/*Features Section*/}
  <section className="feature_wrap padding-half" id="specialities">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="heading ">Our &nbsp; Specialities</h2>
          <hr className="heading_space" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6 feature text-center ">
        <i class="bi bi-cup-straw"></i>
          <h3>
            <a href="">
              Dinner &amp; Dessert
            </a>
          </h3>
          <p>
            {" "}
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur.
          </p>
        </div>
        <div className="col-md-3 col-sm-6 feature text-center">
        <i class="bi bi-cup-hot"></i>
          <h3>
            <a href="">
              Breakfast
            </a>
          </h3>
          <p>
            {" "}
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic.
          </p>
        </div>
        <div className="col-md-3 col-sm-6 feature text-center">
       <i class="bi bi-cup-straw"></i>
          <h3>
            <a href="">
              Ice Shakes
            </a>
          </h3>
          <p>
            {" "}
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power.
          </p>
        </div>
        <div className="col-md-3 col-sm-6 feature text-center">
          <i class="bi bi-cup-hot"></i>
          <h3>
            <a href="https://www.themesindustry.com/html/bistro/services.html">
              Beverges
            </a>
          </h3>
          <p>
            {" "}
            you need a doctor for to coansectetuer Lorem ipsum dolor,
            consectetur adipiscing.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/*Services plus working hours*/}
  <section id="services" className="padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2 className="heading">Featured &nbsp; Food</h2>
          <hr className="heading_space" />
          <div className="slider_wrap">
            <div id="service-slider" className="owl-carousel">
              <div className="item">
                <div className="item_inner">
                  <div className="image">
                    <img src="/image/food-1.jpg" alt="Services Image" />
                    <a href="services.html" />
                  </div>
                  <h3>
                    <a href="services.html">Lorem ipsum dolor</a>
                  </h3>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore nulla
                    facilisis.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="item_inner">
                  <div className="image">
                    <img src="/image/food-2.jpg" alt="Services Image" />
                    <a href="services.html" />
                  </div>
                  <h3>
                    <a href="services.html">Lorem samet</a>
                  </h3>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore nulla
                    facilisis.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="item_inner">
                  <div className="image">
                    <img src="/image/food-3.jpg" alt="Services Image" />
                    <a href="services.html" />
                  </div>
                  <h3>
                    <a href="services.html">Lorem ipsum dolor s amet</a>
                  </h3>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore nulla
                    facilisis.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="item_inner">
                  <div className="image">
                    <img src="/image/food-4.jpg" alt="Services Image" />
                    <a href="services.html" />
                  </div>
                  <h3>
                    <a href="services.html">Lorem samet</a>
                  </h3>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore nulla
                    facilisis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h2 className="heading">Our &nbsp; Menu</h2>
          <hr className="heading_space" />
          <ul className="menu_widget">
            <li>
              Classic Nachos<span>$499.00</span>
            </li>
            <li>
              Nachos Grande<span>$249.00</span>
            </li>
            <li>
              Avocado Shell Stuffed<span>$150.00</span>
            </li>
            <li>
              Stuffed Mushroom<span>$199.00</span>
            </li>
            <li>
              Baked Potato Jackets<span>$99.00</span>
            </li>
            <li>
              Mexican Taco<span>$899.00</span>
            </li>
            <li>
              Tex-Mex Chicken<span>$1250.00</span>
            </li>
            <li>
              Quesadillas Acapulco<span>$399.00</span>
            </li>
          </ul>
          <h3>Other Special Menu</h3>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse{" "}
            <strong>molestie consequat</strong>, vel illum dolore nulla
            facilisis.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* image with content */}
  <section className="info_section paralax">
    <div className="container">
      <div className="row">
        <div className="col-md-2"> </div>
        <div className="col-md-8">
          <div className="text-center">
            <h2 className="heading_space">HOT Deal of the Day</h2>
            <p className="heading_space detail">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore nulla facilisis. velit
              esse molestie consequat, vel illum dolore nulla facilisis.
            </p>
            <a href="#order-form" className="btn-common-white page-scroll">
              Order Now
            </a>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  </section>
  {/* Food Gallery */}
  <section id="gallery" className="padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="heading ">Delicious &nbsp; Food</h2>
          <hr className="heading_space" />
          <div className="work-filter">
            <ul className="text-center">
              <li>
                <a
                  href="javascript:;"
                  data-filter="all"
                  className="active filter"
                >
                  All Food
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  data-filter=".starters"
                  className="filter"
                >
                  Starters
                </a>
              </li>
              <li>
                <a href="javascript:;" data-filter=".drinks" className="filter">
                  Drinks &amp; Beverges
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
            <div className="wrap-content clearfix home-gallery">
              <div className="col-1-4 mix work-item drinks">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery1.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="video fancybox.iframe overlay-inner"
                          href="https://player.vimeo.com/video/94224205?autoplay=1"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-4 mix work-item starters">
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
                  </div>
                </div>
              </div>
              <div className="col-1-4 mix work-item dinner">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery3.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="fancybox overlay-inner"
                          href="/image/gallery3.jpg"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-4 mix work-item drinks">
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
                  </div>
                </div>
              </div>
              <div className="col-1-4 mix work-item dinner">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery5.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="fancybox overlay-inner"
                          href="/image/gallery5.jpg"
                          data-fancybox-group="gallery"
                        >
                          <i className=" icon-eye6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-4 mix work-item lunch">
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
                  </div>
                </div>
              </div>
              <div className="col-1-4 mix work-item starters">
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
                  </div>
                </div>
              </div>
              <div className="col-1-4 mix work-item starters">
                <div className="wrap-col">
                  <div className="item-container">
                    <div className="image">
                      <img src="/image/gallery8.jpg" alt="cook" />
                      <div className="overlay">
                        <a
                          className="video fancybox.iframe overlay-inner"
                          href="https://player.vimeo.com/video/94224205?autoplay=1"
                        >
                          <i className=" icon-eye6" />
                        </a>
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
  {/* facts counter  */}
  <section id="facts">
    <div className="container">
      <div className="row number-counters">
        {/* first count item */}
        <div
          className="col-sm-3 col-xs-12 text-center wow fadeInDown"
          data-wow-duration="500ms"
          data-wow-delay="300ms"
        >
          <div className="counters-item row">
          <i class="bi bi-emoji-smile"></i>
            {/* <i className="icon-smile" /> */}
            <h2>
              <strong data-to={4680}>0</strong>
            </h2>
            <p>Happy Customers</p>
          </div>
        </div>
        <div
          className="col-sm-3 col-xs-12 text-center wow fadeInDown"
          data-wow-duration="500ms"
          data-wow-delay="600ms"
        >
          <div className="counters-item  row">
            {/* <i className="icon-food" /> */}
            <i class="bi bi-cup-hot"></i>
            <h2>
              <strong data-to={865}>0</strong>
            </h2>
            <p>Dishes Served</p>
          </div>
        </div>
        <div
          className="col-sm-3 col-xs-12 text-center wow fadeInDown"
          data-wow-duration="500ms"
          data-wow-delay="900ms"
        >
          <div className="counters-item  row">
            {/* <i className="icon-glass" /> */}
            <i class="bi bi-cup-straw"></i>
            <h2>
              <strong data-to={510}>0</strong>
            </h2>
            <p>Total Beverages</p>
          </div>
        </div>
        <div
          className="col-sm-3 col-xs-12 text-center wow fadeInDown"
          data-wow-duration="500ms"
          data-wow-delay="1200ms"
        >
          <div className="counters-item  row">
           <i class="bi bi-cup"></i>
            {/* <i className="icon-coffee" /> */}
            <h2>
              <strong data-to={1350}>0</strong>
            </h2>
            <p>Cup of coffees</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our cheffs */}
  <section id="cheffs" className="padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="heading">Our &nbsp; Kitchen &nbsp; Staff</h2>
          <hr className="heading_space" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="cheffs_wrap_slider">
            <div id="our-cheffs" className="owl-carousel">
              <div className="item">
                <div className="cheffs_wrap">
                  <img src="/image/our-cheffs1.jpg" alt="Kitchen Staff" />
                  <h3>Stafeny Rose</h3>
                  <small>Head Of Kitchen</small>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="cheffs_wrap">
                  <img src="/image/our-cheffs2.jpg" alt="Kitchen Staff" />
                  <h3>Michael Reubens</h3>
                  <small>Food Supervisor</small>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="cheffs_wrap">
                  <img src="/image/our-cheffs3.jpg" alt="Kitchen Staff" />
                  <h3>Angle Maria</h3>
                  <small>Head Cook</small>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="cheffs_wrap">
                  <img src="/image/our-cheffs1.jpg" alt="Kitchen Staff" />
                  <h3>Stafeny Rose</h3>
                  <small>Food Supervisor</small>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="cheffs_wrap">
                  <img src="/image/our-cheffs2.jpg" alt="Kitchen Staff" />
                  <h3>David Miller</h3>
                  <small>Food Supervisor</small>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="cheffs_wrap">
                  <img src="/image/our-cheffs3.jpg" alt="Kitchen Staff" />
                  <h3>Cristina Rose</h3>
                  <small>Food Supervisor</small>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Order Online */}
  <section id="order-form" className="order_section">
    <div className="container order_form padding">
      <div className="row">
        <div className="col-md-12 appointment_form">
          <h2 className="heading">Online Order</h2>
          <hr className="heading_space" />
          <div className="row">
            <div className="col-md-8">
              <form onsubmit="return false" id="order_form" className="callus">
                <div className="row">
                  <div className="form-group col-md-12">
                    <div id="result" className="text-center" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        id="name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        name="email"
                        id="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone No"
                        name="phone"
                        id="phone"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select className="form-control" id="deal" name="deal">
                        <option> Select Deal </option>
                        <option> Deal One ($200) </option>
                        <option> Deal Two ($500) </option>
                        <option> Deal Three ($900) </option>
                        <option> Deal Four ($1300) </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        placeholder="Order Details"
                        id="message"
                        name="message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <div className="btn-submit btn-common-white">
                        <input
                          type="submit"
                          defaultValue="Place   Order"
                          id="btn_order_submit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="col-md-3" />
    </div>
  </section>
  {/*Featured Receipes */}
  <section id="news" className="bg_grey padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="heading">Featured &nbsp; Food &nbsp; Receipes</h2>
          <hr className="heading_space" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="cheffs_wrap_slider">
            <div id="news-slider" className="owl-carousel">
              <div className="item">
                <div className="news_content">
                  <img src="/image/news-img3.jpg" alt="Docotor" />
                  <div className="date_comment">
                    <span>
                      22<small>apr</small>
                    </span>
                    <a href="#.">
                      <i className="icon-comment" /> 5
                    </a>
                  </div>
                  <div className="comment_text">
                    <h3>
                      <a href="#.">Lorem ipsum dolor</a>
                    </h3>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illum dolore nulla
                      facilisis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="news_content">
                  <img src="/image/news-img2.jpg" alt="Docotor" />
                  <div className="date_comment">
                    <span>
                      22<small>apr</small>
                    </span>
                    <a href="#.">
                      <i className="icon-comment" /> 5
                    </a>
                  </div>
                  <div className="comment_text">
                    <h3>
                      <a href="#.">Lorem ipsum</a>
                    </h3>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illum dolore nulla
                      facilisis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="news_content">
                  <img src="/image/news-img1.jpg" alt="Docotor" />
                  <div className="date_comment">
                    <span>
                      22<small>apr</small>
                    </span>
                    <a href="#.">
                      <i className="icon-comment" /> 5
                    </a>
                  </div>
                  <div className="comment_text">
                    <h3>
                      <a href="#.">Lorem ipsum dolor</a>
                    </h3>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illum dolore nulla
                      facilisis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="news_content">
                  <img src="/image/news-img3.jpg" alt="Docotor" />
                  <div className="date_comment">
                    <span>
                      22<small>apr</small>
                    </span>
                    <a href="#.">
                      <i className="icon-comment" /> 5
                    </a>
                  </div>
                  <div className="comment_text">
                    <h3>
                      <a href="#.">Lorem dolor</a>
                    </h3>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illum dolore nulla
                      facilisis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="news_content">
                  <img src="/image/news-img2.jpg" alt="Docotor" />
                  <div className="date_comment">
                    <span>
                      22<small>apr</small>
                    </span>
                    <a href="#.">
                      <i className="icon-comment" /> 5
                    </a>
                  </div>
                  <div className="comment_text">
                    <h3>
                      <a href="#.">Lorem ipsum dolor</a>
                    </h3>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illum dolore nulla
                      facilisis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="news_content">
                  <img src="/image/news-img1.jpg" alt="Docotor" />
                  <div className="date_comment">
                    <span>
                      22<small>apr</small>
                    </span>
                    <a href="#.">
                      <i className="icon-comment" /> 5
                    </a>
                  </div>
                  <div className="comment_text">
                    <h3>
                      <a href="#.">Lipsum dolor</a>
                    </h3>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illum dolore nulla
                      facilisis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* testinomial */}
  <section id="testinomial" className="padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="heading">Our &nbsp; happy &nbsp; Customers</h2>
          <hr className="heading_space" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="testinomial-slider" className="owl-carousel text-center">
            <div className="item">
              <h3>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram.
              </h3>
              <p>Chris Martin</p>
            </div>
            <div className="item">
              <h3>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. quam nunc putamus parum claram, Mirum est
                notare quam littera gothica.
              </h3>
              <p>Alex Hales</p>
            </div>
            <div className="item">
              <h3>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse.
              </h3>
              <p>Shane Robertson</p>
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

// </div>
  )
}
export default page

