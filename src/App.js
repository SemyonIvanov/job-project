import { Route } from 'react-router-dom';
import Header from './Header/Header';
import General from './General/General';
import Register from './Register/Register';
import Equipment from './Equipment/Equipment';
import Peoples from './People/People_list';
import './scss/nullstyle.scss';
import './scss/style.scss';
import Footer from './Footer/Footer';
import Master from './Master/Master';

function App(props) {
  return (
    <div className="container">
      <Header />
      <main>
        <Route path="/general" render={() => <General state={props.state} />} />
        <Route path="/people" render={() => <Peoples state={props.state} />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/equipment" render={() => <Equipment />} />
        <Route path="/master" render={() => <Master />} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
