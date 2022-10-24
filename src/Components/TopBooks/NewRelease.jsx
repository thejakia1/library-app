import React from 'react';

function NewRelease(props) {

  const {_id, title} = props.book[0];

  return (
    <div>
      {/* show books in ordered list */}
      <li>{title}</li>
    </div>
  )
}

export default NewRelease