import logo from './logo.svg';
import './App.css';
import Quotebox from './components/Quotebox';


function App() {
  return (
    <div className="App">
 <h2>Random Quote Generator</h2>
 <div className='containerparent'>
 <Quotebox/>
 </div>
    </div>
  );
}

export default App;
