import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Skill from "./components/Skill";
import Project from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="main">
        <div className="glass">
          <Dashboard />
          <Switch>
          <Route exact path='/' component={Skill} />
          <Route exact path='/projects' component={Project} />           
          </Switch>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      </Router>
    </div>
  );
}

export default App;
