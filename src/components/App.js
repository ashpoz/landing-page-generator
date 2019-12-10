import React from "react";
import Header from "./Header";
import Form from "./Form";
import PagePreview from "./PagePreview";

class App extends React.Component {
  handleForm = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <div className="row">
          <div className="col-md-6">
            <Form onSubmit={this.handleForm} />
          </div>
          <div className="col-md-6" style={{backgroundColor: 'gray'}}>
            <PagePreview />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
