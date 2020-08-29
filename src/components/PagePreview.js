import React from "react";
import ReactDOMServer from "react-dom/server";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import "./css/PagePreview.scss";

let output; // rendered component html

class PagePreview extends React.Component {

  render() {
    // init vars
    let htmlOutput = <div className="placeholderHTML">[SELECT A TEMPLATE]</div>;
    let OLI = '000000';
    let partnerName = '[PARTNER]';

    const displayBulletList = list => {
      return list.map((val, index) => {
        return <li key={index}>{val}</li>;
      });
    };

    const displayAssetList = list => {
      // eslint-disable-next-line array-callback-return
      return list.map((val, index) => {
        if (val !== undefined) {
          return (
            <div key={index} className="col-12 col-md-6">
              <img src={val.image} alt={val.title} />
              <p>{val.title}</p>
            </div>
          );
        }
      });
    };

    if (this.props.templateSelect === "bare") {
      // GA vars
      partnerName = this.props.partnerName;
      OLI = this.props.OLI;

      htmlOutput = (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
              <a className="navbar-brand" href="#">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="mt-5">{this.props.heading}</h1>
                <p className="lead">{this.props.subheading}</p>
                <p className="main-content">{this.props.mainContent}</p>
              </div>
            </div>
          </div>
          <script src="vendor/jquery/jquery.slim.min.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        </>
      );
    } else if (this.props.templateSelect === "business") {

      // GA vars
      partnerName = this.props.partnerName;
      OLI = this.props.OLI;

      htmlOutput = (

        <div id={this.props.templateSelect}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header className="bg-primary py-5 mb-5">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-lg-12">
                  <h1 className="display-4 text-white mt-5 mb-2">Business Name or Tagline</h1>
                  <p className="lead mb-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
                </div>
              </div>
            </div>
          </header>

          <div className="container">
            <div className="row">
              <div className="col-md-8 mb-5">
                <h2>What We Do</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
              </div>
              <div className="col-md-4 mb-5">
                <h2>Contact Us</h2>
                <hr />
                <div>
                  <strong>Start Bootstrap</strong>
                  <br />3481 Melrose Place
                  <br />Beverly Hills, CA 90210
                  <br />
                </div>
                <div>
                  <abbr title="Phone">P:</abbr>
                    (123) 456-7890
                    <br />
                  <abbr title="Email">E:</abbr>
                  <a href="mailto:#">name@example.com</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src="https://placehold.it/300x200" alt="" />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src="https://placehold.it/300x200" alt="" />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src="https://placehold.it/300x200" alt="" />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
            </div>
          </footer>
        </div>
      );
    } else if (this.props.templateSelect === "full-width") {

      // GA vars
      partnerName = this.props.partnerName;
      OLI = this.props.OLI;

      htmlOutput = (
        <div id={this.props.templateSelect}>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
            <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header className="py-5 bg-image-full" style={{ backgroundImage: "url('https://unsplash.it/1900/1080?image=1076')" }}>
            <div style={{ height: "200px" }}></div>
            {/* <img className="img-fluid d-block mx-auto" src="http://placehold.it/200x200&text=Logo" style={{ height: "300px" }}alt=""/> */}
          </header>

          <section className="py-5">
            <div className="container">
              <h1>Section Heading</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
            </div>
          </section>

          <div className="py-5 bg-image-full" style={{ backgroundImage: "url('https://unsplash.it/1900/1080?image=1081')" }}>
            <div style={{ height: "200px" }}></div>
          </div>

          <section className="py-5">
            <div className="container">
              <h1>Section Heading</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
            </div>
          </section>

          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
            </div>
          </footer>


        </div>
      );
    } else if (this.props.templateSelect === "scrolling-nav") {

      // GA vars
      partnerName = this.props.partnerName;
      OLI = this.props.OLI;

      htmlOutput = (
        <div id={this.props.templateSelect}>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header className="bg-primary text-white">
            <div className="container text-center">
              <h1>Welcome to Scrolling Nav</h1>
              <p className="lead">A landing page template freshly redesigned for Bootstrap 4</p>
            </div>
          </header>

          <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2>About this page</h2>
                  <p className="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
                  <ul>
                    <li>Clickable nav links that smooth scroll to page sections</li>
                    <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                    <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                    <li>Minimal custom CSS so you are free to explore your own unique design options</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2>Services we offer</h2>
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2>Contact us</h2>
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
            </div>
          </footer>


          <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

          <script src="js/scrolling-nav.js"></script>

        </div>
      );
    } else if (this.props.templateSelect === "full-screen") {

      // GA vars
      partnerName = this.props.partnerName;
      OLI = this.props.OLI;

      htmlOutput = htmlOutput = (
        <div id={this.props.templateSelect}>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
            <div className="container">
              <a className="navbar-brand" href="#">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
            <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="mt-5">The Big Picture</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptates rerum eveniet sapiente repellat esse, doloremque quod recusandae deleniti nostrum assumenda vel beatae sed aut modi nesciunt porro quisquam voluptatem.</p>
                </div>
              </div>
            </div>
          </section>




        </div>
      );
    } else {
      htmlOutput = htmlOutput = (
        <div id="placeholderHTML">[SELECT A TEMPLATE]</div>
      );
    }

    let gaScript = `<script>function sendAnalyticsEvent(action, label) {
                            ga("send", "event", "Vendor Non-Interactive", action, label);
    }

    ga("set", "page", "/service.labs/${partnerName}/landingpage/${OLI}/en/sw}");
    ga("send", "pageview");</script>`

    output = ReactDOMServer.renderToStaticMarkup(htmlOutput).concat(gaScript);


    return htmlOutput;
  }
}

const mapStateToProps = state => ({
  html: (state.html.output = output),
  partnerName: formValueSelector("lpForm")(state, "partnerName"),
  OLI: formValueSelector("lpForm")(state, "OLI"),
  templateSelect: formValueSelector("lpForm")(state, "templateSelect"),
  assetThumb: formValueSelector("lpForm")(state, "assetThumb"),
  partnerLogo: formValueSelector("lpForm")(state, "partnerLogo"),
  product: formValueSelector("lpForm")(state, "product"),
  heading: formValueSelector("lpForm")(state, "heading"),
  headerImage: formValueSelector("lpForm")(state, "headerImage"),
  subheading: formValueSelector("lpForm")(state, "subheading"),
  mainContent: formValueSelector("lpForm")(state, "mainContent"),
  convertrIframeSlug: formValueSelector("lpForm")(state, "convertrIframeSlug"),
  bulletListTitle: formValueSelector("lpForm")(state, "bulletListTitle"),
  bulletList: formValueSelector("lpForm")(state, "bulletList"),
  assetList: formValueSelector("lpForm")(state, "assetList"),
  assets: formValueSelector("lpForm")(state, "assets")
});

export default connect(mapStateToProps)(PagePreview);
