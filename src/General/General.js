import Bench from './Bench/Bench';
import News from './News/News';

function General(props) {
  return (
    <div>
      <News news={props.state.news} />
      <Bench />
    </div>
  );
}

export default General;
