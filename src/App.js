import logo from './Connectwise Logo.svg';
import './App.scss';
import GlobalBar from './GlobalBar/GlobalBar';
import MasterPanel from './MasterPanel/MasterPanel';
import MainPanel from './MainPanel/MainPanel';
import Toolbar from './Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <GlobalBar></GlobalBar>
      <div>
        <MasterPanel></MasterPanel>
        <MainPanel></MainPanel>
        <Toolbar></Toolbar>
      </div>
    </div>
  );
}

export default App;
