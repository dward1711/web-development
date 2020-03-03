Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@dward1711 
Code Issues 0 Pull requests 2 Projects 0 Actions Wiki Security Pulse Community
lifecycles-lesson/src/lifecycles.component.jsx
 Yihua Zhang components demonstrating lifecycles
b9dd494 on May 27, 2019
37 lines (30 sloc)  713 Bytes
  
import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log('constructor!');
  }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
