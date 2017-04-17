import React from 'react';
import { withRouter } from 'react-router-dom';

const Button = withRouter(({ history, roomies, rotateGroups }) => (
  <button
    type="button"
    onClick={() => {
      console.log('history: ', history);
      // save the groups to the database
      history.push('/dashboard');
      // add function here to make initial assignment of users to chore groups
      rotateGroups(roomies);
    }}
  >
    Done!
  </button>
));

export default function GroupingOfChores(props) {
  // const complete = props.chores.complete;
  // const incomplete = props.chores.incomplete;
  const houseChores = props.chores.houseChores;
  return (
    <div>
      <h3>
        Assign Chore Groups
      </h3>
      <ul>
        {houseChores.map(chore => (
          <div key={`groupingOfChores:${chore.chore_id}`}>
            <li>{chore.chore_name}</li>
            <select
              onChange={(e) => {
                props.assignGroup(chore.chore_id, e.target.value);
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
      <Button roomies={props.roomies} rotateGroups={props.rotateGroups} />
    </div>
  );
}
