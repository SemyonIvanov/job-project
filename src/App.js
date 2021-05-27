import './App.css';
import Bench from './Bench/Bench';
import Header from './Header/Header';
import News from './News/News';
import TestJs from './Test_js/Test_js';

function App() {
  return (
    <div className="container">
      <Header />
      <News />
      <TestJs />
      <Bench />
    </div>
  );
}

export default App;
