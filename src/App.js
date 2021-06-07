import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { PatronMember } from './component/PatronMember/PatronMember';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PatronMember />
    </div>
  );
}

export default App;