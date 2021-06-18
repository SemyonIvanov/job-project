import MasterMenu from './Menu/Master_menu';
import Szedit from './Menu_components/Szedit';
import Newsedit from './Menu_components/Newsedit';
import Addpeople from './Menu_components/Addpeople';
import Benchedit from './Menu_components/Benchedit';
import { Route } from 'react-router-dom';

function Master(props) {
  return (
    <div className="master">
      <MasterMenu />
      <Route path="/master/szedit" render={() => <Szedit />} />
      <Route path="/master/newsedit" render={() => <Newsedit />} />
      <Route path="/master/addpeople" render={() => <Addpeople />} />
      <Route path="/master/benchedit" render={() => <Benchedit />} />
    </div>
  );
}
export default Master;
