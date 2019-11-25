import React from "react";
import Header from "./Header";
import Form from "./Form";
import PagePreview from "./PagePreview";

class App extends React.Component {
  constuctor(props)  {
    super(props);
    this.state = {
      pageTitle: '',
      partnerName: '',
      parterLogo: ''
    };
  }

  updateState = (pageTitle) => {
    this.setState({pageTitle: pageTitle});
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <div className="row">
          <Form {...this.props, update: this.updateState(this)} />
          <PagePreview />
        </div>
      </div>
    );
  }
}

export default App;
