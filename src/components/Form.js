import React from "react";
import { reduxForm, Field, change } from 'redux-form';

class Form extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.someValue !== prevProps.someValue) {
      this.props.change("lpForm", "input", "newFormValue");
    }
  }

  render() {
    // const onInputChange = (event, value) => {
    //   console.log(value);
    // }

    console.log(this.props);
    const { handleSubmit, change } = this.props;
    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pageTitle">Page Title:</label>
          <Field className="input" name="pageTitle" component="input" type="text" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="partnerName">Partner Name:</label>
          <Field className="input" name="partnerName" component="input" type="text" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="parterLogo">Partner Logo:</label>
          <Field className="input" name="parterLogo" component="input" type="text" placeholder="First Name"/>
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
