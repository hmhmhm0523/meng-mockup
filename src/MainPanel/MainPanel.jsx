import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './MainPanel.styles';
import './MainPanel.scss';
import ActionBar from '../ActionBar/ActionBar';
import SearchBox from '../SearchBox/SearchBox';

class MainPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.handleToggleExpand= this.handleToggleExpand.bind(this);
    this.state = {
      hasError: false,
    };
  }

  handleToggleExpand (event) {
    let button = event.target;
    let content = event.target.parentNode.nextSibling;
    button.classList.toggle("Collapsed");
    content.classList.toggle("Collapsed");
    // var content = this.parentNode.nextElementSibling;
    // content.styel.maxHeigh = null;
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
          <div className='NameServiceMarket'>
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
              <div className='TileContent'>
                <div className='CollapsePanel Integrations'>
                  <div className='CollapsePanelHeader'>
                    <div className='HeaderIcon '>
                      <div></div>
                    </div>
                    <span>Integrations</span>
                    <div className='Spacer'></div>
                    <a className='CollapseButton' onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className='CollapsePanelContent'>
                    <div className='PolicyItem'>
                      <div className='Name'>LMI - Default</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Integrations</div>
                    </div>
                    <div className='PolicyItem'>
                      <div className='Name'>LMI - GP</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Integrations</div>
                    </div>
                    <div className='PolicyItem'>
                      <div className='Name'>Webroot</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Integrations</div>
                    </div>
                  </div>
                </div>

                <div className='CollapsePanel Network'>
                  <div className='CollapsePanelHeader'>
                    <div className='HeaderIcon '>
                      <div></div>
                    </div>
                    <span>Network</span>
                    <div className='Spacer'></div>
                    <a className='CollapseButton' onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className='CollapsePanelContent'>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 01</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Network</div>
                    </div>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 02</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Network</div>
                    </div>
                  </div>
                </div>

                <div className='CollapsePanel Finance'>
                  <div className='CollapsePanelHeader'>
                    <div className='HeaderIcon '>
                      <div></div>
                    </div>
                    <span>Finance</span>
                    <div className='Spacer'></div>
                    <a className='CollapseButton' onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className='CollapsePanelContent'>
                    <div className='PolicyItem'>
                      <div className='Name'>Agreement GP</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Finance</div>
                    </div>
                    <div className='PolicyItem'>
                      <div className='Name'>Agreement RP</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Finance</div>
                    </div>
                  </div>
                </div>


                <div className='CollapsePanel Devices'>
                  <div className='CollapsePanelHeader'>
                    <div className='HeaderIcon '>
                      <div></div>
                    </div>
                    <span>Devices</span>
                    <div className='Spacer'></div>
                    <a className='CollapseButton' onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className='CollapsePanelContent'>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 03</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Devices</div>
                    </div>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 04</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Devices</div>
                    </div>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 05</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Devices</div>
                    </div>
                  </div>
                </div>

                <div className='CollapsePanel Notifications'>
                  <div className='CollapsePanelHeader'>
                    <div className='HeaderIcon '>
                      <div></div>
                    </div>
                    <span>Notification</span>
                    <div className='Spacer'></div>
                    <a className='CollapseButton' onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className='CollapsePanelContent'>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 06</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Notifications</div>
                    </div>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 07</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Notifications</div>
                    </div>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 08</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Notifications</div>
                    </div>
                  </div>
                </div>

                <div className='CollapsePanel Project'>
                  <div className='CollapsePanelHeader'>
                    <div className='HeaderIcon '>
                      <div></div>
                    </div>
                    <span>Project</span>
                    <div className='Spacer'></div>
                    <a className='CollapseButton' onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className='CollapsePanelContent'>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 09</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Project</div>
                    </div>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 10</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Project</div>
                    </div>
                    <div className='PolicyItem'>
                      <div className='Name'>Policy 11</div>
                      <div className='Description'>Description...</div>
                      <div className='Category'>Project</div>
                    </div>
                  </div>
                </div>
              </div>
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
