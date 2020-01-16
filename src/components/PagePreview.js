import React from "react";
import ReactDOMServer from "react-dom/server";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import "./css/PagePreview.css";

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

    if (this.props.templateSelect === "singleAssetA") {
      htmlOutput = (
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap-grid.min.css"
          />
          <p style={{ textAlign: "center", margin: "15px 0 15px 0" }}>
            Content brought to you by {this.props.partnerName}
          </p>
          <div className="container">
            <div className="row">
              <div
                className="col-12 header__bg"
                style={{
                  background: `url(${this.props.headerImage}) no-repeat center center / cover`
                }}
              >
                <div className="row">
                  <div className="col-sm-12 col-md-7 header__title">
                    <img
                      src={this.props.partnerLogo}
                      className="partnerlogo"
                      alt=""
                    />
                    <h2>{this.props.heading}</h2>
                    <p className="lead">{this.props.subheading}</p>
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
                  <strong>{this.props.bulletListTitle}</strong>
                </h3>
                <ul>{displayBulletList(this.props.bulletList)}</ul>
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
    } else if (this.props.templateSelect === "singleAssetB") {
      htmlOutput = (
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap-grid.min.css"
          />
          <p style={{ textAlign: "center", margin: "15px 0 15px 0" }}>
            Content brought to you by {this.props.partnerName}
          </p>
          <div className="container">
            <div className="row">
              <div
                className="col-12 header__color header__color-full"
                style={{ background: "#1f94ff" }}
              >
                <img
                  src="//via.placeholder.com/185x50"
                  alt=""
                  className="partnerlogo"
                  style={{ marginBottom: "20px" }}
                />
                <h1>{this.props.heading}</h1>
                <h2>{this.props.subheading}</h2>
              </div>
              <div className="col-12" style={{ padding: 0 }}>
                <iframe
                  title="convertr-form-1"
                  src={`https://spiceworks.cvtr.io/forms/${this.props.convertrIframeSlug}`}
                  style={{ width: "100%", height: "600px", overflow: "hidden" }}
                  frameBorder={0}
                />
              </div>
            </div>
            <div className="row content content__copy">
              <div className="col-12 col-md-6">
                <p>{this.props.mainContent}</p>
                <h3>
                  <strong>{this.props.bulletListTitle}</strong>
                </h3>
                <ul>{displayBulletList(this.props.bulletList)}</ul>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src="//via.placeholder.com/360x460"
                  alt=""
                  className="asset--img"
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.templateSelect === "singleAssetC") {
      htmlOutput = (
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap-grid.min.css"
          />
          <p style={{ textAlign: "center", margin: "15px 0 15px 0" }}>
            Content brought to you by {this.props.partnerName}
          </p>
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-md-6 header__color header__c"
                style={{ background: "#1f94ff", paddingTop: "30px" }}
              >
                <img
                  src="//via.placeholder.com/185x50"
                  alt=""
                  className="partnerlogo"
                  style={{ marginBottom: "30px" }}
                />
                <h1>{this.props.heading}</h1>
                <h2>{this.props.subheading}</h2>
              </div>
              <div
                className="col-12 col-md-6"
                style={{ paddingLeft: 0, background: "#f0f0f0" }}
              >
                <iframe
                  title="convertr-form"
                  src="https://spiceworks.cvtr.io/forms/general-lp-template"
                  style={{ width: "100%", height: "600px", overflow: "hidden" }}
                  frameBorder={0}
                />
              </div>
            </div>
            <div className="row content">
              <div className="col-12 col-md-6">
                <img
                  src="//via.placeholder.com/360x460"
                  alt=""
                  className="asset--img"
                />
              </div>
              <div className="col-12 col-md-6 content__copy">
                <p>{this.props.mainContent}</p>
                <h3>
                  <strong>{this.props.bulletListTitle}</strong>
                </h3>
                <ul>{displayBulletList(this.props.bulletList)}</ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.templateSelect === "toolkit") {
      htmlOutput = (
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap-grid.min.css"
          />
          <p style={{ textAlign: "center", margin: "15px 0 15px 0" }}>
            Content brought to you by {this.props.partnerName}
          </p>
          <div className="container">
            <div className="row">
              <div
                className="col-12 header__color header__color-full"
                style={{
                  background:
                    'url("https://edge.spiceworksstatic.com/service.client-interactive/2018/DandHDistributing/294897/header.jpg") no-repeat center center / cover'
                }}
              >
                <img
                  src="https://edge.spiceworksstatic.com/service.client-interactive/2018/DandHDistributing/294897/Microsoft-logo-white.png"
                  alt=""
                  className="partnerlogo"
                />
                <h1>{this.props.heading}</h1>
                <h2>{this.props.subheading}</h2>
              </div>
              <div className="col-12 form-wrap" style={{ padding: 0 }}>
                <h3>Download your {this.props.product}:</h3>
                <iframe
                  title="convertr-form"
                  src="https://spiceworks.cvtr.io/forms/d-h-distributing"
                  style={{ width: "100%", height: "380px", overflow: "hidden" }}
                  frameBorder={0}
                />
              </div>
            </div>
            <div className="row content">
              <div className="col-12 col-md-6 content__copy">
                <p>{this.props.mainContent}</p>
                <h3>
                  <strong>{this.props.bulletListTitle}</strong>
                </h3>
                <ul>{displayBulletList(this.props.bulletList)}</ul>
              </div>
              <div className="col-12 col-md-6 container-fluid asset-grid">
                <div className="row">{displayAssetList(this.props.assets)}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      htmlOutput = htmlOutput = (
        <div className="placeholderHTML">[SELECT A TEMPLATE]</div>
      );
    }

    output = ReactDOMServer.renderToStaticMarkup(htmlOutput);

    return htmlOutput;
  }
}

const mapStateToProps = state => ({
  html: (state.html.output = output),
  partnerName: formValueSelector("lpForm")(state, "partnerName"),
  templateSelect: formValueSelector("lpForm")(state, "templateSelect"),
  partnerLogo: formValueSelector("lpForm")(state, "partnerLogo"),
  product: formValueSelector("lpForm")(state, "product"),
  heading: formValueSelector("lpForm")(state, "heading"),
  headerImage: formValueSelector("lpForm")(state, "headerImage"),
  subheading: formValueSelector("lpForm")(state, "subheading"),
  mainContent: formValueSelector("lpForm")(state, "mainContent"),
  convertrIframeSlug: formValueSelector("lpForm")(state, "convertrIframeSlug"),
  bulletListTitle: formValueSelector("lpForm")(state, "bulletListTitle"),
  bulletList: formValueSelector("lpForm")(state, "bulletList"),
  assets: formValueSelector("lpForm")(state, "assets")
});

export default connect(mapStateToProps)(PagePreview);
