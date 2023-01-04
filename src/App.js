import './App.css';
import LandingPage from './components/LandingPage';
import { mailsData } from './data'

function App() {
  return (
    <div className="App">
      <LandingPage mailsData = {mailsData} />
    </div>
  );
}

export default App;
