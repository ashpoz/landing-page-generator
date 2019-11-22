import React from "react";
import Header from "./Header";
import Form from "./Form";
import PagePreview from "./PagePreview";

class App extends React.Component {

  render() {
    return (
      <div className="App container">
        <Header />
        <div className="row">
          <Form />
          <PagePreview />
        </div>
      </div>
    );
  }
}

export default App;
