import React from 'react';

class LifeCycles extends React.Component {
    constructor () {
        super ();
        console.log ('constructor');
    }

    componentDidMount() {
        console.log('compenentDidMount');
    }

    componentDidUpdate() {
        console.log('compenendDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate() {
        console.log ('shouldComponentUpdate', nextProps);
        return true;
    }

    render() {
        console.log('render');
        return (
            <div className='lifecycles'>
                <h3>LIFECYCLES COMPONENT</h3>
                {this.props.text}
            </div>
        )
    }
}

export default LifeCycles;