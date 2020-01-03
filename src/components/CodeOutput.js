import React from "react";
import { connect } from 'react-redux';
// import reducer from "../reducers";
import { updateHTMLOutput } from "../actions";
import "../css/CodeOutput.css";


class CodeOutput extends React.Component {

  updateHTMLOutput = () => {
    this.props.updateHTMLOutput();
  }
  

  render() {
    return (
      <div className="codeOutput pt-5 pb-5">
        <div className="htmlOutput">
          <h2>HTML:</h2>
          <div className="htmlOutput__code">
            <div className="toolbar bg-secondary"></div>
            <pre>{this.props.html}</pre>
          </div>
        </div>
        <div className="cssOutput mt-5">
          <h2>CSS:</h2>
          <div className="cssOutput__code">
            <div className="toolbar bg-secondary"></div>
            <pre>hello there</pre>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    output: state.output
  };
};

// const mapDispatchToProps = {
//   removeNote: removeNote
// };

export default connect(mapStateToProps)(CodeOutput);

// export default CodeOutput;
