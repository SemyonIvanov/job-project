import React from 'react';

function Newsedit(props) {
  let url = React.createRef();
  let text = React.createRef();
  let addNewsButton = () => {
    let newsInfo = {
      url: url.current.value,
      text: text.current.value,
    };
    props.store.addNews(newsInfo);
  };
  return (
    <div className="contentMenu">
      <h3>Редактор новостей:</h3>
      <input type="text" placeholder="Ссылка на изображение" ref={url} />
      <input type="text" placeholder="Текст" ref={text} />
      <button onClick={addNewsButton}>Добавить новость</button>
    </div>
  );
}
export default Newsedit;
