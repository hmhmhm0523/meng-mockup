import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ActionBar.styles';
import './ActionBar.scss';
class ActionBar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('ActionBar will mount');
  }

  componentDidMount = () => {
    console.log('ActionBar mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ActionBar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ActionBar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ActionBar did update');
  }

  componentWillUnmount = () => {
    console.log('ActionBar will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ActionBarWrapper">
       <button className='PrimaryButton'>Save</button>
       <button className='SecondaryButton'>Cancel</button>

      </div>
    );
  }
}

ActionBar.propTypes = {
  // bla: PropTypes.string,
};

ActionBar.defaultProps = {
  // bla: 'test',
};

export default ActionBar;
