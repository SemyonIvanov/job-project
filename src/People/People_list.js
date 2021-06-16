import { NavLink } from "react-router-dom";
import peolesData from "./Peoples_data.json";

function Peoples() {
  return (
    <div className="peoples">
      <ol className='peoplesList'>
      {peolesData.map((people) => (
      <li><NavLink to={`/people/${people.id}`}>{`${people.firstname} ${people.lastname} ${people.patronym}`}</NavLink></li>
    ))}
      </ol>
    </div>
  );
}

export default Peoples;