import HeaderList from './Header_list/Header_list';
import Title from './Title/Title';

function Header() {
  return (
    <header>
      <Title />
      <HeaderList />
      <div className="burgerMenu">
        <span></span>
      </div>
    </header>
  );
}

export default Header;
