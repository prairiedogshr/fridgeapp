import React from 'react';
import { withRouter } from 'react-router-dom';

const Button = withRouter(({ history }) => (
  <button
    type="button"
    onClick={() => {
      // save the groups to the database
      history.push('/dashboard');
    }}
  >
    Done!
  </button>
));

export default function GroupingOfChores(props) {
  const incomplete = props.chores.incomplete;
  return (
    <div>
      <h3>
        Assign Chore Groups
      </h3>
      <ul>
        {incomplete.map(chore => (
          <div key={chore.id}>
            <li key={chore.id}>{chore.value}</li>
            <select
              onChange={(e) => {
                props.assignGroup(chore.id, e.target.value);
              }
              }
            >
              <option>&nbsp;</option>
              {props.chores.groups.map(val => (
                <option
                  key={`dropDown: ${val}`}
                  value={val}
                >{val}</option>
                ))
              }
            </select>
          </div>
          ), this)
        }

      </ul>
      <Button />
    </div>
  );
}
