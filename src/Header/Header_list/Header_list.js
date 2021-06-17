import { NavLink } from 'react-router-dom';

function HeaderList() {
  return (
    <div className="container-header-list">
      <ul className="header-list">
        <li>
          <NavLink to="/people">Список людей</NavLink>
        </li>
        <li>
          <NavLink to="/register">Номенклатура</NavLink>
        </li>
        <li>
          <NavLink to="/equipment">Оборудование</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HeaderList;
