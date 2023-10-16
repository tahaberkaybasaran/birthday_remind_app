import React from "react";

const People = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt="" className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years old</p>
      </div>
    </article>
  );
};

export default People;
