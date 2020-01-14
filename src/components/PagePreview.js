import React from "react";
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import '../css/PagePreview.css';

let output; // rendered component html

class PagePreview extends React.Component {


    render() {
      let htmlOutput = (
        <div className="bg-white">
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap-grid.min.css"
          />
          <link rel="stylesheet" href="../dist/style.css" />
          <title>{this.props.pageTitle}</title>
          <p style={{ textAlign: "center", margin: "15px 0 15px 0" }}>
            Content brought to you by {this.props.partnerName}
          </p>
          <div className="container">
            <div className="row">
              <div
                className="col-12 header__bg"
                style={{
                  background:
                    `url(${this.props.headerImage}) no-repeat center center / cover`
                }}
              >
                <div className="row">
                  <div className="col-sm-12 col-md-7 header__title">
                    <img
                      src={this.props.partnerLogo}
                      className="partnerlogo"
                      alt=""
                    />
                    <h2>
                      {this.props.heading}
                    </h2>
                    <p className="lead">
                      {this.props.subheading}
                    </p>
                  </div>
                  <div className="col-md-5  header__assetimg-wrap">
                    <img
                      src="//via.placeholder.com/300x325"
                      alt=""
                      className="assetthumb"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row content">
              <div className="col-md-7 content__left">
                {this.props.mainContent}
                <h3>
                  <strong>What you will learn from asset:</strong>
                </h3>
                <ul>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
              <div className="col-md-5 content__right">
                <h2>Download the {this.props.product}</h2>
                <iframe
                  title="convertr-form"
                  src={`https://spiceworks.cvtr.io/forms/${this.props.convertrIframeSlug}`}
                  style={{ width: "100%", height: "600px", overflow: "hidden" }}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
        </div>
      );  
          
      output = ReactDOMServer.renderToStaticMarkup(htmlOutput);

      return htmlOutput;
    }
  }

  const mapStateToProps = state => ({
    html: state.html.output = output,
    pageTitle: formValueSelector("lpForm")(state, "pageTitle"),
    partnerName: formValueSelector("lpForm")(state, "partnerName"),
    partnerLogo: formValueSelector("lpForm")(state, "partnerLogo"),
    product: formValueSelector("lpForm")(state, "product"),
    heading: formValueSelector("lpForm")(state, "heading"),
    headerImage: formValueSelector("lpForm")(state, "headerImage"),
    subheading: formValueSelector("lpForm")(state, "subheading"),
    mainContent: formValueSelector("lpForm")(state, "mainContent"),
    convertrIframeSlug: formValueSelector("lpForm")(state, "convertrIframeSlug"),
  })

export default connect(mapStateToProps)(PagePreview);
