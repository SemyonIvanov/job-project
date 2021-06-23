import Bench from './Bench/Bench';
import News from './News/News';

function General(props) {
  return (
    <div>
      <News news={props.store.storeNews.news} />
      <Bench />
    </div>
  );
}

export default General;
