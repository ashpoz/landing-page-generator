import React from "react";
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import '../css/PagePreview.css';

class PagePreview extends React.Component {

    render() {
      let htmlOutput = (
        <div className="bg-white" style={{ backgroundColor: "white", transform: "scale(0.9)", height: "600px", overflow: "auto" }}>
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
                    'url("https://edge.spiceworksstatic.com/service.client-interactive/2018/zoho/291441/manageengine-header-291441-dec2018-s.jpg") no-repeat center center / cover'
                }}
              >
                <div className="row">
                  <div className="col-sm-12 col-md-7 header__title">
                    <img
                      src="//via.placeholder.com/400x100"
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                debitis deserunt dolore et fugiat hic incidunt nemo nulla, numquam
                odio praesentium provident qui repellat rerum sed temporibus ullam
                voluptatem.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                eaque, esse fugit laboriosam reiciendis reprehenderit repudiandae
                voluptate voluptatem? Ad autem consequuntur culpa dolorem id
                labore officia quia recusandae saepe veniam.
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
                  src="https://spiceworks.cvtr.io/forms/general-lp-template"
                  style={{ width: "100%", height: "600px", overflow: "hidden" }}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
        </div>
      );
      console.log(ReactDOMServer.renderToStaticMarkup(htmlOutput));
      return htmlOutput;
    }
  }

  const mapStateToProps = state => ({
    pageTitle: formValueSelector("lpForm")(state, "pageTitle"),
    partnerName: formValueSelector("lpForm")(state, "partnerName"),
    parterLogo: formValueSelector("lpForm")(state, "parterLogo"),
    product: formValueSelector("lpForm")(state, "product"),
    heading: formValueSelector("lpForm")(state, "heading"),
    subheading: formValueSelector("lpForm")(state, "subheading"),
  })

export default connect(mapStateToProps)(PagePreview);
