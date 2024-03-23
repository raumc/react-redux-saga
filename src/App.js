import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <Header />
     <h1>conflict created</h1>
     <h1>Ruchi conflict text</h1>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
