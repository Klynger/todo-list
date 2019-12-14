import React from 'react';
import Button from './Button';

interface Props {
  showComplete: boolean;
  onSortTodos: (typeOfOrdenation: 'ASC' | 'DESC') => void;
  displayByUsername: boolean;
  onByUsernameClick: () => void;
  onShowCompleteClick: () => void;
}

export default function Filters(props: Props) {
  const {
    onSortTodos,
    showComplete,
    displayByUsername,
    onByUsernameClick,
    onShowCompleteClick,
  } = props;

  return (
    <div className="filters-container">
      <label className="filter">
        <input
          type="checkbox"
          checked={showComplete}
          onChange={onShowCompleteClick}
        />
        Mostrar atividades feitas
      </label>
      <label className="filter">
        <input
          type="checkbox"
          checked={displayByUsername}
          onChange={onByUsernameClick}
        />
        Agrupar por autor
      </label>
      <Button onClick={() => onSortTodos('DESC')}>Ordernar Todos DESC</Button>
      \<Button onClick={() => onSortTodos('ASC')}>Ordernar Todos ASC</Button>
    </div>
  );
}
