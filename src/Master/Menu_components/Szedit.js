function Szedit(props) {
  return (
    <div className="contentMenu">
      <h3>Редактор сменного задания:</h3>
      <input type="text" placeholder="Дата" />
      <input type="text" placeholder="Номер детали" />
      <input type="text" placeholder="ФИО исполнителя" />
      <input type="text" placeholder="Количество" />
      <input type="button" value="отправить" />
      <input type="file" />
    </div>
  );
}
export default Szedit;
