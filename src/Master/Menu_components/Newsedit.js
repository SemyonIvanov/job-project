import React, { useState } from 'react';

function Newsedit(props) {
  const [newUrlNews, setNewUrlNews] = useState(
    props.store.storeNews.newUrlNews
  );
  const [newTextNews, setNewTextNews] = useState(
    props.store.storeNews.newTextNews
  );
  let addNewsButton = () => {
    console.log(props.store.storeNews);
  };
  return (
    <div className="contentMenu">
      <h3>Редактор новостей:</h3>
      <input
        type="text"
        value={newUrlNews}
        placeholder="Ссылка на изображение"
        onChange={(e) => setNewUrlNews(e.target.value)}
      />
      <input
        type="text"
        placeholder="Текст"
        value={newTextNews}
        onChange={(e) => setNewTextNews(e.target.value)}
      />
      <button onClick={addNewsButton}>Добавить новость</button>
    </div>
  );
}
export default Newsedit;
