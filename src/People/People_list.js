import { NavLink } from 'react-router-dom';

function Peoples(props) {
  return (
    <div className="peoples">
      <ol className="peoplesList">
        {props.store.storePeople.people.map((itemPeople) => (
          <li>
            <NavLink
              to={`/people/${itemPeople.id}`}
            >{`${itemPeople.firstname} ${itemPeople.lastname} ${itemPeople.patronym}`}</NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Peoples;
