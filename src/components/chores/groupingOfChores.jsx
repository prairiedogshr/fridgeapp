import React from 'react';
import { withRouter } from 'react-router-dom';

import SortableComponent from './SortableComponent';

/*
const Button = withRouter(({ history, roomies, rotateGroups }) => (
  <button
    type="button"
    onClick={() => {
      history.push('/dashboard');
    }}
  >
    SAVE
  </button>
));
*/

export default function GroupingOfChores({ assignGroup, rotateGroups, chores, roomies }) {
  const houseChores = chores.houseChores;
  return (
    <div>
      <SortableComponent
        assignGroup={assignGroup}
        rorateGroups={rotateGroups}
        houseChores={houseChores}
        chores={chores}
        groups={chores.groups}
        roomies={roomies}
      />
    </div>
  );

  /*return (
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
  );/*/
}

