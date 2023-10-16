import { useState } from "react";
import { data } from "../data";

const People = () => {
  const [people, setPeople] = useState(data);
  const clearList = () => {
    if (people.length === 0) {
      setPeople(data);
    } else {
      setPeople([]);
    }
  };

  return (
    <div>
      <h2>{people.length} Birtshdays Today</h2>
      <h2>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div key={id}>
              <img
                style={{ width: "6rem", height: "8rem" }}
                src={image}
                alt=""
              />
              <h3>{name}</h3>
              <h4>{age}</h4>
            </div>
          );
        })}
      </h2>
      <div>
        <button className="btn" onClick={clearList}>
          Click
        </button>
      </div>
    </div>
  );
};

export default People;
