import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Feature from '../components/feature'
import Offer from '../components/offer'
import Location from '../components/location'
import Guide from '../components/guide'
import TestimonialsProps from '../components/TestimonialsProps'
import Article from '../components/article'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Traveler template</title>
        <meta property="og:title" content="Traveler template" />
      </Helmet>
      <section className="home-hero">
        <div className="home-main1">
          <div className="home-video1">
            <video
              poster="/Videos/hero-cover1-1500h.png"
              className="home-video2"
            ></video>
            <div className="home-tint1"></div>
          </div>
          <div className="home-content10">
            <header className="home-header10">
              <header data-thq="thq-navbar" className="home-navbar">
                <img alt="logo" src="/logo.svg" className="home-logo1" />
                <div data-thq="thq-burger-menu" className="home-menu">
                  <div className="home-links1">
                    <a href="#features" className="home-link10 link">
                      Features
                    </a>
                    <span className="link">How it works</span>
                    <span className="link">Prices</span>
                    <a href="#find" className="home-link11 link">
                      Contact
                    </a>
                  </div>
                  <button className="home-hamburger button">
                    <svg viewBox="0 0 1024 1024" className="home-icon10">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </button>
                </div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                  <div
                    data-thq="thq-mobile-menu-nav"
                    data-role="Nav"
                    className="home-nav1"
                  >
                    <div className="home-container2">
                      <img alt="logo" src="/logo.svg" className="home-logo2" />
                      <div
                        data-thq="thq-close-menu"
                        className="home-menu-close"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon12">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <nav
                      data-thq="thq-mobile-menu-nav-links"
                      data-role="Nav"
                      className="home-nav2"
                    >
                      <span className="home-text12">About</span>
                      <span className="home-text13">Features</span>
                      <span className="home-text14">Pricing</span>
                      <span className="home-text15">Team</span>
                      <span className="home-text16">Blog</span>
                    </nav>
                    <div className="home-container3">
                      <button className="home-login button">Login</button>
                      <button className="button">Register</button>
                    </div>
                  </div>
                  <div className="home-icon-group">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon14"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon16"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon18"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </header>
            </header>
            <div className="home-center">
              <div className="home-heading10">
                <h1 className="home-header11">See the world like a local</h1>
                <p className="home-caption10">
                  Find a local guide consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt.
                </p>
              </div>
              <div className="home-border">
                <div className="home-filter">
                  <img
                    alt="image"
                    src="/Icons/location.svg"
                    className="home-image1"
                  />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="home-textinput1 input"
                  />
                  <input
                    type="date"
                    placeholder="Date"
                    className="home-textinput2 input"
                  />
                  <input
                    type="number"
                    placeholder="Group size"
                    className="home-textinput3 input"
                  />
                  <div className="home-search">
                    <img
                      alt="image"
                      src="/Icons/search.svg"
                      className="home-icon20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="features" className="home-feaures">
          <div className="home-content11">
            <Feature></Feature>
            <Feature icon="/Icons/headset.svg" header="24/7 Support"></Feature>
            <Feature icon="/Icons/person.svg" header="Private Tours"></Feature>
          </div>
        </div>
      </section>
      <section id="tours" className="home-quick-view">
        <div className="home-main2">
          <div className="home-heading11">
            <h2 className="home-header12">See the world like a local</h2>
            <p className="home-caption11">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-sorting">
            <button className="home-option-primary button">All</button>
            <button className="button-option button">Popular</button>
            <button className="button-option button">Featured</button>
            <button className="button-option button">Trending</button>
          </div>
        </div>
        <div className="home-offers">
          <Link to="/">
            <div className="home-offer-container1">
              <Offer image="/Offers/offers-11-1500w.png"></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container2">
              <Offer
                image="/Offers/offers-21-1500w.png"
                guides="54 Local guides"
                location="Barcelona, Spain"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container3">
              <Offer
                image="/Offers/offers-31-1500w.png"
                guides="34 Local Guides"
                location="Machu Picchu, Peru"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container4">
              <Offer
                image="/Offers/offers-41-1500w.png"
                guides="1 Local guide"
                location="Doha, Quatar"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container5">
              <Offer
                image="/Offers/offers-51-1500w.png"
                guides="6 Local guides"
                location="Rhodes, Greece"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container6">
              <Offer
                image="/Offers/offers-61-1500w.png"
                guides="132 Local guides"
                location="New York, USA"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container7">
              <Offer
                image="/Offers/offers-71-1500w.png"
                guides="1 Local guide"
                location="Doha, Quatar"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container8">
              <Offer
                image="/Offers/offers-81-1500w.png"
                guides="6 Local guides"
                location="Rhodes, Greece"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container9">
              <Offer
                image="/Offers/offers-91-1500w.png"
                guides="132 Local guides"
                location="New York, USA"
              ></Offer>
            </div>
          </Link>
        </div>
        <div className="home-pagination">
          <button className="home-previous1 button-option button">
            <svg viewBox="0 0 1024 1024" className="home-icon21">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
            <span className="home-text17">Previous</span>
          </button>
          <div className="home-pages">
            <div className="home-primary">
              <div className="home-number-current page-current page">
                <span className="home-text18">1</span>
              </div>
              <div className="page">
                <span className="home-text19">2</span>
              </div>
              <div className="page home-number2">
                <span className="home-text20">3</span>
              </div>
            </div>
            <img alt="image" src="/Icons/more.svg" className="home-more" />
            <div className="page">
              <span className="home-text21">12</span>
            </div>
          </div>
          <button className="home-next1 button-option button">
            <span className="home-text22">Next</span>
            <svg viewBox="0 0 1024 1024" className="home-icon23">
              <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
            </svg>
          </button>
        </div>
      </section>
      {/* <!-- customer testimonial--> */}
      <section className="home-testimonials">
        {/* wrapper div 1 */}
        <TestimonialsProps/>
        {/* <div className="home-content12">
          <div className="home-heading12">
            <span className="home-title">Customer testimonial</span>
            <p className="home-quote">
              {testimonialsProps[0].description}
            </p>
          </div>
          <div className="home-details">
            <div className="home-author">
              <img
                alt="image"
                src={testimonialsProps[0].image}
                className="home-avatar"
              />
              <span className="home-name">{testimonialsProps[0].name}</span>
            </div>
            <div className="home-controls">
              <div className="page">
                <span className="home-text23" onClick={goPrev}>&lt;</span>
              </div>
              <div className="home-next2 page">
                <span className="home-text24" onClick={goNext}>&lt;</span>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- wrapper div */}
      </section>
      <section id="how-it-works" className="home-highlights">
        <div className="home-highlight1">
          <div className="home-content13">
            <div className="home-heading13">
              <h2 className="home-header13">
                Excepteur sint occaecat cupidatat non proident
              </h2>
              <p className="home-caption12">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button className="button-arrow button">
              <span className="home-text25">Read more</span>
              <span className="home-text26">&gt;</span>
            </button>
          </div>
          <div className="home-image2">
            <img
              alt="image"
              src="/Highlights/highlight-1-1500w.png"
              className="home-image3"
            />
            <div className="home-rectangle"></div>
          </div>
        </div>
        <div className="home-highlight2">
          <div className="home-image4">
            <img
              alt="image"
              src="/Highlights/highlight-2-1500w.png"
              className="home-image5"
            />
          </div>
          <div className="home-content14">
            <div className="home-heading14">
              <h2 className="home-header14">
                Excepteur sint occaecat cupidatat non proident
              </h2>
              <p className="home-caption13">
                <span>
                  Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </span>
                <br></br>
                <br></br>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-find1 button">Find a local guide</button>
          </div>
        </div>
      </section>
      <section id="destinations" className="home-destinations">
        <div className="home-video-details">
          <div className="home-heading15">
            <h2 className="home-header15">Spotlight destinations</h2>
            <p className="home-caption14">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-video-wrapper">
            <div className="home-tint2">
              <img alt="image" src="/Icons/play.svg" className="home-image6" />
            </div>
            <video
              poster="/Videos/spotlight-cover1-1500w.png"
              className="home-video3"
            ></video>
          </div>
        </div>
        <p className="home-caption15">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto.
        </p>
        <div className="home-list1">
          <Link to="/" className="home-navlink19">
            <div className="home-location-wrapper1">
              <Location></Location>
            </div>
          </Link>
          <Link to="/" className="home-navlink20">
            <div className="home-location-wrapper2">
              <Location
                location="Paris, France"
                background="/Destinations/destination-2-400h.png"
              ></Location>
            </div>
          </Link>
          <Link to="/" className="home-navlink21">
            <div className="home-location-wrapper3">
              <Location
                location="Bruges, Belgium"
                background="/Destinations/destination-3-400h.png"
              ></Location>
            </div>
          </Link>
          <Link to="/" className="home-navlink22">
            <div className="home-location-wrapper4">
              <Location
                location="London, UK"
                background="/Destinations/destination-4-400h.png"
              ></Location>
            </div>
          </Link>
        </div>
        <button className="home-find2 button">Find a local guide</button>
      </section>
      <section id="guides" className="home-guides">
        <div className="home-heading16">
          <h2 className="home-header16">Meet our guides</h2>
          <p className="home-caption16">
            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </p>
        </div>
        <div className="home-list2">
          <Link to="/">
            <div className="home-guide-wrapper1">
              <Guide></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper2">
              <Guide
                location="Paris, France"
                portrait="/Guides/guide-2.png"
                rootClassName="guideroot-class-name2"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper3">
              <Guide
                location="Bruges, Belgium"
                portrait="/Guides/guide-3.png"
                rootClassName="guideroot-class-name"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper4">
              <Guide
                location="London, UK "
                portrait="/Guides/guide-4.png"
                rootClassName="guideroot-class-name1"
              ></Guide>
            </div>
          </Link>
        </div>
      </section>
      <section className="home-articles">
        <div id="articles" className="home-content15">
          <div className="home-heading17">
            <h2 className="home-header17">
              Excepteur sint occaecat cupidatat non proident
            </h2>
            <p className="home-caption17">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-list3">
            <div className="home-row1">
              <Article
                image="/Articles/articles-11-1500w.png"
                rootClassName="articleroot-class-name1"
              ></Article>
              <Article
                image="/Articles/articles-21-1500w.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                rootClassName="articleroot-class-name"
              ></Article>
            </div>
            <div className="home-row2">
              <Article
                image="/Articles/articles-31-1500w.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                rootClassName="articleroot-class-name2"
              ></Article>
              <Article
                image="/Articles/articles-41-1500w.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                rootClassName="articleroot-class-name3"
              ></Article>
            </div>
            <div className="home-row3">
              <button className="home-read-all button-option button">
                Read all articles
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div id="faqs" className="home-content16">
          <div className="home-heading18">
            <h2 className="home-header18">Frequently asked questions</h2>
            <p className="home-caption18">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-accordion1">
            <div
              data-role="accordion-container"
              className="accordion home-element1"
            >
              <div className="home-content17">
                <span className="home-header19">
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description1"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon25"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon27"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion"
            >
              <div className="home-content18">
                <span className="home-header20">
                  Excepteur sint occaecat cupidatat non sunt in culpa qui
                  officia deserunt mollit anim id est laborum?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description2"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon29"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon31"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion"
            >
              <div className="home-content19">
                <span className="home-header21">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description3"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon33"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon35"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element4 accordion"
            >
              <div className="home-content20">
                <span className="home-header22">
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description4"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container4">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon37"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon39"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element5 accordion"
            >
              <div className="home-content21">
                <span className="home-header23">
                  Incididunt ut labore et dolore?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description5"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container5">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon41"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon43"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="find" className="home-find3">
        <div className="home-heading19">
          <h2 className="home-header24">Find a local guide now</h2>
          <p className="home-caption19">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <button className="home-find4 button">Find a local guide</button>
      </section>
      <section className="home-footer">
        <div className="home-content22">
          <div className="home-main3">
            <div className="home-branding">
              <div className="home-heading20">
                <img alt="image" src="/logo.svg" className="home-image7" />
                <p className="home-caption20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className="home-links2">
              <div className="home-items1">
                <button className="home-link12 button button-clean">
                  Find a guide
                </button>
                <a
                  href="#destinations"
                  className="home-link13 button button-clean"
                >
                  Find a tour
                </a>
                <a
                  href="#destinations"
                  className="home-link14 button button-clean"
                >
                  Visit a city
                </a>
                <a
                  href="#destinations"
                  className="home-link15 button button-clean"
                >
                  Visit a country
                </a>
              </div>
              <div className="home-items2">
                <a
                  href="#how-it-works"
                  className="home-link16 button button-clean"
                >
                  How it works
                </a>
                <button className="home-link17 button button-clean">
                  Cancelation policy
                </button>
                <button className="home-link18 button button-clean">
                  Local guides
                </button>
                <button className="home-link19 button button-clean">
                  Affiliate
                </button>
              </div>
              <div className="home-items3">
                <button className="home-link20 button button-clean">
                  About us
                </button>
                <button className="home-link21 button button-clean">
                  Blog
                </button>
                <button className="home-link22 button button-clean">
                  Partners
                </button>
                <button className="home-link23 button button-clean">
                  Faqs
                </button>
                <button className="home-link24 button button-clean">
                  Careers
                </button>
              </div>
            </div>
          </div>
          <span className="home-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </div>
      </section>
      <div>
        <div className="home-container5">
          <Script
            html={`<script>
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
