import React from 'react';

export default function GroupingOfChores(props) {
  const incomplete = props.chores.incomplete;
  return (
    <div>
      <h3>
        Assign Chore Groups
      </h3>
      <ul>
        {incomplete.map(chore => (
          <div>
            <li key={chore.id}>{chore.value}</li>
            <select
              onChange={(e) => {
                console.log('+++++++', e.target.value);
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
    </div>
  );
}
