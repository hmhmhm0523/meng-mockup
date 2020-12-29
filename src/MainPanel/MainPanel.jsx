import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './MainPanel.styles';
import './MainPanel.scss';
import ActionBar from '../ActionBar/ActionBar';
import SearchBox from '../SearchBox/SearchBox';

class MainPanel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('MainPanel will mount');
  }

  componentDidMount = () => {
    console.log('MainPanel mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('MainPanel will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('MainPanel will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('MainPanel did update');
  }

  componentWillUnmount = () => {
    console.log('MainPanel will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="MainPanelWrapper">
        <ActionBar></ActionBar>
        <div className='ContentPanel'>
          <div className='Name'>
            <dl>
              <dt>Name</dt>
              <dd><input value="Governament Premium"></input></dd>
              <dt>Service Level</dt>
              <dd>
                <select>
                  <option>Premium</option>
                  <option>Default</option>
                </select>
              </dd>
              <dt>Market</dt>
              <dd>
                <select>
                  <option>Governament</option>
                  <option>Default</option>
                </select></dd>
            </dl>
          </div>
          <div className='Description'>
            <dl>
              <dt>Description</dt>
              <dd>
                <textarea placeholder='Input Field'></textarea>
              </dd>
            </dl>
          </div>
          <div className='PackageBuilder'>
            <div className='Tile'>
              <div className='TileHeader'>Package Builder</div>
              <div className='TileContent'>
                <div className='DropZone'>
                  Drag Policies Building Blocks Here
                </div>
              </div>
            </div>
          </div>
          <div className='Policies'>
            <div className='Tile'>
              <div className='TileHeader'>
                <span>Policies</span>
                <div className='Spacer'></div>
                <SearchBox></SearchBox>
                </div>
              <div className='TileContent'>xxxxxxxxxxx</div>
            </div></div>
        </div>
      </div>
    );
  }
}

MainPanel.propTypes = {
  // bla: PropTypes.string,
};

MainPanel.defaultProps = {
  // bla: 'test',
};

export default MainPanel;
