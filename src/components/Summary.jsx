// src/components/Summary.jsx

function Summary({ completed }) {

  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{completed}</p>
    </div>
  );
}

export default Summary;
