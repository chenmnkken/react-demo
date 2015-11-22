import React from 'react';

class List extends React.Component {
    render () {
        return (
            <div>
                <h3>This is List page.</h3>
                <p>The list page id is&nbsp;
                    <b style={{color: 'red'}}>{this.props.params.id}</b>
                </p>
            </div>
        );
    }
};

export default List;
