/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

type Props = {
  text: string;
};

export const ItemBeforeAdding: React.FC<Props> = (props) => {
  const { text } = props;

  return (
    <div
      data-cy="Todo"
      className="todo"
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
        />
      </label>

      <span
        data-cy="TodoTitle"
        className="todo__title"
      >
        {text}
      </span>
      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDeleteButton"
      >
        ×
      </button>

      <div data-cy="TodoLoader" className="modal overlay is-active">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
