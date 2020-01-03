import React from "react";
import { reduxForm, Field } from 'redux-form';

class Form extends React.Component {
  // update values
  // componentDidUpdate(prevProps) {
  //   if (this.props.someValue !== prevProps.someValue) {
  //     this.props.change("lpForm", "input", "newFormValue");
  //   }
  // }



  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form pt-5 pb-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pageTitle">Page Title:</label>
          <Field className="input form-control" name="pageTitle" component="input" type="text" placeholder="Page Title"/>
        </div>
        <div className="form-group">
          <label htmlFor="partnerName">Partner Name:</label>
          <Field className="input form-control" name="partnerName" component="input" type="text" placeholder="Partner Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="parterLogo">Partner Logo:</label>
          <Field className="input form-control" name="parterLogo" component="input" type="text" placeholder="http://placehold.it/600"/>
        </div>
        <div className="form-group">
          <label htmlFor="heading">Heading:</label>
          <Field className="input form-control" name="heading" component="input" type="text" placeholder="Heading"/>
        </div>
        <div className="form-group">
          <label htmlFor="subheading">Subheading:</label>
          <Field className="input form-control" name="subheading" component="input" type="text" placeholder="Subheading"/>
        </div>
        <div className="form-group">
          <label htmlFor="product">Product:</label>
          <Field className="input form-control" name="product" component="input" type="text" placeholder="Product"/>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'lpForm',
})(Form);

export default Form;
