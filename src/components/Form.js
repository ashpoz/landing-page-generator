import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field, FieldArray, formValueSelector } from "redux-form";
import "./css/Form.scss";

class Form extends React.Component {

  render() {
    const renderField = ({ input, label, type, className, meta: { touched, error } }) => (
      <div className={ `dynamic-form__fields ${className}` }>
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

    const displayFields = (templateArr) => {
      if (!templateArr.includes(this.props.templateSelect)) {
        return "d-none";
      } else {
        return "";
      }
    };

    const bulletList = ({ fields, meta: { error } }) => (
      <ul className="dynamic-form bullet-list">
        <li>
          <button
            type="button"
            className="btn btn-secondary ml-auto"
            onClick={() => fields.push()}
          >
            Add Item
          </button>
        </li>
        {fields.map((bulletItem, index) => (
          <li key={index}>
            <span className="bullet-list__number">{index + 1}</span>
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

    const renderCards = ({ fields, meta: { error } }) => (
      
      <ul className="dynamic-form cards-list">
        <li>
          <button
            type="button"
            className="btn btn-secondary ml-auto"
            onClick={() => fields.push()}
          >
            Add Asset
          </button>
        </li>
        {fields.map((asset, index) => (
          <li key={index}>
            <span className="bullet-list__number">{index + 1}</span>
            <div className="dynamic-form__fields--container">
              <Field
                name={`${asset}.title`}
                type="text"
                placeholder="Card Title"
                component={renderField}
                label={`Card Title #${index + 1}`}
              />
              <Field
                name={`${asset}.image`}
                type="text"
                placeholder="Card Image"
                component={renderField}
                label={`Card Image #${index + 1}`}
              />
              <Field
                name={`${asset}.link.text`}
                type="text"
                placeholder="Card Link Text"
                component={renderField}
                label={`Card Link Text #${index + 1}`}
              />
              <Field
                name={`${asset}.link.url`}
                type="text"
                placeholder="Card Link URL"
                component={renderField}
                label={`Card Link URL #${index + 1}`}
              />
            </div>
            <button
              className="btn btn-danger btn-remove"
              type="button"
              title="Remove Card Item"
              onClick={() => fields.remove(index)}
            >
              &times;
            </button>
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    );

    const renderNavItems = ({ fields, meta: { error } }) => (
      
      <ul className="dynamic-form cards-list">
        <li>
          <button
            type="button"
            className="btn btn-secondary ml-auto"
            onClick={() => fields.push()}
          >
            Add Nav Item
          </button>
        </li>
        {fields.map((item, index) => (
          <li key={index}>
            <span className="bullet-list__number">{index + 1}</span>
            <div className="dynamic-form__fields--container">
            <Field
                name={`${item}.item`}
                type="text"
                placeholder="Nav Item"
                component={renderField}
                label={`Nav Item #${index + 1}`}
              />
            </div>
            <button
              className="btn btn-danger btn-remove"
              type="button"
              title="Remove Card Item"
              onClick={() => fields.remove(index)}
            >
              &times;
            </button>
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    );

    const renderSections = ({ fields, meta: { error } }) => (
      
      <ul className="dynamic-form cards-list">
        <li>
          <button
            type="button"
            className="btn btn-secondary ml-auto"
            onClick={() => fields.push()}
          >
            Add Section
          </button>
        </li>
        {fields.map((section, index) => (
          <li key={index}>
            <span className="bullet-list__number">{index + 1}</span>
            <div className="dynamic-form__fields--container">
            <Field
                name={`${section}.image`}
                type="text"
                placeholder="Section Image"
                component={renderField}
                label={`Section Image #${index + 1}`}
                className={displayFields(['full-width'])}
              />
              <Field
                name={`${section}.heading`}
                type="text"
                placeholder="Section Heading"
                component={renderField}
                label={`Section Heading #${index + 1}`}
              />
              <Field
                name={`${section}.subheading`}
                type="text"
                placeholder="Section Subheading"
                component={renderField}
                label={`Section Subheading #${index + 1}`}
              />
              <Field
                name={`${section}.content`}
                type="text"
                placeholder="Card Content"
                component={renderField}
                label={`Section Content #${index + 1}`}
              />
            </div>
            <button
              className="btn btn-danger btn-remove"
              type="button"
              title="Remove Card Item"
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
            <div className="w-100">
              <Field
                className="custom-select"
                name="templateSelect"
                component="select"
              >
                <option>-- Select Template --</option>
                <option value="bare">Bare</option>
                <option value="business">Business Front Page</option>
                <option value="full-width">Full Width</option>
                <option value="scrolling-nav">Scrolling Nav</option>
                <option value="full-screen">Full Screen Image</option>
              </Field>
            </div>
          </div>
        </div>
        <hr className="mt-5"></hr>
        <div id="step-2">
          <h3 className="pb-2 pt-4">2) Fill in the following fields:</h3>
          <div className="form-group">
            <label htmlFor="siteTitle">Site Title:</label>
            <Field
              className="input form-control"
              name="siteTitle"
              component="input"
              type="text"
              placeholder="Site Title"
            />
          </div>
          <div className={`form-group ${displayFields(['full-screen', 'business', 'scrolling-nav'])}`}>
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
          <div className={`form-group ${displayFields(['bare', 'business', 'scrolling-nav'])}`}>
            <label htmlFor="subheading">Subheading:</label>
            <Field
              className="input form-control"
              name="subheading"
              component="input"
              type="text"
              placeholder="Subheading"
            />
          </div>
          <div className={`form-group ${displayFields(['business'])}`}>
            <label htmlFor="bodyHeading">Body Heading:</label>
            <Field
              className="input form-control"
              name="bodyHeading"
              component="input"
              type="text"
              placeholder="Body Heading"
            />
          </div>
          <div className={`form-group ${displayFields(['business', 'bare', 'full-screen'])}`}>
            <label htmlFor="bodyContent">Body Content:</label>
            <Field
              className="input form-control"
              name="bodyContent"
              component="textarea"
              type="text"
              placeholder="Body Content"
            />
          </div>
          <div className={`card ${displayFields(['business'])}`}>
            <div className="card-header">
              Body Call to Action
            </div>
            <div className="card-body">
                <div className="form-group">
                <label htmlFor="bodyContent">CTA Text:</label>
                  <Field
                    className="input form-control"
                    name="ctaText"
                    component="input"
                    type="text"
                    placeholder="CTA Text"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="bodyContent">CTA URL:</label>
                  <Field
                    className="input form-control"
                    name="ctaURL"
                    component="input"
                    type="text"
                    placeholder="CTA URL"
                  />
                </div>
            </div>
          </div>
          <div className={`card ${displayFields(['business'])}`}>
            <div className="card-header">
              Contact Info
            </div>
            <div className="card-body">
                <div className="form-group">
                <label htmlFor="address1">Address #1:</label>
                  <Field
                    className="input form-control"
                    name="address1"
                    component="input"
                    type="address"
                    placeholder="Address #1"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="address2">Address #2:</label>
                  <Field
                    className="input form-control"
                    name="address2"
                    component="input"
                    type="text"
                    placeholder="Address #2"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="city">City:</label>
                  <Field
                    className="input form-control"
                    name="city"
                    component="input"
                    type="city"
                    placeholder="City"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="state">State:</label>
                  <Field
                    className="input form-control"
                    name="state"
                    component="input"
                    type="state"
                    placeholder="State"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="zipcode">Zipcode:</label>
                  <Field
                    className="input form-control"
                    name="zipcode"
                    component="input"
                    type="zipcode"
                    placeholder="Zip"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                  <Field
                    className="input form-control"
                    name="phone"
                    component="input"
                    type="phone"
                    placeholder="(111) 111 1111"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                  <Field
                    className="input form-control"
                    name="email"
                    component="input"
                    type="email"
                    placeholder="email@company.com"
                  />
                </div>
            </div>
          </div>
          <div
            className="card"
          >
            <div className="card-header">
              Nav Items
            </div>
            <div className="card-body">
              <div className="form-group">
                <FieldArray name="navItems" component={renderNavItems} />
              </div>
            </div>
          </div>
          <div
            className={`card ${displayFields(['full-width', 'scrolling-nav'])}`}
          >
            <div className="card-header">
              Sections
            </div>
            <div className="card-body">
              <div className="form-group">
                <FieldArray name="sections" component={renderSections} />
              </div>
            </div>
          </div>
          <div
            className={`card ${displayFields(['business'])}`}
          >
            <div className="card-header">
              Cards
            </div>
            <div className="card-body">
              <div className="form-group">
                <FieldArray name="cards" component={renderCards} />
              </div>
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
  templateSelect: "",
  siteTitle: "Site Title",
  heading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  headerImage:
    "https://edge.spiceworksstatic.com/service.client-interactive/2018/zoho/291441/manageengine-header-291441-dec2018-s.jpg",
  subheading:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at commodi...",
  assetThumb:
    "http://placehold.it/300",
  bodyHeading: "What We Do",
  bodyContent:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis deserunt dolore et fugiat hic incidunt nemo nulla, numquam odio praesentium provident qui repellat rerum sed temporibus ullam voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eaque, esse fugit laboriosam reiciendis reprehenderit repudiandae voluptate voluptatem? Ad autem consequuntur culpa dolorem id labore officia quia recusandae saepe veniam.",
  address1: '1234 Some Rd.',
  address2: '',
  city: 'Austin',
  state: 'TX',
  zipcode: '78701',
  phone: '(111) 111-1111',
  email: 'email@gmail.com',
  ctaText: 'Learn More',
  ctaURL: '#',
  cards: [
    {
      title: "Card 1",
      image: "http://placehold.it/100",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: {
        text: "Learn More",
        url: ""
      }
    },
    {
      title: "Card 2",
      image: "http://placehold.it/100",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: {
        text: "Learn More",
        url: ""
      }
    },
    {
      title: "Card 3",
      image: "http://placehold.it/100",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: {
        text: "Learn More",
        url: ""
      }
    },
    {
      title: "Card 4",
      image: "http://placehold.it/100",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: {
        text: "Learn More",
        url: ""
      }
    }
  ],
  sections: [
    {
      heading: "Section 1",
      subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "http://placehold.it/100",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      heading: "Section 2",
      subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "http://placehold.it/100",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
  ],
  navItems: [
    {
      item: "About",
    },
    {
      item: "Services",
    },
    {
      item: "Contact",
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
