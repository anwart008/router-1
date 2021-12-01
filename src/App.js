import './App.css';
import Sidebar from './sidebar'
import { Switch, Route} from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import {UserProfile} from './components/UserProfile';
import {TableList} from './components/TableList';
import {Typography} from './components/Typography';
import {Icons} from './components/Icons';
import {Maps} from './components/Maps';
import {Notifications} from './components/Notifications';
import {RTLSupport} from './components/RTLSupport';
import {UpgradeToPRO} from './components/UpgradeToPRO';

function App() {
  return (
      <div className="App">
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/TableList" component={TableList} />
          <Route path="/Typography" component={Typography} />
          <Route path="/Icons" component={Icons} />
          <Route path="/Maps" component={Maps} />
          <Route path="/Notifications" component={Notifications} />
          <Route path="/RTLSupport" component={RTLSupport} />
          <Route path="/UpgradeToPRO" component={UpgradeToPRO} />
        </Switch>
      </div>
  );
}

export default App;
