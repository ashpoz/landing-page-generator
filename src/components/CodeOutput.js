import React from "react";
import { connect } from "react-redux";
import Prism from "prismjs";
import ClipboardJS from "clipboard";
import { styles } from "../data/styles";
import "./css/prism.scss";
import "./css/CodeOutput.scss";

class CodeOutput extends React.Component {

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    new ClipboardJS('.btn');
    return (
      <div className="codeOutput pt-5 pb-5">
        <div className="htmlOutput">
          <h2>HTML:</h2>
          <div className="htmlOutput__code">
            <div className="toolbar bg-secondary">
            <button className="btn secondary" data-clipboard-target="#html">
                Copy
            </button>
            </div>
            <pre>
              <code id="html" className="language-html">{this.props.html}</code>
            </pre>
          </div>
        </div>
        <div className="cssOutput mt-5">
          <h2>CSS:</h2>
          <div className="cssOutput__code">
            <div className="toolbar bg-secondary">
            <button className="btn" data-clipboard-target="#css">
                Copy
            </button>
            </div>
            <pre>
              <code id="css" className="language-css">{styles[this.props.css]}</code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    html: state.html.output,
    css: state.form.lpForm.values.templateSelect
  };
};

export default connect(mapStateToProps)(CodeOutput);
