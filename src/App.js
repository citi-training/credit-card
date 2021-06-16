import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoardComponent from './components/dashboard/dashboard-component';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>
      Transaction Application
      </h1>
      <DashBoardComponent></DashBoardComponent>
    </div>
  );
}

export default App;
