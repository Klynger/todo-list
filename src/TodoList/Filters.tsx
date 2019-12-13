import React from 'react';

interface Props {
  showComplete: boolean;
  displayByUsername: boolean;
  onByUsernameClick: () => void;
  onShowCompleteClick: () => void;
}

export default function Filters(props: Props) {
  const {
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
    </div>
  );
}
