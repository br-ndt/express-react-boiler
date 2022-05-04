import { Route, Routes, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>lol</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
