import Navbar from '@/comp/nav/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
<>
  {/*Loader*/}
  {/*Top bar*/}
  {/*Header*/}
<Navbar/>
  {/*Page header & Title*/}
  <section id="page_header">
    <div className="page_title">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title">Our Food</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Welcome*/}
  <section id="welcome" className="padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="heading">Welcome to Bistro</h2>
          <hr className="heading_space" />
        </div>
        <div className="col-md-7 col-sm-6">
          <p className="half_space">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos;`,s standard dummy text
            ever since the 1500s, when printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
          <p className="half_space">
            That also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
          <p className="half_space">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including of Lorem Ipsum.
          </p>
          <ul className="welcome_list">
            <li>Business Events</li>
            <li>Birthdays</li>
            <li>Cardiovascular Diseases</li>
            <li>Weddings</li>
            <li>Party &amp; Others</li>
          </ul>
        </div>
        <div className="col-md-5 col-sm-6">
          <img
            className="img-responsive"
            src="/image/welcome.jpg"
            alt="welcome bistro"
          />
        </div>
      </div>
    </div>
  </section>
  {/*Food Facilities*/}
  <section id="food" className="padding bg_grey">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="heading">Our &nbsp; Menu</h2>
          <hr className="heading_space" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
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
            <li>
              Quesadillas Acapulco<span>$399.00</span>
            </li>
            <li>
              Quesadillas Acapulco<span>$399.00</span>
            </li>
            <li>
              Garbo Chicken<span>$39.00</span>
            </li>
            <li>
              Spaghetti<span>$3.00</span>
            </li>
            <li>
              Barbecue Beef <span>$39.00</span>
            </li>
            <li>
              Buck Wheat<span>$30.00</span>
            </li>
          </ul>
        </div>
        <div className="col-md-8 grid_layout">
          <div className="row">
            <div className="zerogrid">
              <div className="wrap-container">
                <div className="wrap-content clearfix">
                  <div className="col-1-2">
                    <div className="wrap-col first">
                      <div className="item-container">
                        <img src="/image/grid-layout2.jpg" alt="cook" />
                        <div className="overlay">
                          <a
                            className="overlay-inner fancybox"
                            href="/image/grid-layout2.jpg"
                            data-fancybox-group="gallery"
                          >
                            Barbique Delite
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1-2">
                    <div className="wrap-col first">
                      <div className="item-container">
                        <img src="/image/grid-layout3.jpg" alt="cook" />
                        <div className="overlay">
                          <a
                            className="overlay-inner fancybox"
                            href="/image/grid-layout3.jpg"
                            data-fancybox-group="gallery"
                          >
                            Barbique Delite
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1-2">
                    <div className="wrap-col">
                      <div className="item-container">
                        <img src="/image/grid-layout4.jpg" alt="cook" />
                        <div className="overlay">
                          <a
                            className="overlay-inner fancybox"
                            href="/image/grid-layout4.jpg"
                            data-fancybox-group="gallery"
                          >
                            Barbique Delite
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1-2">
                    <div className="wrap-col">
                      <div className="item-container">
                        <img src="/image/grid-layout5.jpg" alt="cook" />
                        <div className="overlay">
                          <a
                            className="fancybox overlay-inner"
                            href="/image/grid-layout5.jpg"
                            data-fancybox-group="gallery"
                          >
                            Barbique Delite
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
    </div>
  </section>
  {/*Populars*/}
  <section className="padding" id="popular">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="heading">Featured Food</h2>
          <hr />
        </div>
        <div className="col-sm-3">
          <div className="popular top40 text-center">
            <div className="image">
              <img src="/image/popular1.jpg" alt="popular1" />
              <div className="overlay">
                <a
                  className="fancybox overlay-inner"
                  href="/image/popular1.jpg"
                  data-fancybox-group="gallery"
                >
                  <i className="icon-eye6" />
                </a>
              </div>
            </div>
            <h4>Chicken Mojamo</h4>
            <span className="dish">$56.99</span>
            <p>Lorem ipsum dolor sit amet conse ctetur hendrerit</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="popular top40 text-center">
            <div className="image">
              <img src="/image/popular2.jpg" alt="popular1" />
              <div className="overlay">
                <a
                  className="fancybox overlay-inner"
                  href="/image/popular2.jpg"
                  data-fancybox-group="gallery"
                >
                  <i className="icon-eye6" />
                </a>
              </div>
            </div>
            <h4>Chicken Mojamo</h4>
            <span className="dish">$56.99</span>
            <p>Lorem ipsum dolor sit amet conse ctetur hendrerit</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="popular top40 text-center">
            <div className="image">
              <img src="/image/popular3.jpg" alt="popular1" />
              <div className="overlay">
                <a
                  className="fancybox overlay-inner"
                  href="/image/popular3.jpg"
                  data-fancybox-group="gallery"
                >
                  <i className="icon-eye6" />
                </a>
              </div>
            </div>
            <h4>Chicken Mojamo</h4>
            <span className="dish">$56.99</span>
            <p>Lorem ipsum dolor sit amet conse ctetur hendrerit</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="popular top40 text-center">
            <div className="image">
              <img src="/image/popular4.jpg" alt="popular1" />
              <div className="overlay">
                <a
                  className="fancybox overlay-inner"
                  href="/image/popular4.jpg"
                  data-fancybox-group="gallery"
                >
                  <i className="icon-eye6" />
                </a>
              </div>
            </div>
            <h4>Chicken Mojamo</h4>
            <span className="dish">$56.99</span>
            <p>Lorem ipsum dolor sit amet conse ctetur hendrerit</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Blue Section*/}
  <section className="bg_bistro padding-half">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6 white_content">
        <i class="bi bi-cup-straw"></i>
          <h3>Dinner &amp; Dessert</h3>
          <p>
            {" "}
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power Ut eros.
          </p>
        </div>
        <div className="col-md-4 col-sm-6 white_content">
        <i class="bi bi-cup-hot"></i>
          <h3>
            <a href="services.html">Breakfast</a>
          </h3>
          <p>
            {" "}
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power Ut eros.
          </p>
        </div>
        <div className="col-md-4 col-sm-6 white_content">
        {/* <i class="bi bi-cup-hot"></i> */}
        <i class="bi bi-cup"></i>
          <h3>
            <a href="services.html">Ice Shakes</a>
          </h3>
          <p>
            {" "}
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power Ut eros.
          </p>
        </div>
        <div className="col-md-4 col-sm-6 white_content">
        <i class="bi bi-cup"></i>
          <h3>
            <a href="services.html">Beverages</a>
          </h3>
          <p>
            {" "}
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power Ut eros.
          </p>
        </div>
        <div className="col-md-4 col-sm-6 white_content">
        <i class="bi bi-cup-hot"></i>
          <h3>
            <a href="services.html">Delicious Food</a>
          </h3>
          <p>
            {" "}
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power Ut eros.
          </p>
        </div>
        <div className="col-md-4 col-sm-6 white_content">
        <i class="bi bi-cup-straw"></i>
          <h3>
            <a href="services.html">Desserts</a>
          </h3>
          <p>
            {" "}
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power Ut eros.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* testinomial */}
  <section id="testinomial" className="padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="testinomial-slider" className="owl-carousel text-center">
            <div className="item">
              <h3>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram.
              </h3>
              <p>
                Rodney Stratton, <span>Heart Patient</span>
              </p>
            </div>
            <div className="item">
              <h3>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. quam nunc putamus parum claram, Mirum est
                notare quam littera gothica.
              </h3>
              <p>
                Rodney Robert, <span>Kidney Patient</span>
              </p>
            </div>
            <div className="item">
              <h3>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse.
              </h3>
              <p>
                Rodney Alzbeth, <span>Liver Patient</span>
              </p>
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