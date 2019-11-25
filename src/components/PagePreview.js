import React from 'react';
import Form from './Form';

class PagePreview extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                {this.props.data}
            </div>
        )
    }
}

export default PagePreview;