import React, { PureComponent } from 'react';
import logo from '..//Connectwise Logo.svg';
import PropTypes from 'prop-types';
import './GlobalBar.scss';
//import { Test } from './GlobalBar.styles';

class GlobalBar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('GlobalBar will mount');
  }

  componentDidMount = () => {
    console.log('GlobalBar mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('GlobalBar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('GlobalBar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('GlobalBar did update');
  }

  componentWillUnmount = () => {
    console.log('GlobalBar will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="GlobalBarWrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>New Package</h3>
        <span className="Spacer"></span>
        <div className='HelperIcon'></div>
        <div className='NineDots'></div>
        <div className='UserIcon'>M</div>
      </div>
    );
  }
}

GlobalBar.propTypes = {
  // bla: PropTypes.string,
};

GlobalBar.defaultProps = {
  // bla: 'test',
};

export default GlobalBar;
