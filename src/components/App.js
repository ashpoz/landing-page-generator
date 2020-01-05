import React from "react";
import Header from "./Header";
import Form from "./Form";
import PagePreview from "./PagePreview";
import CodeOutput from "./CodeOutput";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // form: {},
      showCodeOutput: false,
      // html: ''
    };
  }

  handleForm = values => {
    this.setState({ form: values });
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
            <CodeOutput html={this.state.html}  />
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

export default App;
