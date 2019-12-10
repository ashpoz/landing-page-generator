import React from "react";
import { connect } from 'react-redux';

class PagePreview extends React.Component {
  render() {
    // console.log(this.props.fields);
    return (
      <div className="bg-white" style={{ backgroundColor: "white" }}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap-grid.min.css"
        />
        <link rel="stylesheet" href="../dist/style.css" />
        <title>[PAGE TITLE]</title>
        <p style={{ textAlign: "center", margin: "15px 0 15px 0" }}>
          Content brought to you by [PARTNER]
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam at commodi...
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
              <h2>Download the [PRODUCT]</h2>
              <iframe
                src="https://spiceworks.cvtr.io/forms/general-lp-template"
                style={{ width: "100%", height: "600px", overflow: "hidden" }}
                frameBorder={0}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { fields: state.fields }
}

export default connect(mapStateToProps)(PagePreview);
