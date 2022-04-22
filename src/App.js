import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Topbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
