import { NavLink } from 'react-router-dom';

function MasterMenu(props) {
  return (
    <div className="menu">
      <h2>Меню редактирования:</h2>
      <NavLink to="/master/szedit">Сменное задание</NavLink>
      <NavLink to="/master/newsedit">Новости</NavLink>
      <NavLink to="/master/addpeople">Сотрудники</NavLink>
      <NavLink to="/master/benchedit">Показатели</NavLink>
    </div>
  );
}
export default MasterMenu;
