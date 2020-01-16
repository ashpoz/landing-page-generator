import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field, FieldArray, formValueSelector } from "redux-form";
import "./css/Form.css";

class Form extends React.Component {

  render() {
    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div className="dynamic-form__fields">
        <div>
          <input
            {...input}
            type={type}
            placeholder={label}
            className="input form-control"
          />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );

    const displayFields = () => {
      if (this.props.templateSelect === "toolkit") {
        return "block";
      } else {
        return "none";
      }
    };

    const bulletList = ({ fields, meta: { error } }) => (
      <ul className="dynamic-form bullet-list">
        <li>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => fields.push()}
          >
            Add Bullet Item
          </button>
        </li>
        {fields.map((bulletItem, index) => (
          <li key={index}>
            <Field
              name={bulletItem}
              type="text"
              placeholder="Page Title"
              component={renderField}
              label={`Bullet Item #${index + 1}`}
            />
            <button
              className="btn btn-danger btn-remove"
              type="button"
              title="Remove Bullet Item"
              onClick={() => fields.remove(index)}
            >
              &times;
            </button>
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    );

    const renderAssets = ({ fields, meta: { error } }) => (
      <ul className="dynamic-form assets-list">
        <li>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => fields.push()}
          >
            Add Asset
          </button>
        </li>
        {fields.map((asset, index) => (
          <li key={index}>
            <div className="dynamic-form__fields--container">
              <Field
                name={`${asset}.title`}
                type="text"
                placeholder="Asset Title"
                component={renderField}
                label={`Asset Title #${index + 1}`}
              />
              <Field
                name={`${asset}.image`}
                type="text"
                placeholder="Asset Image"
                component={renderField}
                label={`Asset Image #${index + 1}`}
              />
            </div>
            <button
              className="btn btn-danger btn-remove"
              type="button"
              title="Remove Asset Item"
              onClick={() => fields.remove(index)}
            >
              &times;
            </button>
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    );

    const { handleSubmit } = this.props;
    return (
      <form className="form pt-5 pb-5" onSubmit={handleSubmit}>
        <div id="step-1">
          <h3 className="pb-2">1) Select a template:</h3>
          <div className="form-group">
            <label htmlFor="templateSelect">Template Select:</label>
            <div>
              <Field
                className="custom-select"
                name="templateSelect"
                component="select"
              >
                <option></option>
                <option value="singleAssetA">Single Asset Template A</option>
                <option value="singleAssetB">Single Asset Template B</option>
                <option value="singleAssetC">Single Asset Template C</option>
                <option value="toolkit">Toolkit</option>
              </Field>
            </div>
          </div>
        </div>
        <hr className="mt-5"></hr>
        <div id="step-2">
          <h3 className="pb-2 pt-4">2) Fill in the following fields:</h3>
          <div className="form-group">
            <label htmlFor="partnerName">Partner Name:</label>
            <Field
              className="input form-control"
              name="partnerName"
              component="input"
              type="text"
              placeholder="Partner Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="partnerLogo">Partner Logo:</label>
            <Field
              className="input form-control"
              name="partnerLogo"
              component="input"
              type="text"
              placeholder="http://placehold.it/100x200"
            />
          </div>
          <div className="form-group">
            <label htmlFor="headerImage">Header Image:</label>
            <Field
              className="input form-control"
              name="headerImage"
              component="input"
              type="text"
              placeholder="https://edge.spiceworksstatic.com/service.client-interactive/2018/zoho/291441/manageengine-header-291441-dec2018-s.jpg"
            />
          </div>
          <div className="form-group">
            <label htmlFor="heading">Heading:</label>
            <Field
              className="input form-control"
              name="heading"
              component="input"
              type="text"
              placeholder="Heading"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subheading">Subheading:</label>
            <Field
              className="input form-control"
              name="subheading"
              component="input"
              type="text"
              placeholder="Subheading"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mainContent">Main Content:</label>
            <Field
              className="input form-control"
              name="mainContent"
              component="input"
              type="text"
              placeholder="Main Content"
            />
          </div>
          <div className="form-group">
            <label htmlFor="product">Product:</label>
            <Field
              className="input form-control"
              name="product"
              component="input"
              type="text"
              placeholder="Product"
            />
          </div>
          <div className="form-group">
            <label htmlFor="convertrIframeSlug">Convertr iframe Slug:</label>
            <Field
              className="input form-control"
              name="convertrIframeSlug"
              component="input"
              type="text"
              placeholder="ConvertrIframeSlug"
            />
          </div>
          <div className="form-group__subsection">
            <div className="form-group">
              <label htmlFor="bulletListTitle">Bullet List Title:</label>
              <Field
                className="input form-control"
                name="bulletListTitle"
                component="input"
                type="text"
                placeholder="bulletListTitle"
              />
            </div>
            <div className="form-group">
              <FieldArray name="bulletList" component={bulletList} />
            </div>
          </div>
          <div
            className="form-group__subsection"
            style={{ display: displayFields() }}
          >
            <div className="form-group">
              <label htmlFor="assets">Assets:</label>
              <FieldArray name="assets" component={renderAssets} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            GET CODE
          </button>
        </div>
      </form>
    );
  }
}

const initialValues = {
  partnerName: "[PARTNER]",
  templateSelect: "",
  partnerLogo: "http://placehold.it/100x25",
  product: "",
  heading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  headerImage:
    "https://edge.spiceworksstatic.com/service.client-interactive/2018/zoho/291441/manageengine-header-291441-dec2018-s.jpg",
  subheading:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at commodi...",
  mainContent:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis deserunt dolore et fugiat hic incidunt nemo nulla, numquam odio praesentium provident qui repellat rerum sed temporibus ullam voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eaque, esse fugit laboriosam reiciendis reprehenderit repudiandae voluptate voluptatem? Ad autem consequuntur culpa dolorem id labore officia quia recusandae saepe veniam.",
  convertrIframeSlug: "general-lp-template",
  bulletListTitle: "What you'll learn:",
  bulletList: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  assets: [
    {
      title: "Asset 1",
      image: "http://placehold.it/100"
    }
  ]
};

const mapStateToProps = state => ({
  templateSelect: formValueSelector("lpForm")(state, "templateSelect")
});

Form = reduxForm({
  form: "lpForm",
  initialValues
})(Form);

export default connect(mapStateToProps)(Form);
