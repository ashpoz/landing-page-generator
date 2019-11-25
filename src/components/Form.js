import React from "react";

class Form extends React.Component {
    // state = { 
    //     pageTitle: '',
    //     partnerName: '',
    //     parterLogo: ''
    // };

    // onInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value
    //     });
    // }

  render() {
    return (
        <form className="col-md-6">
            <div className="form-group">
            <label htmlFor="pageTitle">Page Title:</label>
            <input
                type="text"
                className="form-control"
                name="pageTitle"
                id="pageTitle"
                placeholder="Enter Page Title"
                // onChange={this.onInputChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="partnerName">Partner Name:</label>
            <input
                type="text"
                className="form-control"
                name="partnerName"
                id="partnerName"
                placeholder="Parter Name"
                // onChange={this.onInputChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="parterLogo">Partner Logo:</label>
            <input
                type="url"
                className="form-control"
                name="parterLogo"
                id="parterLogo"
                placeholder="Parter Logo"
                // onChange={this.onInputChange}
            />
            </div>
            <button type="submit" className="btn btn-primary">
            Submit
            </button>
        </form>
    );
  }
}

export default Form;
