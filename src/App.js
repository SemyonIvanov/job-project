import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import General from './General/General';
import Register from './Register/Register';
import Equipment from './Equipment/Equipment';
import Peoples from './People/People_list';
import './scss/nullstyle.scss';
import './scss/style.scss';

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route path="/general" render={() => <General state={props.state} />} />
        <Route path="/people" render={() => <Peoples state={props.state} />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/equipment" render={() => <Equipment />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
