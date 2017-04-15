import React from 'react';

export default function AddTask(props) {
  // <h3>
  //   Add Task
  // </h3>
  // <input
  //   type="text"
  //   placeholder=""
  //   autoFocus="true"
  //   onKeyDown={props.handleSubmit}
  // />

  this.cost = 0;
  this.task = '';
  return (
    <div>
      <form>
        Task:<br />
      <input type="text" name="task" onKeyUp={function(e){this.task = e.target.value; console.log(task,cost)}}></input><br />
        Cost:<br />
      <input type="text" name="cost" onKeyUp={function(f){this.cost = f.target.value; console.log(cost)}}></input><br />
      <button type="submit" value="Submit" onClick={props.handleSubmit(this.task, this.cost) }>Submit</button>
      </form>
    </div>
  );
}
