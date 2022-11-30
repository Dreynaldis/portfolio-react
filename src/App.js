// import logo from "./asset/logo.png";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <img src="./asset/logo.png" alt="logo" />
          </div>
          <div className="header-menu">
            <div className="menubar"></div>
            <div className="menubar"></div>
            <div className="menubar"></div>
          </div>
        </div>
      </header>
      <section className="head-shot">
        <div className="head">
          <img src="../asset/headshot.jpg" alt="head-shot" />
        </div>
        <div className="intro-head">
          <h2>
            CREATIVE <b>PORTFOLIO</b>
          </h2>
        </div>
        <div className="intro-desc">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="pfree">
            Images from <a href="https://www.freepik.com/psd/logo">Freepik</a>
          </p>
          <a className="intro-read" href="#">
            Read More
          </a>
        </div>
      </section>
      <section>
        <div className="intro-grey">
          <div className="intro-white"></div>
          <div className="card-container">
            <div className="card">
              <h2>
                i am <b>designer</b>
              </h2>
              <img src="./asset/pic1.jpg" alt="pic1" />
            </div>
            <div className="card">
              <img src="./asset/pic2.jpg" alt="pic1" />
              <p className="pfree">
                Images from{" "}
                <a href="https://www.freepik.com/psd/logo">Freepik</a>
              </p>
              <a className="readbutton" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="card-container">
          <div className="card">
            <h1>
              we <br />
              build <b>digital</b>
            </h1>
          </div>
          <div className="card">
            <div className="p-container">
              <p>
                Article evident arrived express highest men did boy. Mistress
                sensible entirely am so. Quick can manor smart money hopes worth
                too. Comfort produce husband boy her had hearing. Law others
                theirs passed but wishes. You day real less till dear read.
                Considered use dispatched melancholy sympathize discretion led.
              </p>
              <a className="readdigital" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="border"></div>
        <h2 className="h2design">
          We design People Inspired Experiences that create positive change in
          people's lives.
        </h2>
        <div className="downarrow">
          <img src="./asset/down-arrow-svgrepo-com.svg" alt="downarrow" />
        </div>
        <h3>view portfolio</h3>
      </section>
      <section className="portfoliogrid">
        <div className="card-gallery">
          <div className="card-grid">
            <div className="card-text">
              <h2>3d logo mockup</h2>
            </div>
            <img src="./asset/cardpic/cardpic1.jpg" alt="cardpic1" />
          </div>
          <div className="card-grid">
            <div className="card-text">
              <h2>Modern Facade</h2>
            </div>
            <img src="./asset/cardpic/cardpic2.jpg" alt="cardpic2" />
          </div>
          <div className="card-grid">
            <div className="card-text">
              <h2>Shopping bag</h2>
            </div>
            <img src="./asset/cardpic/cardpic3.jpg" alt="cardpic3" />
          </div>
          <div className="card-grid">
            <div className="card-text">
              <h2>Minimalistic design</h2>
            </div>
            <img src="./asset/cardpic/cardpic4.jpg" alt="cardpic4" />
          </div>
          <div className="card-grid">
            <div className="card-text">
              <h2>Luxury black facade</h2>
            </div>
            <img src="./asset/cardpic/cardpic5.jpg" alt="cardpic5" />
          </div>
          <div className="card-grid">
            <div className="card-text">
              <h2>mockup with logo</h2>
            </div>
            <img src="./asset/cardpic/cardpic6.jpg" alt="cardpic6" />
          </div>
          <div className="card-grid">
            <div className="card-text">
              <h2>Business card</h2>
            </div>
            <img src="./asset/cardpic/cardpic7.jpg" alt="cardpic7" />
          </div>
          <div className="card-grid">
            <div className="card-text">
              <h2>identity design</h2>
            </div>
            <img src="./asset/cardpic/cardpic8.jpg" alt="cardpic8" />
          </div>
          <div className="card-grid">
            <div className="card-text">
              <h2>modern design</h2>
            </div>
            <img src="./asset/cardpic/cardpic9.jpg" alt="cardpic9" />
          </div>
        </div>
        <div className="card-footer">
          <p>
            Images from <a href="https://www.freepik.com/psd/logo">Freepik</a>
          </p>
          <a className="readdigital" href="#">
            view More
          </a>
        </div>
      </section>
      <section className="section" id="viscom">
        <div className="card-container">
          <div className="card">
            <h2>
              <strong>Visual communication</strong> for brands and people
            </h2>
            <p>
              Pellentesque elit eget gravida cum sociis natoque penatibus et
              magnis. Magna fringilla urna porttitor rhoncus dolor purus non
              enim praesent. Magna etiam tempor orci eu lobortis elementum nibh
              tellus molestie. Tellus cras adipiscing enim eu turpis egestas
              pretium aenean.
            </p>
            <a className="readdigital" href="#">
              view More
            </a>
          </div>
          <div className="card">
            <div className="pright-container">
              <p className="prightalign">
                Viverra nibh cras pulvinar mattis nunc sed. Pulvinar mattis nunc
                sed blandit libero. Rhoncus aenean vel elit scelerisque. Diam
                donec adipiscing tristique risus nec feugiat. Facilisis leo vel
                fringilla est ullamcorper eget nulla facilisi. Quis eleifend
                quam adipiscing vitae proin sagittis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="note-container">
          <p>
            We want to stay in touch with you! Please follow us on social media
            so we can keep in touch.
          </p>
          <div className="logo-container">
            <a href="social-url">
              <img
                className="soc-fb"
                src="./asset/social url logo/facebook-svgrepo-com.svg"
                alt="fb-logo"
              />
            </a>
            <a href="social-url">
              <img
                className="soc-twit"
                src="./asset/social url logo/twitter-svgrepo-com.svg"
                alt="twitter-logo"
              />
            </a>
            <a href="social-url">
              <img
                className="soc-insta"
                src="./asset/social url logo/instagram-svgrepo-com.svg"
                alt="instagram-logo"
              />
            </a>
            <a href="social-url">
              <img
                className="soc-linked"
                src="./asset/social url logo/linkedin-svgrepo-com.svg"
                alt="linkedin-logo"
              />
            </a>
            <a href="social-url">
              <img
                className="soc-pint"
                src="./asset/social url logo/pinterest-svgrepo-com.svg"
                alt="pinterest-logo"
              />
            </a>
          </div>
          <p>
            Images from <a href="https://www.freepik.com/psd/logo">Freepik</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
