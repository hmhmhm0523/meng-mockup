import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './MasterPanel.scss'
//import { Test } from './MasterPanel.styles';

class MasterPanel extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('MasterPanel will mount');
  }

  componentDidMount = () => {
    console.log('MasterPanel mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('MasterPanel will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('MasterPanel will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('MasterPanel did update');
  }

  componentWillUnmount = () => {
    console.log('MasterPanel will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="MasterPanelWrapper">
        <div>
          <div className='BackarrowButton'></div>
          <span className='Spacer'></span>
          <div className='PinButton'></div>
        </div>
        <div>
          <div className='WorkspaceIcon'></div>
          <span>Workspace</span>
        </div>
        <div>
          <div className='AdminIcon'></div>
          <span>Admin</span>
        </div>
        <div>
          <div className='PreferencesIcon'></div>
          <span>Preferences</span>
        </div>
        <div className='Selected'>
          <div className='PoliciesIcon'></div>
          <span>Policies</span>
        </div>
        <div>
          <div className='CompanyIcon'></div>
          <span>Companies</span>
        </div>
      </div>
    );
  }
}

MasterPanel.propTypes = {
  // bla: PropTypes.string,
};

MasterPanel.defaultProps = {
  // bla: 'test',
};

export default MasterPanel;
