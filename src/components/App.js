import React from "react";
import Header from "./Header";
import Form from "./Form";
import PagePreview from "./PagePreview";
import CodeOutput from "./CodeOutput";
import "./css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCodeOutput: false
    };
  }

  handleForm = values => {
    window.location.hash = '';
    window.location.hash = 'codeOutput';
    this.setState({ form: values });
  };

  render() {
      return (
        <div className="App">
          <div className="header bg-light pt-4 pb-4">
            <div className="container">
              <div className="row">
                <Header />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <Form onSubmit={this.handleForm} />
              </div>
              <div
                id="pagePreview"
                className="col-md-6"
                style={{ backgroundColor: "gray" }}
              >
                <PagePreview form={this.state.form} />
              </div>
            </div>
          </div>
          <div id="codeOutput" className="container">
            <hr className="mt-5"></hr>
            <CodeOutput html={this.state.html} />
          </div>
        </div>
      );
  }
}

export default App;
