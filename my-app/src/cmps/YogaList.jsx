import React from 'react';

function ListItem(props) {
    return <li>{props.value}</li>;
  }

function YogaList(props) {
    const yogaPoses = props.yogaPoses;
    const listItems = yogaPoses.map((pose) =>
        <ListItem key={pose.toString()} value={pose} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  export {YogaList};