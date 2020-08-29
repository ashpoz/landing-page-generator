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

    const displayNavItems = list => {
      // eslint-disable-next-line array-callback-return
      return list.map((val, index) => {
        if (val !== undefined) {
          return (
            <li key={index} className="nav-item">
              <a className="nav-link" href="#">{val.item}
              <span className="sr-only"></span>
              </a>
            </li>
          );
        }
      });
    };

    const displayCards = card => {
      return card.map((val, index) => {
        if (val !== undefined) {
          return (
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <img className="card-img-top" src={val.image} alt={val.title} />
                <div className="card-body">
                  <h4 className="card-title">{val.title}</h4>
                  <p className="card-text">{val.body}</p>
                </div>
                <div className="card-footer">
                  <a href={val.link.url} className="btn btn-primary">{val.link.text}</a>
                </div>
              </div>
            </div>
          )
        }
      });
    }

    const displayFullWidthSections = section => {
      return section.map((val, index) => {
        if (val !== undefined) {
          return (
            <>
            <div className="py-5 bg-image-full" style={{ backgroundImage: `url(${val.image})` }}>
              <div style={{ height: "200px" }}></div>
            </div>
            <section className="py-5">
              <div className="container">
                <h1>{val.heading}</h1>
                <p className="lead">{val.subheading}</p>
                <p>{val.text}</p>
              </div>
            </section>
            </>
          )
        }
      });
    }

    const displaySections = section => {
      return section.map((val, index) => {
        if (val !== undefined) {
          return (
          <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2>{val.heading}</h2>
                  <p className="lead">{val.subheading}</p>
                  <p>{val.text}</p>
                </div>
              </div>
            </div>
          </section>
          )
        }
      });
    }

    if (this.props.templateSelect === "bare") {
      htmlOutput = (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
              <a className="navbar-brand" href="#">{this.props.siteTitle}</a>
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
                  {displayNavItems(this.props.navItems)}
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="mt-5">{this.props.heading}</h1>
                <p className="lead">{this.props.subheading}</p>
                <p className="main-content">{this.props.bodyContent}</p>
              </div>
            </div>
          </div>
          <script src="vendor/jquery/jquery.slim.min.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        </>
      );
    } else if (this.props.templateSelect === "business") {

      htmlOutput = (

        <div id={this.props.templateSelect}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">{this.props.siteTitle}</a>
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
                  {displayNavItems(this.props.navItems)}
                </ul>
              </div>
            </div>
          </nav>

          <header className="bg-primary py-5 mb-5">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-lg-12">
                  <h1 className="display-4 text-white mt-5 mb-2">{this.props.heading}</h1>
                  <p className="lead mb-5 text-white-50">{this.props.subheading}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="container">
            <div className="row">
              <div className="col-md-8 mb-5">
                <h2>{this.props.bodyHeading}</h2>
                <hr />
                <p>{this.props.bodyContent}</p>
                <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
              </div>
              <div className="col-md-4 mb-5">
                <h2>Contact Us</h2>
                <hr />
                <div>
                  <strong>{this.props.siteTitle}</strong>
                  <br />{this.props.address1}
                  <br />{this.props.address2}
                  <br />{this.props.city}, {this.props.state} {this.props.zip}
                  <br />
                </div>
                <div>
                  <abbr title="Phone">P:</abbr>
                  {this.props.phone}
                    <br />
                  <abbr title="Email">E:</abbr>
                  <a href="mailto:#">{this.props.email}</a>
                </div>
              </div>
            </div>
            <div className="row">
              {displayCards(this.props.cards)}
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


      htmlOutput = (
        <div id={this.props.templateSelect}>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">{this.props.siteTitle}</a>
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
                  {displayNavItems(this.props.navItems)}
                </ul>
              </div>
            </div>
          </nav>

          {displayFullWidthSections(this.props.sections)}

          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
            </div>
          </footer>


        </div>
      );
    } else if (this.props.templateSelect === "scrolling-nav") {


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
                  {displayNavItems(this.props.navItems)}
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

          {displaySections(this.props.sections)}

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


      htmlOutput = htmlOutput = (
        <div id={this.props.templateSelect}>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
            <div className="container">
              <a className="navbar-brand" href="#">{this.props.siteTiel}</a>
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
                  {displayNavItems(this.props.navItems)}
                </ul>
              </div>
            </div>
          </nav>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="mt-5">{this.props.heading}</h1>
                  <p>{this.props.bodyContent}</p>
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

    output = ReactDOMServer.renderToStaticMarkup(htmlOutput)
    // .concat()
    ;


    return htmlOutput;
  }
}

const mapStateToProps = state => ({
  html: (state.html.output = output),
  templateSelect: formValueSelector("lpForm")(state, "templateSelect"),
  siteTitle: formValueSelector("lpForm")(state, "siteTitle"),
  heading: formValueSelector("lpForm")(state, "heading"),
  headerImage: formValueSelector("lpForm")(state, "headerImage"),
  subheading: formValueSelector("lpForm")(state, "subheading"),
  bodyHeading: formValueSelector("lpForm")(state, "bodyHeading"),
  bodyContent: formValueSelector("lpForm")(state, "bodyContent"),
  cards: formValueSelector("lpForm")(state, "cards"),
  navItems: formValueSelector("lpForm")(state, "navItems"),
  sections: formValueSelector("lpForm")(state, "sections"),
  ctaText: formValueSelector("lpForm")(state, "ctaText"),
  ctaURL: formValueSelector("lpForm")(state, "ctaURL"),
  address1: formValueSelector("lpForm")(state, "address1"),
  address2: formValueSelector("lpForm")(state, "address2"),
  state: formValueSelector("lpForm")(state, "state"),
  zipcode: formValueSelector("lpForm")(state, "zipcode")
});

export default connect(mapStateToProps)(PagePreview);
