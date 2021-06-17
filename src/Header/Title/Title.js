import { NavLink } from 'react-router-dom';

function Title() {
  return (
    <div className="title">
      <h1>
        <NavLink to="/general">Участок обработки шкивов</NavLink>
      </h1>
      <div className="search-form">
        <input type="text" className="search" />
        <button className="search-button">Расширенный поиск</button>
      </div>
    </div>
  );
}

export default Title;
