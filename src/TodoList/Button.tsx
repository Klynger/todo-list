import React from 'react';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = props => {
  const { onClick, children, ...rest } = props;

  return (
    <button className="button" onClick={onClick} {...rest}>
      <span className="button-text">{children}</span>
    </button>
  );
}

export default Button;
