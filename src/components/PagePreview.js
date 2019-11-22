import React from 'react';

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