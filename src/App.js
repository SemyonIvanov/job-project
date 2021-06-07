import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header/Header';
import General from './General/General';
import Register from './Register/Register';
import Equipment from './Equipment/Equipment';
import Peoples from './People/people_list/People_list';
import './scss/nullstyle.scss'
import './scss/style.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route path='/general' component={General}/>
        <Route path='/people' component={Peoples}/>
        <Route path='/register' component={Register}/>
        <Route path='/equipment' component={Equipment}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
