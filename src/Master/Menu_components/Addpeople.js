import React from 'react';

function Addpeople(props) {
  let lastname = React.createRef();
  let firstname = React.createRef();
  let patronym = React.createRef();
  let buttonAddClick = () => {
    let newHumanInfo = {
      lastname: lastname.current.value,
      firstname: firstname.current.value,
      patronym: patronym.current.value,
    };
    props.store.addHuman(newHumanInfo);
  };
  return (
    <div className="contentMenu">
      <h3>Редактор персонала:</h3>
      <input type="text" placeholder="Фамилия" ref={lastname} />
      <input type="text" placeholder="Имя" ref={firstname} />
      <input type="text" placeholder="Отчество" ref={patronym} />
      <button onClick={buttonAddClick}>Добавить</button>
    </div>
  );
}
export default Addpeople;
