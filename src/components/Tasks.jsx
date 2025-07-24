import React from "react";

const Tasks = ({ name, button, buttonTwo }) => {
  return (
    <div>
      <div>
        <button className="newTask">{button}</button>
        <br />
        <button className="newTask">{buttonTwo}</button>
      </div>
      <div>
        <input type="text" placeholder={name} />
        <ul className="tarefasBody">
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
