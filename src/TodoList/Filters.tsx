import React from 'react';

interface Props {
  showComplete: boolean;
  onShowCompleteClick: () => void;
}

export default function Filters(props: Props) {
  const { showComplete, onShowCompleteClick } = props;

  return (
    <div className="filters-container">
      <label className="show-complete-container">
        <input
          type="checkbox"
          checked={showComplete}
          onChange={onShowCompleteClick}
        />
        Mostrar atividades feitas
      </label>
    </div>
  );
}
