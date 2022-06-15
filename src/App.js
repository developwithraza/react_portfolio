import logo from './logo.svg';
import Animation from './Animation';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
<Animation />
      <Navbar />
      
    </BrowserRouter>
    </div>
  );
}

export default App;
