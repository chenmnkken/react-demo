import React from 'react';

class About extends React.Component {
    componentDidMount () {
        console.log('mount');
    }

    componentWillUnmount () {
        console.log('un mount');
    }

    render () {
        return (
            <h3>This is About page.</h3>
        );
    }
};

export default About;
