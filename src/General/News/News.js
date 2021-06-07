import News_Content from "./News_content/Post";

function News() {
  return (
    <div className="news">
    <button className="prev button">prew</button>
    <News_Content content='Последние новости' />
    <button className="next button">next</button>
    </div>
  );
}

export default News;
