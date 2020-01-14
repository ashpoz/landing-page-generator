import React from "react";
import { reduxForm, Field } from 'redux-form';
import '../css/Form.css';

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
          <label htmlFor="partnerLogo">Partner Logo:</label>
          <Field className="input form-control" name="partnerLogo" component="input" type="text" placeholder="http://placehold.it/100x200"/>
        </div>
        <div className="form-group">
          <label htmlFor="templateSelect">Template Select:</label>
          <Field className="custom-select" name="templateSelect" component="select">
            <option></option>
            <option value="singleAssetA">Single Asset Template A</option>
            <option value="singleAssetB">Single Asset Template B</option>
            <option value="singleAssetC">Single Asset Template C</option>
            <option value="toolkit">Toolkit</option>
            <option value="mutlipleAssetsTemplate">Mutliple Assets Template</option>
          </Field>
        </div>
        <div className="form-group">
          <label htmlFor="headerImage">Header Image:</label>
          <Field className="input form-control" name="headerImage" component="input" type="text" placeholder="https://edge.spiceworksstatic.com/service.client-interactive/2018/zoho/291441/manageengine-header-291441-dec2018-s.jpg"/>
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
          <label htmlFor="mainContent">Main Content:</label>
          <Field className="input form-control" name="mainContent" component="input" type="text" placeholder="Main Content"/>
        </div>
        <div className="form-group">
          <label htmlFor="product">Product:</label>
          <Field className="input form-control" name="product" component="input" type="text" placeholder="Product"/>
        </div>
        <div className="form-group">
          <label htmlFor="convertrIframeSlug">Convertr iframe Slug:</label>
          <Field className="input form-control" name="convertrIframeSlug" component="input" type="text" placeholder="ConvertrIframeSlug"/>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

const initialValues = {
  pageTitle: '',
  partnerName: '[PARTNER]',
  templateSelect: '',
  partnerLogo: 'http://placehold.it/100x25',
  product: '',
  heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  headerImage: 'https://edge.spiceworksstatic.com/service.client-interactive/2018/zoho/291441/manageengine-header-291441-dec2018-s.jpg',
  subheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at commodi...',
  mainContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis deserunt dolore et fugiat hic incidunt nemo nulla, numquam odio praesentium provident qui repellat rerum sed temporibus ullam voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eaque, esse fugit laboriosam reiciendis reprehenderit repudiandae voluptate voluptatem? Ad autem consequuntur culpa dolorem id labore officia quia recusandae saepe veniam.',
  convertrIframeSlug: 'general-lp-template'
}

Form = reduxForm({
  form: 'lpForm',
  initialValues
})(Form);

export default Form;
