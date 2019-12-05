import React from "react";
import Header from "./Header";
import Form from "./Form";
import PagePreview from "./PagePreview";
import { createStore } from 'redux';

function reducer(state, action) {
  console.log('reducer', state, action);
  return state;
}

const store = createStore(reducer);

class App extends React.Component {
    state = {
      pageTitle: '',
      partnerName: '',
      parterLogo: ''
    };
  

  updateState = (pageTitle) => {
    this.setState({pageTitle: pageTitle});
  }

  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <div className="row">
          <div className="col-md-6">
            <Form />
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
