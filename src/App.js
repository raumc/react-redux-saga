import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <Header />
      <h1> Let's test for the project to the stage and now remove from the stage and redo it </h1>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
