import React from 'react';

export default (props) => {
  const { message, author, onDelete } = props;

  return (
    <div>
      <p>{message}</p>
      <i>-{author}</i>
      <br />
      <button onClick={onDelete}>
        X
      </button>
    </div>
  );
}
