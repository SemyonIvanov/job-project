import FiveS from "./5s/5s";
import Quality from "./Quality/Quality";
import Smenka from "./Smenka/Smenka";

function Bench() {
  return (
    <div className="bench">
      <Smenka />
      <FiveS />
      <Quality />
    </div>
  );
}

export default Bench;
