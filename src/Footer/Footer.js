import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <span>© Все права защищены Владимиром Владимировичем</span>
      <NavLink to="/master">Мастер</NavLink>
    </footer>
  );
}

export default Footer;
