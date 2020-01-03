import React from "react";
import { connect } from 'react-redux';

import Header from "./Header";
import Form from "./Form";
import PagePreview from "./PagePreview";
import CodeOutput from "./CodeOutput";
import { updateHTMLOutput } from "../actions";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCodeOutput: false,
    };
  }

  updateHTMLOutput = (values) => {
    this.setState({ html: values })
  }


  handleForm = values => {
    this.setState({ form: values });
    console.log(values);
    console.log(this.state);
    updateHTMLOutput();
  };

  handleShow = () => {
    this.setState({
      showCodeOutput: true,
    });
  };

  handleHide = () => {
    this.setState({
      showCodeOutput: false
    });
  };

  render() {
    console.log(this.state.showCodeOutput);
    if (this.state.showCodeOutput === false) {
      return (
        <div className="App">
          <div className="bg-light pt-4 pb-4">
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
              <div className="col-md-6" style={{ backgroundColor: "gray" }}>
                <PagePreview form={this.state.form} />
              </div>
            </div>
          </div>
          <div className="container">
            <CodeOutput show={this.updateHTMLOutput}/>
          </div>
        </div>
      );
    } 
    // hide for now
    // else {
    //   return (
    //     <div className="App">
    //       <div className="bg-light pt-4 pb-4">
    //         <div className="container">
    //           <div className="row">
    //             <Header />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="container">
    //         <CodeOutput show={this.state.showCodeOutput}/>
    //       </div>
    //     </div>
    //   );
    // }
  }
}

const mapStateToProps = state => {
  return {
    output: state.html
  };
};

const mapDispatchToProps = {
  updateHTMLOutput: updateHTMLOutput
};

export default connect(mapStateToProps, mapDispatchToProps)(App);;
